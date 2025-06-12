
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
import { PracticalAchievements } from "@/components/achievements/PracticalAchievements";
import { PlatformAchievements } from "@/components/achievements/PlatformAchievements";

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

            <TabsContent value="practical" className="space-y-8">
              <PracticalAchievements />
            </TabsContent>

            <TabsContent value="platforms" className="space-y-12">
              <PlatformAchievements />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
