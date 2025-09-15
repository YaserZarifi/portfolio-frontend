

import {
  Mail,
  Linkedin,
  Github,

} from "lucide-react";



const Footer = () => {
  return (
    <footer className="bg-white/10  bg-slate-900/40 backdrop-blur-md border-t border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} <a href="https://www.linkedin.com/in/mohammad-yaser-zarifi/">Yaser Zarifi</a>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/YaserZarifi/"
              className="text-gray-500 hover:text-accent transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-yaser-zarifi/"
              className="text-gray-500 hover:text-accent transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto: yaserzarifi1378@gmail.com"
              className="text-gray-500 hover:text-accent transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
