import React from "react";
import Section from "./Section";

const Projects = React.forwardRef(({ id, projects = [], onProjectSelect }, ref) => {

  return (
    <Section ref={ref} id={id} title="My Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className=" text-gray-800 dark:text-gray-300 bg-white/10 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col scroll-animate"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className=" text-gray-800 dark:text-gray-300 w-full h-48 object-cover bg-gray-500"
            />
            <div className="p-6 flex flex-col flex-grow  text-gray-800 dark:text-gray-300">
              <h3 className="font-heading text-xl font-bold mb-2">{project.title}</h3>
              <p className=" text-gray-800 dark:text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-2 py-1 bg-accent-light text-text-accent-light dark:bg-accent/20 dark:text-accent text-sm font-medium rounded-full"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex justify-end">

                <button
                  onClick={() => onProjectSelect(project)}
                  className="font-semibold text-accent hover:underline"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
});

export default Projects;

