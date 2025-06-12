
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  type: 'development' | 'security';
}

const experiences: ExperienceItem[] = [
  {
    company: "TechCorp Solutions",
    position: "Senior Backend Engineer & Security Lead",
    duration: "2022 - Present",
    description: "Leading backend development teams and conducting security assessments for enterprise applications.",
    technologies: ["PHP/Laravel", "Node.js", "AWS", "Docker", "PostgreSQL"],
    type: "development"
  },
  {
    company: "SecureIT Consulting",
    position: "Penetration Tester",
    duration: "2021 - 2022",
    description: "Performed comprehensive security assessments and vulnerability testing for various clients.",
    technologies: ["Burp Suite", "Metasploit", "Nmap", "OWASP", "Kali Linux"],
    type: "security"
  },
  {
    company: "DevFlow Inc",
    position: "Full Stack Developer",
    duration: "2019 - 2021",
    description: "Developed and maintained scalable web applications using modern technologies.",
    technologies: ["NestJS", "MongoDB", "React", "Docker", "GitLab CI"],
    type: "development"
  },
  {
    company: "StartupHub",
    position: "Backend Developer",
    duration: "2017 - 2019",
    description: "Built RESTful APIs and database architectures for growing startup ecosystem.",
    technologies: ["PHP/Laravel", "MySQL", "Redis", "AWS EC2", "Git"],
    type: "development"
  },
  {
    company: "WebSolutions Ltd",
    position: "Junior Developer",
    duration: "2016 - 2017",
    description: "Started career developing web applications and learning security best practices.",
    technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS", "Git"],
    type: "development"
  }
];

const WorkExperience = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">
            Career progression through development and security roles
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full border-4 border-primary/20 flex-shrink-0">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <Card className={`flex-1 ${
                  exp.type === 'security' 
                    ? 'border-destructive/20 hover:border-destructive/40' 
                    : 'border-primary/20 hover:border-primary/40'
                } transition-colors`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{exp.position}</CardTitle>
                        <p className="text-lg font-medium text-primary">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant={exp.type === 'security' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
