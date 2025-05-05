import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";
import ThreeCanvas from "@/components/ThreeCanvas";
import profileImg from "../assets/profile.jpg";

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      <ThreeCanvas className="absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-4 pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hello, I'm <span className="gradient-text">Mayilanandhan D</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6">
              Web Developer & 3D Animation Specialist
            </h2>
            
            <p className="text-lg mb-8 max-w-xl">
              Experienced web developer with a strong background in 3D animation, 
              blending technical expertise with creativity to build dynamic websites 
              and applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-blue-600 text-white">
                  Get In Touch
                </Button>
              </Link>
              
              <Link href="/projects">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Projects
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/mayilanandhan-d-96938a259/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              
              <a 
                href="mailto:mayilanandhand.22cse@kongu.edu"
                aria-label="Email"
                className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
              
              <a 
                href="tel:9344977815"
                aria-label="Phone"
                className="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="profile-container">
              <motion.div 
                className="profile-circle"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)",
                }}
              >
                <img 
                  src={profileImg} 
                  alt="Mayilanandhan D" 
                  className="profile-image"
                  loading="eager"
                />
              </motion.div>
              <motion.div 
                className="profile-effect"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 0.7, 0.5] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut" 
                }}
              ></motion.div>
              <motion.div 
                className="profile-glow"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut" 
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
