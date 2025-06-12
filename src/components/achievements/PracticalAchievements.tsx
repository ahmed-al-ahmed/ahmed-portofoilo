
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Clock, GraduationCap } from "lucide-react";

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
  },
  {
    title: "Advanced NodeJS",
    issuer: "LinkedIn Learning",
    date: "April 2022",
    description: "Advanced Node.js concepts including performance optimization, clustering, and enterprise-level application development.",
    skills: ["Node.js", "Performance Optimization", "Clustering", "Enterprise Development"],
    type: "learning",
    certificateUrl: "https://www.linkedin.com/learning/certificates/98c707d111adb725b809fcdfc0b27746dab28e58413e3163da80d6acc8e7678e"
  },
  {
    title: "Advanced Node.js: Scaling Applications",
    issuer: "LinkedIn Learning",
    date: "April 2022",
    description: "Deep dive into scaling Node.js applications for high-traffic environments and enterprise use cases.",
    skills: ["Node.js", "Application Scaling", "Load Balancing", "High Traffic"],
    type: "learning",
    certificateUrl: "https://www.linkedin.com/learning/certificates/2cfc630dbc713332f6f57d7bd04c29f88587d2bdc2d6d432f43ec9a72e7f5639"
  },
  {
    title: "DevOps with AWS",
    issuer: "LinkedIn Learning",
    date: "April 2022",
    description: "Comprehensive DevOps practices using AWS cloud services including CI/CD pipelines and infrastructure automation.",
    skills: ["AWS", "DevOps", "CI/CD", "Infrastructure Automation", "Cloud Services"],
    type: "learning",
    certificateUrl: "https://www.linkedin.com/learning/certificates/fe06296b495599bde21924c60fdc72488241beb6091d3905f917d883838ad29b"
  },
  {
    title: "Learning Jenkins",
    issuer: "LinkedIn Learning",
    date: "April 2022",
    description: "Mastering Jenkins for continuous integration and continuous deployment in modern software development workflows.",
    skills: ["Jenkins", "CI/CD", "Automation", "Build Pipelines", "DevOps"],
    type: "learning",
    certificateUrl: "https://www.linkedin.com/learning/certificates/5b83c9a097c251589fbf57154efb83cae9076a4678c3aafa8f91c69c3ad3d070"
  },
  {
    title: "Secure Coding",
    issuer: "Kyte Learning",
    date: "April 2022",
    description: "Comprehensive secure coding practices and vulnerability prevention techniques for software development.",
    skills: ["Secure Coding", "Vulnerability Prevention", "Code Security", "Best Practices"],
    type: "learning",
    certificateUrl: "https://drive.google.com/file/d/1szNwmtRBK1q6agyLuv0yEdirOlQwv7S3/view"
  },
  {
    title: "Secure Coding in Java",
    issuer: "LinkedIn Learning",
    date: "April 2022",
    description: "Java-specific secure coding practices including common vulnerabilities and mitigation strategies.",
    skills: ["Java", "Secure Coding", "Vulnerability Mitigation", "Application Security"],
    type: "learning",
    certificateUrl: "https://www.linkedin.com/learning/certificates/6c71c99ac31cf6ed80e9d4127388f6fa413add92d1036b2950d6d77c2bafb429"
  }
];

export const PracticalAchievements = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {practicalAchievements.map((achievement, index) => (
        <Card key={index} className={`${achievement.isPending ? 'border-muted/50 opacity-80' : achievement.type === 'learning' ? 'border-blue-200 hover:border-blue-400' : 'border-destructive/20 hover:border-destructive/40'} transition-colors`}>
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${achievement.isPending ? 'bg-muted/20' : achievement.type === 'learning' ? 'bg-blue-50' : 'bg-destructive/10'}`}>
                {achievement.isPending ? (
                  <Clock className="w-6 h-6 text-muted-foreground" />
                ) : achievement.type === 'learning' ? (
                  <GraduationCap className="w-6 h-6 text-blue-600" />
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
                <Badge key={skillIndex} variant="outline" className={`text-xs ${achievement.isPending ? 'border-muted/50 text-muted-foreground' : achievement.type === 'learning' ? 'border-blue-300' : 'border-destructive/50'}`}>
                  {skill}
                </Badge>
              ))}
              {achievement.skills.length > 8 && (
                <Badge variant="outline" className={`text-xs ${achievement.isPending ? 'border-muted/50 text-muted-foreground' : achievement.type === 'learning' ? 'border-blue-300' : 'border-destructive/50'}`}>
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
