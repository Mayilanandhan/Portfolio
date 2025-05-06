import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { openResumeInNewTab, downloadResume } from "@/lib/resumeUtils";
import { ResumeCorrections } from "@/components/ResumeCorrections";

const Resume = () => {
  const experienceItems = [
    {
      title: "In-Plant Training",
      company: "Durga Tech & NXT Gen",
      description: [
        { tag: "Cloud Computing", text: "Durga tech in the domain of cloud computing (7 days of training)" },
        { tag: "Internet of Things", text: "Nxt Gen in the domain of Internet of Things (7 days of training)" }
      ]
    },
    {
      title: "Web Development Internship",
      company: "Cognifiz, May 1 - June 1, 2023",
      description: [
        { tag: "", text: "Completed a 1-month Web Development Internship, gaining hands-on experience in building responsive websites using HTML, CSS, JavaScript, and React.js." }
      ]
    }
  ];

  const educationItems = [
    {
      title: "Bachelor of Engineering",
      institution: "Kongu Engineering College",
      details: [{ label: "CGPA", value: "7.27" }]
    },
    {
      title: "HSC",
      institution: "Kongu Vellalar Matriculation Higher Secondary School, 2021 - 2022",
      details: [{ label: "Percentage", value: "85.17%" }]
    },
    {
      title: "SSLC",
      institution: "Kongu Vellalar Matriculation Higher Secondary School, 2019 - 2020",
      details: [{ label: "Percentage", value: "93.6%" }]
    }
  ];

  const certifications = [
    {
      title: "MongoDB Associative Developer",
      description: "Certification for MongoDB database management and development"
    },
    {
      title: "Internet of Things - NPTEL Certification",
      description: "NPTEL certification in Internet of Things technologies and applications"
    }
  ];

  return (
    <section id="resume" className="py-16 md:py-24 bg-slate-50 dark:bg-gray-900 transition-colors duration-300 min-h-screen pt-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Resume & Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg mb-8">
            A summary of my professional experience, education, and achievements.
          </p>
          <ResumeCorrections />
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="bg-primary hover:bg-blue-600 resume-button"
                onClick={openResumeInNewTab}
              >
                <Eye className="mr-2 h-4 w-4" />
                View Full Resume
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white download-button-pulse"
                onClick={downloadResume}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Briefcase className="mr-3 text-primary" />
              Experience
            </h3>

            <div className="space-y-8">
              {experienceItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-8 border-l-2 border-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="text-xl font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{item.company}</p>
                  
                  {item.description.map((desc, i) => (
                    <div key={i} className="mb-2">
                      {desc.tag && (
                        <Badge variant="outline" className="mb-2">
                          {desc.tag}
                        </Badge>
                      )}
                      <p>{desc.text}</p>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="mr-3 text-primary" />
              Education
            </h3>

            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-8 border-l-2 border-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="text-xl font-medium mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{item.institution}</p>
                  
                  {item.details.map((detail, i) => (
                    <p key={i} className="mb-1">
                      <strong>{detail.label}:</strong> {detail.value}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Award className="mr-3 text-primary" />
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                <Card className="transition-transform hover:scale-105 duration-300 h-full bg-white dark:bg-gray-700 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
