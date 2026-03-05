"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Users,
  Plus,
  MoreHorizontal,
  Search,
  Calendar,
  Clock,
  BarChart3,
  Award,
  Settings,
  Eye,
  Mail,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  Shield,
  Timer,
  Key,
  Trash2,
  UserPlus
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Mock data
const parentInfo = {
  name: "Mrs. Jane Doe",
  email: "jane@example.com",
  childrenCount: 2
};

const children = [
  {
    id: "child1",
    name: "Alex Doe",
    username: "alex_doe",
    avatar: "",
    age: 12,
    gradeLevel: "Grade 7",
    lastActive: "2 hours ago",
    currentCourse: "Mathematics - Fractions",
    overallProgress: 68,
    totalTimeSpent: "24 hours",
    badges: 5,
    streak: 5
  },
  {
    id: "child2",
    name: "Emma Doe",
    username: "emma_doe",
    avatar: "",
    age: 9,
    gradeLevel: "Grade 4",
    lastActive: "1 day ago",
    currentCourse: "English - Reading Basics",
    overallProgress: 45,
    totalTimeSpent: "12 hours",
    badges: 3,
    streak: 2
  }
];

const childActivity = [
  { id: "1", child: "Alex Doe", action: "Completed lesson", detail: "Introduction to Fractions", time: "2 hours ago" },
  { id: "2", child: "Alex Doe", action: "Earned badge", detail: "Quick Learner", time: "3 hours ago" },
  { id: "3", child: "Emma Doe", action: "Started course", detail: "English - Reading Basics", time: "1 day ago" },
  { id: "4", child: "Alex Doe", action: "Completed assignment", detail: "Math Quiz 3", time: "1 day ago" },
];

export default function ParentDashboardPage() {
  const [showAddChildDialog, setShowAddChildDialog] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      <main className="container py-8 px-4">
        {/* Page Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A]">Parent Dashboard</h1>
            <p className="mt-1 text-[#64748B]">Monitor your children's learning progress</p>
          </div>
          <Button className="bg-[#FF6B00] hover:bg-[#E56000]" onClick={() => setShowAddChildDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Child
          </Button>
        </div>

        {/* Children Overview */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {children.map((child) => (
            <Card key={child.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardContent className="p-0">
                <div className="flex">
                  {/* Child Info */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="bg-[#FF6B00] text-white text-xl">
                            {child.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-semibold text-[#0F172A]">{child.name}</h3>
                          <p className="text-sm text-[#64748B]">@{child.username}</p>
                          <p className="text-xs text-[#64748B]">{child.gradeLevel} • Age {child.age}</p>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Report
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-[#EF4444]">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove Child
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    
                    {/* Current Course */}
                    <div className="mb-4">
                      <p className="text-xs text-[#64748B] mb-1">Currently Learning</p>
                      <p className="font-medium text-[#0F172A]">{child.currentCourse}</p>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-xl font-bold text-[#0F172A]">{child.overallProgress}%</p>
                        <p className="text-xs text-[#64748B]">Progress</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-[#0F172A]">{child.badges}</p>
                        <p className="text-xs text-[#64748B]">Badges</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-[#0F172A]">{child.streak}</p>
                        <p className="text-xs text-[#64748B]">🔥 Streak</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-[#0F172A]">{child.totalTimeSpent}</p>
                        <p className="text-xs text-[#64748B]">Time</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <Progress value={child.overallProgress} className="h-2 mb-4" />
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-[#64748B]">Last active: {child.lastActive}</p>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs for more details */}
        <Tabs defaultValue="activity" className="space-y-6">
          <TabsList>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="progress">Progress Reports</TabsTrigger>
            <TabsTrigger value="settings">Child Settings</TabsTrigger>
          </TabsList>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Learning activities across all your children</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Child</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {childActivity.map((activity) => (
                      <TableRow key={activity.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-[#FF6B00] text-white text-xs">
                                {activity.child.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{activity.child}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{activity.action}</Badge>
                        </TableCell>
                        <TableCell className="text-[#64748B]">{activity.detail}</TableCell>
                        <TableCell className="text-[#64748B]">{activity.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            {children.map((child) => (
              <Card key={child.id}>
                <CardHeader>
                  <CardTitle>{child.name}'s Progress</CardTitle>
                  <CardDescription>Detailed learning progress for {child.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-[#0F172A]">Course Progress</h4>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-[#0F172A]">Mathematics - Fractions</span>
                            <span className="font-medium">75%</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-[#0F172A]">Science - Basic Physics</span>
                            <span className="font-medium">45%</span>
                          </div>
                          <Progress value={45} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-[#0F172A]">English - Reading</span>
                            <span className="font-medium">60%</span>
                          </div>
                          <Progress value={60} className="h-2" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-[#0F172A]">Time Spent</h4>
                      <div className="rounded-lg bg-[#F8FAFC] p-4">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold text-[#0F172A]">24h</p>
                            <p className="text-xs text-[#64748B]">This Week</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-[#0F172A]">6h</p>
                            <p className="text-xs text-[#64748B]">Today</p>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-[#0F172A]">1.5h</p>
                            <p className="text-xs text-[#64748B]">Avg/Day</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            {children.map((child) => (
              <Card key={child.id}>
                <CardHeader>
                  <CardTitle>{child.name}'s Settings</CardTitle>
                  <CardDescription>Manage controls for {child.name}'s account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-[#0F172A] flex items-center gap-2">
                        <Key className="h-4 w-4" />
                        Account
                      </h4>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          Reset Password
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          Change Username
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-[#0F172A] flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Safety Controls
                      </h4>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <Timer className="mr-2 h-4 w-4" />
                          Set Daily Time Limit
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Shield className="mr-2 h-4 w-4" />
                          Content Restrictions
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-[#EF4444]">Danger Zone</h4>
                      <p className="text-sm text-[#64748B]">These actions cannot be undone</p>
                    </div>
                    <Button variant="destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove Child
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Add Child Dialog */}
        <Dialog open={showAddChildDialog} onOpenChange={setShowAddChildDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add Child</DialogTitle>
              <DialogDescription>
                Create a linked account for your child. No email needed.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="childName">Child's Name</Label>
                <Input id="childName" placeholder="Enter child's name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="childUsername">Username</Label>
                <Input id="childUsername" placeholder="Choose a username" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="grade">Grade Level (Optional)</Label>
                <Input id="grade" placeholder="e.g., Grade 5" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowAddChildDialog(false)}>
                Cancel
              </Button>
              <Button className="bg-[#FF6B00] hover:bg-[#E56000]">
                Create Account
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
