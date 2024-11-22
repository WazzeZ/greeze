export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  type: string;
  tags: string[];
  ticketUrl: string;
  featured: boolean;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Summer Music Festival 2024",
    description: "Join us for the biggest music festival of the summer, featuring top artists from around the world. Experience unforgettable performances across multiple stages.",
    date: "2024-03-15",
    time: "20:00",
    location: "Central Park, New York City",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070",
    type: "festival",
    tags: ["Music Festival", "Live Music", "Outdoor"],
    ticketUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Jazz Night at Blue Note",
    description: "An intimate evening of jazz featuring renowned artists and emerging talents. Experience the magic of live jazz in one of the city's most iconic venues.",
    date: "2024-03-20",
    time: "19:30",
    location: "Blue Note Jazz Club, New York City",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2070",
    type: "concert",
    tags: ["Jazz", "Live Music", "Indoor"],
    ticketUrl: "#",
    featured: false,
  },
  {
    id: "3",
    title: "Electronic Music Workshop",
    description: "Learn the fundamentals of electronic music production from industry professionals. Hands-on experience with the latest equipment and software.",
    date: "2024-03-25",
    time: "14:00",
    location: "Music Tech Hub, Los Angeles",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070",
    type: "workshop",
    tags: ["Workshop", "Electronic", "Education"],
    ticketUrl: "#",
    featured: false,
  },
];