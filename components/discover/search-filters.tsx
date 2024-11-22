"use client";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { genres } from "@/data/genres";

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedGenres: string[];
  onGenresChange: (genres: string[]) => void;
}

export function SearchFilters({
  searchQuery,
  onSearchChange,
  selectedGenres,
  onGenresChange,
}: SearchFiltersProps) {
  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      onGenresChange(selectedGenres.filter((g) => g !== genre));
    } else {
      onGenresChange([...selectedGenres, genre]);
    }
  };

  return (
    <div className="space-y-6 mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search artists..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Genres</h3>
          {selectedGenres.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onGenresChange([])}
              className="h-auto p-0 text-muted-foreground hover:text-foreground"
            >
              Clear all
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => {
            const isSelected = selectedGenres.includes(genre);
            return (
              <Badge
                key={genre}
                variant={isSelected ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleGenre(genre)}
              >
                {genre}
                {isSelected && (
                  <X className="ml-1 h-3 w-3" onClick={() => toggleGenre(genre)} />
                )}
              </Badge>
            );
          })}
        </div>
      </div>
    </div>
  );
}