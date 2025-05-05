import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Hotel Management System",
      description: "Developed a comprehensive Hotel Management System to automate booking, check-in/check-out, and billing processes, improving efficiency and guest experience.",
      date: "OCT - 2023",
      tags: ["Web Development", "UI/UX Design", "Database"],
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      link: "#",
      isPrize: false
    },
    {
      title: "Cafe Management System",
      description: "Developed a Cafe Management System to streamline order management, billing, and inventory tracking, enhancing operational efficiency.",
      date: "FEB - 2024",
      tags: ["Web Development", "UI/UX Design", "Inventory Management"],
      imageUrl: "https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      link: "#",
      isPrize: false
    },
    {
      title: "Smart Medicine Delivery System",
      description: "Secured 1st prize in Paper Presentation on domain of 'Smart Medicine Delivery System' in BIT, showcasing innovative solutions for healthcare logistics.",
      tags: ["Research", "Healthcare", "Innovation"],
      imageUrl: "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      link: "#",
      isPrize: true
    },
    {
      title: "Two Wheeler Air Bag",
      description: "Secured 1st prize in Paper Presentation on domain of 'Two Wheeler Air Bag' in NEC, presenting innovative safety solutions for two-wheeled vehicles.",
      tags: ["Research", "Vehicle Safety", "Innovation"],
      imageUrl: "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      link: "#",
      isPrize: true
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const getBadgeVariant = (tag: string) => {
    switch (tag) {
      case "Web Development":
        return "blue";
      case "UI/UX Design":
        return "indigo";
      case "Database":
        return "purple";
      case "Inventory Management":
        return "green";
      case "Research":
        return "blue";
      case "Healthcare":
        return "red";
      case "Vehicle Safety":
        return "orange";
      case "Innovation":
        return "yellow";
      default:
        return "default";
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen pt-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg">
            Explore my latest projects showcasing my skills in web development, UI/UX design, and 3D animation.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden border-0 shadow-lg h-full transition-transform hover:translate-y-[-5px] duration-300 bg-slate-50 dark:bg-gray-700">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  {project.date && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium py-1 px-2 rounded">
                      {project.date}
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant={getBadgeVariant(tag) as any} className="bg-opacity-10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  {project.isPrize ? (
                    <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3A5.25 5.25 0 0 0 12 1.5Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                      </svg>
                      1st Prize Winner
                    </div>
                  ) : (
                    <a href={project.link} className="text-primary hover:text-blue-700 font-medium inline-flex items-center">
                      View Project Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
