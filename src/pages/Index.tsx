
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Shield, 
  Award, 
  Mail, 
  Github, 
  Linkedin, 
  Server, 
  Database, 
  Cloud,
  Lock,
  Target,
  Zap,
  User,
  Twitter
} from "lucide-react";
import { Link } from "react-router-dom";
import TypingEffect from "@/components/TypingEffect";
import WorkExperience from "@/components/WorkExperience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary border border-primary/20">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Security • Development • Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
              Senior Backend Engineer
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto min-h-[2rem]">
              <TypingEffect 
                text="Penetration Tester with 8+ Years of Software Development Experience"
                speed={50}
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </Link>
              <Link to="/achievements">
                <Button variant="outline" size="lg" className="border-destructive/20 hover:bg-destructive/10">
                  <Award className="w-4 h-4 mr-2" />
                  View Achievements
                </Button>
              </Link>
              <Link to="/whoami">
                <Button variant="outline" size="lg" className="border-accent/20 hover:bg-accent/10">
                  <User className="w-4 h-4 mr-2" />
                  whoami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Full-stack development and cybersecurity skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Development Skills */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:bg-card/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  Software Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Server className="w-4 h-4 text-primary" />
                    <span className="font-medium">Backend Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">PHP/Laravel</Badge>
                    <Badge variant="secondary" className="text-xs">Node.js</Badge>
                    <Badge variant="secondary" className="text-xs">NestJS</Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary" />
                    <span className="font-medium">Databases</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">MySQL</Badge>
                    <Badge variant="secondary" className="text-xs">MongoDB</Badge>
                    <Badge variant="secondary" className="text-xs">PostgreSQL</Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-primary" />
                    <span className="font-medium">DevOps & Cloud</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">AWS</Badge>
                    <Badge variant="secondary" className="text-xs">Docker</Badge>
                    <Badge variant="secondary" className="text-xs">Git/GitHub</Badge>
                    <Badge variant="secondary" className="text-xs">GitLab</Badge>
                    <Badge variant="secondary" className="text-xs">BitBucket</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Skills */}
            <Card className="border-destructive/20 bg-card/50 backdrop-blur hover:bg-card/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <Shield className="w-6 h-6 text-destructive" />
                  </div>
                  Cybersecurity & Penetration Testing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-destructive" />
                    <span className="font-medium">Certifications</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">CBBH</Badge>
                    <Badge variant="secondary" className="text-xs">HackTheBox</Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-destructive" />
                    <span className="font-medium">Platforms</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">PortSwigger Academy</Badge>
                    <Badge variant="secondary" className="text-xs">CTF Competitions</Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-destructive" />
                    <span className="font-medium">Specializations</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Web App Security</Badge>
                    <Badge variant="secondary" className="text-xs">Network Pentesting</Badge>
                    <Badge variant="secondary" className="text-xs">Vulnerability Assessment</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience Highlights</h2>
            <p className="text-xl text-muted-foreground">
              8+ years of software development and cybersecurity expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">8+</h3>
                <p className="text-muted-foreground">Years of Development Experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-destructive/20 hover:border-destructive/40 transition-colors">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold mb-2">2</h3>
                <p className="text-muted-foreground">Security Certifications</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-destructive/20 hover:border-destructive/40 transition-colors">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-4">
                  <Award className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold mb-2">CTF</h3>
                <p className="text-muted-foreground">Capture The Flag Competitor</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      {/* <WorkExperience /> */}

      {/* Contact Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to discuss your next project or security assessment?
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/ahmed-al-ahmed" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg" className="hover:bg-primary/10">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/engahmedalahmed/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg" className="hover:bg-primary/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://x.com/ahmed_d_alahmed" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="lg" className="hover:bg-primary/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
