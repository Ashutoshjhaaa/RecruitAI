'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { User, Settings, CreditCard, LogOut, Phone } from 'lucide-react';
import Link from 'next/link';
import { useClerk } from '@clerk/nextjs';

interface DashboardHeaderProps {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    company: {
      id: string;
      name: string;
      domain: string | null;
    };
  };
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  const { signOut } = useClerk();

  return (
    <header className="h-[56px] border-b border-border bg-bg/80 backdrop-blur-[16px] saturate-[150%] px-10 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-center size-8 rounded-lg bg-white">
            <Phone className="size-4 text-black fill-current" />
          </div>
          <span className="text-white font-bold tracking-tight text-[18px]">
            VoiceHire
          </span>
        </Link>
        <div className="h-4 w-[1px] bg-border mx-2" />
        <h1 className="text-[14px] font-semibold text-white">Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              role="button"
              className="group/button flex items-center justify-center rounded-md border border-border2 bg-bg4 size-8 hover:bg-bg3 transition-colors cursor-pointer"
            >
              <Avatar className="h-8 w-8 rounded-md">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} />
                <AvatarFallback className="bg-bg4">{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-bg2 border border-border2 text-white p-2 mt-2">
            <DropdownMenuLabel className="px-2 py-3">
              <div className="flex flex-col space-y-1">
                <p className="text-[14px] font-medium leading-none text-white">{user.name}</p>
                <p className="text-[12px] leading-none text-white3">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-border" />
            <DropdownMenuItem asChild className="hover:bg-bg3 cursor-pointer p-2 rounded-md">
              <Link href="/dashboard/settings" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-[14px]">Profile Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-border" />
            <DropdownMenuItem onClick={() => signOut()} className="hover:bg-bg3 cursor-pointer p-2 rounded-md text-red-400">
              <LogOut className="h-4 w-4" />
              <span className="text-[14px]">Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}