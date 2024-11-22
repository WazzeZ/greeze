"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useFavorites } from "@/hooks/use-favorites";
import { Artist } from "@/types/artist";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ArtistCardProps {
  artist: Artist;
}

export function ArtistCard({ artist }: ArtistCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <Card className="group overflow-hidden">
      <Link href={`/artist/${artist.id}`}>
        <div className="relative">
          <AspectRatio ratio={1} className="overflow-hidden">
            <Image
              src={artist.image}
              alt={artist.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link href={`/artist/${artist.id}`}>
              <h3 className="font-semibold hover:text-primary transition-colors">
                {artist.name}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground">
              {artist.followers.toLocaleString()} followers
            </p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8"
                  onClick={() => toggleFavorite(artist.id)}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isFavorite(artist.id) ? "fill-primary text-primary" : ""
                    }`}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {isFavorite(artist.id) ? "Remove from favorites" : "Add to favorites"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {artist.genres.map((genre) => (
            <Badge key={genre} variant="secondary" className="text-xs">
              {genre}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}