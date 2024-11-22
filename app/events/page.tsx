'use client';

import { EventCard } from '@/components/events/event-card';
import { EventFilters } from '@/components/events/event-filters';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { useState } from 'react';

export default function EventsPage() {
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover live performances, album launches, and music festivals
            happening near you
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button size="lg">
              <MapPin className="mr-2 h-5 w-5" />
              Find Events Near Me
            </Button>
          </div>
        </div>

        {/* Filters and Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[360px,1fr] gap-8">
          <EventFilters
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
          />
          <div className="space-y-6">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </main>
  );
}
