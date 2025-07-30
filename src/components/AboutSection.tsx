
import React from 'react';
import { Award, Globe, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">
              Passionate Front-end  Developer 
            </h3>
            
            <div className="space-y-4 text-gray-700">
              <p>
                I'm Tulasi Prasanna, a Frontend Developer passionate about crafting modern, responsive, and user-friendly web interfaces. 
                With strong expertise in HTML, CSS, JavaScript, and React.js, I focus on building intuitive and accessible front-end experiences that enhance user engagement and performance. 
              </p>
              
              <p>
               I thrive on creating fast, intuitive, and performance-optimized experiences—whether it's a single-page application, a dynamic dashboard,
                or an e-commerce platform. My goal is always to deliver seamless and accessible user journeys that solve real-world problems through technology.
              </p>
              <p>
                I bring a strong focus on responsive design, cross-browser compatibility, and clean code practices to every project. 
                With hands-on experience in integrating APIs and building reusable React components, I ensure scalability and performance. 
                I'm always eager to learn new technologies and stay updated with the evolving frontend landscape.
              </p>
              
              <p>
                Driven by curiosity and continuous learning, I keep up with evolving tech trends and best practices to ensure every project I work on is efficient, secure, and future-ready.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-primary/10 p-3 rounded-full">
                    <User className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personal Details</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><span className="font-medium">Name:</span> Tulasi Prasanna</li>
                      <li><span className="font-medium">Email:</span> tulasiprasannamarisetti@gmail.com</li>
                      <li><span className="font-medium">Location:</span> Tadepalligudem, India</li>
                      <li><span className="font-medium">Available:</span> For freelance & full-time</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-primary/10 p-3 rounded-full">
                    <Globe className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><span className="font-medium">English:</span> Fluent</li>
                      <li><span className="font-medium">Telugu:</span> Native</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-portfolio-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Achievements</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>C Programing Certification</li>
                      <li>Certification In Software Developer Intern at Micro IIT</li>
                      <li>OPTIFYX Certification in Frontend-Development Program</li>
                      <li>Soft Skills Certification in Mepro</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
