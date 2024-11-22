"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { formatDistanceToNow } from "date-fns";
import { Search } from "lucide-react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

interface Post {
  id: string;
  title: string;
  content: string;
  date: Date;
  image?: string;
  likes: number;
  comments: number;
}

const posts: Post[] = Array.from({ length: 20 }, (_, i) => ({
  id: `post-${i + 1}`,
  title: `Update from the Studio - Day ${i + 1}`,
  content:
    "Working on some new material today! Can't wait to share what we've been cooking up. The new album is coming together nicely, and we're exploring some exciting new sounds.",
  date: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
  image: i % 2 === 0 ? "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070" : undefined,
  likes: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 100),
}));

export function PostFeed() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(6);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, filteredPosts.length));
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Latest Updates</h2>
        <Button variant="outline">Create Post</Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter posts" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Posts</SelectItem>
            <SelectItem value="updates">Updates</SelectItem>
            <SelectItem value="photos">Photos</SelectItem>
            <SelectItem value="videos">Videos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <InfiniteScroll
        dataLength={visiblePosts}
        next={loadMore}
        hasMore={visiblePosts < filteredPosts.length}
        loader={<div className="text-center py-4">Loading...</div>}
        scrollableTarget="scrollableDiv"
      >
        <div className="space-y-6">
          {filteredPosts.slice(0, visiblePosts).map((post) => (
            <div key={post.id}>
              <div className="flex gap-4">
                <Avatar className="w-10 h-10" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {formatDistanceToNow(post.date, { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-muted-foreground">{post.content}</p>
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post attachment"
                      className="mt-4 rounded-lg w-full object-cover max-h-96"
                    />
                  )}
                  <div className="flex gap-4 mt-4">
                    <Button variant="ghost" size="sm">
                      ❤️ {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm">
                      💬 {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm">
                      Share
                    </Button>
                  </div>
                </div>
              </div>
              <Separator className="my-6" />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </Card>
  );
}