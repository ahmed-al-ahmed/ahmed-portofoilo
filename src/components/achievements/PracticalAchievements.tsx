
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Clock } from "lucide-react";

const practicalAchievements = [
  {
    title: "Certified Bug Bounty Hunter (CBBH)",
    issuer: "HackTheBox",
    date: "2023",
    description: "Comprehensive certification covering web application security testing and bug bounty methodologies with hands-on practical experience.",
    skills: [
      "Attacking APIs", "Attacking CMS", "Attacking Web Services", "Authentication & Authorization Attacks",
      "Blind Server-Side Request Forgery", "Blind SQL Injection", "Bug Bounty Hunting", 
      "Bypassing File Extension Filters", "Bypassing File Upload Restrictions", "Command Injection",
      "Cross-Site Request Forgery", "Cross-Site Scripting", "Data Exfiltration", "File Inclusion",
      "HTTP Verb Tampering", "IDOR", "Information Gathering", "JavaScript Deobfuscation",
      "Manual & Automated Web Exploitation", "Server-Side Request Forgery", "Server-Side Template Injection",
      "Session Hijacking", "SQL Injection", "Stored Cross-Site Scripting", "Web Fuzzing",
      "Web Proxy Usage", "XML External Entity Injection"
    ],
    credlyUrl: "https://www.credly.com/earner/earned/badge/4edebad2-577b-4147-ad7b-aa809be1a592"
  },
  {
    title: "Certified Penetration Testing Specialist (CPTS)",
    issuer: "HackTheBox",
    date: "In Progress",
    description: "Advanced penetration testing certification covering network and web application security with comprehensive methodology training.",
    skills: ["Network Security", "Web App Pentesting", "Post Exploitation", "Active Directory", "Reporting", "OSINT"],
    isPending: true
  },
  {
    title: "Certified AppSec Practitioner (CAP)",
    issuer: "The SecOps Group",
    date: "2023",
    description: "Application security certification focusing on secure code review, vulnerability assessment, and security testing methodologies.",
    skills: ["Application Security", "Secure Code Review", "SAST/DAST", "Security Testing", "DevSecOps"],
    certificateUrl: "https://drive.google.com/file/d/11nfaxZwPbrMihubAQD6a55MwVlYrI1WQ/view"
  },
  {
    title: "CTF CyberTalents 2nd Winner",
    issuer: "CyberTalents Platform",
    date: "2021-2023",
    description: "Achieved 2nd place in Capture The Flag competitions focusing on web security, cryptography, and reverse engineering challenges.",
    skills: ["CTF", "Cryptography", "Reverse Engineering", "Web Exploitation", "Binary Exploitation"]
  }
];

export const PracticalAchievements = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {practicalAchievements.map((achievement, index) => (
        <Card key={index} className={`${achievement.isPending ? 'border-muted/50 opacity-80' : 'border-destructive/20 hover:border-destructive/40'} transition-colors`}>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${achievement.isPending ? 'bg-muted/20' : 'bg-destructive/10'}`}>
                {achievement.isPending ? (
                  <Clock className="w-6 h-6 text-muted-foreground" />
                ) : (
                  <Award className="w-6 h-6 text-destructive" />
                )}
              </div>
              <div className="flex-1">
                <CardTitle className={`text-xl mb-2 ${achievement.isPending ? 'text-muted-foreground' : ''}`}>
                  {achievement.title}
                  {achievement.isPending && (
                    <Badge variant="outline" className="ml-2 text-xs border-muted/50">
                      In Progress
                    </Badge>
                  )}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="font-medium">{achievement.issuer}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {achievement.date}
                  </div>
                </div>
                <div className="flex gap-2">
                  {achievement.credlyUrl && (
                    <a href={achievement.credlyUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="text-xs gap-1">
                        <ExternalLink className="w-3 h-3" />
                        Credly Badge
                      </Button>
                    </a>
                  )}
                  {achievement.certificateUrl && (
                    <a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="text-xs gap-1">
                        <ExternalLink className="w-3 h-3" />
                        Certificate
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className={`mb-4 ${achievement.isPending ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
              {achievement.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {achievement.skills.slice(0, 8).map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="outline" className={`text-xs ${achievement.isPending ? 'border-muted/50 text-muted-foreground' : 'border-destructive/50'}`}>
                  {skill}
                </Badge>
              ))}
              {achievement.skills.length > 8 && (
                <Badge variant="outline" className={`text-xs ${achievement.isPending ? 'border-muted/50 text-muted-foreground' : 'border-destructive/50'}`}>
                  +{achievement.skills.length - 8} more
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
