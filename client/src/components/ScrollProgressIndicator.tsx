import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ScrollProgressIndicatorProps {
  sections: {
    id: string;
    label: string;
  }[];
}

const ScrollProgressIndicator = ({ sections }: ScrollProgressIndicatorProps) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(scrollPercentage);
      
      // Detect which section is currently visible
      const visibleSections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // 100px offset for better UX

      visibleSections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // 70px offset for navbar
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative flex flex-col items-center py-4">
        {/* Main progress line */}
        <div className="absolute h-full w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
        
        {/* Active progress line overlay */}
        <motion.div 
          className="absolute top-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full origin-top"
          initial={{ height: "0%" }}
          animate={{ height: `${scrollProgress}%` }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20
          }}
          style={{
            boxShadow: "0 0 4px rgba(79, 70, 229, 0.5)"
          }}
        />
        
        {/* Section indicators */}
        <div className="relative flex flex-col items-center space-y-8">
          {sections.map((section) => (
            <div key={section.id} className="relative">
              <motion.button
                onClick={() => scrollToSection(section.id)}
                className={`scroll-indicator-dot relative z-10 w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                  activeSection === section.id 
                    ? "bg-primary active" 
                    : "bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Scroll to ${section.label} section`}
              >
                {activeSection === section.id && (
                  <motion.div 
                    className="absolute w-2 h-2 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5,
                      repeatType: "loop"
                    }}
                  />
                )}
              </motion.button>
              
              {/* Section label */}
              <div className="absolute right-6 top-0 transform -translate-y-1/2 whitespace-nowrap">
                <motion.div
                  className={`scroll-indicator-label text-sm font-medium px-2 py-1 rounded-md ${
                    activeSection === section.id 
                      ? "bg-primary/10 text-primary dark:bg-primary/20" 
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {section.label}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressIndicator;