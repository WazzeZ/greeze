"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook, Instagram, Music2, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "Spotify",
    icon: Music2,
    href: "#",
    color: "text-[#1DB954] hover:text-[#1DB954]/80",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
    color: "text-[#E4405F] hover:text-[#E4405F]/80",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "#",
    color: "text-[#FF0000] hover:text-[#FF0000]/80",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "#",
    color: "text-[#1DA1F2] hover:text-[#1DA1F2]/80",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "#",
    color: "text-[#4267B2] hover:text-[#4267B2]/80",
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-2">
      <TooltipProvider>
        {socialLinks.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={link.color}
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Follow on {link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}