
import WhoamiHeader from "@/components/whoami/WhoamiHeader";
import TerminalInfo from "@/components/whoami/TerminalInfo";
import SystemStatus from "@/components/whoami/SystemStatus";
import WhoamiFooter from "@/components/whoami/WhoamiFooter";

const Whoami = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <WhoamiHeader />
      <TerminalInfo />
      <SystemStatus />
      <WhoamiFooter />
    </div>
  );
};

export default Whoami;
