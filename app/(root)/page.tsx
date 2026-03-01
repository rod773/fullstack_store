import { Hero } from "@/components/Hero";
import { TeamSection } from "@/components/TeamSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <TeamSection />
    </div>
  );
}
