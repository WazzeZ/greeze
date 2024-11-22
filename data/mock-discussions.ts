export interface Discussion {
  id: string;
  title: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: "discussions" | "questions" | "collaborations";
  tags: string[];
  likes: number;
  comments: number;
}

export const mockDiscussions: Discussion[] = [
  {
    id: "1",
    title: "Tips for recording vocals in a home studio",
    content: `I've been trying to improve my vocal recordings at home. Here are some tips I've learned:

1. Room treatment is crucial
   - Use acoustic panels
   - Position them at reflection points
   - Consider a vocal booth

2. Microphone selection matters
   - Large-diaphragm condenser mics work well
   - Position it correctly
   - Use a pop filter

Would love to hear your experiences and additional tips!`,
    date: "2024-03-15T10:00:00Z",
    author: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&q=80",
    },
    category: "discussions",
    tags: ["Recording", "Vocals", "Home Studio"],
    likes: 24,
    comments: 12,
  },
  {
    id: "2",
    title: "Looking for a bassist in Los Angeles",
    content: "Our band is searching for a bassist who can join us for upcoming gigs and recording sessions. We play alternative rock with some electronic elements. Must be able to rehearse twice a week and available for weekend shows.",
    date: "2024-03-14T15:30:00Z",
    author: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&q=80",
    },
    category: "collaborations",
    tags: ["Collaboration", "Los Angeles", "Bass Player"],
    likes: 15,
    comments: 8,
  },
  {
    id: "3",
    title: "How to negotiate with venues?",
    content: "First time booking shows for my band. What's the standard process for negotiating with venues? Any red flags to watch out for?",
    date: "2024-03-14T09:15:00Z",
    author: {
      name: "Alex Rivers",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=256&h=256&q=80",
    },
    category: "questions",
    tags: ["Live Shows", "Business", "Venues"],
    likes: 32,
    comments: 18,
  },
  {
    id: "4",
    title: "Best practices for social media promotion",
    content: "Let's share our experiences with social media promotion. What platforms work best for music? How often should we post?",
    date: "2024-03-13T14:20:00Z",
    author: {
      name: "Maya Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&q=80",
    },
    category: "discussions",
    tags: ["Marketing", "Social Media", "Promotion"],
    likes: 45,
    comments: 23,
  },
];