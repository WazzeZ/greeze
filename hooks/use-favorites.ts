"use client";

import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favoriteArtists");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const toggleFavorite = (artistId: string) => {
    const newFavorites = favorites.includes(artistId)
      ? favorites.filter((id) => id !== artistId)
      : [...favorites, artistId];
    
    setFavorites(newFavorites);
    localStorage.setItem("favoriteArtists", JSON.stringify(newFavorites));
  };

  const isFavorite = (artistId: string) => favorites.includes(artistId);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}