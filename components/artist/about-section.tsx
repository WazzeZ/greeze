"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The Midnight Echo emerged from the neon-lit streets of Los Angeles in 2018,
            crafting a unique sound that bridges the gap between alternative rock's raw
            energy and synth-pop's ethereal textures.
          </p>
          <CollapsibleContent className="space-y-4">
            <p className="text-muted-foreground">
              Drawing inspiration from the city's nocturnal pulse and the vast expanse
              of the California desert, their music explores themes of isolation,
              connection, and the search for meaning in an increasingly digital world.
            </p>
            <p className="text-muted-foreground">
              With three critically acclaimed albums and numerous sold-out shows across
              North America, The Midnight Echo continues to push the boundaries of
              modern rock while staying true to their atmospheric roots.
            </p>
          </CollapsibleContent>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="mt-4">
            {isOpen ? "Show Less" : "Read More"}
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
      </Collapsible>
    </Card>
  );
}