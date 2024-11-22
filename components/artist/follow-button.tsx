"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Heart } from "lucide-react";
import { useState } from "react";

export function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);
  const { toast } = useToast();

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    toast({
      title: isFollowing ? "Unfollowed" : "Following!",
      description: isFollowing
        ? "You have unfollowed this artist"
        : "You are now following this artist",
    });
  };

  return (
    <Button
      onClick={handleFollow}
      variant={isFollowing ? "secondary" : "default"}
      className="transition-all"
    >
      <Heart
        className={`w-4 h-4 mr-2 ${
          isFollowing ? "fill-primary text-primary" : ""
        }`}
      />
      {isFollowing ? "Following" : "Follow"}
    </Button>
  );
}