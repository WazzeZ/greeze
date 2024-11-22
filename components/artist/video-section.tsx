"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Latest Music Video",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Live at Madison Square Garden",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Behind the Scenes",
  },
];

export function VideoSection() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Videos</h2>
        <Button variant="outline">View All Videos</Button>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {videos.map((video, index) => (
            <CarouselItem key={index}>
              <div className="aspect-video rounded-lg overflow-hidden">
                <LiteYouTubeEmbed
                  id={video.id}
                  title={video.title}
                  poster="maxresdefault"
                />
              </div>
              <h3 className="font-semibold mt-3">{video.title}</h3>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
}