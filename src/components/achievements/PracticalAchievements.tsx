
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

const practicalAchievements = [
  {
    title: "Certified Bug Bounty Hunter (CBBH)",
    issuer: "HackTheBox",
    date: "2023",
    description: "Comprehensive certification covering web application security testing and bug bounty methodologies.",
    skills: ["Web App Security", "OWASP Top 10", "Bug Bounty", "Vulnerability Assessment"]
  },
  {
    title: "Certified Penetration Testing Specialist (CPTS)",
    issuer: "HackTheBox",
    date: "2022",
    description: "Advanced penetration testing certification covering network and web application security.",
    skills: ["Network Security", "Web App Pentesting", "Post Exploitation", "Reporting"]
  },
  {
    title: "Enterprise Security Assessment",
    issuer: "SecureIT Consulting",
    date: "2022",
    description: "Led comprehensive security assessment for Fortune 500 company, identifying critical vulnerabilities.",
    skills: ["Enterprise Security", "Risk Assessment", "Compliance", "Security Architecture"]
  },
  {
    title: "CTF Competition Winner",
    issuer: "Various Platforms",
    date: "2021-2023",
    description: "Multiple top 10 finishes in Capture The Flag competitions focusing on web security and cryptography.",
    skills: ["CTF", "Cryptography", "Reverse Engineering", "Web Exploitation"]
  }
];

export const PracticalAchievements = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {practicalAchievements.map((achievement, index) => (
        <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-destructive/10 rounded-lg">
                <Award className="w-6 h-6 text-destructive" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl mb-2">{achievement.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-medium">{achievement.issuer}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {achievement.date}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{achievement.description}</p>
            <div className="flex flex-wrap gap-2">
              {achievement.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="outline" className="text-xs border-destructive/50">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
