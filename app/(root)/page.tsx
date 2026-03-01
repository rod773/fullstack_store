import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { TeamSection } from "@/components/TeamSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <IntegrationsSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
}
