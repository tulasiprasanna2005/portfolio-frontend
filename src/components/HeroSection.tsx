
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroSection = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center bg-gradient-to-br from-portfolio-light to-gray-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="flex flex-col items-center md:items-start space-y-6 max-w-3xl">
            <div className="inline-block opacity-0 animate-fade-in">
              <span className="bg-portfolio-primary/10 text-portfolio-primary px-4 py-2 rounded-full text-sm font-medium">
                Front-end Developer 
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-dark opacity-0 animate-fade-in animate-delay-100 text-center md:text-left">
              Hi, I'm <span className="text-portfolio-primary">Tulasi Prasanna</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl opacity-0 animate-fade-in animate-delay-200 text-center md:text-left">
              Passionate about frontend development and crafting impactful, user-friendly web interfaces using modern technologies like React.js.
            </p>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-300">
              <Button
                className="bg-portfolio-primary hover:bg-portfolio-primary/90"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
              <a href="/Tulasi_Prasanna_Resume.pdf" download>
                <Button
                  variant="outline"
                  className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10"
                >
                  Download Resume
                </Button>
              </a>

            </div>

            <div className="flex items-center gap-4 mt-4 opacity-0 animate-fade-in animate-delay-400">
              <a href="https://github.com/tulasiprasanna2005/" target='_blank' className="text-gray-600 hover:text-portfolio-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/tulasi-prasanna-117629299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="text-gray-600 hover:text-portfolio-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:tulasiprasanna541@gmail.com"
                className="text-gray-600 hover:text-portfolio-primary transition-colors"
              >
                <Mail size={20} />
              </a>

            </div>
          </div>

          <div className="hidden md:block opacity-0 animate-fade-in animate-delay-300">
            <Avatar className="h-80 w-80 border-4 border-white shadow-lg">
              <AvatarImage
                src="/lovable-uploads/tulasi_prasanna.jpeg"
                alt="Prasad Chodagiri"
                className="object-cover"
              />
              <AvatarFallback>PC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-portfolio-primary animate-bounce-light"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
