import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  githubUrlFrontend?: string;
  video?: string;
  githubUrlBackend?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  video,
  githubUrlFrontend,
  githubUrlBackend
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          )}
          {githubUrlFrontend && (
            <a
              href={githubUrlFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub Frontend</span>
            </a>
          )}
          {githubUrlBackend && (
            <a
              href={githubUrlBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub Backend</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
          {video && (
            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-light transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Video de apresentação</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
