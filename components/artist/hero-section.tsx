"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Facebook, Instagram, Share2, Twitter } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  ];

  return (
    <div className="relative w-full h-[50vh] min-h-[400px] lg:h-[60vh]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070"
          alt="Band Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col h-full justify-end pb-8">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-6">
            {/* Profile Image */}
            <Card className="w-48 h-48 shrink-0 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1974"
                alt="The Midnight Echo"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </Card>

            {/* Band Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">The Midnight Echo</h1>
                <Badge variant="secondary" className="h-6">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Verified
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground mb-4">Alternative Rock • Los Angeles, CA</p>
              
              {/* Stats */}
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="font-bold">1.2M</span> Monthly Listeners
                </div>
                <div>
                  <span className="font-bold">850K</span> Followers
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button size="lg">Follow</Button>
              <Button size="lg" variant="secondary">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}