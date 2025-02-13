import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTheme } from "next-themes";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Certification = {
  title: string;
  provider: string;
  image: string;
};

const certifications: Certification[] = [
  {
    title: "REACT - DO ZERO A MAESTRIA",
    provider:
      "Formação de 30,5 horas em React com projetos FullStack, fundamentos de versionamento e um pouco de TypeScript e banco de dados.",
    image: "/assets/certificacaoreact.jpg",
  },
  {
    title: "DO ZERO A AWS - REST API'S COM SPRING BOOT E DOCKER",
    provider:
      "Formação de 65,5 horas em desenvolvimento Java para sistemas legados e modernos voltado para API's RESTful.",
    image: "/assets/certificacaospring.jpg",
  },
  {
    title: "JAVA COMPLETO POR NELIO ALVES",
    provider:
      "Formação de 54,5 horas em fundamentos da linguagem Java, Spring Boot, POO e projetos.",
    image: "/assets/certificacaojavanelio.jpg",
  },
  {
    title: "NODE JS - DO ZERO A MAESTRIA",
    provider:
      "Formação de 38 horas que promove o desenvolvimento de API's REST com projetos Backend e FullStack.",
    image: "/assets/certificacaonode.jpg",
  },
  {
    title: "TAILWINDCSS - DO BÁSICO AO AVANÇADO",
    provider:
      "Formação de 11,5 horas em TailwindCSS, focada em estilização moderna, responsiva e atrativa para páginas web.",
    image: "/assets/certificacaotailwind.jpg",
  },
  {
    title: "DESENVOLVIMENTO WEB COMPLETO 2023",
    provider: "Formação de 114,5 horas em desenvolvimento web, abordando tecnologias como jQuery, Bootstrap, SASS, WordPress, Ionic e Ajax.",
    image: "/assets/certificacaoweb.jpg",
  },
  {
    title: "GIT E GITHUB - DO BÁSICO AO AVANÇADO",
    provider: "Formação de 8,5 horas em Git, abordando versionamento de código, GitHub e implantação com GitHub Pages.",
    image: "/assets/certificacaogithub.jpg",
  },
  {
    title: "PYTHON 3 MUNDO 2 - CURSO EM VÍDEO",
    provider: "Formação de 40 horas em Python, focada em fundamentos da linguagem e prática com exercícios.",
    image: "/assets/certificacaopython.jpg",
  },
];

type CertificationCardProps = {
  title: string;
  provider: string;
  image: string;
};

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  provider,
  image,
}) => (
  <div className="p-2 md:p-3 lg:p-4">
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden p-4 text-center">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover mb-2 md:mb-3 lg:mb-4 rounded-md"
      />
      <h3 className="text-xs md:text-sm lg:text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm lg:text-base">
        {provider}
      </p>
    </div>
  </div>
);

const CustomArrow = ({
  direction,
  onClick,
  theme,
}: {
  direction: "next" | "prev";
  onClick?: () => void;
  theme?: string;
}) => {
  const isNext = direction === "next";

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full shadow-md transition-all duration-300 z-10
          ${
            theme === "dark"
              ? "bg-white text-gray-900"
              : "bg-gray-800 text-white"
          }
          ${isNext ? "-right-12 md:-right-16" : "-left-12 md:-left-16"}
          hover:scale-110 hover:bg-opacity-80`}
      aria-label={isNext ? "Próximo" : "Anterior"}
    >
      {isNext ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
    </button>
  );
};

const CertificationsSection: React.FC = () => {
  const { theme } = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <CustomArrow direction="next" theme={theme} />,
    prevArrow: <CustomArrow direction="prev" theme={theme} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="certifications"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
          Minhas Certificações
        </h2>
        <Slider {...settings}>
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CertificationsSection;
