import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-primary/10' : 'bg-background/20 backdrop-blur-md'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer transition-all duration-300 hover:scale-105">
            <div className="w-8 h-8 bg-gradient-to-r from-saffron to-indigo rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-saffron/30"></div>
            <span className="text-xl font-playfair font-bold text-foreground transition-all duration-300 group-hover:text-saffron">Cultural Chronicles</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="cultural" size="sm" className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-saffron/20">
              Language
            </Button>
            <button onClick={() => scrollToSection('discover')} className="text-foreground hover:text-saffron transition-all duration-300 font-medium relative hover:scale-105 hover:-translate-y-0.5">
              Discover
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-saffron transition-all duration-300 font-medium relative hover:scale-105 hover:-translate-y-0.5">
              About
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-saffron transition-all duration-300 font-medium relative hover:scale-105 hover:-translate-y-0.5">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-saffron transition-all duration-300 font-medium relative hover:scale-105 hover:-translate-y-0.5">
              Contact
            </button>
            <Button variant="cultural" size="sm" className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-saffron/20">
              Try VR Demo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground hover:text-saffron transition-all duration-300 hover:scale-110 hover:bg-saffron/10 rounded-lg">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-primary/10">
            <nav className="flex flex-col space-y-4 p-6">
              <button onClick={() => scrollToSection('discover')} className="text-left text-foreground hover:text-saffron transition-all duration-300 font-medium hover:translate-x-2 hover:bg-saffron/5 p-2 rounded-lg -m-2">
                Discover
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-saffron transition-all duration-300 font-medium hover:translate-x-2 hover:bg-saffron/5 p-2 rounded-lg -m-2">
                About
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-foreground hover:text-saffron transition-all duration-300 font-medium hover:translate-x-2 hover:bg-saffron/5 p-2 rounded-lg -m-2">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-saffron transition-all duration-300 font-medium hover:translate-x-2 hover:bg-saffron/5 p-2 rounded-lg -m-2">
                Contact
              </button>
              <Button variant="cultural" size="sm" className="self-start transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-saffron/20">
                Try VR Demo
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;