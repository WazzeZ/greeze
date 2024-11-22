"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "This platform has completely transformed how we connect with our fans. The tools and features are exactly what we needed.",
    author: "Sarah Mitchell",
    role: "Lead Singer, Echo Valley",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&q=80",
  },
  {
    quote: "The event management tools made organizing our tour so much easier. We've seen a huge increase in ticket sales.",
    author: "David Chen",
    role: "Manager, The Night Owls",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&q=80",
  },
  {
    quote: "As an emerging artist, this platform gave me the exposure I needed. The community here is incredibly supportive.",
    author: "Maya Rodriguez",
    role: "Independent Artist",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&q=80",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Success Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from artists who've grown with our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="flex flex-col h-full">
                  <blockquote className="flex-1 mb-6">
                    <p className="text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}