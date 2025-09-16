import React, { useState, useEffect } from "react";
import Section from './Section.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import LogoLoop from "./LogoLoop.jsx";
import { SiMysql ,SiSqlite ,SiHtml5 ,SiCss3 ,SiGit ,SiJupyter ,SiNumpy ,SiPandas ,SiScikitlearn ,SiTensorflow ,SiArcgis,SiSketchup,SiAutodeskrevit ,SiTwinmotion   ,SiAutocad ,SiBootstrap ,SiReact ,SiPython , SiTailwindcss,SiJavascript , SiDjango, SiArc } from 'react-icons/si';
import { FaJava  } from "react-icons/fa";
import { BsBadge3dFill } from "react-icons/bs";
import { FaC } from "react-icons/fa6";


const techLogos = [
  { node: <SiNumpy />, title: "", href: "#" },
  { node: <SiPandas />, title: "", href: "#" },
  { node: <SiScikitlearn />, title: "", href: "#" },
  { node: <SiArcgis />, title: "", href: "#" },
  { node: <SiSketchup />, title: "", href: "#" },
  { node: <SiAutocad />, title: "", href: "#" },
  { node: <SiAutodeskrevit />, title: "", href: "#" },
  { node: <SiTwinmotion />, title: "", href: "#" },
  { node: <BsBadge3dFill />, title: "", href: "#" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiJavascript  />, title: "JavaScript", href: "#" },
  { node: <FaJava  />, title: "Java", href: "#" },
  { node: <SiPython  />, title: "Python", href: "#" },
  { node: <SiDjango  />, title: "Django", href: "#" },
  { node: <SiBootstrap  />, title: "Bootstrap", href: "#" },
  { node: <FaC />, title: "C language", href: "#" },
  { node: <SiMysql />, title: "", href: "#" },
  { node: <SiTensorflow />, title: "", href: "#" },
  { node: <SiSqlite />, title: "", href: "#" },
  { node: <SiHtml5 />, title: "", href: "#" },
  { node: <SiCss3 />, title: "", href: "#" },
  { node: <SiGit />, title: "", href: "#" },
  { node: <SiJupyter />, title: "", href: "#" },

];

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


const About = React.forwardRef(({ id, skills = [], categories = [] }, ref) => {
  const [skillCategories, setSkillCategories] = useState({});
  const [activeTab, setActiveTab] = useState('');



  useEffect(() => {
    if (categories.length === 0) return;

    const allGroupedSkills = categories.reduce((acc, category) => {
      acc[category.name] = [];
      return acc;
    }, {});

    skills.forEach((skill) => {
      if (skill.category && allGroupedSkills[skill.category.name]) {
        allGroupedSkills[skill.category.name].push(skill);
      }
    });

    const finalCategories = {};
    for (const categoryName in allGroupedSkills) {
      if (allGroupedSkills[categoryName].length > 0) {
        finalCategories[categoryName] = allGroupedSkills[categoryName];
      }
    }

    setSkillCategories(finalCategories);

    const availableTabs = Object.keys(finalCategories);
    if (availableTabs.length > 0) {
      setActiveTab(availableTabs[0]);
    }

  }, [skills, categories]);



  return (
    <Section ref={ref} id={id} title="About Me">
      <div className="py-8 bg-white/10 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-lg text-gray-800 dark:text-gray-300 space-y-4 text-left lg:text-left p-4">
            <p>Hello! I'm Yaser, a Full-Stack Web Developer with a passion for creating clean, efficient, and user-friendly web applications. I specialize in modern technologies like React and Django, transforming ideas into functional and engaging digital experiences.</p>

                <p>Before diving into tech, I studied Urban Planning and Architecture, which gives me a unique perspective on design, structure, and problem-solving. I enjoy merging creativity, logic, and design thinking to build solutions that are both innovative and practical.</p>



          </div>

          <div className="lg:w-1/2 w-full">
            <div className="flex overflow-x-auto justify-start border-b border-slate-700 mb-6">
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
                className="p-4 grid grid-cols-4 gap-4 min-h-[220px]" shifts
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
                      className={`w-10 h-10 md:w-12 md:h-12 mb-2 rounded-md ${skill.name === "Django" ? "drop-shadow-[0_0_6px_white]" : ""}
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
<div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover

        ariaLabel="Technology partners"
      />
    </div>
    </Section>
  );
});

export default About;

