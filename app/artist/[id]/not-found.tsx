import { Button } from "@/components/ui/button";
import { Music2 } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <Music2 className="h-24 w-24 mx-auto text-muted-foreground" />
        <h1 className="text-4xl font-bold">Artist Not Found</h1>
        <p className="text-muted-foreground">
          The artist you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/discover">Discover Artists</Link>
        </Button>
      </div>
    </div>
  );
}