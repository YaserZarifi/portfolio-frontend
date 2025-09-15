
import React from "react";
import {
  Briefcase,
  Code,
  Download,
} from "lucide-react";

import Section from "./Section.jsx";



    const Resume = React.forwardRef(({ id, experiences, educations, profile  }, ref) => {
  return (
    <Section ref={ref} id={id} title="My Resume">
      <div className="text-center mb-12">
        <a
          href={profile?.resume_file}
            download
          className={`inline-flex items-center px-8 py-3 bg-accent text-text-accent font-semibold rounded-lg shadow-md hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 ${!profile?.resume_file ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Download PDF Resume <Download className="ml-2" size={20} />
        </a>
      </div>
      <div className="p-8 md:p-12 bg-white/10 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="scroll-animate">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-3 text-accent" /> Experience
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-slate-700">
              {experiences.map((exp, i) => (
                <div key={i} className="pl-12 relative">
                  <div className="absolute left-0 top-1.5 w-5 h-5 bg-accent rounded-full border-4 border-white dark:border-slate-900"></div>
                  <h4 className="text-xl font-bold">{exp.role}</h4>
                  <p className="font-semibold text-accent">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="scroll-animate">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Code className="mr-3 text-accent" /> Education
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-slate-700">
              {educations.map((edu, i) => (
                <div key={i} className="pl-12 relative">
                  <div className="absolute left-0 top-1.5 w-5 h-5 bg-accent rounded-full border-4 border-white dark:border-slate-900"></div>
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="font-semibold text-accent">{edu.institution}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});


export default Resume;
