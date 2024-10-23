import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const featuredWorks = [
  {
    id: 1,
    title: "Abstract Harmony",
    description: "A vibrant exploration of color and movement",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000",
  },
  {
    id: 2,
    title: "Urban Dreams",
    description: "Contemporary cityscape with modern elements",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1000",
  },
  {
    id: 3,
    title: "Nature's Poetry",
    description: "Organic forms meet artistic expression",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000",
  },
];

export function FeaturedWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:gap-16">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Works
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Explore some of my most celebrated pieces that showcase my artistic style and vision.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredWorks.map((work) => (
              <Card key={work.id} className="overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{work.title}</h3>
                  <p className="text-muted-foreground mt-2">{work.description}</p>
                  <Button variant="outline" className="mt-4">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}