export interface Member {
  id: string;
  name: string;
  avatar: string;
  role: string;
  status: string;
}

export const mockMembers: Member[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&q=80",
    role: "Lead Singer",
    status: "Active now",
  },
  {
    id: "2",
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&q=80",
    role: "Guitarist",
    status: "Active now",
  },
  {
    id: "3",
    name: "Alex Rivers",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=256&h=256&q=80",
    role: "Producer",
    status: "Active now",
  },
  {
    id: "4",
    name: "Maya Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&q=80",
    role: "Drummer",
    status: "Active now",
  },
  {
    id: "5",
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&q=80",
    role: "Bass Player",
    status: "Active now",
  },
  {
    id: "6",
    name: "Emma Thompson",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&h=256&q=80",
    role: "Keyboardist",
    status: "Active now",
  },
];