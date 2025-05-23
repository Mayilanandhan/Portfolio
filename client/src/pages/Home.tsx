import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
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
              <Button 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 70,
                      behavior: "smooth"
                    });
                  }
                }} 
                className="bg-primary hover:bg-blue-600 text-white"
              >
                Get In Touch
              </Button>
              
              <Button 
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    window.scrollTo({
                      top: projectsSection.offsetTop - 70,
                      behavior: "smooth"
                    });
                  }
                }} 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Projects
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-6">
              <div 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 70,
                      behavior: "smooth"
                    });
                  }
                }}
                className="flex items-center gap-2 text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors cursor-pointer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm md:text-base font-medium">LinkedIn</span>
              </div>
              
              <div 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 70,
                      behavior: "smooth"
                    });
                  }
                }}
                className="flex items-center gap-2 text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors cursor-pointer"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm md:text-base font-medium">Email</span>
              </div>
              
              <div 
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 70,
                      behavior: "smooth"
                    });
                  }
                }}
                className="flex items-center gap-2 text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors cursor-pointer"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm md:text-base font-medium">Phone</span>
              </div>
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
            <motion.div 
              className="profile-frame"
              animate={{
                boxShadow: ["0px 0px 20px rgba(59, 130, 246, 0.4)", "0px 0px 20px rgba(139, 92, 246, 0.4)", "0px 0px 20px rgba(236, 72, 153, 0.4)", "0px 0px 20px rgba(59, 130, 246, 0.4)"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <motion.div 
                className="profile-circle"
                whileHover={{ 
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
                  scale: 1.03
                }}
              >
                <img 
                  src={profileImg} 
                  alt="Mayilanandhan D" 
                  className="profile-image"
                  loading="eager"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
