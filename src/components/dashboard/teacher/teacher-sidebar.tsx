"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  FileText, 
  BarChart3, 
  FolderOpen, 
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Calendar,
  ClipboardList,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { 
    label: "Dashboard", 
    icon: LayoutDashboard, 
    href: "/teach" 
  },
  { 
    label: "Classes", 
    icon: GraduationCap, 
    href: "/teach/classes" 
  },
  { 
    label: "Students", 
    icon: Users, 
    href: "/teach/students" 
  },
  { 
    label: "Courses", 
    icon: BookOpen, 
    href: "/teach/courses" 
  },
  { 
    label: "Assignments", 
    icon: ClipboardList, 
    href: "/teach/assignments" 
  },
  { 
    label: "Reports", 
    icon: BarChart3, 
    href: "/teach/reports" 
  },
  { 
    label: "Resources", 
    icon: FolderOpen, 
    href: "/teach/resources" 
  },
  { 
    label: "Messages", 
    icon: MessageSquare, 
    href: "/teach/messages" 
  },
  { 
    label: "Settings", 
    icon: Settings, 
    href: "/teach/settings" 
  },
];

export function TeacherSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-slate-900 border-r border-slate-800 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-slate-800">
        {!collapsed && (
          <Link href="/teach" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">X</span>
            </div>
            <span className="text-white font-bold">Xtreme Learn</span>
          </Link>
        )}
        {collapsed && (
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto">
            <span className="text-white font-bold">X</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== "/teach" && pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                isActive 
                  ? "bg-orange-500 text-white" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white",
                collapsed && "justify-center"
              )}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Collapse Button */}
      <div className="absolute bottom-4 left-0 right-0 px-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "w-full text-slate-400 hover:text-white hover:bg-slate-800",
            collapsed && "justify-center"
          )}
        >
          {collapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <>
              <ChevronLeft className="w-5 h-5 mr-2" />
              <span>Collapse</span>
            </>
          )}
        </Button>
      </div>
    </aside>
  );
}
