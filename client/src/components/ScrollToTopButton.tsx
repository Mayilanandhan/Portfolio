import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 400px
      const shouldShow = window.scrollY > 400;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 z-40 p-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          onClick={scrollToTop}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 12px rgba(59, 130, 246, 0.6)" 
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{ y: [2, -2, 2] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <ArrowUp className="h-6 w-6" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;