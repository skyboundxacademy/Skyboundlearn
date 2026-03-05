"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { 
  Search, 
  Filter, 
  Play, 
  Star, 
  ChevronDown,
  X,
  SlidersHorizontal,
  Grid3X3,
  List,
  Clock,
  Users
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

// Mock course data
const courses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Sarah Johnson",
    rating: 4.8,
    reviewCount: 2340,
    students: 12500,
    price: "Free",
    thumbnail: "/courses/web-dev.jpg",
    category: "Computing",
    level: "Beginner",
    duration: "12 weeks",
    badges: ["bestseller"],
    description: "Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack developer."
  },
  {
    id: "2",
    title: "Advanced Mathematics Masterclass",
    instructor: "Dr. Michael Chen",
    rating: 4.9,
    reviewCount: 890,
    students: 8200,
    price: "$49.99",
    thumbnail: "/courses/math.jpg",
    category: "Mathematics",
    level: "Advanced",
    duration: "8 weeks",
    badges: ["new"],
    description: "Master advanced calculus, linear algebra, and differential equations."
  },
  {
    id: "3",
    title: "Physics for Engineers",
    instructor: "Prof. Emily Davis",
    rating: 4.7,
    reviewCount: 560,
    students: 5600,
    price: "Free",
    thumbnail: "/courses/physics.jpg",
    category: "Science",
    level: "Intermediate",
    duration: "10 weeks",
    badges: [],
    description: "Comprehensive physics course covering mechanics, thermodynamics, and electromagnetism."
  },
  {
    id: "4",
    title: "JAMB Prep Complete Guide 2024",
    instructor: "Mr. Ahmed Bello",
    rating: 4.9,
    reviewCount: 4500,
   00,
    price: "Free",
    thumbnail: "/courses/jamb.jpg",
    category: "Test Prep",
    level: "Beginner",
    duration: "6 weeks",
    badges: ["trending", "bestseller"],
    description: "Complete preparation for JAMB UTME with past questions and mock exams."
  },
  {
    id: "5",
    title: "Introduction to Data Science",
    instructor: "Dr. James Wilson",
    rating: 4.8,
    reviewCount: 1200,
    students: 9800,
    price: "$39.99",
    thumbnail: "/courses/data-science.jpg",
    category: "Computing",
    level: "Intermediate",
    duration: "14 weeks",
    badges: [],
    description: "Learn Python, pandas, machine learning, and data visualization."
  },
  {
    id: "6",
    title: "English Literature Fundamentals",
    instructor: "Prof. Lisa Brown",
    rating: 4.6,
    reviewCount: 320,
    students: 2100,
    price: "Free",
    thumbnail: "/courses/english.jpg",
    category: "Humanities",
    level: "Beginner",
    duration: "8 weeks",
    badges: [],
    description: "Explore classic literature, poetry, and critical analysis."
  },
  {
    id: "7",
    title: "Korean for Beginners",
    instructor: "Ms. Min-ji Park",
    rating: 4.9,
    reviewCount: 2100,
    students: 15000,
    price: "Free",
    thumbnail: "/courses/korean.jpg",
    category: "Languages",
    level: "Beginner",
    duration: "10 weeks",
    badges: ["new"],
    description: "Start your Korean language journey with Hangul and basic conversations."
  },
  {
    id: "8",
    title: "Business Strategy & Entrepreneurship",
    instructor: "Dr. Robert Smith",
    rating: 4.7,
    reviewCount: 780,
    students: 4300,
    price: "$59.99",
    thumbnail: "/courses/business.jpg",
    category: "Business",
    level: "Intermediate",
    duration: "8 weeks",
    badges: [],
    description: "Learn to build and scale successful businesses from scratch."
  }
];

// Filter options
const categories = ["All", "Mathematics", "Science", "Computing", "Humanities", "Languages", "Business", "Test Prep"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const durations = ["Any Duration", "Under 1 hour", "1-4 weeks", "1-3 months"];

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedLevel, setSelectedLevel] = React.useState("All Levels");
  const [selectedDuration, setSelectedDuration] = React.useState("Any Duration");
  const [showFilters, setShowFilters] = React.useState(false);

  const searchQuery = searchParams.get("search") || "";
  const categoryParam = searchParams.get("category") || "";

  React.useEffect(() => {
    if (categoryParam && categories.includes(categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1))) {
      setSelectedCategory(categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1));
    }
  }, [categoryParam]);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = searchQuery === "" || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      <main className="container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0F172A]">Explore Courses</h1>
          <p className="mt-1 text-[#64748B]">Discover {courses.length}+ courses to advance your learning journey</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748B]" />
            <Input 
              type="search" 
              placeholder="Search courses..." 
              className="pl-10"
              defaultValue={searchQuery}
            />
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Filter Button */}
            <Sheet open={showFilters} onOpenChange={setShowFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>Filter Courses</SheetTitle>
                </SheetHeader>
                <FiltersContent 
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedLevel={selectedLevel}
                  setSelectedLevel={setSelectedLevel}
                  selectedDuration={selectedDuration}
                  setSelectedDuration={setSelectedDuration}
                />
              </SheetContent>
            </Sheet>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    {selectedCategory}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map(cat => (
                    <DropdownMenuItem key={cat} onClick={() => setSelectedCategory(cat)}>
                      {cat}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    {selectedLevel}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {levels.map(level => (
                    <DropdownMenuItem key={level} onClick={() => setSelectedLevel(level)}>
                      {level}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    {selectedDuration}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {durations.map(dur => (
                    <DropdownMenuItem key={dur} onClick={() => setSelectedDuration(dur)}>
                      {dur}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* View Toggle */}
            <div className="flex items-center border rounded-md">
              <Button
                variant={viewMode === "grid" ? "secondary" : "ghost"}
                size="icon"
                className="rounded-r-none"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="icon"
                className="rounded-l-none"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 rounded-lg border bg-white p-4">
              <FiltersContent 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedLevel={selectedLevel}
                setSelectedLevel={setSelectedLevel}
                selectedDuration={selectedDuration}
                setSelectedDuration={setSelectedDuration}
              />
            </div>
          </aside>

          {/* Course Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-[#64748B]">
                Showing <span className="font-medium text-[#0F172A]">{filteredCourses.length}</span> courses
              </p>
              <Select defaultValue="popular">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredCourses.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Search className="mb-4 h-12 w-12 text-[#64748B]" />
                <h3 className="mb-2 text-lg font-semibold text-[#0F172A]">No courses found</h3>
                <p className="text-[#64748B]">Try adjusting your filters or search terms</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedLevel("All Levels");
                    setSelectedDuration("Any Duration");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredCourses.map(course => (
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
                        <Badge className="absolute right-2 bottom-2 bg-white/90 text-[#0F172A]">
                          {course.duration}
                        </Badge>
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
                        <p className="mb-3 text-sm text-[#64748B] line-clamp-2">{course.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-[#FF6B00] text-[#FF6B00]" />
                            <span className="text-sm font-medium">{course.rating}</span>
                            <span className="text-xs text-[#64748B]">({course.reviewCount.toLocaleString()})</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-[#64748B]">
                            <Users className="h-3 w-3" />
                            {course.students.toLocaleString()}
                          </div>
                        </div>
                        <Separator className="my-3" />
                        <div className="flex items-center justify-between">
                          <Badge className={course.price === "Free" ? "bg-[#10B981]" : "bg-[#FF6B00]"}>
                            {course.price}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCourses.map(course => (
                  <Link key={course.id} href={`/courses/${course.id}`} className="group">
                    <Card className="overflow-hidden transition-all hover:shadow-lg">
                      <div className="flex">
                        <div className="relative w-48 flex-shrink-0 bg-gradient-to-br from-[#FF6B00]/20 to-[#3B82F6]/20">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="h-8 w-8 text-white/80" />
                          </div>
                        </div>
                        <CardContent className="flex-1 p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="mb-2 flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{course.category}</Badge>
                                <Badge variant="outline" className="text-xs">{course.level}</Badge>
                                <Badge variant="outline" className="text-xs">{course.duration}</Badge>
                              </div>
                              <h3 className="mb-1 font-semibold text-[#0F172A] group-hover:text-[#FF6B00]">
                                {course.title}
                              </h3>
                              <p className="mb-2 text-sm text-[#64748B]">{course.instructor}</p>
                              <p className="mb-3 text-sm text-[#64748B] line-clamp-2">{course.description}</p>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 fill-[#FF6B00] text-[#FF6B00]" />
                                  <span className="text-sm font-medium">{course.rating}</span>
                                  <span className="text-xs text-[#64748B]">({course.reviewCount.toLocaleString()})</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-[#64748B]">
                                  <Users className="h-3 w-3" />
                                  {course.students.toLocaleString()} students
                                </div>
                              </div>
                            </div>
                            <div className="ml-4">
                              <Badge className={course.price === "Free" ? "bg-[#10B981]" : "bg-[#FF6B00]"}>
                                {course.price}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function FiltersContent({
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
  selectedDuration,
  setSelectedDuration
}: {
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  selectedLevel: string;
  setSelectedLevel: (v: string) => void;
  selectedDuration: string;
  setSelectedDuration: (v: string) => void;
}) {
  return (
    <ScrollArea className="h-[calc(100vh-8rem)]">
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="mb-3 font-semibold text-[#0F172A]">Category</h3>
          <div className="space-y-2">
            {categories.map(category => (
              <div key={category} className="flex items-center gap-2">
                <Checkbox 
                  id={`cat-${category}`} 
                  checked={selectedCategory === category}
                  onCheckedChange={() => setSelectedCategory(category)}
                />
                <Label 
                  htmlFor={`cat-${category}`}
                  className="text-sm text-[#64748B] cursor-pointer"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Level */}
        <div>
          <h3 className="mb-3 font-semibold text-[#0F172A]">Level</h3>
          <div className="space-y-2">
            {levels.map(level => (
              <div key={level} className="flex items-center gap-2">
                <Checkbox 
                  id={`level-${level}`}
                  checked={selectedLevel === level}
                  onCheckedChange={() => setSelectedLevel(level)}
                />
                <Label 
                  htmlFor={`level-${level}`}
                  className="text-sm text-[#64748B] cursor-pointer"
                >
                  {level}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Duration */}
        <div>
          <h3 className="mb-3 font-semibold text-[#0F172A]">Duration</h3>
          <div className="space-y-2">
            {durations.map(duration => (
              <div key={duration} className="flex items-center gap-2">
                <Checkbox 
                  id={`dur-${duration}`}
                  checked={selectedDuration === duration}
                  onCheckedChange={() => setSelectedDuration(duration)}
                />
                <Label 
                  htmlFor={`dur-${duration}`}
                  className="text-sm text-[#64748B] cursor-pointer"
                >
                  {duration}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Price */}
        <div>
          <h3 className="mb-3 font-semibold text-[#0F172A]">Price</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox id="price-free" defaultChecked />
              <Label htmlFor="price-free" className="text-sm text-[#64748B] cursor-pointer">
                Free
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="price-paid" defaultChecked />
              <Label htmlFor="price-paid" className="text-sm text-[#64748B] cursor-pointer">
                Paid
              </Label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Clear Filters */}
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => {
            setSelectedCategory("All");
            setSelectedLevel("All Levels");
            setSelectedDuration("Any Duration");
          }}
        >
          Clear All Filters
        </Button>
      </div>
    </ScrollArea>
  );
}
