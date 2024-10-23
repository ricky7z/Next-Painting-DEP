import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-background">
      <div className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            <Palette className="h-4 w-4 mr-2" /> Welcome to My Art Studio
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Unique and Custom Paintings
            <span className="text-primary">.</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            I create vibrant, original artworks that speak to the soul. Whether you're looking for a piece to transform your space or a custom design that captures your vision, you'll find it here.
          </p>
          <Button size="lg" className="h-12 px-8">
            Explore My Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}