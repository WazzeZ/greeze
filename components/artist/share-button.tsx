"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Facebook, Link2, Share2, Twitter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function ShareButton() {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "The artist profile link has been copied to your clipboard.",
    });
  };

  const shareOnSocial = (platform: string) => {
    // Implement social sharing logic
    toast({
      title: "Share on " + platform,
      description: "Opening share dialog...",
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={copyToClipboard}>
          <Link2 className="w-4 h-4 mr-2" />
          Copy link
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => shareOnSocial("Twitter")}>
          <Twitter className="w-4 h-4 mr-2" />
          Share on Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => shareOnSocial("Facebook")}>
          <Facebook className="w-4 h-4 mr-2" />
          Share on Facebook
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}