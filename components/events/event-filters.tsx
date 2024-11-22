'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calendar as CalendarIcon, Filter } from 'lucide-react';
import { useState } from 'react';

interface EventFiltersProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  selectedType: string;
  onTypeChange: (type: string) => void;
}

export function EventFilters({
  selectedLocation,
  onLocationChange,
  selectedType,
  onTypeChange,
}: EventFiltersProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card className="p-6 h-fit space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" className="h-auto p-0">
          Reset
        </Button>
      </div>

      <div className="space-y-4">
        {/* Location Filter */}
        <div className="space-y-2">
          <Label>Location</Label>
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="ny">New York</SelectItem>
              <SelectItem value="la">Los Angeles</SelectItem>
              <SelectItem value="ch">Chicago</SelectItem>
              <SelectItem value="mi">Miami</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Event Type Filter */}
        <div className="space-y-2">
          <Label>Event Type</Label>
          <Select value={selectedType} onValueChange={onTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="concert">Concerts</SelectItem>
              <SelectItem value="festival">Festivals</SelectItem>
              <SelectItem value="workshop">Workshops</SelectItem>
              <SelectItem value="meetup">Meetups</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date Filter */}
        <div className="space-y-2">
          <Label>Date</Label>
          <div className="rounded-md border w-fit">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
          </div>
        </div>

        <Button className="w-full">
          <Filter className="mr-2 h-4 w-4" />
          Apply Filters
        </Button>
      </div>
    </Card>
  );
}
