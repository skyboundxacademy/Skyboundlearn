"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { GraduationCap, Calendar, Award, BookOpen, MessageSquare, UserPlus, Badge as BadgeIcon } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Mock user data
const user = {
  name: "John Doe",
  username: "johndoe",
  bio: "Passionate learner | Web Developer | Always curious",
  avatar: "",
  joinedAt: "January 2024",
  coursesCompleted: 12,
  hoursLearned: 156,
  badges: [
    { name: "Quick Learner", icon: "⚡", earned: true },
    { name: "Course Master", icon: "🎓", earned: true },
    { name: "7 Day Streak", icon: "🔥", earned: true },
    { name: "Problem Solver", icon: "🧩", earned: false },
  ],
  certificates: [
    { title: "Web Development Bootcamp", date: "Dec 2024" },
    { title: "JavaScript Fundamentals", date: "Nov 2024" },
  ],
  recentActivity: [
    { action: "Completed lesson", course: "React Fundamentals", time: "2 hours ago" },
    { action: "Earned badge", badge: "Quick Learner", time: "1 day ago" },
    { action: "Started course", course: "Advanced CSS", time: "3 days ago" },
  ]
};

export default function ProfilePage() {
  const params = useParams();
  const username = params.username as string;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      <main className="container py-8 px-4">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Avatar className="h-24 w-24 border-4 border-[#FF6B00]">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-[#FF6B00] text-white text-2xl">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-[#0F172A]">{user.name}</h1>
                    <p className="text-[#64748B]">@{user.username}</p>
                    <p className="mt-2 text-[#64748B]">{user.bio}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-[#FF6B00] hover:bg-[#E56000]">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Follow
                    </Button>
                    <Button variant="outline">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-6 mt-6">
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {user.joinedAt}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <BookOpen className="h-4 w-4" />
                    <span>{user.coursesCompleted} courses</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <Award className="h-4 w-4" />
                    <span>{user.hoursLearned} hours</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-[#FF6B00]">{user.coursesCompleted}</p>
              <p className="text-[#64748B]">Courses Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-[#3B82F6]">{user.hoursLearned}</p>
              <p className="text-[#64748B]">Hours Learned</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-[#10B981]">3</p>
              <p className="text-[#64748B]">Badges Earned</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="badges">
          <TabsList>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="badges">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {user.badges.map((badge) => (
                <Card key={badge.name} className={badge.earned ? "" : "opacity-50"}>
                  <CardContent className="p-6 text-center">
                    <span className="text-4xl">{badge.icon}</span>
                    <p className="mt-2 font-medium text-[#0F172A]">{badge.name}</p>
                    {badge.earned ? (
                      <Badge className="mt-2 bg-[#10B981]">Earned</Badge>
                    ) : (
                      <Badge variant="outline" className="mt-2">Locked</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certificates">
            <div className="space-y-4 mt-4">
              {user.certificates.map((cert) => (
                <Card key={cert.title}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Award className="h-8 w-8 text-[#FF6B00]" />
                      <div>
                        <p className="font-medium text-[#0F172A]">{cert.title}</p>
                        <p className="text-sm text-[#64748B]">Issued {cert.date}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="activity">
            <div className="space-y-4 mt-4">
              {user.recentActivity.map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-[#FF6B00]" />
                  <div className="flex-1">
                    <p className="text-[#0F172A]">{activity.action}</p>
                    <p className="text-sm text-[#64748B]">
                      {activity.course || activity.badge} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
