import AiAssistantFab from "@/components/landing/AiAssistantFab";
import FeaturedGuides from "@/components/landing/FeaturedGuides";
import Hero from "@/components/landing/Hero";
import Philosophy from "@/components/landing/Philosophy";
import Pillars from "@/components/landing/Pillars";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Pillars />
      <FeaturedGuides />
      <AiAssistantFab />
    </>
  );
}