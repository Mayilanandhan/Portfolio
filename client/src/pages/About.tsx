import { motion } from "framer-motion";
import { Code, Box, LayoutGrid } from "lucide-react";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const serviceItems = [
    {
      icon: <Code className="text-2xl text-primary" />,
      title: "Web Development",
      description: "Building responsive, efficient, and visually appealing websites and web applications using modern technologies."
    },
    {
      icon: <Box className="text-2xl text-secondary" />,
      title: "3D Animation",
      description: "Creating dynamic 3D animations to enhance user experience and provide engaging visual content."
    },
    {
      icon: <LayoutGrid className="text-2xl text-accent" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences that prioritize usability and aesthetic appeal."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen pt-28">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg mb-8">
            I'm an experienced Web Developer with expertise in building dynamic websites and applications. 
            My background in 3D animation allows me to blend technical expertise with creativity, 
            creating engaging and interactive digital experiences.
          </p>
          <p className="text-lg">
            I'm currently looking for a role where I can apply my skills in web development and animation 
            to contribute to successful projects and achieve business goals.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105 duration-300"
              variants={fadeIn}
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
