import React from 'react';
import { Github, Linkedin, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tulasi Prasanna</h3>
            <p className="text-gray-300 mb-6">
              Mern-stack developer focused on creating powerful, data-driven web applications that deliver real impact
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/tulasiprasanna2005" target='_blank' className="bg-gray-700 p-2 rounded-full hover:bg-portfolio-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/tulasi-prasanna-117629299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="bg-gray-700 p-2 rounded-full hover:bg-portfolio-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:chodagiriprasad5@gmail.com" className="bg-gray-700 p-2 rounded-full hover:bg-portfolio-primary transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-1" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "C","Python","JavaScript", "React", "Node.js", "Express.js", "SQL"
              ].map((skill, index) => (
                <span key={index} className="bg-gray-700 text-xs px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
