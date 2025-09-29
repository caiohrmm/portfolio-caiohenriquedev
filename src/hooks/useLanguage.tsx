import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Language = 'pt' | 'en';

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  pt: {
    'hero.greetingPrefix': 'Olá, eu sou',
    'hero.subtitle1': 'Desenvolvedor Full Stack apaixonado por transformar ideias em experiências digitais.',
    'hero.subtitle2': 'Atualmente curso o último ano de Engenharia de Software, sempre buscando novos desafios.',
    'hero.cta': 'Entre em contato',
    'hero.downloadCv': 'Baixar Currículo',

    'sections.projects': 'Meus Projetos',
    'sections.certifications': 'Minhas Certificações',
    'sections.contact': 'Vamos Conversar',

    'contact.thanks': 'Muito obrigado por visitar meu Portfólio. Espero que tenha gostado !',
    'contact.open': 'Estou sempre aberto a novas oportunidades e colaborações.',

    'labels.github': 'GitHub',
    'labels.githubFrontend': 'GitHub Frontend',
    'labels.githubBackend': 'GitHub Backend',
    'labels.liveDemo': 'Live Demo',
    'labels.video': 'Video de apresentação',

    'carousel.next': 'Próximo',
    'carousel.prev': 'Anterior',

    // Projects
    'projects.casesc.title': 'CASESC - CASA DO SERRALHEIRO DE SANTA CRUZ',
    'projects.casesc.description': 'Landing Page desenvolvida com React, TypeScript e TailwindCSS para uma loja especializada na comercialização de produtos para serralheiros.',
    
    'projects.nutricare.title': 'NUTRICARE - GESTÃO PARA CLÍNICAS DE NUTRIÇÃO',
    'projects.nutricare.description': 'Landing Page criada com React, TypeScript e TailwindCSS para apresentar um sistema Full Stack desenvolvido por mim, projetado para otimizar a gestão de clínicas de nutrição com eficiência e praticidade.',
    
    'projects.petjoy.title': 'PETJOY - CUIDE BEM DO SEU PET',
    'projects.petjoy.description': 'Landing Page desenvolvida com React para atrair leads e aumentar a visibilidade de um pet shop, oferecendo uma experiência envolvente e interativa para os clientes.',
    
    'projects.pivcinc.title': 'PIVCINC - REDE SOCIAL PARA ADICTOS',
    'projects.pivcinc.description': 'O PIVCINC é uma plataforma social desenvolvida para conectar pessoas em recuperação de vícios, promovendo apoio mútuo e facilitando a organização de encontros e eventos. Criado com React no frontend e um backend em Node.js, Express, MongoDB e JWT, o sistema oferece uma experiência completa, permitindo que os usuários interajam por meio de postagens, curtidas e comentários, fortalecendo sua rede de apoio.',
    
    'projects.animalManager.title': 'GERENCIADOR DE ANIMAIS',
    'projects.animalManager.description': 'O Gerenciador de Animais é um sistema desenvolvido para facilitar o cadastro e gerenciamento de animais, oferecendo um CRUD completo e intuitivo. Criado com Node.js, Express e Handlebars. A plataforma permite adicionar, editar, visualizar e excluir registros, garantindo uma experiência simples e eficiente. Com uma interface dinâmica e bem estruturada, o sistema foi crucial para me fazer praticar e aprender conceitos de desenvolvimento backend de forma prática e objetiva.',
    
    'projects.japensou.title': 'JÁPENSOU?',
    'projects.japensou.description': 'O JáPensou? é uma plataforma interativa desenvolvida com Express, Handlebars, Sequelize e MySQL, proporcionando uma experiência dinâmica para compartilhar ideias. Com autenticação por sessão, os usuários podem cadastrar, visualizar, editar e excluir pensamentos de forma intuitiva. Além disso, o sistema permite filtrar pensamentos, facilitando a busca por reflexões específicas.',
    
    'projects.danipiza.title': 'Dani Piza Beauty',
    'projects.danipiza.description': 'Site institucional desenvolvido com React e TailwindCSS para a maquiadora Dani Piza, de Santa Cruz do Rio Pardo. Projeto responsivo e otimizado para apresentar serviços e portfólio.',
    
    'projects.chrn.title': 'CHRN Advocacia',
    'projects.chrn.description': 'Site institucional desenvolvido com React e TailwindCSS para o advogado Carlos Henrique Rodrigues Nascimento. Estruturado para apresentar informações sobre o escritório e facilitar o contato com clientes.',
    
    'projects.henrique.title': 'Barbearia Henrique Coelho',
    'projects.henrique.description': 'Landing Page desenvolvida com React e TailwindCSS para o barbeiro Henrique Coelho, de Bernardino de Campos. Projeto com foco em identidade visual moderna e agendamento de horários.',
    
    'projects.ids.title': 'IDS AI — Detector de Ameaças em Fluxos de Rede',
    'projects.ids.description': 'Sistema backend com integração de Machine Learning e Inteligência Artificial para detecção preventiva de tráfego malicioso. Treinado com os datasets CICIDS2017 e UNSW-NB15. Possui arquitetura com Python (Scikit-Learn, XGBoost, SMOTE) para o modelo, Node.js (Express, Multer) para API, Gemini AI para insights e frontend estático em HTML, CSS e JavaScript.',
    
    'projects.fazenda.title': 'Fazenda Esperança — Sistema de Gestão de Acolhidas',
    'projects.fazenda.description': 'Sistema full-stack desenvolvido para a Fazenda Esperança São Domingos Gusmão, uma organização sem fins lucrativos, com o objetivo de gerenciar saídas médicas, transações financeiras e doações de forma organizada e segura. O software permite cadastrar acolhidas, controlar saídas médicas individuais e em grupo, gerar relatórios em CSV/XLSX, emitir recibos em PDF e gerenciar perfis de acesso com autenticação segura. Desenvolvido com Java 17 + Spring Boot no backend, MySQL com migrations via Flyway como banco de dados, e React + TypeScript + Vite + TailwindCSS no frontend, o projeto une soluções tecnológicas modernas à realidade da instituição, otimizando processos, centralizando informações e gerando impacto positivo na gestão.',

    // Certifications
    'certifications.react.title': 'REACT - DO ZERO A MAESTRIA',
    'certifications.react.provider': 'Formação de 30,5 horas em React com projetos FullStack, fundamentos de versionamento e um pouco de TypeScript e banco de dados.',
    
    'certifications.web.title': 'DESENVOLVIMENTO WEB COMPLETO 2023',
    'certifications.web.provider': 'Formação de 114,5 horas em desenvolvimento web, abordando tecnologias como jQuery, Bootstrap, SASS, WordPress, Ionic e Ajax.',
    
    'certifications.java.title': 'JAVA COMPLETO POR NELIO ALVES',
    'certifications.java.provider': 'Formação de 54,5 horas em fundamentos da linguagem Java, Spring Boot, POO e projetos.',
    
    'certifications.node.title': 'NODE JS - DO ZERO A MAESTRIA',
    'certifications.node.provider': 'Formação de 38 horas que promove o desenvolvimento de API\'s REST com projetos Backend e FullStack.',
    
    'certifications.tailwind.title': 'TAILWINDCSS - DO BÁSICO AO AVANÇADO',
    'certifications.tailwind.provider': 'Formação de 11,5 horas em TailwindCSS, focada em estilização moderna, responsiva e atrativa para páginas web.',
    
    'certifications.spring.title': 'DO ZERO A AWS - REST API\'S COM SPRING BOOT E DOCKER',
    'certifications.spring.provider': 'Formação de 65,5 horas em desenvolvimento Java para sistemas legados e modernos voltado para API\'s RESTful.',
    
    'certifications.github.title': 'GIT E GITHUB - DO BÁSICO AO AVANÇADO',
    'certifications.github.provider': 'Formação de 8,5 horas em Git, abordando versionamento de código, GitHub e implantação com GitHub Pages.',
    
    'certifications.python.title': 'PYTHON 3 MUNDO 2 - CURSO EM VÍDEO',
    'certifications.python.provider': 'Formação de 40 horas em Python, focada em fundamentos da linguagem e prática com exercícios.',
    
    'certifications.springmvc.title': 'SPRING & MVC COM THYMELEAF',
    'certifications.springmvc.provider': 'Formação de 9 horas em SpringBoot com Thymeleaf, desenvolvendo um projeto com arquitetura MVC.',
  },
  en: {
    'hero.greetingPrefix': "Hi, I'm",
    'hero.subtitle1': 'Full Stack Developer passionate about turning ideas into digital experiences.',
    'hero.subtitle2': 'Currently in the final year of Software Engineering, always seeking new challenges.',
    'hero.cta': 'Get in touch',
    'hero.downloadCv': 'Download Curriculum',

    'sections.projects': 'My Projects',
    'sections.certifications': 'My Certifications',
    'sections.contact': "Let's Talk",

    'contact.thanks': 'Thank you so much for visiting my portfolio. I hope you enjoyed it!',
    'contact.open': 'I am always open to new opportunities and collaborations.',

    'labels.github': 'GitHub',
    'labels.githubFrontend': 'GitHub Frontend',
    'labels.githubBackend': 'GitHub Backend',
    'labels.liveDemo': 'Live Demo',
    'labels.video': 'Presentation Video',

    'carousel.next': 'Next',
    'carousel.prev': 'Previous',

    // Projects
    'projects.casesc.title': 'CASESC - BLACKSMITH HOUSE OF SANTA CRUZ',
    'projects.casesc.description': 'Landing Page developed with React, TypeScript and TailwindCSS for a store specialized in selling products for blacksmiths.',
    
    'projects.nutricare.title': 'NUTRICARE - MANAGEMENT FOR NUTRITION CLINICS',
    'projects.nutricare.description': 'Landing Page created with React, TypeScript and TailwindCSS to present a Full Stack system developed by me, designed to optimize nutrition clinic management with efficiency and practicality.',
    
    'projects.petjoy.title': 'PETJOY - TAKE GOOD CARE OF YOUR PET',
    'projects.petjoy.description': 'Landing Page developed with React to attract leads and increase visibility of a pet shop, offering an engaging and interactive experience for customers.',
    
    'projects.pivcinc.title': 'PIVCINC - SOCIAL NETWORK FOR ADDICTS',
    'projects.pivcinc.description': 'PIVCINC is a social platform developed to connect people in addiction recovery, promoting mutual support and facilitating the organization of meetings and events. Created with React on the frontend and a Node.js, Express, MongoDB and JWT backend, the system offers a complete experience, allowing users to interact through posts, likes and comments, strengthening their support network.',
    
    'projects.animalManager.title': 'ANIMAL MANAGER',
    'projects.animalManager.description': 'The Animal Manager is a system developed to facilitate animal registration and management, offering a complete and intuitive CRUD. Created with Node.js, Express and Handlebars. The platform allows adding, editing, viewing and deleting records, ensuring a simple and efficient experience. With a dynamic and well-structured interface, the system was crucial for me to practice and learn backend development concepts in a practical and objective way.',
    
    'projects.japensou.title': 'JÁPENSOU?',
    'projects.japensou.description': 'JáPensou? is an interactive platform developed with Express, Handlebars, Sequelize and MySQL, providing a dynamic experience for sharing ideas. With session authentication, users can register, view, edit and delete thoughts intuitively. In addition, the system allows filtering thoughts, facilitating the search for specific reflections.',
    
    'projects.danipiza.title': 'Dani Piza Beauty',
    'projects.danipiza.description': 'Institutional website developed with React and TailwindCSS for makeup artist Dani Piza, from Santa Cruz do Rio Pardo. Responsive and optimized project to present services and portfolio.',
    
    'projects.chrn.title': 'CHRN Law',
    'projects.chrn.description': 'Institutional website developed with React and TailwindCSS for lawyer Carlos Henrique Rodrigues Nascimento. Structured to present information about the office and facilitate contact with clients.',
    
    'projects.henrique.title': 'Henrique Coelho Barber Shop',
    'projects.henrique.description': 'Landing Page developed with React and TailwindCSS for barber Henrique Coelho, from Bernardino de Campos. Project focused on modern visual identity and appointment scheduling.',
    
    'projects.ids.title': 'IDS AI — Network Flow Threat Detector',
    'projects.ids.description': 'Backend system with Machine Learning and Artificial Intelligence integration for preventive detection of malicious traffic. Trained with CICIDS2017 and UNSW-NB15 datasets. Features architecture with Python (Scikit-Learn, XGBoost, SMOTE) for the model, Node.js (Express, Multer) for API, Gemini AI for insights and static frontend in HTML, CSS and JavaScript.',
    
    'projects.fazenda.title': 'Fazenda Esperança — Host Management System',
    'projects.fazenda.description': 'Full-stack system developed for Fazenda Esperança São Domingos Gusmão, a non-profit organization, with the objective of managing medical appointments, financial transactions and donations in an organized and secure way. The software allows registering hosts, controlling individual and group medical appointments, generating CSV/XLSX reports, issuing PDF receipts and managing access profiles with secure authentication. Developed with Java 17 + Spring Boot on the backend, MySQL with Flyway migrations as database, and React + TypeScript + Vite + TailwindCSS on the frontend, the project unites modern technological solutions with the institution\'s reality, optimizing processes, centralizing information and generating positive impact on management.',

    // Certifications
    'certifications.react.title': 'REACT - FROM ZERO TO MASTERY',
    'certifications.react.provider': '30.5-hour training in React with FullStack projects, versioning fundamentals and some TypeScript and database.',
    
    'certifications.web.title': 'COMPLETE WEB DEVELOPMENT 2023',
    'certifications.web.provider': '114.5-hour training in web development, covering technologies such as jQuery, Bootstrap, SASS, WordPress, Ionic and Ajax.',
    
    'certifications.java.title': 'COMPLETE JAVA BY NELIO ALVES',
    'certifications.java.provider': '54.5-hour training in Java language fundamentals, Spring Boot, OOP and projects.',
    
    'certifications.node.title': 'NODE JS - FROM ZERO TO MASTERY',
    'certifications.node.provider': '38-hour training that promotes REST API development with Backend and FullStack projects.',
    
    'certifications.tailwind.title': 'TAILWINDCSS - FROM BASIC TO ADVANCED',
    'certifications.tailwind.provider': '11.5-hour training in TailwindCSS, focused on modern, responsive and attractive styling for web pages.',
    
    'certifications.spring.title': 'FROM ZERO TO AWS - REST APIs WITH SPRING BOOT AND DOCKER',
    'certifications.spring.provider': '65.5-hour training in Java development for legacy and modern systems focused on RESTful APIs.',
    
    'certifications.github.title': 'GIT AND GITHUB - FROM BASIC TO ADVANCED',
    'certifications.github.provider': '8.5-hour training in Git, covering code versioning, GitHub and deployment with GitHub Pages.',
    
    'certifications.python.title': 'PYTHON 3 WORLD 2 - VIDEO COURSE',
    'certifications.python.provider': '40-hour training in Python, focused on language fundamentals and practice with exercises.',
    
    'certifications.springmvc.title': 'SPRING & MVC WITH THYMELEAF',
    'certifications.springmvc.provider': '9-hour training in SpringBoot with Thymeleaf, developing a project with MVC architecture.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initial: Language = useMemo(() => {
    const stored = localStorage.getItem('lang');
    if (stored === 'pt' || stored === 'en') return stored;
    return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }, []);

  const [language, setLanguageState] = useState<Language>(initial);

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState(prev => (prev === 'pt' ? 'en' : 'pt'));

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: string) => {
      const dict = TRANSLATIONS[language];
      return dict[key] ?? TRANSLATIONS.pt[key] ?? key;
    };
    return { language, setLanguage, toggleLanguage, t };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};


