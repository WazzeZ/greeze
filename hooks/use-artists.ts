"use client";

import { Artist } from "@/types/artist";
import { useEffect, useState } from "react";
import { mockArtists } from "@/data/mock-artists";

interface UseArtistsProps {
  searchQuery: string;
  selectedGenres: string[];
  page: number;
}

export function useArtists({ searchQuery, selectedGenres, page }: UseArtistsProps) {
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);
  const itemsPerPage = 12;

  useEffect(() => {
    let results = [...mockArtists];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (artist) =>
          artist.name.toLowerCase().includes(query) ||
          artist.genres.some((genre) => genre.toLowerCase().includes(query))
      );
    }

    if (selectedGenres.length > 0) {
      results = results.filter((artist) =>
        artist.genres.some((genre) => selectedGenres.includes(genre))
      );
    }

    setFilteredArtists(results);
  }, [searchQuery, selectedGenres]);

  const totalPages = Math.ceil(filteredArtists.length / itemsPerPage);
  const paginatedArtists = filteredArtists.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return {
    artists: paginatedArtists,
    totalPages,
  };
}