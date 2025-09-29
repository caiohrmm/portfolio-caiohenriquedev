import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTheme } from "../hooks/useTheme";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage.tsx";

type Certification = {
  title: string;
  provider: string;
  image: string;
};

const getCertifications = (t: (key: string) => string): Certification[] => [
  {
    title: t('certifications.react.title'),
    provider: t('certifications.react.provider'),
    image: "/assets/certificacaoreact.jpg",
  },
  {
    title: t('certifications.web.title'),
    provider: t('certifications.web.provider'),
    image: "/assets/certificacaoweb.jpg",
  },
  {
    title: t('certifications.java.title'),
    provider: t('certifications.java.provider'),
    image: "/assets/certificacaojavanelio.jpg",
  },
  {
    title: t('certifications.node.title'),
    provider: t('certifications.node.provider'),
    image: "/assets/certificacaonode.jpg",
  },
  {
    title: t('certifications.tailwind.title'),
    provider: t('certifications.tailwind.provider'),
    image: "/assets/certificacaotailwind.jpg",
  },
  {
    title: t('certifications.spring.title'),
    provider: t('certifications.spring.provider'),
    image: "/assets/certificacaospring.jpg",
  },
  {
    title: t('certifications.github.title'),
    provider: t('certifications.github.provider'),
    image: "/assets/certificacaogithub.jpg",
  },
  {
    title: t('certifications.python.title'),
    provider: t('certifications.python.provider'),
    image: "/assets/certificacaopython.jpg",
  },
  {
    title: t('certifications.springmvc.title'),
    provider: t('certifications.springmvc.provider'),
    image: "/assets/certificacaospringmvc.jpg",
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
  t,
}: {
  direction: "next" | "prev";
  onClick?: () => void;
  theme?: string;
  t: (key: string) => string;
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
      aria-label={isNext ? t('carousel.next') : t('carousel.prev')}
    >
      {isNext ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
    </button>
  );
};

const CertificationsSection: React.FC = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const certifications = getCertifications(t);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <CustomArrow direction="next" theme={isDark ? 'dark' : 'light'} t={t} />,
    prevArrow: <CustomArrow direction="prev" theme={isDark ? 'dark' : 'light'} t={t} />,
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
          {t('sections.certifications')}
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
