"use client";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { mockArtists } from "@/data/mock-artists";
import { events } from "@/data/events";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Bot, Music2, Search, Sparkles, Timer } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { useDebounce } from "@/hooks/use-debounce";
import { AISearchResult } from "@/types/search";

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [aiResults, setAiResults] = useState<AISearchResult[]>([]);
  const debouncedQuery = useDebounce(query, 300);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const getAIResults = async () => {
      if (debouncedQuery.length < 2) {
        setAiResults([]);
        return;
      }

      setIsLoading(true);
      try {
        // Simulate AI response with relevant suggestions
        const suggestions: AISearchResult[] = [
          {
            type: "suggestion",
            content: `Find artists similar to "${debouncedQuery}"`,
            action: `/discover?similar=${encodeURIComponent(debouncedQuery)}`,
          },
          {
            type: "suggestion",
            content: `Browse ${debouncedQuery} genre`,
            action: `/discover?genre=${encodeURIComponent(debouncedQuery)}`,
          },
          {
            type: "suggestion",
            content: `Events featuring "${debouncedQuery}"`,
            action: `/events?q=${encodeURIComponent(debouncedQuery)}`,
          },
        ];
        setAiResults(suggestions);
      } catch (error) {
        console.error("Error fetching AI results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getAIResults();
  }, [debouncedQuery]);

  const filteredArtists = mockArtists.filter((artist) =>
    artist.name.toLowerCase().includes(query.toLowerCase()) ||
    artist.genres.some((genre) => 
      genre.toLowerCase().includes(query.toLowerCase())
    )
  );

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(query.toLowerCase()) ||
    event.description.toLowerCase().includes(query.toLowerCase())
  );

  const onSelect = (value: string) => {
    setOpen(false);
    router.push(value);
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search with AI...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <input
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Search with AI assistance..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {isLoading && <Timer className="ml-2 h-4 w-4 animate-spin" />}
        </div>
        <CommandList>
          <CommandEmpty>
            <div className="flex flex-col items-center justify-center py-6 gap-2">
              <Bot className="h-8 w-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                No results found. Try a different search term.
              </p>
            </div>
          </CommandEmpty>
          
          {query && aiResults.length > 0 && (
            <CommandGroup heading="AI Suggestions">
              {aiResults.map((result, index) => (
                <CommandItem
                  key={index}
                  value={result.action}
                  onSelect={onSelect}
                  className="flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4 text-primary" />
                  {result.content}
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {filteredArtists.length > 0 && (
            <>
              <CommandSeparator />
              <CommandGroup heading="Artists">
                {filteredArtists.map((artist) => (
                  <CommandItem
                    key={artist.id}
                    value={`/artist/${artist.id}`}
                    onSelect={onSelect}
                    className="flex items-center gap-2"
                  >
                    <Avatar className="h-6 w-6">
                      <Music2 className="h-4 w-4" />
                    </Avatar>
                    <div className="flex flex-col">
                      <span>{artist.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {artist.genres.join(", ")}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}

          {filteredEvents.length > 0 && (
            <>
              <CommandSeparator />
              <CommandGroup heading="Events">
                {filteredEvents.map((event) => (
                  <CommandItem
                    key={event.id}
                    value={`/events#${event.id}`}
                    onSelect={onSelect}
                  >
                    <div className="flex flex-col">
                      <span>{event.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {event.date} • {event.location}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}