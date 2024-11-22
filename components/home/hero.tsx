"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Music2, Search } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070"
          alt="Concert Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1 
          className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Where Musicians
          <br />
          <span className="text-primary">Connect & Create</span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join the ultimate platform for bands and musicians. Share your music,
          connect with fans, and take your career to the next level.
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" className="text-lg">
            <Music2 className="mr-2 h-5 w-5" />
            Join as Artist
          </Button>
          <Button size="lg" variant="secondary" className="text-lg">
            <Search className="mr-2 h-5 w-5" />
            Discover Music
          </Button>
        </motion.div>
      </div>
    </section>
  );
}