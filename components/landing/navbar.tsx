"use client";

import { Button } from "@/components/ui/button";
import { Menu, Sparkles, Phone, Users, Calendar } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();

  return (
    <nav className="h-[56px] bg-bg/80 backdrop-blur-[16px] saturate-[150%] border-b border-border fixed top-0 w-full z-[999]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center size-8 rounded-lg bg-white">
              <Phone className="size-4 text-black fill-current" />
            </div>
            <span className="text-white font-bold tracking-tight text-[18px]">
              VoiceHire
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-[14px]">
            <a href="#features" className="text-white2 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-white2 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-white2 hover:text-white transition-colors">Pricing</a>
            <a href="#demo" className="text-white2 hover:text-white transition-colors text-mono uppercase text-[11px] tracking-wider">Demo</a>
          </div>
          <div className="flex items-center gap-3">
            {isSignedIn ? (
              <div className="flex items-center gap-3">
                <Link href="/dashboard">
                  <Button size="sm">
                    Dashboard
                  </Button>
                </Link>
                <UserButton />
              </div>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button variant="ghost" size="sm" className="text-white2 hover:text-white">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button size="sm">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-muted/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">Features</a>
              <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">How It Works</a>
              <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">Pricing</a>
              <a href="#demo" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">Demo</a>
              <div className="flex flex-col gap-3 pt-4">
                {isSignedIn ? (
                  <div className="flex items-center justify-between gap-3">
                    <Link href="/dashboard" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
                        Go to Dashboard
                      </Button>
                    </Link>
                    <UserButton />
                  </div>
                ) : (
                  <>
                    <Link href="/sign-in" className="w-full">
                      <Button variant="ghost" className="w-full">Sign In</Button>
                    </Link>
                    <Link href="/sign-up" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
