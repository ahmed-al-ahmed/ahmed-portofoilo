
import { Button } from "@/components/ui/button";
import { Terminal, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const WhoamiFooter = () => {
  return (
    <section className="py-14 px-2 xs:py-20 xs:px-6 bg-muted/30">
      <div className="container mx-auto max-w-md xs:max-w-2xl sm:max-w-4xl text-center">
        <div className="space-y-4 xs:space-y-6">
          <div className="font-mono text-xs xs:text-sm text-muted-foreground">
            <span className="text-primary">ahmed@security:~$</span> exit
          </div>
          <p className="text-base xs:text-xl text-muted-foreground font-mono">
            Connection to ahmed.dev closed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 xs:gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-mono w-full sm:w-auto">
                <Terminal className="w-4 h-4 mr-2" />
                ssh ahmed@contact
              </Button>
            </Link>
            <Link to="/achievements">
              <Button
                variant="outline"
                size="lg"
                className="border-destructive/20 hover:bg-destructive/10 font-mono w-full sm:w-auto"
              >
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
