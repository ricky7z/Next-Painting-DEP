import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { GalleryFilters } from "@/components/gallery/gallery-filters";

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Explore the Gallery
            </h1>
            <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
              Discover a collection of unique artworks that blend creativity with emotion. Each piece tells its own story.
            </p>
          </div>
          <GalleryFilters />
          <GalleryGrid />
        </div>
      </div>
    </main>
  );
}