"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <AlertCircle className="h-24 w-24 mx-auto text-destructive" />
        <h1 className="text-4xl font-bold">Something went wrong!</h1>
        <p className="text-muted-foreground">
          An error occurred while loading this page.
        </p>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}