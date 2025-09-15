import React from "react";
import { Mail, ArrowRight, ChevronsDown } from "lucide-react";
import RotatingText from "./RotatingText";

const HeroOriginal = React.forwardRef(({ id, scrollToSection }, ref) => (
  <section
    ref={ref}
    id={id}
    className="min-h-screen flex items-center bg-transparent"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center text-white pt-16">
        <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent/50 shadow-lg">
          <img
            src="https://yaserzarifi.github.io/portfolio/assets/img/Me2.jpg"
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl mb-4 font-extrabold text-gray-900 dark:text-white">
          Hi, I'm <span className="text-accent">Yaser Zarifi</span>
        </h1>
        <RotatingText
          texts={[
                    'a Programmer',
                    'a Web Developer',
                    'a Machine Learning Enthusiast',
                    'a Full-Stack Developer',
                    'a Computer Engineer',
                    'an Architect',
                    'an Urban Planner',
                    'an AI Explorer',
                    'a Data Problem Solver',
                    'a Technology Innovator',
                    'a Creative Thinker'
                ]}
          mainClassName="text-accent px-2 sm:px-2 md:px-3  text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center content-center font-heading text-3xl sm:text-4xl md:text-5xl mb-2 font-extrabold text-gray-900 dark:text-white"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />

        <p className="text-sm sm:text-1xl max-w-2xl mx-auto mb-6 text-gray-600 dark:text-gray-300">
          I'm a passionate <span className="text-accent font-semibold">Computer Engineer</span>, programmer, Full-Stack Web Developer, and aspiring Machine Learning enthusiast with a foundation in Architecture and Urban Planning. merging technology, data, design, and creativity to craft impactful digital experiences.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="inline-flex items-center px-8 py-3 bg-accent text-text-accent font-semibold rounded-lg shadow-md hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch <Mail className="ml-2" size={20} />
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="inline-flex items-center px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-105"
          >
            View My Work <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ChevronsDown className="animate-bounce text-accent" size={30} />
      </div>
    </div>
  </section>
));

export default HeroOriginal;
