

import React, { useState, useEffect } from "react";
import {

  ArrowUp,

} from "lucide-react";



const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-16 right-8 p-3 rounded-full bg-accent text-text-accent shadow-lg hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300 ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;
