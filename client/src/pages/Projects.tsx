import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Eye, Award, Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { projects } from "@/lib/constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const openPreview = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

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
              <Card className="overflow-hidden border-0 shadow-lg h-full project-card-hover-effect bg-slate-50 dark:bg-gray-700 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {project.date && (
                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium py-1 px-2 rounded">
                      {project.date}
                    </div>
                  )}
                  
                  {/* Quick Preview Button Overlay (appears on hover) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <Button 
                      onClick={() => openPreview(project)}
                      variant="outline" 
                      className="preview-button-hover bg-white/90 hover:bg-white border-0 text-gray-800 text-sm font-medium rounded-full shadow-lg"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Quick Preview
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
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

        {/* Project Preview Dialog */}
        <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
          <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedProject?.title}</DialogTitle>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-4 top-4" 
                onClick={closePreview}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>
            
            <AnimatePresence>
              {selectedProject && (
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div 
                    className="relative rounded-lg overflow-hidden"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title} 
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.date && (
                        <motion.div 
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.3 }}
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          {selectedProject.date}
                        </motion.div>
                      )}
                      
                      {selectedProject.isPrize && (
                        <motion.div 
                          className="flex items-center text-sm text-green-600 dark:text-green-400"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                        >
                          <Award className="h-4 w-4 mr-2" />
                          1st Prize Winner
                        </motion.div>
                      )}
                    </div>
                    
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <DialogDescription className="text-base">
                        {selectedProject.description}
                      </DialogDescription>
                    </motion.div>
                    
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <h4 className="text-sm font-semibold mb-2 flex items-center">
                        <Tag className="h-4 w-4 mr-2" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 + (i * 0.05), duration: 0.3 }}
                          >
                            <Badge variant={getBadgeVariant(tag) as any}>
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="pt-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      {!selectedProject.isPrize && (
                        <motion.a 
                          href={selectedProject.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-medium rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90 transition-colors"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          View Full Project
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
