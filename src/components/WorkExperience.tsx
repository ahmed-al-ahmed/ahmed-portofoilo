import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, ChevronRight, MapPin } from "lucide-react";
interface Role {
  position: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
}
interface ExperienceItem {
  company: string;
  roles: Role[];
  type: 'development' | 'security';
}
const experiences: ExperienceItem[] = [{
  company: "Baanx Group Ltd",
  roles: [{
    position: "Software Engineer",
    duration: "2023 - Present",
    location: "UK/London - Remotely",
    description: "Working on fintech solutions and blockchain technologies.",
    technologies: ["Blockchain", "Node.js", "TypeScript", "AWS", "Docker"]
  }],
  type: "development"
}, {
  company: "Freelance Software Engineer",
  roles: [{
    position: "Application Security Engineer",
    duration: "2023 - Present",
    location: "Remotely",
    description: "Application Security Engineer focusing on OWASP TOP 10, networking, AWS, and penetration testing.",
    technologies: ["OWASP TOP 10", "Networking", "AWS", "Penetration Testing"]
  }, {
    position: "Software Developer",
    duration: "2021 - 2023",
    location: "Remotely",
    description: "Backend development using modern technologies and microservices architecture.",
    technologies: ["Node.js", "Laravel", "Docker", "PostgreSQL", "Microservices", "AWS"]
  }],
  type: "security"
}, {
  company: "Deemples",
  roles: [{
    position: "Software Engineer | Back-end Developer",
    duration: "2020 - 2021",
    location: "Malaysia - Remotely",
    description: "Backend development using PHP Laravel framework with cloud technologies and databases.",
    technologies: ["PHP 7.4", "Laravel", "MySQL", "AWS", "Docker", "MongoDB", "Firebase"]
  }],
  type: "development"
}, {
  company: "SCIT Company",
  roles: [{
    position: "Software Engineer | Full Stack Developer",
    duration: "2016 - 2020",
    location: "Syria - Remotely",
    description: "Full-stack development using PHP Laravel framework with mobile and web technologies.",
    technologies: ["PHP 5/7.x", "Laravel", "Firebase", "Android/Java", "MySQL", "WebSocket", "Linux", "Server Hosting", "CPanel"]
  }],
  type: "development"
}, {
  company: "Freelance Software Engineer",
  roles: [{
    position: "Software Engineer",
    duration: "2016 - 2020",
    location: "Syria - Remotely",
    description: "Freelance development building various applications and websites using desktop and web technologies.",
    technologies: ["Java Swing GUI", "PHP 5.x", "CSS", "JavaScript", "jQuery", "HTML", "Bootstrap"]
  }],
  type: "development"
}];
const WorkExperience = () => {
  return <section className="py-20 px-6">
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
            {experiences.map((exp, index) => <div key={index} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full border-4 border-primary/20 flex-shrink-0">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <Card className={`flex-1 ${exp.type === 'security' ? 'border-destructive/20 hover:border-destructive/40' : 'border-primary/20 hover:border-primary/40'} transition-colors`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary font-normal">{exp.company}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {exp.roles.map((role, roleIndex) => <div key={roleIndex} className={`${roleIndex > 0 ? 'pt-6 border-t border-muted' : ''}`}>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                            <div className="flex items-center gap-2">
                              {roleIndex > 0 && <ChevronRight className="w-4 h-4 text-primary" />}
                              <h3 className="text-lg font-semibold">{role.position}</h3>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">{role.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-3">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{role.location}</span>
                          </div>
                          <p className="text-muted-foreground mb-4">{role.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {role.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="outline" className={`text-xs ${exp.type === 'security' ? 'border-destructive/50' : 'border-primary/50'}`}>
                                {tech}
                              </Badge>)}
                          </div>
                        </div>)}
                    </div>
                  </CardContent>
                </Card>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default WorkExperience;