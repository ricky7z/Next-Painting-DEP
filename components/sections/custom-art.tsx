import { Button } from "@/components/ui/button";
import { Paintbrush } from "lucide-react";

export function CustomArtSection() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="rounded-full bg-primary/10 p-3">
            <Paintbrush className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Custom Artwork
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
            Looking for something more personalized? Check out our custom order page to design a piece uniquely tailored for you.
          </p>
          <Button size="lg" className="h-12 px-8">
            Start Your Custom Order
          </Button>
        </div>
      </div>
    </section>
  );
}