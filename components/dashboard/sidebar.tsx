'use client';

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from '@/components/ui/sidebar';
import { Home, Users, Briefcase, Calendar, Settings, User, LogOut, CreditCard } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { useClerk } from '@clerk/nextjs';

interface DashboardSidebarProps {
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

export function DashboardSidebar({ user }: DashboardSidebarProps) {
  const { signOut } = useClerk();
  const navigationItems = [
    {
      title: 'Home',
      href: '/dashboard',
      icon: Home,
    },
    {
      title: 'Jobs',
      href: '/dashboard/jobs',
      icon: Briefcase,
    },
    {
      title: 'Candidates',
      href: '/dashboard/candidates',
      icon: Users,
    },
    {
      title: 'Schedules',
      href: '/dashboard/schedules',
      icon: Calendar,
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: Settings,
    },
  ];

  return (
    <Sidebar className="border-r border-border bg-bg2">
      <SidebarHeader className="border-b border-border p-6 h-[56px] flex items-center justify-center">
        <div className="flex items-center gap-2">
          <span className="text-[16px] font-bold text-white">VoiceHire</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-eyebrow mb-2">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-white2 hover:text-white hover:bg-bg3 transition-colors rounded-md py-2 px-3 h-10">
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon className="w-4 h-4" />
                      <span className="text-[14px] font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4 gap-4">
        {/* Profile Section */}
        <div className="w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                role="button"
                className="group/button flex items-center gap-3 w-full p-2 rounded-md hover:bg-bg3 transition-colors cursor-pointer border border-transparent hover:border-border2"
              >
                <Avatar className="h-8 w-8 rounded-md bg-bg4">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} />
                  <AvatarFallback className="bg-bg4">{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start overflow-hidden">
                  <span className="text-[14px] font-medium text-white truncate w-full">{user.name}</span>
                  <span className="text-[12px] text-white3 truncate w-full">{user.email}</span>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-bg2 border border-border2 text-white p-2">
              <DropdownMenuLabel className="text-eyebrow px-2 py-1">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />
              <DropdownMenuItem asChild className="hover:bg-bg3 cursor-pointer p-2 rounded-md">
                <Link href="/dashboard/settings" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-[14px]">Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="hover:bg-bg3 cursor-pointer p-2 rounded-md">
                <Link href="/dashboard/settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span className="text-[14px]">Settings</span>
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

        <Button className="w-full text-[13px] h-9" variant="secondary">
          <CreditCard className="mr-2 h-4 w-4" />
          Pro Plan
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}