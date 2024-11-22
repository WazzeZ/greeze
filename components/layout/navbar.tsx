"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GlobalSearch } from "@/components/search/global-search";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import {
  Bell,
  Heart,
  LogIn,
  Menu,
  MessageSquare,
  Music2,
  Search,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainNavItems = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/events", label: "Events" },
  { href: "/community", label: "Community" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 mr-8"
          aria-label="MusicPlatform Home"
        >
          <Music2 className="h-6 w-6" />
          <span className="text-lg font-semibold hidden sm:inline-block">
            MusicPlatform
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 flex-1">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <GlobalSearch />
          
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="relative"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                New message from Luna & The Satellites
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Heart className="mr-2 h-4 w-4" />
                Electric Dreams liked your comment
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="relative"
                aria-label="User menu"
              >
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Heart className="mr-2 h-4 w-4" />
                Favorites
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogIn className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <GlobalSearch />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-6">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="h-px bg-border my-4" />
                <Button variant="outline" className="w-full">
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}