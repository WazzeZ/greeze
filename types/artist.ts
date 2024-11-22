export interface Artist {
  id: string;
  name: string;
  image: string;
  genres: string[];
  followers: number;
  monthlyListeners: number;
  verified: boolean;
}