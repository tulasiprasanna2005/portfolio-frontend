
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface SkillGroup {
  category: string;
  skills: string[];
}

const SkillsSection = () => {
  const skillGroups: SkillGroup[] = [
    {
      category: "Programming Languages",
      skills: ["C", "Python", "JavaScript"]
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "ExpressJS"]
    },
    {
      category: "Database",
      skills: ["SQL", "SQLite"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code",]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">{group.category}</h3>
                <div className="space-y-3">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-portfolio-accent" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "C", "Python", "HTML", "CSS", "JavaScript", 
              "ReactJS", "NodeJS", "ExpressJS","SQL"
            ].map((skill, index) => (
              <div 
                key={index} 
                className="skill-tag opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
