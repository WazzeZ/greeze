"use client";

import { ArtistCard } from "@/components/discover/artist-card";
import { Button } from "@/components/ui/button";
import { useArtists } from "@/hooks/use-artists";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ArtistGridProps {
  searchQuery: string;
  selectedGenres: string[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function ArtistGrid({
  searchQuery,
  selectedGenres,
  currentPage,
  onPageChange,
}: ArtistGridProps) {
  const { artists, totalPages } = useArtists({
    searchQuery,
    selectedGenres,
    page: currentPage,
  });

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}