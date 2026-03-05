"use client";

import * as React from "react";
import Link from "next/link";
import { 
  GraduationCap,
  Users,
  BookOpen,
  ClipboardList,
  BarChart3,
  FolderOpen,
  Settings,
  Plus,
  MoreHorizontal,
  Search,
  Filter,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Download,
  Eye,
  Mail
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
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// Mock data
const teacherInfo = {
  name: "Dr. Sarah Johnson",
  email: "sarah@xtreme-learn.com",
  avatar: "",
  totalStudents: 156,
  totalClasses: 5,
  coursesCreated: 8
};

const classes = [
  {
    id: "class1",
    name: "Physics 101 - Senior Secondary",
    subject: "Physics",
    students: 45,
    assignments: 3,
    nextAssignment: "Mar 15, 2024",
    progress: 65,
    isActive: true
  },
  {
    id: "class2",
    name: "Advanced Mathematics",
    subject: "Mathematics",
    students: 38,
    assignments: 2,
    nextAssignment: "Mar 12, 2024",
    progress: 78,
    isActive: true
  },
  {
    id: "class3",
    name: "Chemistry Basics",
    subject: "Chemistry",
    students: 32,
    assignments: 1,
    nextAssignment: "Mar 18, 2024",
    progress: 42,
    isActive: true
  },
  {
    id: "class4",
    name: "Biology Fundamentals",
    subject: "Biology",
    students: 41,
    assignments: 0,
    nextAssignment: null,
    progress: 55,
    isActive: true
  }
];

const students = [
  { id: "s1", name: "John Smith", email: "john@example.com", class: "Physics 101", lastActive: "2 hours ago", completed: 12, progress: 78, avatar: "" },
  { id: "s2", name: "Emma Wilson", email: "emma@example.com", class: "Physics 101", lastActive: "1 day ago", completed: 15, progress: 92, avatar: "" },
  { id: "s3", name: "Michael Brown", email: "michael@example.com", class: "Advanced Mathematics", lastActive: "3 hours ago", completed: 8, progress: 65, avatar: "" },
  { id: "s4", name: "Sophia Lee", email: "sophia@example.com", class: "Chemistry Basics", lastActive: "5 hours ago", completed: 10, progress: 72, avatar: "" },
  { id: "s5", name: "James Chen", email: "james@example.com", class: "Physics 101", lastActive: "Just now", completed: 18, progress: 88, avatar: "" },
];

const recentAssignments = [
  { id: "a1", title: "Kinematics Quiz", class: "Physics 101", dueDate: "Mar 15, 2024", submissions: 28, total: 45, status: "active" },
  { id: "a2", title: "Calculus Exercise 4", class: "Advanced Mathematics", dueDate: "Mar 12, 2024", submissions: 35, total: 38, status: "active" },
  { id: "a3", title: "Chemical Reactions Lab", class: "Chemistry Basics", dueDate: "Mar 18, 2024", submissions: 0, total: 32, status: "draft" },
];

const stats = [
  { label: "Total Students", value: "156", icon: Users, change: "+12%", color: "text-[#3B82F6]" },
  { label: "Active Classes", value: "5", icon: GraduationCap, change: "+1", color: "text-[#10B981]" },
  { label: "Assignments Due", value: "6", icon: ClipboardList, change: "2 this week", color: "text-[#F59E0B]" },
  { label: "Avg. Progress", value: "68%", icon: TrendingUp, change: "+5%", color: "text-[#8B5CF6]" },
];

export default function TeacherDashboardPage() {
  const [activeTab, setActiveTab] = React.useState("classes");

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      <main className="container py-8 px-4">
        {/* Page Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A]">Teacher Dashboard</h1>
            <p className="mt-1 text-[#64748B]">Manage your classes, students, and assignments</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/teach">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Reports
              </Button>
            </Link>
            <Link href="/teach">
              <Button className="bg-[#FF6B00] hover:bg-[#E56000]">
                <Plus className="mr-2 h-4 w-4" />
                Create Class
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#64748B]">{stat.label}</p>
                    <p className={cn("text-2xl font-bold", stat.color)}>{stat.value}</p>
                    <p className="text-xs text-[#64748B]">{stat.change}</p>
                  </div>
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-full", stat.color.replace('text-', 'bg-') + "/10")}>
                    <stat.icon className={cn("h-6 w-6", stat.color)} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="classes" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="classes">Classes</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" />
                <Input 
                  type="search" 
                  placeholder="Search..." 
                  className="w-64 pl-10"
                />
              </div>
            </div>
          </div>

          {/* Classes Tab */}
          <TabsContent value="classes" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Active Classes</h2>
              <Link href="/teach">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </Link>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              {classes.map((cls) => (
                <Card key={cls.id} className="transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-[#0F172A]">{cls.name}</h3>
                        <p className="text-sm text-[#64748B]">{cls.subject}</p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Link href="/teach">View Class</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="/teach">Edit Class</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="/teach">Archive Class</Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[#0F172A]">{cls.students}</p>
                        <p className="text-xs text-[#64748B]">Students</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[#0F172A]">{cls.assignments}</p>
                        <p className="text-xs text-[#64748B]">Assignments</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[#10B981]">{cls.progress}%</p>
                        <p className="text-xs text-[#64748B]">Progress</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Progress value={cls.progress} className="h-2" />
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#64748B]">
                          {cls.nextAssignment ? `Next: ${cls.nextAssignment}` : "No upcoming assignments"}
                        </span>
                        <Link href="/teach">
                          <Button variant="ghost" size="sm" className="h-6 text-[#FF6B00]">
                            View Class →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Archived Classes */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Archived Classes</CardTitle>
                <CardDescription>Previous classes that have been archived</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#64748B] text-center py-8">No archived classes</p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">All Students</h2>
              <Link href="/teach">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
              </Link>
            </div>
            
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Completed</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-[#FF6B00] text-white text-xs">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-[#0F172A]">{student.name}</p>
                            <p className="text-xs text-[#64748B]">{student.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{student.class}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-[#64748B]">{student.lastActive}</TableCell>
                      <TableCell className="text-sm">{student.completed}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={student.progress} className="h-2 w-20" />
                          <span className="text-sm">{student.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Link href="/teach">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Link href="/teach">
                            <Button variant="ghost" size="icon">
                              <Mail className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Assignments</h2>
              <Link href="/teach">
                <Button className="bg-[#FF6B00] hover:bg-[#E56000]">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Assignment
                </Button>
              </Link>
            </div>
            
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Assignment</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Submissions</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentAssignments.map((assignment) => (
                    <TableRow key={assignment.id}>
                      <TableCell className="font-medium text-[#0F172A]">{assignment.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{assignment.class}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">{assignment.dueDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-24 rounded-full bg-gray-200">
                            <div 
                              className="h-2 rounded-full bg-[#10B981]" 
                              style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm">{assignment.submissions}/{assignment.total}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={assignment.status === "active" ? "bg-[#10B981]" : "bg-[#64748B]"}>
                          {assignment.status === "active" ? "Active" : "Draft"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link href="/teach">View Details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="/teach">Edit Assignment</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href="/teach">View Submissions</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-[#EF4444]">
                              <Link href="/teach">Delete</Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Reports</h2>
              <Link href="/teach">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Report
                </Button>
              </Link>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Progress Overview</CardTitle>
                  <CardDescription>Average progress across all classes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {classes.map((cls) => (
                      <div key={cls.id} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-[#0F172A]">{cls.name}</span>
                          <span className="font-medium text-[#0F172A]">{cls.progress}%</span>
                        </div>
                        <Progress value={cls.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mastery Progress</CardTitle>
                  <CardDescription>Skill mastery by topic</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#0F172A]">Physics Fundamentals</span>
                        <Badge className="bg-[#10B981]">Mastered</Badge>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#0F172A]">Kinematics</span>
                        <Badge className="bg-[#3B82F6]">Proficient</Badge>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#0F172A]">Thermodynamics</span>
                        <Badge className="bg-[#F59E0B]">Familiar</Badge>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#0F172A]">Waves & Sound</span>
                        <Badge variant="outline">Not Started</Badge>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
