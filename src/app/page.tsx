"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Search, 
  Play, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  BookOpen,
  Code,
  Calculator,
  FlaskConical,
  Globe,
  GraduationCap,
  MessageCircle,
  ChevronRight,
  Zap,
  Target,
  Trophy
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Featured courses data
const featuredCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 12500,
    price: "Free",
    thumbnail: "/courses/web-dev.jpg",
    category: "Computing",
    level: "Beginner",
    badges: ["bestseller"]
  },
  {
    id: "2",
    title: "Advanced Mathematics Masterclass",
    instructor: "Dr. Michael Chen",
    rating: 4.9,
    students: 8200,
    price: "Pro",
    thumbnail: "/courses/math.jpg",
    category: "Mathematics",
    level: "Advanced",
    badges: ["new"]
  },
  {
    id: "3",
    title: "Physics for Engineers",
    instructor: "Prof. Emily Davis",
    rating: 4.7,
    students: 5600,
    price: "Free",
    thumbnail: "/courses/physics.jpg",
    category: "Science",
    level: "Intermediate",
    badges: []
  },
  {
    id: "4",
    title: "JAMB Prep Complete Guide",
    instructor: "Mr. Ahmed Bello",
    rating: 4.9,
    students: 25000,
    price: "Free",
    thumbnail: "/courses/jamb.jpg",
    category: "Test Prep",
    level: "Beginner",
    badges: ["trending", "bestseller"]
  }
];

// Subject categories
const subjects = [
  { name: "Mathematics", icon: Calculator, color: "bg-blue-500", courses: 120 },
  { name: "Science", icon: FlaskConical, color: "bg-green-500", courses: 85 },
  { name: "Computing", icon: Code, color: "bg-purple-500", courses: 95 },
  { name: "Languages", icon: Globe, color: "bg-orange-500", courses: 65 },
  { name: "Business", icon: TrendingUp, color: "bg-yellow-500", courses: 45 },
  { name: "Test Prep", icon: GraduationCap, color: "bg-red-500", courses: 30 }
];

// Testimonials
const testimonials = [
  {
    name: "Amara Okonkwo",
    role: "Student, Lagos",
    avatar: "",
    content: "Xtreme Learn helped me score 320 in JAMB! The AI-powered learning suggestions made studying so much easier.",
    rating: 5
  },
  {
    name: "Chidi Eze",
    role: "University Student, Abuja",
    avatar: "",
    content: "The web development course was incredible. I got my first job as a junior developer after completing it.",
    rating: 5
  },
  {
    name: "Fatima Ibrahim",
    role: "Parent, Kano",
    avatar: "",
    content: "I can track my children's progress easily. The parent dashboard is a game-changer for monitoring their studies.",
    rating: 5
  }
];

// Stats
const stats = [
  { label: "Active Learners", value: "50,000+", icon: Users },
  { label: "Courses Available", value: "500+", icon: BookOpen },
  { label: "Expert Instructors", value: "200+", icon: Award },
  { label: "Completion Rate", value: "94%", icon: Target }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E1E2F] via-[#2D2D44] to-[#1E1E2F] py-20 lg:py-28">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="mb-4 border-[#FF6B00]/50 bg-[#FF6B00]/10 text-[#FF6B00]">
              <Zap className="mr-1 h-3 w-3" />
              Powered by Park AI
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Master Any Subject with
              <span className="block text-[#FF6B00]">AI-Powered Learning</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Join thousands of learners achieving their goals with personalized courses, 
              expert instructors, and intelligent learning assistants.
            </p>
            
            {/* Search Bar */}
            <div className="mx-auto mb-8 max-w-xl">
              <div className="flex gap-2 rounded-xl bg-white p-2 shadow-xl">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input 
                    type="search" 
                    placeholder="What do you want to learn?" 
                    className="border-0 bg-transparent pl-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button className="bg-[#FF6B00] hover:bg-[#E56000] px-8">
                  Search
                </Button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-sm text-gray-400">Popular:</span>
              {["Web Development", "JAMB Prep", "Mathematics", "Physics"].map((term) => (
                <Link 
                  key={term} 
                  href={`/courses?search=${encodeURIComponent(term)}`}
                  className="rounded-full bg-white/10 px-4 py-1 text-sm text-gray-300 transition-colors hover:bg-white/20 hover:text-white"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-white py-8">
        <div className="container px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B00]/10">
                  <stat.icon className="h-6 w-6 text-[#FF6B00]" />
                </div>
                <div className="text-2xl font-bold text-[#0F172A]">{stat.value}</div>
                <div className="text-sm text-[#64748B]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">Explore Subjects</h2>
              <p className="mt-1 text-[#64748B]">Find the perfect course for your goals</p>
            </div>
            <Link href="/courses" className="hidden items-center text-sm font-medium text-[#FF6B00] hover:underline sm:flex">
              View all subjects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {subjects.map((subject) => (
              <Link
                key={subject.name}
                href={`/courses?category=${subject.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${subject.color}`}>
                  <subject.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#0F172A]">{subject.name}</h3>
                <p className="text-sm text-[#64748B]">{subject.courses} courses</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-white py-16">
        <div className="container px-4">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">Featured Courses</h2>
              <p className="mt-1 text-[#64748B]">Top-rated courses from expert instructors</p>
            </div>
            <Link href="/courses" className="flex items-center text-sm font-medium text-[#FF6B00] hover:underline">
              Browse all courses <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative aspect-video bg-gradient-to-br from-[#FF6B00]/20 to-[#3B82F6]/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white/80" />
                    </div>
                    {course.badges.includes("bestseller") && (
                      <Badge className="absolute left-2 top-2 bg-[#FF6B00]">Bestseller</Badge>
                    )}
                    {course.badges.includes("new") && (
                      <Badge className="absolute left-2 top-2 bg-[#3B82F6]">NEW</Badge>
                    )}
                    {course.badges.includes("trending") && (
                      <Badge variant="outline" className="absolute left-2 top-2 border-[#FF6B00] text-[#FF6B00]">Trending</Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{course.category}</Badge>
                      <Badge variant="outline" className="text-xs">{course.level}</Badge>
                    </div>
                    <h3 className="mb-1 font-semibold text-[#0F172A] line-clamp-2 group-hover:text-[#FF6B00]">
                      {course.title}
                    </h3>
                    <p className="mb-3 text-sm text-[#64748B]">{course.instructor}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-[#FF6B00] text-[#FF6B00]" />
                        <span className="text-sm font-medium">{course.rating}</span>
                        <span className="text-xs text-[#64748B]">({course.students.toLocaleString()})</span>
                      </div>
                      <Badge className={course.price === "Free" ? "bg-[#10B981]" : "bg-[#FF6B00]"}>
                        {course.price}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#0F172A] sm:text-3xl">Why Choose Xtreme Learn?</h2>
            <p className="mt-2 text-[#64748B]">Our platform combines the best of online education with cutting-edge AI technology</p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6B00]/10">
                <MessageCircle className="h-8 w-8 text-[#FF6B00]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0F172A]">Park AI Assistant</h3>
              <p className="text-[#64748B]">Get instant help from our AI tutor that understands your learning context</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#3B82F6]/10">
                <Target className="h-8 w-8 text-[#3B82F6]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0F172A]">Personalized Learning</h3>
              <p className="text-[#64748B]">Courses adapt to your pace and learning style for maximum efficiency</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#10B981]/10">
                <Trophy className="h-8 w-8 text-[#10B981]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#0F172A]">Earn Certificates</h3>
              <p className="text-[#64748B]">Get recognized credentials upon course completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#0F172A] sm:text-3xl">What Our Learners Say</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FF6B00] text-[#FF6B00]" />
                    ))}
                  </div>
                  <p className="mb-4 text-[#64748B]">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-[#FF6B00] text-white">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-[#0F172A]">{testimonial.name}</p>
                      <p className="text-sm text-[#64748B]">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] px-6 py-12 text-center sm:px-12">
            <div className="relative z-10">
              <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Ready to Start Learning?</h2>
              <p className="mx-auto mb-6 max-w-xl text-white/90">
                Join thousands of learners and start your journey to mastery today. 
                It's free to get started!
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link href="/signup">
                  <Button size="lg" variant="secondary" className="font-semibold">
                    Create Free Account
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#FF6B00] to-[#FF8C00]">
                  <span className="text-xl font-bold text-white">X</span>
                </div>
                <span className="text-xl font-bold text-[#0F172A]">Xtreme Learn</span>
              </div>
              <p className="text-sm text-[#64748B]">
                Your AI-powered learning platform for mastering any subject.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-[#0F172A]">Platform</h4>
              <ul className="space-y-2 text-sm text-[#64748B]">
                <li><Link href="/courses" className="hover:text-[#FF6B00]">Browse Courses</Link></li>
                <li><Link href="/for-schools" className="hover:text-[#FF6B00]">For Schools</Link></li>
                <li><Link href="/for-teachers" className="hover:text-[#FF6B00]">For Teachers</Link></li>
                <li><Link href="/for-parents" className="hover:text-[#FF6B00]">For Parents</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-[#0F172A]">Company</h4>
              <ul className="space-y-2 text-sm text-[#64748B]">
                <li><Link href="/about" className="hover:text-[#FF6B00]">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-[#FF6B00]">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-[#FF6B00]">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-[#FF6B00]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-[#0F172A]">Support</h4>
              <ul className="space-y-2 text-sm text-[#64748B]">
                <li><Link href="/help" className="hover:text-[#FF6B00]">Help Center</Link></li>
                <li><Link href="/privacy" className="hover:text-[#FF6B00]">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#FF6B00]">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#64748B] sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Xtreme Learn. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#FF6B00]">Twitter</Link>
              <Link href="#" className="hover:text-[#FF6B00]">Facebook</Link>
              <Link href="#" className="hover:text-[#FF6B00]">Instagram</Link>
              <Link href="#" className="hover:text-[#FF6B00]">YouTube</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
