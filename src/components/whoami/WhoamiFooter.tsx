
import { Button } from "@/components/ui/button";
import { Terminal, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const WhoamiFooter = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">ahmed@security:~$</span> exit
          </div>
          <p className="text-xl text-muted-foreground font-mono">
            Connection to ahmed.dev closed.
          </p>
          
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-mono">
                <Terminal className="w-4 h-4 mr-2" />
                ssh ahmed@contact
              </Button>
            </Link>
            <Link to="/achievements">
              <Button variant="outline" size="lg" className="border-destructive/20 hover:bg-destructive/10 font-mono">
                <Shield className="w-4 h-4 mr-2" />
                cat achievements.log
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoamiFooter;
