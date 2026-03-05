"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home,
  BookOpen,
  ClipboardList,
  BarChart3,
  Award,
  Heart,
  MessageSquare,
  Trophy,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface LearnerSidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const navItems = [
  { href: "/learn", label: "Home", icon: Home },
  { href: "/learn/courses", label: "My Courses", icon: BookOpen },
  { href: "/learn/assignments", label: "My Assignments", icon: ClipboardList },
  { href: "/learn/progress", label: "My Progress", icon: BarChart3 },
  { href: "/learn/certificates", label: "Certificates", icon: Award },
  { href: "/learn/wishlist", label: "Wishlist", icon: Heart },
  { href: "/learn/messages", label: "Messages", icon: MessageSquare },
  { href: "/learn/badges", label: "Badges", icon: Trophy },
];

const bottomNavItems = [
  { href: "/account", label: "Settings", icon: Settings },
];

export function LearnerSidebar({ collapsed = false, onToggle }: LearnerSidebarProps) {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={0}>
      <aside 
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] border-r bg-white transition-all duration-300",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="flex h-full flex-col">
          <ScrollArea className="flex-1 py-4">
            <nav className="space-y-1 px-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== "/learn" && pathname.startsWith(item.href));
                
                return (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                          isActive 
                            ? "bg-[#FF6B00]/10 text-[#FF6B00]" 
                            : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]",
                          collapsed && "justify-center px-2"
                        )}
                      >
                        <item.icon className={cn("h-5 w-5 flex-shrink-0", isActive && "text-[#FF6B00]")} />
                        {!collapsed && <span>{item.label}</span>}
                      </Link>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right" className="font-medium">
