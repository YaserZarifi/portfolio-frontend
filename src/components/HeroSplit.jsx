
import React from "react";
import RotatingText from './RotatingText';
import {

  Mail,

  ArrowRight,
  ChevronsDown,

} from "lucide-react";

const HeroSplit = React.forwardRef(({ id, scrollToSection }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className="min-h-screen flex items-center bg-transparent"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left text-white">
            <p className="text-gray-600 dark:text-gray-300 text-xl sm:text-2xl  mb-2">
              Hello, I'm
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl mb-4 font-extrabold text-gray-900 dark:text-white">
              Yaser Zarifi
            </h1>
             <RotatingText
                texts={[ 'a Programmer', 'a Web Developer', 'an Architect']}
                mainClassName="font-heading text-4xl sm:text-3xl md:text-5xl mb-4 font-extrabold text-gray-900 dark:text-white "
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
            />

            <p className=" text-gray-600 dark:text-gray-300 text-xl sm:text-2xl max-w-xl mx-auto md:mx-0 mb-8">
              I'm a passionate{" "}
              <span className="text-accent font-semibold">Computer Engineer</span>{" "}
              , programmer, and Full-Stack Web Developer with a background in Architecture and Urban Planning — blending technology and design to craft meaningful digital experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
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

          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://yaserzarifi.github.io/portfolio/assets/img/Me2.jpg"
                alt="Yaser Zarifi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-accent opacity-10 hover:opacity-0 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:hidden">
          <ChevronsDown className="animate-bounce text-accent" size={30} />
        </div>
      </div>
    </section>
  );
});


export default HeroSplit;
