
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, ExternalLink, CheckCircle } from "lucide-react";

type BadgeVariant = "secondary" | "default" | "destructive" | "outline";

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
  }
];

const getDifficultyColor = (difficulty: string): BadgeVariant => {
  return 'secondary';
};

export const PlatformAchievements = () => {
  return (
    <>
      {platformAchievements.map((platform, index) => (
        <Card key={index} className="border-destructive/20 hover:border-destructive/40 transition-colors">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="w-8 h-8 text-destructive" />
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
                  <div className="text-2xl font-bold text-destructive">{value}</div>
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
    </>
  );
};
