"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, ArrowDown, Pencil, Trash2 } from "lucide-react";

export function FeaturedWorksManager() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Featured Works</h2>
        <Button>Add Featured Work</Button>
      </div>

      <div className="space-y-4">
        {/* Example featured work item */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Abstract Harmony</CardTitle>
                <CardDescription>Featured on Home Page</CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button size="icon" variant="outline">
                  <ArrowUp className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1541961017774-22349e4a1262"
                  alt="Abstract Harmony"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    defaultValue="A vibrant exploration of color and movement"
                    className="h-24"
                  />
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Pencil className="h-4 w-4 mr-2" /> Edit
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash2 className="h-4 w-4 mr-2" /> Remove
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}