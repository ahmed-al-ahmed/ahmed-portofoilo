
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Zap,
  Server
} from "lucide-react";

const SystemStatus = () => {
  return (
    <section className="py-10 xs:py-14 sm:py-20 px-1 xs:px-2 sm:px-6">
      <div className="container mx-auto max-w-lg xs:max-w-xl sm:max-w-6xl">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-4xl font-bold mb-2 xs:mb-4 font-mono">System Status</h2>
          <p className="text-md xs:text-xl text-muted-foreground font-mono">
            Current operational metrics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xs:gap-8">
          <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="pt-7 xs:pt-8">
              <div className="inline-flex items-center justify-center w-12 h-12 xs:w-16 xs:h-16 bg-primary/10 rounded-full mb-3 xs:mb-4">
                <Server className="w-6 h-6 xs:w-8 xs:h-8 text-primary" />
              </div>
              <h3 className="text-lg xs:text-2xl font-bold mb-1 xs:mb-2 font-mono">8+</h3>
              <p className="text-muted-foreground font-mono text-sm xs:text-base">Years Online</p>
            </CardContent>
          </Card>
          <Card className="text-center border-destructive/20 hover:border-destructive/40 transition-colors">
            <CardContent className="pt-7 xs:pt-8">
              <div className="inline-flex items-center justify-center w-12 h-12 xs:w-16 xs:h-16 bg-destructive/10 rounded-full mb-3 xs:mb-4">
                <Shield className="w-6 h-6 xs:w-8 xs:h-8 text-destructive" />
              </div>
              <h3 className="text-lg xs:text-2xl font-bold mb-1 xs:mb-2 font-mono">100%</h3>
              <p className="text-muted-foreground font-mono text-sm xs:text-base">Security Focused</p>
            </CardContent>
          </Card>
          <Card className="text-center border-destructive/20 hover:border-destructive/40 transition-colors">
            <CardContent className="pt-7 xs:pt-8">
              <div className="inline-flex items-center justify-center w-12 h-12 xs:w-16 xs:h-16 bg-destructive/10 rounded-full mb-3 xs:mb-4">
                <Zap className="w-6 h-6 xs:w-8 xs:h-8 text-destructive" />
              </div>
              <h3 className="text-lg xs:text-2xl font-bold mb-1 xs:mb-2 font-mono">24/7</h3>
              <p className="text-muted-foreground font-mono text-sm xs:text-base">Available</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SystemStatus;
