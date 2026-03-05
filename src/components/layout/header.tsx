"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Search, 
  Bell, 
  MessageCircle, 
  ChevronDown, 
  Menu,
  X,
  Home,
  BookOpen,
  ClipboardList,
  BarChart3,
  Award,
  Heart,
  MessageSquare,
  Trophy,
  User,
  Settings,
  HelpCircle,
  LogOut,
  GraduationCap,
  Users,
  Baby
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuShortcut
} from "@/components/ui/dropdown-menu";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator }.from "@/components/ui/separator";

// Subject data for mega-menu
const subjects = [
  {
    name: "Mathematics",
    courses: ["Algebra", "Geometry", "Calculus", "Statistics"],
    icon: "📐"
  },
  {
    name: "Science",
    courses: ["Physics", "Chemistry", "Biology", "Environmental Science"],
    icon: "🔬"
  },
  {
    name: "Computing",
    courses: ["Programming", "Web Development", "Data Science", "AI"],
    icon: "💻"
  },
  {
    name: "Humanities",
    courses: ["History", "Literature", "Philosophy", "Art History"],
    icon: "📚"
  },
  {
    name: "Languages",
    courses: ["English", "Spanish", "French", "Korean"],
    icon: "🌍"
  },
  {
    name: "Business",
    courses: ["Entrepreneurship", "Marketing", "Finance"],
    icon: "💼"
  },
  {
    name: "Test Prep",
    courses: ["WAEC", "JAMB", "SAT", "GMAT"],
    icon: "📝"
  },
  {
    name: "Professional Skills",
    courses: ["Communication", "Leadership", "Project Management"],
    icon: "🎯"
  }
];

// Current user mock - in real app this would come from auth
const currentUser = {
  name: "John Doe",
  email: "john@example.com",
  username: "johndoe",
  avatar: "",
  role: "learner" as const,
  streak: 7,
  xp: 1250
};

// Demo user for showing logged-in state
const isLoggedIn = true;

export function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6B00] to-[#FF8C00]">
              <span className="text-xl font-bold text-white">X</span>
            </div>
            <span className="text-xl font-bold text-[#0F172A] hidden sm:inline-block">Xtreme Learn</span>
          </Link>

          {/* Explore Mega-Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium px-3 h-9">
                  Explore
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {subjects.map((subject) => (
                        <div key={subject.name} className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{subject.icon}</span>
                            <h4 className="font-semibold text-sm text-[#0F172A]">{subject.name}</h4>
                          </div>
                          <ul className="space-y-1">
                            {subject.courses.map((course) => (
                              <li key={course}>
                                <Link
                                  href={`/courses?category=${subject.name.toLowerCase()}&course=${course.toLowerCase()}`}
                                  className="block text-sm text-[#64748B] hover:text-[#FF6B00] transition-colors"
                                >
                                  {course}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <Separator className="my-4" />
                    <div className="flex items-center justify-between">
                      <Link 
                        href="/courses" 
                        className="text-sm font-medium text-[#FF6B00] hover:underline"
                      >
                        View all courses →
                      </Link>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">Free</Badge>
                        <Badge variant="outline" className="text-xs bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20">Pro</Badge>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" />
            <Input
              type="search"
              placeholder="Search topics, courses, or teachers..."
              className="w-full pl-10 bg-[#F1F5F9] border-0 focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Search Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Park AI Assistant */}
          {isLoggedIn && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#FF6B00] text-[10px] font-bold text-white">
                AI
              </span>
            </Button>
          )}

          {/* Notifications */}
          {isLoggedIn && (
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EF4444] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EF4444]"></span>
              </span>
            </Button>
          )}

          {/* Profile Avatar / Login */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9 border-2 border-[#FF6B00]">
                    <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                    <AvatarFallback className="bg-[#FF6B00] text-white text-sm">
                      {currentUser.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{currentUser.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      @{currentUser.username}
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="flex items-center gap-1 text-xs text-[#FF6B00]">
                        🔥 {currentUser.streak} day streak
                      </span>
                      <span className="text-xs text-muted-foreground">
                        • {currentUser.xp} XP
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/learn">
                      <Home className="mr-2 h-4 w-4" />
                      Learner Home
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/learn/courses">
                      <BookOpen className="mr-2 h-4 w-4" />
                      My Courses
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/learn/progress">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      My Progress
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/learn/certificates">
                      <Award className="mr-2 h-4 w-4" />
                      Certificates
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/learn/wishlist">
                      <Heart className="mr-2 h-4 w-4" />
                      Wishlist
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={`/u/${currentUser.username}`}>
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account">
                    <Settings className="mr-2 h-4 w-4" />
                    Account Settings
                    <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/help">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Help Center
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-[#EF4444] focus:text-[#EF4444]" asChild>
                  <Link href="/">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" passHref>
                <Button variant="ghost" className="text-sm font-medium">
                  Log in
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button className="bg-[#FF6B00] hover:bg-[#E56000] text-white text-sm font-medium">
                  Sign up
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <ScrollArea className="h-[calc(100vh-3rem)]">
                <div className="space-y-4 py-4">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-2 px-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6B00] to-[#FF8C00]">
                      <span className="text-xl font-bold text-white">X</span>
                    </div>
                    <span className="text-xl font-bold text-[#0F172A]">Xtreme Learn</span>
                  </div>
                  
                  <Separator />

                  {/* Mobile Search */}
                  <div className="px-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" />
                      <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full pl-10"
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Mobile Navigation */}
                  {isLoggedIn ? (
                    <div className="space-y-1 px-2">
                      <h4 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Learning
                      </h4>
                      <SheetClose asChild>
                        <Link href="/learn" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <Home className="h-4 w-4" />
                          Learner Home
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/learn/courses" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <BookOpen className="h-4 w-4" />
                          My Courses
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/learn/assignments" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <ClipboardList className="h-4 w-4" />
                          My Assignments
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/learn/progress" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <BarChart3 className="h-4 w-4" />
                          My Progress
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/learn/certificates" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <Award className="h-4 w-4" />
                          Certificates
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/learn/wishlist" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <Heart className="h-4 w-4" />
                          Wishlist
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/learn/messages" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <MessageSquare className="h-4 w-4" />
                          Messages
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/learn/badges" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <Trophy className="h-4 w-4" />
                          Badges
                        </Link>
                      </SheetClose>

                      <Separator className="my-2" />

                      <h4 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Account
                      </h4>
                      <SheetClose asChild>
                        <Link href={`/u/${currentUser.username}`} className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <User className="h-4 w-4" />
                          Profile
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/account" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <Settings className="h-4 w-4" />
                          Settings
                        </Link>
                      </SheetClose>
                    </div>
                  ) : (
                    <div className="space-y-2 px-2">
                      <SheetClose asChild>
                        <Link href="/courses" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <Search className="h-4 w-4" />
                          Explore Courses
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/for-schools" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <GraduationCap className="h-4 w-4" />
                          For Schools
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/for-teachers" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <Users className="h-4 w-4" />
                          For Teachers
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/for-parents" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <User className="h-4 w-4" />
                          For Parents
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/help" className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm hover:bg-accent">
                          <HelpCircle className="h-4 w-4" />
                          Help Center
                        </Link>
                      </SheetClose>
                    </div>
                  )}

                  {isLoggedIn && (
                    <>
                      <Separator className="my-2" />
                      <div className="px-2">
                        <SheetClose asChild>
                            <Link href="/" className="w-full">
                                <Button variant="outline" className="w-full justify-start text-[#EF4444] border-[#EF4444]/20 hover:bg-[#EF4444]/10">
                                <LogOut className="mr-2 h-4 w-4" />
                                Sign Out
                                </Button>
                            </Link>
                        </SheetClose>
                      </div>
                    </>
                  )}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search Bar (conditional) */}
      {searchOpen && (
        <div className="md:hidden border-b bg-white px-4 py-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" />
            <Input
              type="search"
              placeholder="Search topics, courses..."
              className="w-full pl-10"
              autoFocus
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0"
              onClick={() => setSearchOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
