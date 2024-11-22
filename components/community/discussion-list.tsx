"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from "date-fns";
import { MessageSquare, ThumbsUp } from "lucide-react";
import { mockDiscussions } from "@/data/mock-discussions";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface DiscussionListProps {
  category: "discussions" | "questions" | "collaborations";
}

export function DiscussionList({ category }: DiscussionListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const discussions = mockDiscussions.filter(
    (discussion) => discussion.category === category
  );

  return (
    <div className="space-y-4">
      {discussions.map((discussion) => (
        <Card key={discussion.id} className="p-6">
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src={discussion.author.avatar} />
              <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{discussion.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{discussion.author.name}</span>
                    <span>•</span>
                    <span>
                      {formatDistanceToNow(new Date(discussion.date), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {discussion.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className={expandedId === discussion.id ? "" : "line-clamp-3"}>
                <ReactMarkdown className="prose prose-sm dark:prose-invert">
                  {discussion.content}
                </ReactMarkdown>
              </div>

              {discussion.content.length > 200 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setExpandedId(
                      expandedId === discussion.id ? null : discussion.id
                    )
                  }
                >
                  {expandedId === discussion.id ? "Show less" : "Read more"}
                </Button>
              )}

              <Separator className="my-4" />

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  {discussion.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {discussion.comments}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}