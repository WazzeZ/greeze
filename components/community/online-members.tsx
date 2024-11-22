"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { mockMembers } from "@/data/mock-members";

export function OnlineMembers() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Online Members</h2>
      <div className="flex flex-wrap gap-2">
        {mockMembers.map((member) => (
          <HoverCard key={member.id}>
            <HoverCardTrigger asChild>
              <div className="relative cursor-pointer">
                <Avatar>
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>
                  <div className="flex items-center pt-2">
                    <span className="text-xs text-muted-foreground">
                      {member.status}
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </Card>
  );
}