"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomOrdersList } from "./custom-orders-list";
import { GalleryManager } from "./gallery-manager";
import { FeaturedWorksManager } from "./featured-works-manager";

export function AdminTabs() {
  return (
    <Tabs defaultValue="orders" className="space-y-6">
      <TabsList>
        <TabsTrigger value="orders">Custom Orders</TabsTrigger>
        <TabsTrigger value="gallery">Gallery</TabsTrigger>
        <TabsTrigger value="featured">Featured Works</TabsTrigger>
      </TabsList>
      
      <TabsContent value="orders" className="space-y-4">
        <CustomOrdersList />
      </TabsContent>
      
      <TabsContent value="gallery" className="space-y-4">
        <GalleryManager />
      </TabsContent>
      
      <TabsContent value="featured" className="space-y-4">
        <FeaturedWorksManager />
      </TabsContent>
    </Tabs>
  );
}