"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Contact & Booking</h2>
          <p className="text-muted-foreground mt-1">
            For booking inquiries and general questions
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Contact The Midnight Echo</DialogTitle>
              <DialogDescription>
                Send us a message and we'll get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
            <Button className="w-full">Send Message</Button>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
}