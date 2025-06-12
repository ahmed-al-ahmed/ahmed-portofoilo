
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield,
  Zap,
  Server
} from "lucide-react";

const SystemStatus = () => {
  return (
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
  );
};

export default SystemStatus;
