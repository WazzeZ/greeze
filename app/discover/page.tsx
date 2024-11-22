"use client";

import { ArtistGrid } from "@/components/discover/artist-grid";
import { SearchFilters } from "@/components/discover/search-filters";
import { useState } from "react";

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Discover Artists</h1>
          <p className="text-lg text-muted-foreground">
            Find and follow your next favorite artists
          </p>
        </div>

        <SearchFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedGenres={selectedGenres}
          onGenresChange={setSelectedGenres}
        />

        <ArtistGrid
          searchQuery={searchQuery}
          selectedGenres={selectedGenres}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
}