
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Terminal,
  Code,
  MapPin,
  Mail,
  Calendar,
  User,
  Shield
} from "lucide-react";

const TerminalInfo = () => {
  return (
    <section className="py-8 xs:py-12 sm:py-20 px-1 xs:px-2 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-lg xs:max-w-xl sm:max-w-4xl">
        <Card className="border-primary/20 bg-card/50 backdrop-blur">
          <CardHeader className="px-3 xs:px-6">
            <CardTitle className="flex items-center gap-3 font-mono text-base xs:text-lg sm:text-xl">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              sudo /usr/bin/ahmed --info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 font-mono text-xs xs:text-sm sm:text-base px-2 xs:px-6">
            {/* User Info Block */}
            <div className="space-y-2 xs:space-y-4">
              <div className="flex items-center gap-2 xs:gap-3 text-xs xs:text-sm">
                <span className="text-primary">$</span>
                <span className="text-muted-foreground">echo $USER_INFO</span>
              </div>
              <div className="pl-3 xs:pl-6 space-y-1 xs:space-y-3 bg-muted/50 p-3 xs:p-4 rounded-lg border border-muted">
                <div className="flex items-center gap-2 xs:gap-3">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-accent">name:</span>
                  <span>Ahmed Al Ahmed</span>
                </div>
                <div className="flex items-center gap-2 xs:gap-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-accent">age:</span>
                  <span>30</span>
                </div>
                <div className="flex items-center gap-2 xs:gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-accent">email:</span>
                  <span>eng.ahmed.d.alahmed@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 xs:gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-accent">location:</span>
                  <span>UAE</span>
                </div>
              </div>
            </div>
            {/* Skills Block */}
            <div className="space-y-2 xs:space-y-4">
              <div className="flex items-center gap-2 xs:gap-3 text-xs xs:text-sm">
                <span className="text-primary">$</span>
                <span className="text-muted-foreground">cat /proc/skills</span>
              </div>
              <div className="pl-3 xs:pl-6 space-y-3  xs:space-y-4 bg-muted/50 p-3 xs:p-4 rounded-lg border border-muted">
                <div>
                  <div className="flex items-center gap-2 mb-1 xs:mb-2">
                    <Code className="w-4 h-4 text-accent" />
                    <span className="text-accent">development_stack:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-3 xs:ml-6">
                    <Badge variant="outline" className="border-primary/50 font-mono">PHP/Laravel</Badge>
                    <Badge variant="outline" className="border-primary/50 font-mono">Node.js</Badge>
                    <Badge variant="outline" className="border-primary/50 font-mono">NestJS</Badge>
                    <Badge variant="outline" className="border-primary/50 font-mono">MySQL</Badge>
                    <Badge variant="outline" className="border-primary/50 font-mono">MongoDB</Badge>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 xs:mb-2">
                    <Shield className="w-4 h-4 text-destructive" />
                    <span className="text-destructive">security_tools:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-3 xs:ml-6">
                    <Badge variant="outline" className="border-destructive/50 font-mono">Burp Suite</Badge>
                    <Badge variant="outline" className="border-destructive/50 font-mono">Metasploit</Badge>
                    <Badge variant="outline" className="border-destructive/50 font-mono">Nmap</Badge>
                    <Badge variant="outline" className="border-destructive/50 font-mono">Kali Linux</Badge>
                    <Badge variant="outline" className="border-destructive/50 font-mono">OWASP</Badge>
                  </div>
                </div>
              </div>
            </div>
            {/* Certifications */}
            <div className="space-y-2 xs:space-y-4">
              <div className="flex items-center gap-2 xs:gap-3 text-xs xs:text-sm">
                <span className="text-primary">$</span>
                <span className="text-muted-foreground">sudo cat /etc/certifications</span>
              </div>
              <div className="pl-3 xs:pl-6 space-y-1 xs:space-y-2 bg-muted/50 p-3 xs:p-4 rounded-lg border border-muted">
                <div className="flex items-center gap-2 xs:gap-3">
                  <span className="text-destructive">•</span>
                  <span>Certified Bug Bounty Hunter (CBBH) - HackTheBox</span>
                </div>
                <div className="flex items-center gap-2 xs:gap-3">
                  <span className="text-destructive">•</span>
                  <span>Certified Penetration Testing Specialist (CPTS) - HackTheBox</span>
                </div>
              </div>
            </div>
            {/* Experience */}
            <div className="space-y-2 xs:space-y-4">
              <div className="flex items-center gap-2 xs:gap-3 text-xs xs:text-sm">
                <span className="text-primary">$</span>
                <span className="text-muted-foreground">uptime --experience</span>
              </div>
              <div className="pl-3 xs:pl-6 bg-muted/50 p-3 xs:p-4 rounded-lg border border-muted">
                <span className="text-accent">Experience uptime:</span>{" "}
                8+ years in software development
              </div>
            </div>
            {/* Footer Prompt */}
            <div className="pt-3 xs:pt-6 border-t border-muted">
              <div className="text-xs xs:text-sm text-muted-foreground">
                <span className="text-primary">root@ahmed:~#</span>{" "}
                Ready to secure your digital world
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TerminalInfo;
