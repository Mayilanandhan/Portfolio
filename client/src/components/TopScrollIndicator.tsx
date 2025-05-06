import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TopScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress as a percentage
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / maxScroll) * 100;
      
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <motion.div
        className="h-full top-progress-bar rounded-r-full"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: "0%" }}
        animate={{
          width: `${scrollProgress}%`
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20
        }}
      />
    </div>
  );
};

export default TopScrollIndicator;