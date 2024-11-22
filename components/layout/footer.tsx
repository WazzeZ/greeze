"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Music2, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const mainLinks = [
  { href: "/discover", label: "Discover Artists" },
  { href: "/events", label: "Events" },
  { href: "/community", label: "Community" },
  { href: "/pricing", label: "Pricing" },
];

const resourceLinks = [
  { href: "/help", label: "Help Center" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact Us" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Music2 className="h-6 w-6" />
              <span className="text-lg font-semibold">MusicPlatform</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The ultimate platform for musicians and music lovers. Connect,
              collaborate, and create together.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-[240px]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MusicPlatform. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}