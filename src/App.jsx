import React, { useState, useEffect, useRef } from "react";

import { MemoizedBackground } from "./components/MemoizedBackground.jsx";
import { MemoizedBackground2 } from "./components/MemoizedBackground2.jsx";
import { MemoizedBackground3 } from "./components/MemoizedBackground3.jsx";
import { MemoizedBackground4 } from "./components/MemoizedBackground4.jsx";
import { MemoizedBackground5 } from "./components/MemoizedBackground5.jsx";
import { scroller } from "react-scroll";
import ThemeSwitcher from "./components/ThemeSwitcher.jsx";
import Header from "./components/Header.jsx";
import MainHero from "./components/MainHero.jsx";
import HeroSplit from "./components/HeroSplit.jsx";
import HeroTerminal from "./components/HeroTerminal.jsx";
import HeroOriginal from "./components/HeroOriginal.jsx";
import HeroSwitcher from "./components/HeroSwitcher.jsx";
import About from "./components/About.jsx";
import Section from "./components/Section.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";
import BackgroundSwitcher from "./components/BackGroundSwitcher.jsx";
import { AnimatePresence, motion } from "framer-motion";

import {
  getProjects,
  getSkills,
  getExperiences,
  getEducations,
  getCertificates,
  getProfile ,
} from "./api";
import ProjectModal from "./components/ProjectModal.jsx";
import Certificates from "./components/Certificates.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const [heroStyle, setHeroStyle] = useState("split");
  const [backgroundStyle, setBackgroundStyle] = useState("var1");

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedProject, setSelectedProject] = useState(null);

  const sections = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
    certificates: useRef(null),
  };

  useEffect(() => {
    const fetchAllData = async () => {
      // Use Promise.all to fetch everything concurrently
      const [
        projectsData,
        skillsData,
        experiencesData,
        educationsData,
        certificatesData,
        profileData,
      ] = await Promise.all([
        getProjects(),
        getSkills(),
        getExperiences(),
        getEducations(),
        getCertificates(),
        getProfile(),
      ]);

      setProjects(projectsData);
      setSkills(skillsData);
      setExperiences(experiencesData);
      setEducations(educationsData);
      setCertificates(certificatesData);
      setIsLoading(false);
      setProfile(profileData);
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // useEffect(() => {
  //     const observer = new IntersectionObserver(
  //         (entries) => {
  //             entries.forEach((entry) => {
  //                 if (entry.isIntersecting) {
  //                     setActiveSection(entry.target.id);
  //                 }
  //             });
  //         },
  //         { rootMargin: '-50% 0px -50% 0px' }
  //     );
  //     Object.values(sections).forEach((sectionRef) => {
  //         if (sectionRef.current) { observer.observe(sectionRef.current); }
  //     });
  //     return () => {
  //         Object.values(sections).forEach((sectionRef) => {
  //             if (sectionRef.current) { observer.unobserve(sectionRef.current); }
  //         });
  //     };
  // }, [sections]);

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-spotlight-section");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top > 0 && rect.top < window.innerHeight) {
        section.classList.add("is-active");
      } else {
        section.classList.add("is-entering");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = entry.boundingClientRect;

          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            entry.target.classList.remove("is-entering", "is-exiting");
          } else {
            if (rect.top < 0) {
              entry.target.classList.add("is-exiting");
            } else {
              entry.target.classList.add("is-entering");
            }
            entry.target.classList.remove("is-active");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => animationObserver.observe(el));
    return () => {
      elements.forEach((el) => {
        if (el) {
          animationObserver.unobserve(el);
        }
      });
    };
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // const scrollToSection = (sectionId) => {
  //     sections[sectionId].current.scrollIntoView({ behavior: 'smooth' });
  // };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: 0,
    });
  };

  return (
    // <div className="relative font-sans leading-relaxed text-gray-800 dark:text-gray-200">
    <div className="relative font-sans leading-relaxed text-gray-800 dark:text-gray-200 transition-colors duration-500">
      {/* <div className="fixed top-0 left-0 w-full h-full -z-10">
        <MemoizedBackground />
      </div> */}

      {/* ----------------------- */}


      {/* <div className="fixed top-0 left-0 w-full h-full -z-10">
        {backgroundStyle === "original" && <MemoizedBackground />}
        {backgroundStyle === "var1" && <MemoizedBackground2 />}
        {backgroundStyle === "var2" && <MemoizedBackground3 />}
      </div> */}

      {/* ------------------------------------- */}


        <div className="fixed top-0 left-0 w-full h-full z-100">
        <AnimatePresence mode="wait">
            {backgroundStyle === "original" && (
            <motion.div
                key="bg1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full"
            >
                <MemoizedBackground />
            </motion.div>
            )}

            {backgroundStyle === "var1" && (
            <motion.div
                key="bg2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full"
            >
                <MemoizedBackground2 />
            </motion.div>
            )}

            {backgroundStyle === "var2" && (
            <motion.div
                key="bg3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full"
            >
                <MemoizedBackground3 />
            </motion.div>
            )}

            {backgroundStyle === "var3" && (
            <motion.div
                key="bg4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full"
            >
                <MemoizedBackground4 />
            </motion.div>
            )}

            {backgroundStyle === "var4" && (
            <motion.div
                key="bg5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-full"
            >
                <MemoizedBackground5 />
            </motion.div>
            )}
        </AnimatePresence>
        </div>




      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
      <main>
        {/* <Hero ref={sections.home} id="home" scrollToSection={scrollToSection} /> */}
        <section
          ref={sections.home}
          id="home"
          className="relative min-h-screen"
        >

          <div
            className={`hero-variant ${
              heroStyle === "original"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <HeroOriginal scrollToSection={scrollToSection} />
          </div>

          <div
            className={`hero-variant ${
              heroStyle === "split"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <HeroSplit scrollToSection={scrollToSection} />
          </div>

          <div
            className={`hero-variant ${
              heroStyle === "terminal"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <HeroTerminal scrollToSection={scrollToSection} />
          </div>



        </section>
        <About ref={sections.about} id="about" skills={skills} />
        <Projects
          ref={sections.projects}
          id="projects"
          projects={projects}
          onProjectSelect={handleOpenModal}
        />{" "}
        <Resume
          ref={sections.resume}
          id="resume"
          experiences={experiences}
          educations={educations}
           profile={profile}
        />
        <Certificates
          ref={sections.certificates}
          id="certificates"
          certificates={certificates}
        />
        <Contact ref={sections.contact} id="contact" />
      </main>
      <Footer />
      <BackToTopButton />
      <ThemeSwitcher />
      <HeroSwitcher heroStyle={heroStyle} setHeroStyle={setHeroStyle} />
      <BackgroundSwitcher backgroundStyle={backgroundStyle} setBackgroundStyle={setBackgroundStyle}/>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
