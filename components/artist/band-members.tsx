"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const bandMembers = [
  {
    name: "Alex Rivers",
    role: "Lead Vocals, Guitar",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=2080",
    bio: "Founding member of The Midnight Echo, Alex's powerful vocals and innovative guitar work have been instrumental in shaping the band's signature sound.",
  },
  {
    name: "Sarah Chen",
    role: "Bass, Backing Vocals",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
    bio: "A classically trained musician turned rock bassist, Sarah brings a unique perspective to the rhythm section with her melodic bass lines.",
  },
  {
    name: "Marcus Thompson",
    role: "Drums",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
    bio: "The rhythmic foundation of the band, Marcus's dynamic drumming style combines precision with raw energy.",
  },
  {
    name: "Jamie Wright",
    role: "Synth, Keys",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976",
    bio: "The newest member of the band, Jamie's atmospheric synth work adds depth and texture to The Midnight Echo's evolving sound.",
  },
];

export function BandMembers() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Band Members</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {bandMembers.map((member, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <div className="text-center cursor-pointer">
                <Avatar className="w-24 h-24 mx-auto mb-3">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={member.image} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </Card>
  );
}