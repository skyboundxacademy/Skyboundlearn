"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Flame, 
  Target, 
  Play, 
  ChevronRight, 
  BookOpen,
  Calendar,
  Award,
  Heart,
  MessageSquare,
  Trophy,
  Clock,
  TrendingUp,
  Star,
  Users,
  Bell,
  Lightbulb
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { LearnerSidebar } from "@/components/dashboard/learner/learner-sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Mock data for the learner dashboard
const currentUser = {
  name: "John",
  streak: 7,
  xp: 1250,
  level: 5,
  weeklyGoal: 5,
  weeklyProgress: 3
};

const enrolledCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    thumbnail: "/courses/web-dev.jpg",
    currentUnit: "React Fundamentals",
    progress: 45,
    totalLessons: 120,
    completedLessons: 54,
    nextLesson: "Introduction to Components"
  },
  {
    id: "2",
    title: "Advanced Mathematics",
    instructor: "Dr. Michael Chen",
    thumbnail: "/courses/math.jpg",
    currentUnit: "Linear Algebra",
    progress: 72,
    totalLessons: 80,
    completedLessons: 58,
    nextLesson: "Matrix Operations"
  },
  {
    id: "3",
    title: "Physics for Engineers",
    instructor: "Prof. Emily Davis",
    thumbnail: "/courses/physics.jpg",
    currentUnit: "Thermodynamics",
    progress: 28,
    totalLessons: 60,
    completedLessons: 17,
    nextLesson: "Heat and Temperature"
  }
];

const myClasses = [
  {
    id: "class1",
    name: "Physics 101",
    teacher: "Mr. David",
    upcomingAssignments: 2,
    nextDue: "Mar 10, 2024"
  },
  {
    id: "class2",
    name: "Mathematics Advanced",
    teacher: "Mrs. Johnson",
    upcomingAssignments: 1,
    nextDue: "Mar 12, 2024"
  }
];

const recommendations = [
  {
    id: "rec1",
    title: "Data Structures & Algorithms",
    reason: "Because you studied Web Development",
    rating: 4.8,
    students: 8500,
    level: "Intermediate"
  },
  {
    id: "rec2",
    title: "JAMB Prep - Mathematics",
    reason: "Popular in Nigeria",
    rating: 4.9,
    students: 15000,
    level: "Beginner"
  }
];

const badges = [
  { id: "1", name: "7 Day Streak", icon: "🔥", earned: true },
  { id: "2", name: "Course Completer", icon: "🎓", earned: true },
  { id: "3", name: "Quick Learner", icon: "⚡", earned: true },
  { id: "4", name: "Problem Solver", icon: "🧩", earned: false },
  { id: "5", name: "Perfect Score", icon: "💯", earned: false },
  { id: "6", name: "Community Helper", icon: "🤝", earned: false }
];

const leaderboard = [
  { rank: 1, name: "Emma Wilson", xp: 4500, avatar: "" },
  { rank: 2, name: "James Brown", xp: 3800, avatar: "" },
  { rank: 3, name: "Sophia Lee", xp: 3200, avatar: "" },
  { rank: 4, name: "You", xp: 1250, avatar: "", isCurrentUser: true },
  { rank: 5, name: "Michael Chen", xp: 980, avatar: "" }
];

export default function LearnerHomePage() {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <LearnerSidebar 
          collapsed={sidebarCollapsed} 
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
        />
        
        {/* Main Content */}
        <main className={cn(
          "flex-1 transition-all duration-300",
          sidebarCollapsed ? "ml-16" : "ml-64"
        )}>
          <div className="container py-8 px-4">
            {/* Welcome Banner */}
            <Card className="mb-6 overflow-hidden border-none bg-gradient-to-r from-[#1E1E2F] to-[#2D2D44] text-white">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">👋 Welcome back, {currentUser.name}!</h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Flame className="h-4 w-4 text-[#FF6B00]" />
                        <span className="font-semibold">{currentUser.streak} day streak</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span>{currentUser.xp} XP</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        <span>Level {currentUser.level}</span>
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4" />
                      <span className="text-sm font-medium">Daily Goal</span>
                    </div>
                    <div className="text-sm">
                      Complete {currentUser.weeklyGoal - currentUser.weeklyProgress} more lessons to earn your weekly badge!
                    </div>
                    <Progress value={(currentUser.weeklyProgress / currentUser.weeklyGoal) * 100} className="mt-2 h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daily Learning Challenge */}
            <Card className="mb-6 border-[#FF6B00]/20 bg-gradient-to-r from-[#FF6B00]/5 to-[#FF6B00]/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B00]">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0F172A]">Daily Learning Challenge</h3>
                      <p className="text-sm text-[#64748B]">Complete 3 lessons today • Earn 50 XP + a badge</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-[#64748B]">Progress</p>
                      <p className="font-semibold text-[#0F172A]">2/3 completed</p>
                    </div>
                    <Button className="bg-[#FF6B00] hover:bg-[#E56000]">
                      Claim Reward
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Resume Learning */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Resume Learning</CardTitle>
                    <Button variant="ghost" size="sm" className="text-[#FF6B00]">
                      View All <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {enrolledCourses.map((course) => (
                        <div key={course.id} className="flex gap-4 rounded-lg border p-4 transition-colors hover:bg-[#F8FAFC]">
                          <div className="h-20 w-32 flex-shrink-0 rounded-lg bg-gradient-to-br from-[#FF6B00]/20 to-[#3B82F6]/20 flex items-center justify-center">
                            <Play className="h-8 w-8 text-white/80" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-[#0F172A] truncate">{course.title}</h4>
                            <p className="text-sm text-[#64748B] mb-2">{course.instructor}</p>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">{course.currentUnit}</Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <Progress value={course.progress} className="h-2 flex-1" />
                              <span className="text-xs text-[#64748B]">{course.progress}%</span>
                            </div>
                          </div>
                          <Button className="bg-[#FF6B00] hover:bg-[#E56000] self-center">
                            <Play className="mr-2 h-4 w-4" />
                            Continue
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* My Classes */}
                {myClasses.length > 0 && (
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle className="text-lg">My Classes</CardTitle>
                      <Button variant="ghost" size="sm" className="text-[#FF6B00]">
                        View All <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {myClasses.map((cls) => (
                          <div key={cls.id} className="flex items-center justify-between rounded-lg border p-4">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center">
                                <BookOpen className="h-5 w-5 text-[#3B82F6]" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-[#0F172A]">{cls.name}</h4>
                                <p className="text-sm text-[#64748B]">{cls.teacher}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <p className="text-sm text-[#64748B]">{cls.upcomingAssignments} upcoming</p>
                                <p className="text-xs text-[#64748B]">Due: {cls.nextDue}</p>
                              </div>
                              <Button variant="outline" size="sm">
                                Go to Class
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* My Courses Grid */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">My Courses</CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-[#FF6B00]">
                        Edit Courses
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {enrolledCourses.map((course) => (
                        <Link key={course.id} href={`/learn/courses/${course.id}`} className="group">
                          <div className="rounded-lg border overflow-hidden transition-all hover:shadow-md">
                            <div className="h-24 bg-gradient-to-br from-[#FF6B00]/20 to-[#3B82F6]/20 flex items-center justify-center">
                              <Play className="h-8 w-8 text-white/80" />
                            </div>
                            <div className="p-3">
                              <h4 className="font-medium text-sm text-[#0F172A] line-clamp-2 group-hover:text-[#FF6B00]">
                                {course.title}
                              </h4>
                              <Progress value={course.progress} className="mt-2 h-1.5" />
                              <div className="mt-2 flex items-center justify-between text-xs text-[#64748B]">
                                <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                                <span>{course.progress}%</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommended for You */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recommended for You</CardTitle>
                    <CardDescription>Based on your learning history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {recommendations.map((rec) => (
                        <Link key={rec.id} href={`/courses/${rec.id}`} className="group">
                          <div className="rounded-lg border p-4 transition-all hover:shadow-md">
                            <p className="text-xs text-[#FF6B00] mb-1">{rec.reason}</p>
                            <h4 className="font-semibold text-[#0F172A] mb-2 group-hover:text-[#FF6B00]">{rec.title}</h4>
                            <div className="flex items-center gap-3 text-xs text-[#64748B]">
                              <span className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-[#FF6B00] text-[#FF6B00]" />
                                {rec.rating}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {rec.students.toLocaleString()}
                              </span>
                              <Badge variant="outline" className="text-xs">{rec.level}</Badge>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Sidebar Content */}
              <div className="space-y-6">
                {/* Badges */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg">Badges</CardTitle>
                    <Button variant="ghost" size="sm" className="text-[#FF6B00]">
                      View All
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-3">
                      {badges.map((badge) => (
                        <div 
                          key={badge.id} 
                          className={cn(
                            "flex flex-col items-center rounded-lg p-3 text-center transition-colors",
                            badge.earned ? "bg-[#FF6B00]/10" : "bg-gray-100 opacity-50"
                          )}
                        >
                          <span className="text-2xl mb-1">{badge.icon}</span>
                          <span className="text-xs font-medium text-[#0F172A]">{badge.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Leaderboard */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Leaderboard</CardTitle>
                    <CardDescription>This Week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {leaderboard.map((user) => (
                        <div 
                          key={user.rank} 
                          className={cn(
                            "flex items-center gap-3 rounded-lg p-2",
                            user.isCurrentUser && "bg-[#FF6B00]/10"
                          )}
                        >
                          <span className={cn(
                            "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
                            user.rank === 1 ? "bg-yellow-400 text-yellow-900" :
                            user.rank === 2 ? "bg-gray-300 text-gray-700" :
                            user.rank === 3 ? "bg-amber-600 text-white" :
                            "bg-gray-200 text-gray-600"
                          )}>
                            {user.rank}
                          </span>
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-[#FF6B00] text-white text-xs">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className={cn(
                              "text-sm font-medium",
                              user.isCurrentUser ? "text-[#FF6B00]" : "text-[#0F172A]"
                            )}>
                              {user.name}
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-[#64748B]">{user.xp.toLocaleString()} XP</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View Full Leaderboard
                    </Button>
                  </CardContent>
                </Card>

                {/* Park AI Tip */}
                <Card className="border-[#3B82F6]/20 bg-gradient-to-r from-[#3B82F6]/5 to-[#3B82F6]/10">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3B82F6]">
                        <Lightbulb className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0F172A]">Park AI Suggestion</h4>
                        <p className="text-sm text-[#64748B] mt-1">
                          Based on your progress in Web Development, try reviewing JavaScript arrays before starting React hooks!
                        </p>
                        <Button variant="link" className="h-auto p-0 text-[#3B82F6] mt-2">
                          Learn now →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
