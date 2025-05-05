import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Resume from "@/pages/Resume";
import Contact from "@/pages/Contact";

function App() {
  return (
    <TooltipProvider>
      <div className="bg-slate-50 text-slate-700 font-sans dark:bg-gray-900 dark:text-slate-200 transition-colors duration-300">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </main>
      </div>
    </TooltipProvider>
  );
}

export default App;
