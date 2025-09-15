import { useTypewriter, Cursor } from "react-simple-typewriter";
import React from "react";







const HeroTerminal = React.forwardRef(({ id, scrollToSection }, ref) => {
  const [text] = useTypewriter({
    words: [
      "Yaser Zarifi",
      "a Web Developer",
      "a Full-Stack Engineer",
      "a Creative Problem-Solver",
      "an Architect",
      "an Urban Planner",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 70,
    delaySpeed: 2000,
  });

  return (
    <section
      ref={ref}
      id={id}
      className="min-h-screen flex items-center justify-center bg-transparent"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl mx-auto bg-black/70 backdrop-blur-sm rounded-lg shadow-2xl border border-slate-700/50">
          <div className="flex items-center p-3 border-b border-slate-700/50">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <p className="flex-grow text-center text-sm text-gray-400 font-mono">
              /Users/Yaser/Portfolio
            </p>
          </div>

          <div className="p-6 font-mono text-left text-base text-white">
            <div className="mb-4">
              <p className="text-green-400">$ whoami</p>
              <p className="text-xl md:text-2xl font-bold text-accent">
                {text}
                <Cursor cursorStyle="_" />
              </p>
            </div>

            <div className="mb-6">
              <p className="text-green-400">$ cat bio.txt</p>
              <p className="text-gray-300">
                A passionate developer specializing in creating modern,
                responsive, and user-friendly web applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
                className="flex items-center text-cyan-400 hover:bg-cyan-400/10 p-2 rounded transition-colors"
              >
                <span className="text-green-400 mr-2">$</span> ./view-work.sh
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="flex items-center text-cyan-400 hover:bg-cyan-400/10 p-2 rounded transition-colors"
              >
                <span className="text-green-400 mr-2">$</span> mailto yaser
              </a>
            </div>

            <div className="mt-4 flex items-center">
              <p className="text-green-400 mr-2">$</p>
              <span className="terminal-cursor"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroTerminal;
