
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Target, 
  Shield, 
  Trophy,
  ExternalLink,
  Calendar,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

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

const platformAchievements = [
  {
    platform: "HackTheBox",
    achievements: [
      { name: "Pro Hacker", description: "Achieved Pro Hacker rank", difficulty: "Expert" },
      { name: "Active Directory", description: "Completed AD attack path challenges", difficulty: "Hard" },
      { name: "Web Exploitation", description: "Master of web application vulnerabilities", difficulty: "Hard" },
      { name: "Network Penetration", description: "Advanced network attack techniques", difficulty: "Medium" }
    ],
    stats: {
      machinesOwned: 45,
      challenges: 28,
      rank: "Pro Hacker"
    }
  },
  {
    platform: "PortSwigger Web Security Academy",
    achievements: [
      { name: "SQL Injection", description: "All SQL injection labs completed", difficulty: "Expert" },
      { name: "Cross-Site Scripting", description: "XSS vulnerability expert", difficulty: "Expert" },
      { name: "Authentication", description: "Authentication bypass specialist", difficulty: "Hard" },
      { name: "Access Control", description: "Privilege escalation master", difficulty: "Hard" }
    ],
    stats: {
      labsCompleted: 156,
      certificates: 8,
      rank: "Practitioner"
    }
  },
  {
    platform: "TryHackMe",
    achievements: [
      { name: "OWASP Top 10", description: "Mastered all OWASP vulnerabilities", difficulty: "Medium" },
      { name: "Network Security", description: "Advanced network security techniques", difficulty: "Hard" },
      { name: "Privilege Escalation", description: "Linux & Windows privesc expert", difficulty: "Hard" },
      { name: "Cryptography", description: "Cryptographic attack methods", difficulty: "Medium" }
    ],
    stats: {
      roomsCompleted: 89,
      streak: 45,
      rank: "Top 5%"
    }
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'expert': return 'destructive';
    case 'hard': return 'default';
    case 'medium': return 'secondary';
    default: return 'outline';
  }
};

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full text-destructive border border-destructive/20">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Security Achievements</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-destructive to-accent bg-clip-text text-transparent">
              Security Achievements
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Certifications, practical experience, and platform accomplishments in cybersecurity
            </p>
            
            <Link to="/">
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
                ← Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievement Tabs */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="practical" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16">
              <TabsTrigger value="practical" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Practical Achievements
              </TabsTrigger>
              <TabsTrigger value="platforms" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Platform Achievements
              </TabsTrigger>
            </TabsList>

            {/* Practical Achievements */}
            <TabsContent value="practical" className="space-y-8">
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
            </TabsContent>

            {/* Platform Achievements */}
            <TabsContent value="platforms" className="space-y-12">
              {platformAchievements.map((platform, index) => (
                <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <Shield className="w-8 h-8 text-primary" />
                        {platform.platform}
                      </CardTitle>
                      <Button variant="outline" size="sm" className="gap-2">
                        View Profile <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-muted/50 rounded-lg">
                      {Object.entries(platform.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-2xl font-bold text-primary">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {platform.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-muted">
                          <CheckCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-medium">{achievement.name}</h4>
                              <Badge variant={getDifficultyColor(achievement.difficulty)} className="text-xs">
                                {achievement.difficulty}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
