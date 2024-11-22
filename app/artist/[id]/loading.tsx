import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      <Skeleton className="w-full h-[50vh]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-96 w-full" />
          </div>
          <div className="space-y-8">
            <Skeleton className="h-80 w-full" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}