import { HeroSection } from "@/components/sections/hero";
import { FeaturedWorks } from "@/components/sections/featured-works";
import { CustomArtSection } from "@/components/sections/custom-art";

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <FeaturedWorks />
      <CustomArtSection />
    </main>
  );
}