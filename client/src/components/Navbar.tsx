import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/providers/ThemeProvider";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          <span className="gradient-text">Mayilanandhan D</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`font-medium transition-colors ${
                isActive(link.href) 
                  ? "text-primary" 
                  : "text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium py-2 transition-colors ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary"
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-2 p-0 hover:bg-transparent"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                closeMenu();
              }}
            >
              <span className="dark:hidden">Dark Mode</span>
              <span className="hidden dark:inline">Light Mode</span>
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
