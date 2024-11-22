"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Music, Users, Calendar, Trophy, Radio, Ticket, Share2, HeartHandshake } from "lucide-react";

const features = [
  {
    title: "Artist Profiles",
    description: "Create stunning profiles to showcase your music and connect with fans.",
    icon: Music,
  },
  {
    title: "Fan Community",
    description: "Build and engage with your fan base through interactive features.",
    icon: Users,
  },
  {
    title: "Event Management",
    description: "Organize and promote your gigs, tours, and music events.",
    icon: Calendar,
  },
  {
    title: "Music Charts",
    description: "Track your performance and reach new audiences.",
    icon: Trophy,
  },
  {
    title: "Live Streaming",
    description: "Stream live performances and connect with fans in real-time.",
    icon: Radio,
  },
  {
    title: "Ticket Sales",
    description: "Sell tickets directly to your fans through our platform.",
    icon: Ticket,
  },
  {
    title: "Social Integration",
    description: "Share your music across all major social media platforms.",
    icon: Share2,
  },
  {
    title: "Collaboration Tools",
    description: "Connect with other musicians and create together.",
    icon: HeartHandshake,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Everything You Need</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful tools to help you grow your music career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}