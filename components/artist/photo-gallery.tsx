"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gallery, Item } from "react-photoswipe-gallery";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import "photoswipe/dist/photoswipe.css";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070",
    thumbnail: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=500",
    width: 2070,
    height: 1380,
    alt: "Live Performance",
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=500",
    width: 2070,
    height: 1380,
    alt: "Studio Session",
  },
  {
    src: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1974",
    thumbnail: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=500",
    width: 1974,
    height: 1316,
    alt: "Band Photo",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=500",
    width: 2074,
    height: 1383,
    alt: "Concert",
  },
  {
    src: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=2070",
    thumbnail: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=500",
    width: 2070,
    height: 1380,
    alt: "Behind the Scenes",
  },
  {
    src: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2072",
    thumbnail: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=500",
    width: 2072,
    height: 1381,
    alt: "Recording Studio",
  },
];

const ITEMS_PER_PAGE = 6;

export function PhotoGallery() {
  const [visiblePhotos, setVisiblePhotos] = useState(ITEMS_PER_PAGE);

  const loadMore = () => {
    setVisiblePhotos((prev) => Math.min(prev + ITEMS_PER_PAGE, photos.length));
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Photo Gallery</h2>
        <Button variant="outline">View All Photos</Button>
      </div>

      <Gallery>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.slice(0, visiblePhotos).map((photo, index) => (
            <Item
              key={index}
              original={photo.src}
              thumbnail={photo.thumbnail}
              width={photo.width}
              height={photo.height}
            >
              {({ ref, open }) => (
                <div
                  ref={ref as React.RefObject<HTMLDivElement>}
                  onClick={open}
                  className="cursor-pointer"
                >
                  <AspectRatio ratio={3/2} className="bg-muted">
                    <Image
                      src={photo.thumbnail}
                      alt={photo.alt}
                      fill
                      className="rounded-lg object-cover transition-transform hover:scale-105"
                    />
                  </AspectRatio>
                </div>
              )}
            </Item>
          ))}
        </div>
      </Gallery>

      {visiblePhotos < photos.length && (
        <Button
          variant="ghost"
          className="w-full mt-6"
          onClick={loadMore}
        >
          Load More
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      )}
    </Card>
  );
}