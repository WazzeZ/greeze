"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquarePlus, Search } from "lucide-react";
import { NewDiscussionDialog } from "./new-discussion-dialog";
import { useState } from "react";

export function CommunityHeader() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold">Community</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Join discussions, share experiences, and connect with fellow musicians
          </p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)}>
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          New Discussion
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search discussions..."
          className="pl-10 max-w-2xl"
        />
      </div>

      <NewDiscussionDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
}