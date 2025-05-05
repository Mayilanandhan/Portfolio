import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code, Database, Figma, FileCode, Github, 
  Heading5, Cpu, Languages, Server 
} from "lucide-react";

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillsRef, { once: false, amount: 0.3 });

  const technicalSkills = [
    { name: "UI/UX Design", percentage: 90 },
    { name: "3D Animation", percentage: 85 },
    { name: "Web Development", percentage: 95 },
    { name: "Teamwork", percentage: 80 },
    { name: "Effective Communication", percentage: 85 }
  ];

  const languages = [
    { name: "C", icon: <Code className="text-2xl text-primary" /> },
    { name: "C++", icon: <FileCode className="text-2xl text-primary" /> },
    { name: "Java", icon: <Code className="text-2xl text-primary" /> },
    { name: "Python", icon: <FileCode className="text-2xl text-primary" /> },
    { name: "HTML/CSS", icon: <Heading5 className="text-2xl text-primary" /> },
    { name: "JavaScript", icon: <FileCode className="text-2xl text-primary" /> },
    { name: "React.js", icon: <Code className="text-2xl text-primary" /> },
    { name: "MongoDB", icon: <Database className="text-2xl text-primary" /> },
    { name: "IoT", icon: <Server className="text-2xl text-primary" /> }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  useEffect(() => {
    if (isInView) {
      const progressBars = document.querySelectorAll<HTMLDivElement>(".skill-progress");
      progressBars.forEach((bar, index) => {
        setTimeout(() => {
          if (bar.parentElement) {
            const percentage = bar.getAttribute("data-percentage") || "0";
            bar.style.width = `${percentage}%`;
          }
        }, index * 100);
      });
    }
  }, [isInView]);

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen pt-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg">
            A comprehensive set of technical skills and expertise developed through academic projects, 
            in-plant training, and hands-on experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16" ref={skillsRef}>
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            
            {technicalSkills.map((skill, index) => (
              <div className="mb-6" key={index}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{skill.name}</h4>
                  <span className="text-sm">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    data-percentage={skill.percentage}
                    style={{ width: isInView ? `${skill.percentage}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Languages & Technologies</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {languages.map((language, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col items-center transition-transform hover:scale-105 duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {language.icon}
                  <h4 className="font-medium mt-2">{language.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
