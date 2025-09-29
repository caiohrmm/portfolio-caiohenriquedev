import { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageToggle } from "./components/LanguageToggle";
import { useLanguage } from "./hooks/useLanguage.tsx";
import { ProjectCard } from "./components/ProjectCard";
import CertificationsSection from "./components/CertificationSession";
import {
  SiJavascript,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
function App() {
  const { t } = useLanguage();
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      document.documentElement.style.setProperty('--scroll-progress', progress.toString());
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const projects = [
    {
      title: t('projects.casesc.title'),
      description: t('projects.casesc.description'),
      image: "/assets/casesc.PNG",
      githubUrl: "https://github.com/caiohrmm/casesc-serralheria.git",
      liveUrl: "https://casesc-serralheria.vercel.app/",
    },
    {
      title: t('projects.nutricare.title'),
      description: t('projects.nutricare.description'),
      image: "/assets/nutricare.PNG",
      githubUrl: "https://github.com/caiohrmm/nutricare-landingpage.git",
      liveUrl: "https://nutricare-landingpage.vercel.app/",
    },
    {
      title: t('projects.petjoy.title'),
      description: t('projects.petjoy.description'),
      image: "/assets/petjoy.PNG",
      githubUrl: "https://github.com/caiohrmm/petjoy-landing-page.git",
      liveUrl: "https://petjoy-landing-page.vercel.app/",
    },
    {
      title: t('projects.pivcinc.title'),
      description: t('projects.pivcinc.description'),
      image: "/assets/pivcinc.PNG",
      githubUrlBackend: "https://github.com/caiohrmm/pivcinc-backend.git",
      githubUrlFrontend: "https://github.com/caiohrmm/frontend-pivcinc.git",
      video: "https://youtu.be/kndnZcToZxU",
    },
    {
      title: t('projects.animalManager.title'),
      description: t('projects.animalManager.description'),
      image: "/assets/nodehandlebars.PNG",
      githubUrl:
        "https://github.com/caiohrmm/Projeto-Gerenciador-de-animais.git",
      video: "https://youtu.be/8Q52YrS-CC4",
    },
    {
      title: t('projects.japensou.title'),
      description: t('projects.japensou.description'),
      image: "/assets/japensou.PNG",
      githubUrl: "https://github.com/caiohrmm/JaPensou.git",
      video: "https://youtu.be/I7rUmj0PWEQ",
    },
    {
      title: t('projects.danipiza.title'),
      description: t('projects.danipiza.description'),
      image: "/assets/fotodanipiza.PNG",
      githubUrl: "",
      liveUrl: "https://danipizabeauty.com.br",
    },
    {
      title: t('projects.chrn.title'),
      description: t('projects.chrn.description'),
      image: "/assets/fotochrn.webp",
      githubUrl: "",
      liveUrl: "https://chrnadvocacia.com.br",
    },
    {
      title: t('projects.henrique.title'),
      description: t('projects.henrique.description'),
      image: "/assets/fotohenrique.webp",
      githubUrl: "",
      liveUrl: "https://barbeariahenriquecoelho.com.br",
    },
    {
      title: t('projects.ids.title'),
      description: t('projects.ids.description'),
      image: "/assets/ids em portugues.PNG",
      githubUrl: "https://github.com/caiohrmm/IDS-AI---by-Caio-Henrique--IDS---Intrusion-Detection-System-",
      liveUrl: "",
    },
    {
      title: t('projects.fazenda.title'),
      description: t('projects.fazenda.description'),
      githubUrl: "https://github.com/caiohrmm/FazendaEsperanca.git",
      image: "/assets/projetofazendaesperanca.PNG",
      video: "https://www.linkedin.com/posts/caiohenriquerm_fullstack-springboot-reactjs-activity-7363245567482675200-iSYQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj9DJsB5pf6vkK8zJKuCbhpBriCJmn3sLo",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors relative overflow-hidden">
      <div className="scroll-progress" />
      <div className="gradient-blob one" />
      <div className="gradient-blob two" />
      <ThemeToggle />
      <LanguageToggle />

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
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto mb-3 md:mb-8 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <h1 className="text-4xl md:text-6xl font-bold mb-3 md:mb-6">
            {t('hero.greetingPrefix')} {" "}
            <span className="text-primary-light">Caio Henrique R. Martins</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-1.5">
            {t('hero.subtitle1')}
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-5 md:mb-8">
            {t('hero.subtitle2')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {t('hero.cta')}
            </a>
            <motion.a
              href="/curriculo/CURRICULO CAIO HENRIQUE RODRIGUES MARTINS.pdf"
              download
              className="group bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              {t('hero.downloadCv')}
            </motion.a>
          </div>
        </motion.div>

        {/* Ícones das Tecnologias */}
        <div className="flex gap-6 mt-6 md:mt-8">
          <FaJava className="w-6 h-6 md:w-10 md:h-10 text-red-600 hover:scale-110 transition-all" />
          <SiJavascript className="w-6 h-6 md:w-10 md:h-10 text-yellow-500 hover:scale-110 transition-all" />
          <SiPhp className="w-6 h-6 md:w-10 md:h-10 text-blue-400 hover:scale-110 transition-all" />
          <SiMysql className="w-6 h-6 md:w-10 md:h-10 text-blue-600 hover:scale-110 transition-all" />
          <SiMongodb className="w-6 h-6 md:w-10 md:h-10 text-green-500 hover:scale-110 transition-all" />
          <SiNodedotjs className="w-6 h-6 md:w-10 md:h-10 text-green-600 hover:scale-110 transition-all" />
          <SiTypescript className="w-6 h-6 md:w-10 md:h-10 text-blue-600 hover:scale-110 transition-all" />
        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('sections.projects')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section>
        <CertificationsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t('sections.contact')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {t('contact.thanks')}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            {t('contact.open')}
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
