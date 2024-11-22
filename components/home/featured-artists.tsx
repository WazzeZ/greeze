"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Music2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredArtists = [
  {
    id: 1,
    name: "The Midnight Echo",
    genre: "Alternative Rock",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1974",
    followers: "1.2M",
  },
  {
    id: 2,
    name: "Luna & The Satellites",
    genre: "Indie Pop",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070",
    followers: "856K",
  },
  {
    id: 3,
    name: "Electric Dreams",
    genre: "Synthwave",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070",
    followers: "920K",
  },
  {
    id: 4,
    name: "Urban Pulse",
    genre: "Hip Hop",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074",
    followers: "1.5M",
  },
];

export function FeaturedArtists() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Featured Artists</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover trending musicians on our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredArtists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/artist/${artist.id}`}>
              <Card className="group overflow-hidden">
                <div className="relative">
                  <AspectRatio ratio={1}>
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white mb-1">{artist.name}</h3>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{artist.genre}</Badge>
                      <span className="text-sm text-white">{artist.followers} followers</span>
                    </div>
                  </div>
                </div>
              </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg">
            <Link href="/discover">
            <Music2 className="mr-2 h-5 w-5" />
            Discover More Artists
              </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}