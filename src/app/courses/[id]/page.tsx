"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Play, Star, Users, Clock, BookOpen, Award, CheckCircle, Heart, Share2, ChevronDown, ChevronRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Mock course data
const course = {
  id: "1",
  title: "Complete Web Development Bootcamp 2024",
  description: "Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack developer. This comprehensive course covers everything from the basics to advanced topics.",
  shortDescription: "Master web development from scratch",
  instructor: {
    name: "Sarah Johnson",
    avatar: "",
    bio: "Senior Software Engineer with 10+ years of experience. Previously worked at Google and Meta.",
    courses: 8,
    students: 45000,
    rating: 4.9
  },
  rating: 4.8,
  reviewCount: 2340,
  students: 12500,
  lastUpdated: "March 2024",
  price: "Free",
  level: "Beginner",
  duration: "12 weeks",
  language: "English",
  whatYouWillLearn: [
    "Build real-world websites and web applications",
    "Master HTML, CSS, and JavaScript",
    "Learn React.js from scratch",
    "Understand Node.js and Express",
    "Work with databases like MongoDB",
    "Deploy applications to the cloud"
  ],
  requirements: [
    "No programming experience required",
    "A computer with internet access",
    "Desire to learn web development"
  ],
  sections: [
    {
      title: "Getting Started",
      lessons: [
        { title: "Welcome to the Course", duration: "5:30", type: "video", isPreview: true },
        { title: "How the Internet Works", duration: "12:45", type: "video", isPreview: true },
        { title: "Setting Up Your Environment", duration: "15:20", type: "video", isPreview: false },
      ]
    },
    {
      title: "HTML Fundamentals",
      lessons: [
        { title: "Introduction to HTML", duration: "10:00", type: "video", isPreview: false },
        { title: "HTML Tags and Elements", duration: "18:30", type: "video", isPreview: false },
        { title: "Forms and Inputs", duration: "22:15", type: "video", isPreview: false },
        { title: "HTML Quiz", duration: "10:00", type: "exercise", isPreview: false },
      ]
    },
    {
      title: "CSS Styling",
      lessons: [
        { title: "CSS Basics", duration: "14:20", type: "video", isPreview: false },
        { title: "Selectors and Specificity", duration: "16:45", type: "video", isPreview: false },
        { title: "Flexbox Layout", duration: "25:00", type: "video", isPreview: false },
        { title: "CSS Grid", duration: "20:30", type: "video", isPreview: false },
      ]
    }
  ]
};

export default function CourseDetailPage() {
  const params = useParams();
  const [expandedSections, setExpandedSections] = React.useState<string[]>(["Getting Started"]);
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E1E2F] via-[#2D2D44] to-[#1E1E2F] py-12 text-white">
        <div className="container px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex gap-2 mb-4">
                <Badge className="bg-[#FF6B00]">{course.level}</Badge>
                <Badge className="bg-[#10B981]">{course.price}</Badge>
              </div>
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-300 mb-6">{course.shortDescription}</p>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-[#FF6B00] text-[#FF6B00]" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-400">({course.reviewCount.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={course.instructor.avatar} />
                  <AvatarFallback className="bg-[#FF6B00]">
                    {course.instructor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{course.instructor.name}</p>
                  <p className="text-sm text-gray-400">Last updated {course.lastUpdated}</p>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div>
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#FF6B00]/20 to-[#3B82F6]/20 flex items-center justify-center">
                  <Play className="h-16 w-16 text-white/80" />
                </div>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold mb-4">
                    {course.price === "Free" ? "Free" : `$${course.price}`}
                  </div>
                  <Button className="w-full bg-[#FF6B00] hover:bg-[#E56000] h-12 text-lg mb-3">
                    {course.price === "Free" ? "Start Learning" : "Buy Now"}
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" onClick={() => setIsWishlisted(!isWishlisted)}>
                      <Heart className={`mr-2 h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                      {isWishlisted ? "Saved" : "Wishlist"}
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Content */}
      <main className="container py-8 px-4">
        <Tabs defaultValue="overview">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            {/* What You'll Learn */}
            <div>
              <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {course.whatYouWillLearn.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-2">
                {course.requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-[#64748B]" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="curriculum">
            <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
            <div className="space-y-3">
              {course.sections.map((section) => (
                <Card key={section.title}>
                  <CardContent className="p-0">
                    <button 
                      className="w-full p-4 flex items-center justify-between"
                      onClick={() => toggleSection(section.title)}
                    >
                      <span className="font-semibold">{section.title}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${expandedSections.includes(section.title) ? "" : "rotate-180"}`} />
                    </button>
                    {expandedSections.includes(section.title) && (
                      <div className="border-t px-4 pb-4 space-y-2">
                        {section.lessons.map((lesson, i) => (
                          <div key={i} className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                              {lesson.type === "video" && <Play className="h-4 w-4 text-[#64748B]" />}
                              {lesson.type === "exercise" && <BookOpen className="h-4 w-4 text-[#64748B]" />}
                              <span>{lesson.title}</span>
                              {lesson.isPreview && <Badge variant="outline" className="text-xs">Preview</Badge>}
                            </div>
                            <span className="text-sm text-[#64748B]">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
            <div className="flex items-center gap-4 mb-8">
              <p className="text-5xl font-bold text-[#FF6B00]">{course.rating}</p>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={`h-5 w-5 ${i <= course.rating ? "fill-[#FF6B00] text-[#FF6B00]" : "text-gray-300"}`} />
                  ))}
                </div>
                <p className="text-[#64748B]">{course.reviewCount.toLocaleString()} reviews</p>
              </div>
            </div>
            <p className="text-[#64748B]">Reviews section coming soon...</p>
          </TabsContent>
          
          <TabsContent value="instructor">
            <h2 className="text-2xl font-bold mb-4">About the Instructor</h2>
            <div className="flex gap-6">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="bg-[#FF6B00] text-2xl">
                  {course.instructor.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                <p className="text-[#64748B] mb-4">{course.instructor.bio}</p>
                <div className="flex gap-6 text-sm">
                  <span>{course.instructor.courses} courses</span>
                  <span>{course.instructor.students.toLocaleString()} students</span>
                  <span>{course.instructor.rating} rating</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
