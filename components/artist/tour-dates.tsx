"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin } from "lucide-react";
import { format } from "date-fns";

const tourDates = [
  {
    date: new Date(2024, 2, 25),
    venue: "The Wiltern",
    location: "Los Angeles, CA",
    status: "On Sale",
  },
  {
    date: new Date(2024, 3, 2),
    venue: "Paramount Theatre",
    location: "Seattle, WA",
    status: "Sold Out",
  },
  {
    date: new Date(2024, 3, 5),
    venue: "The Fillmore",
    location: "San Francisco, CA",
    status: "On Sale",
  },
  {
    date: new Date(2024, 3, 10),
    venue: "Brooklyn Steel",
    location: "Brooklyn, NY",
    status: "On Sale",
  },
];

export function TourDates() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Upcoming Shows</h2>
        <Button variant="outline">View All</Button>
      </div>
      <div className="space-y-4">
        {tourDates.map((show, index) => (
          <div key={index}>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="text-center w-16">
                  <div className="text-sm font-medium text-muted-foreground">
                    {format(show.date, "MMM")}
                  </div>
                  <div className="text-2xl font-bold">{format(show.date, "dd")}</div>
                </div>
                <div>
                  <h3 className="font-semibold">{show.venue}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {show.location}
                  </div>
                </div>
              </div>
              <Button
                variant={show.status === "Sold Out" ? "secondary" : "default"}
                disabled={show.status === "Sold Out"}
              >
                {show.status}
              </Button>
            </div>
            {index < tourDates.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </div>
    </Card>
  );
}