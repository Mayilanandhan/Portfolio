import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useContactForm } from "@/hooks/useContactForm";

const Contact = () => {
  const { toast } = useToast();
  const { formData, errors, handleChange, handleSubmit, isSubmitting } = useContactForm();

  const contactInfo = [
    {
      icon: <Mail className="text-primary" />,
      title: "Email",
      value: "mayilanandhand.22cse@kongu.edu",
      href: "mailto:mayilanandhand.22cse@kongu.edu"
    },
    {
      icon: <Phone className="text-primary" />,
      title: "Phone",
      value: "+91 9344977815",
      href: "tel:9344977815"
    },
    {
      icon: <Linkedin className="text-primary" />,
      title: "LinkedIn",
      value: "mayilanandhan-d-96938a259",
      href: "https://www.linkedin.com/in/mayilanandhan-d-96938a259/"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen pt-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg">
            Interested in working together? Feel free to contact me for any project or collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <a 
                        href={item.href} 
                        target={item.title === "LinkedIn" ? "_blank" : undefined}
                        rel={item.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                        className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-slate-50 dark:bg-gray-700 border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Let's connect</h3>
                <p className="mb-6">
                  I'm currently available for freelance work and full-time positions. 
                  If you have a project that needs my expertise, don't hesitate to reach out.
                </p>
                <div className="flex space-x-4">
                  {contactInfo.map((item, index) => (
                    <a 
                      key={index}
                      href={item.href}
                      target={item.title === "LinkedIn" ? "_blank" : undefined}
                      rel={item.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                      aria-label={item.title}
                      className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
                  required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Your Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                  required
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-sm font-medium">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`mt-1 ${errors.subject ? 'border-red-500' : ''}`}
                  required
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium">Your Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  placeholder="Hello, I'd like to talk about..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 resize-none ${errors.message ? 'border-red-500' : ''}`}
                  required
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-blue-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="py-8 bg-slate-800 text-white dark:bg-gray-900 transition-colors duration-300 mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold gradient-text">Mayilanandhan D</h2>
              <p className="text-slate-300 mt-2">Web Developer & 3D Animation Specialist</p>
            </div>
            
            <div className="flex space-x-4">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  target={item.title === "LinkedIn" ? "_blank" : undefined}
                  rel={item.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                  aria-label={item.title}
                  className="w-10 h-10 rounded-full bg-slate-700 dark:bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-slate-700 dark:border-gray-800 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Mayilanandhan D. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
