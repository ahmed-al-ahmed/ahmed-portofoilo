
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhoamiHeader = () => {
  return (
    <section className="py-14 px-2 sm:py-20 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 sm:space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary border border-primary/20">
            <Terminal className="w-4 h-4" />
            <span className="text-sm font-medium">$ whoami</span>
          </div>
          <h1 className="text-3xl xs:text-4xl md:text-7xl font-bold bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent break-words">
            Ahmed Al Ahmed
          </h1>
          <p className="text-md xs:text-lg md:text-2xl text-muted-foreground max-w-xl sm:max-w-3xl mx-auto">
            Backend Engineer | Penetration Tester | Security Researcher
          </p>
          <Link to="/">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary/10 font-mono mt-4"
            >
              ← cd ~/portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoamiHeader;
