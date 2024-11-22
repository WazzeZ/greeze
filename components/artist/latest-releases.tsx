"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";

const releases = [
  {
    title: "Neon Dreams",
    type: "Album",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074",
    releaseDate: "2024",
  },
  {
    title: "Midnight Hour",
    type: "Single",
    cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=2070",
    releaseDate: "2023",
  },
  {
    title: "Electric Youth",
    type: "EP",
    cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2072",
    releaseDate: "2023",
  },
];

export function LatestReleases() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Latest Releases</h2>
        <Button variant="outline">View All</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {releases.map((release, index) => (
          <Card key={index} className="group overflow-hidden">
            <div className="relative">
              <AspectRatio ratio={1}>
                <Image
                  src={release.cover}
                  alt={release.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button size="icon" className="w-12 h-12">
                  <Play className="w-6 h-6" />
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{release.title}</h3>
              <p className="text-sm text-muted-foreground">
                {release.type} • {release.releaseDate}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}