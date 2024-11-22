"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, TrendingUp } from "lucide-react";

const topics = [
  {
    title: "Best DAW for beginners?",
    replies: 156,
    trending: true,
  },
  {
    title: "Home studio setup advice",
    replies: 89,
    trending: true,
  },
  {
    title: "Music theory resources",
    replies: 67,
    trending: false,
  },
  {
    title: "Favorite VST plugins",
    replies: 45,
    trending: false,
  },
  {
    title: "Live performance tips",
    replies: 34,
    trending: false,
  },
];

export function PopularTopics() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Popular Topics</h2>
      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium hover:text-primary cursor-pointer">
                    {topic.title}
                  </span>
                  {topic.trending && (
                    <TrendingUp className="h-4 w-4 text-primary" />
                  )}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  {topic.replies} replies
                </div>
              </div>
              <Button variant="ghost" size="sm">
                View
              </Button>
            </div>
            {index < topics.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </div>
    </Card>
  );
}