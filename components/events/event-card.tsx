"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Share2, Ticket } from "lucide-react";
import Image from "next/image";

export function EventCard() {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] h-full">
        {/* Event Image */}
        <div className="relative">
          <AspectRatio ratio={4/3} className="md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070"
              alt="Event cover"
              fill
              className="object-cover"
            />
          </AspectRatio>
          <Badge className="absolute top-4 left-4">Featured</Badge>
        </div>

        {/* Event Details */}
        <div className="p-6 flex flex-col h-full">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="h-4 w-4" />
              <span>Sat, Mar 15, 2024</span>
              <span>•</span>
              <Clock className="h-4 w-4" />
              <span>8:00 PM</span>
            </div>

            <h3 className="text-2xl font-bold mb-2">Summer Music Festival 2024</h3>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>Central Park, New York City</span>
            </div>

            <p className="text-muted-foreground mb-4">
              Join us for the biggest music festival of the summer, featuring top artists
              from around the world. Experience unforgettable performances across multiple stages.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Music Festival</Badge>
              <Badge variant="secondary">Live Music</Badge>
              <Badge variant="secondary">Outdoor</Badge>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-auto">
            <Button className="flex-1">
              <Ticket className="mr-2 h-4 w-4" />
              Get Tickets
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}