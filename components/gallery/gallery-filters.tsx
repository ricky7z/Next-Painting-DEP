"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = [
  { id: "all", label: "All Works" },
  { id: "abstract", label: "Abstract" },
  { id: "portraits", label: "Portraits" },
  { id: "landscapes", label: "Landscapes" },
  { id: "modern", label: "Modern" },
];

export function GalleryFilters() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="outline"
          size="sm"
          onClick={() => setActiveFilter(category.id)}
          className={cn(
            "rounded-full",
            activeFilter === category.id && "bg-primary text-primary-foreground"
          )}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}