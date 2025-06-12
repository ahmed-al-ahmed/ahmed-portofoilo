
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin,
  ArrowLeft,
  Twitter
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project or security assessment? Let's connect and explore how I can help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">eng.ahmed.d.alahmed@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">UAE and available to work remotely</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-medium mb-3">Connect with me:</p>
                  <div className="flex gap-3">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/10">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/engahmedalahmed/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/10">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </a>
                    <a href="https://x.com/ahmed_d_alahmed" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/10">
                        <Twitter className="w-4 h-4 mr-2" />
                        X
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="border-destructive/20 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <Mail className="w-6 h-6 text-destructive" />
                  </div>
                  Services Available
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Backend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">API Development</Badge>
                    <Badge variant="secondary">Database Design</Badge>
                    <Badge variant="secondary">System Architecture</Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Security Services</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="destructive">Penetration Testing</Badge>
                    <Badge variant="destructive">Security Audits</Badge>
                    <Badge variant="destructive">Vulnerability Assessment</Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">DevOps & Cloud</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">AWS Solutions</Badge>
                    <Badge variant="outline">Docker Deployment</Badge>
                    <Badge variant="outline">CI/CD Setup</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you need robust backend development or comprehensive security testing, I'm here to help.
          </p>
          
          <a href="mailto:eng.ahmed.d.alahmed@gmail.com">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
