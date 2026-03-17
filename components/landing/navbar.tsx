"use client";

import { Button } from "@/components/ui/button";
import { Menu, Sparkles, Phone, Users, Calendar } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useAuth, SignedIn, SignedOut } from "@clerk/nextjs";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  RecruitAI
                </span>
                <span className="text-xs text-muted-foreground font-medium">Voice Agent</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 text-sm font-medium">
              <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">How It Works</a>
              <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
              <a href="#demo" className="text-foreground/80 hover:text-foreground transition-colors">Demo</a>
            </div>
            <div className="flex items-center gap-3">
              <SignedIn>
                <Link href="/dashboard">
                  <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg shadow-primary/20">
                    Go to Dashboard
                  </Button>
                </Link>
              </SignedIn>
              <SignedOut>
                <Link href="/sign-in">
                  <Button variant="ghost" size="sm" className="text-sm font-medium">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button size="sm" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg shadow-primary/20">
                    Get Started
                  </Button>
                </Link>
              </SignedOut>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">How It Works</a>
              <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">Pricing</a>
              <a href="#demo" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">Demo</a>
              <div className="flex flex-col gap-3 pt-4">
                <SignedIn>
                  <Link href="/dashboard" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
                      Go to Dashboard
                    </Button>
                  </Link>
                </SignedIn>
                <SignedOut>
                  <Link href="/sign-in" className="w-full">
                    <Button variant="ghost" className="w-full">Sign In</Button>
                  </Link>
                  <Link href="/sign-up" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
                      Get Started
                    </Button>
                  </Link>
                </SignedOut>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
