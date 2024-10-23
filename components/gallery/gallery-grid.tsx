"use client";

import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    description: "A vibrant exploration of color and movement",
    category: "abstract",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1000",
    price: "$1,200",
  },
  {
    id: 2,
    title: "Urban Dreams",
    description: "Contemporary cityscape with modern elements",
    category: "modern",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1000",
    price: "$950",
  },
  {
    id: 3,
    title: "Nature's Poetry",
    description: "Organic forms meet artistic expression",
    category: "landscapes",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000",
    price: "$1,500",
  },
  {
    id: 4,
    title: "Ethereal Portrait",
    description: "A contemporary take on classical portraiture",
    category: "portraits",
    image: "https://images.unsplash.com/photo-1578301978018-3199d0cc8839?q=80&w=1000",
    price: "$2,200",
  },
];

export function GalleryGrid() {
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(
    null
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((artwork) => (
          <Card
            key={artwork.id}
            className="group cursor-pointer overflow-hidden"
            onClick={() => setSelectedArtwork(artwork)}
          >
            <div className="relative aspect-square">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <h3 className="font-bold text-lg">{artwork.title}</h3>
                  <p className="text-sm text-white/80">{artwork.price}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        <DialogContent className="max-w-2xl">
          {selectedArtwork && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedArtwork.title}</DialogTitle>
                <DialogDescription>{selectedArtwork.description}</DialogDescription>
              </DialogHeader>
              <div className="relative aspect-square mt-4">
                <Image
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold">{selectedArtwork.price}</p>
                <Button>Inquire About This Piece</Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}