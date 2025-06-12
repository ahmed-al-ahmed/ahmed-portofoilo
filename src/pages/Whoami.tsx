
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Terminal, 
  Code, 
  MapPin, 
  Mail, 
  Calendar,
  User,
  Shield,
  Zap,
  Database,
  Server
} from "lucide-react";
import { Link } from "react-router-dom";

const Whoami = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary border border-primary/20">
              <Terminal className="w-4 h-4" />
              <span className="text-sm font-medium font-mono">$ whoami</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent font-mono">
              Ahmed Al Ahmed
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-mono">
              Backend Engineer | Penetration Tester | Security Researcher
            </p>
            
            <Link to="/">
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 font-mono">
                ← cd ~/portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Terminal-style Info */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-mono">
                <Terminal className="w-6 h-6 text-primary" />
                /usr/bin/ahmed --info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 font-mono">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground">echo $USER_INFO</span>
                </div>
                
                <div className="pl-6 space-y-3 bg-muted/50 p-4 rounded-lg border border-muted">
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-accent">name:</span>
                    <span>Ahmed Al Ahmed</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-accent">age:</span>
                    <span>30</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-accent">email:</span>
                    <span>eng.ahmed.d.alahmed@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-accent">location:</span>
                    <span>UAE</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground">cat /proc/skills</span>
                </div>
                
                <div className="pl-6 space-y-4 bg-muted/50 p-4 rounded-lg border border-muted">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-accent" />
                      <span className="text-accent">development_stack:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-6">
                      <Badge variant="outline" className="border-primary/50 font-mono">PHP/Laravel</Badge>
                      <Badge variant="outline" className="border-primary/50 font-mono">Node.js</Badge>
                      <Badge variant="outline" className="border-primary/50 font-mono">NestJS</Badge>
                      <Badge variant="outline" className="border-primary/50 font-mono">MySQL</Badge>
                      <Badge variant="outline" className="border-primary/50 font-mono">MongoDB</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-destructive" />
                      <span className="text-destructive">security_tools:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-6">
                      <Badge variant="outline" className="border-destructive/50 font-mono">Burp Suite</Badge>
                      <Badge variant="outline" className="border-destructive/50 font-mono">Metasploit</Badge>
                      <Badge variant="outline" className="border-destructive/50 font-mono">Nmap</Badge>
                      <Badge variant="outline" className="border-destructive/50 font-mono">Kali Linux</Badge>
                      <Badge variant="outline" className="border-destructive/50 font-mono">OWASP</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground">sudo cat /etc/certifications</span>
                </div>
                
                <div className="pl-6 space-y-2 bg-muted/50 p-4 rounded-lg border border-muted">
                  <div className="flex items-center gap-3">
                    <span className="text-destructive">•</span>
                    <span>Certified Bug Bounty Hunter (CBBH) - HackTheBox</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-destructive">•</span>
                    <span>Certified Penetration Testing Specialist (CPTS) - HackTheBox</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground">uptime --experience</span>
                </div>
                
                <div className="pl-6 bg-muted/50 p-4 rounded-lg border border-muted">
                  <span className="text-accent">Experience uptime:</span> 8+ years in software development
                </div>
              </div>
              
              <div className="pt-6 border-t border-muted">
                <div className="text-sm text-muted-foreground">
                  <span className="text-primary">root@ahmed:~#</span> Ready to secure your digital world
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Status Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-mono">System Status</h2>
            <p className="text-xl text-muted-foreground font-mono">
              Current operational metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Server className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 font-mono">8+</h3>
                <p className="text-muted-foreground font-mono">Years Online</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-destructive/20 hover:border-destructive/40 transition-colors">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold mb-2 font-mono">100%</h3>
                <p className="text-muted-foreground font-mono">Security Focused</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-accent/20 hover:border-accent/40 transition-colors">
              <CardContent className="pt-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2 font-mono">24/7</h3>
                <p className="text-muted-foreground font-mono">Available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">ahmed@security:~$</span> exit
            </div>
            <p className="text-xl text-muted-foreground font-mono">
              Connection to ahmed.dev closed.
            </p>
            
            <div className="flex justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-mono">
                  <Terminal className="w-4 h-4 mr-2" />
                  ssh ahmed@contact
                </Button>
              </Link>
              <Link to="/achievements">
                <Button variant="outline" size="lg" className="border-destructive/20 hover:bg-destructive/10 font-mono">
                  <Shield className="w-4 h-4 mr-2" />
                  cat achievements.log
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whoami;
