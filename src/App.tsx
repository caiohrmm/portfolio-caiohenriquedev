import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { ProjectCard } from "./components/ProjectCard";

function App() {
  const projects = [
    {
      title: "CASESC - CASA DO SERRALHEIRO DE SANTA CRUZ",
      description:
        "Landing Page desenvolvida com React e TypeScript para uma loja especializada na comercialização de produtos para serralheiros.",
      image: "/assets/casesc.PNG",
      githubUrl: "https://github.com/caiohrmm/casesc-serralheria.git",
      liveUrl: "https://casesc-serralheria.vercel.app/",
    },
    {
      title: "NUTRICARE - GESTÃO PARA CLÍNICAS DE NUTRIÇÃO",
      description:
        "Landing Page criada com React e TypeScript para apresentar um sistema Full Stack desenvolvido por mim, projetado para otimizar a gestão de clínicas de nutrição com eficiência e praticidade.",
      image: "/assets/nutricare.PNG",
      githubUrl: "https://github.com/caiohrmm/nutricare-landingpage.git",
      liveUrl: "https://nutricare-landingpage.vercel.app/",
    },
    {
      title: "PETJOY - CUIDE BEM DO SEU PET",
      description:
        "Landing Page desenvolvida com React e JavaScript para atrair leads e aumentar a visibilidade de um pet shop, oferecendo uma experiência envolvente e interativa para os clientes.",
      image: "/assets/petjoy.PNG",
      githubUrl: "https://github.com/caiohrmm/petjoy-landing-page.git",
      liveUrl: "https://petjoylandingpage.vercel.app/",
    },
    {
      title: "PIVCINC - REDE SOCIAL PARA ADICTOS",
      description:
        "O PIVCINC é uma plataforma social desenvolvida para conectar pessoas em recuperação de vícios, promovendo apoio mútuo e facilitando a organização de encontros e eventos. Criado com React no frontend e um backend em Node.js, Express, MongoDB e JWT, o sistema oferece uma experiência completa, permitindo que os usuários interajam por meio de postagens, curtidas e comentários, fortalecendo sua rede de apoio.",
      image: "/assets/pivcinc.PNG",
      githubUrl: "https://github.com/caiohrmm/pivcinc-backend.git",
      liveUrl: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/assets/perfil.png" // Substitua pelo caminho correto da sua imagem
            alt="Caio Henrique R. Martins"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto mb-8 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Olá, eu sou{" "}
            <span className="text-primary-light">Caio Henrique R. Martins</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Desenvolvedor Full Stack apaixonado por transformar ideias em
            experiências digitais.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Atualmente curso o último ano de Engenharia de Software, sempre
            buscando novos desafios.
          </p>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
          >
            Entre em contato
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-0 md:bottom-2"
        >
          <ChevronDown className="w-8 h-8 text-primary-light" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meus Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Vamos Conversar
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Muito obrigado por visitar meu Portfólio. Espero que tenha gostado !
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Estou sempre aberto a novas oportunidades e colaborações.
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/caiohrmm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/caiohenriquerm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:desenvolvedorcaiohenrique@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
