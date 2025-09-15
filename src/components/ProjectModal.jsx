import React, { useState, useEffect } from "react";
import { Github, ArrowRight, X } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (project) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [project]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!project) return null;

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-[100] flex justify-center items-center p-4 bg-black bg-opacity-70 modal-backdrop ${isVisible ? "visible" : ""}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[80vh] flex flex-col relative modal-content ${isVisible ? "visible" : ""}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 rounded-full text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="flex-shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-lg bg-gray-500"
            />
        </div>

        <div className="p-2 flex flex-col flex-grow min-h-2">

          <div className="flex-shrink-0">
            <h2 className="font-heading text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 my-4">
              {project.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 bg-accent-light text-text-accent-light dark:bg-accent/20 dark:text-accent text-sm font-medium rounded-full"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 flex-grow overflow-y-auto">
            {project.long_description || project.description}
          </p>

          <div className="flex-shrink-0 pt-6 border-t border-slate-200 dark:border-slate-700">
            <div className="flex justify-end space-x-4">
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-accent text-text-accent font-semibold rounded-lg shadow-md hover:bg-accent/90 transition-all"
              >
                Live Demo <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href={project.repo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 transition-all"
              >
                GitHub <Github className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

