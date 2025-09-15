import React, { useState, useEffect } from "react";
import Section from './Section.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariant = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  hidden: {},
};

const skillVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
};


const About = React.forwardRef(({ id, skills = [] }, ref) => {
  const [skillCategories, setSkillCategories] = useState({});
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const groupedSkills = skills.reduce((acc, skill) => {
      const categoryMap = {
        'FRONTEND': 'Frontend & Design',
        'BACKEND': 'Backend & Languages',
        'DATA_TOOLS': 'Data Science & Tools',
      };
      const categoryName = categoryMap[skill.category] || 'Other';
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(skill);
      return acc;
    }, {});
    setSkillCategories(groupedSkills);
    if (Object.keys(groupedSkills).length > 0) {
      setActiveTab(Object.keys(groupedSkills)[0]);
    }
  }, [skills]);

  return (
    <Section ref={ref} id={id} title="About Me">
      <div className="p-8 md:p-12 bg-white/10 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-lg text-gray-800 dark:text-gray-300 space-y-4 text-center lg:text-left">
            <p>Hello! I'm a dedicated and results-driven Web Developer...</p>
            <p>My journey into web development started with a fascination...</p>
            <p>When I'm not coding, you can find me exploring new technologies...</p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="flex justify-center lg:justify-start border-b border-slate-700 mb-6">
              {Object.keys(skillCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={` text-gray-800 dark:text-gray-300 px-4 py-2 text-sm md:text-base font-semibold transition-colors duration-300 ${
                    activeTab === category
                      ? 'border-b-2 border-accent text-accent'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-4 gap-4 min-h-[220px]" shifts
              >
                {activeTab && skillCategories[activeTab] && skillCategories[activeTab].map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={skillVariant}
                    className="flex flex-col items-center p-3 bg-white/10 dark:bg-slate-800/50 rounded-lg shadow-md hover:shadow-accent/20 hover:shadow-lg hover:scale-105 transition-shadow duration-300"
                  >
                    <img
                      src={skill.icon_url}
                      alt={skill.name}
                      className={`w-10 h-10 md:w-12 md:h-12 mb-2 ${skill.name === "Django" ? "drop-shadow-[0_0_6px_white]" : ""}
                      ${skill.name === "SQLite" ? "drop-shadow-[0_0_0.2px_white]" : ""}
                      `}
                    />
                    <span className="text-xs md:text-sm text-center font-semibold text-gray-700 dark:text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
});

export default About;

