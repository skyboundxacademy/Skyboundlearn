"use client";

import { useState } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize,
  ChevronLeft,
  ChevronRight,
  Check,
  Download,
  FileText,
  MessageSquare,
  MoreVertical,
  Settings,
  Subtitles,
  PictureInPicture,
  Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

// Mock lesson data
const lesson = {
  id: "1",
  title: "Introduction to Variables and Data Types",
  description: "Learn the fundamentals of programming including variables, constants, and basic data types like strings, numbers, and booleans.",
  videoUrl: "",
  duration: "12:34",
  courseId: "1",
  courseTitle: "Introduction to Programming",
  completed: false,
  resources: [
    { name: "Lesson Slides.pdf", type: "pdf" },
    { name: "Code Examples.zip", type: "zip" },
    { name: "Cheat Sheet.pdf", type: "pdf" }
  ]
};

// Mock curriculum data
const curriculum = [
  {
    title: "Getting Started",
    lessons: [
      { id: "1", title: "Introduction to Variables and Data Types", duration: "12:34", completed: true, type: "video" },
      { id: "2", title: "Setting Up Your Development Environment", duration: "8:21", completed: true, type: "video" },
      { id: "3", title: "Your First Program", duration: "15:00", completed: false, type: "video" },
    ]
  },
  {
    title: "Core Concepts",
    lessons: [
      { id: "4", title: "Understanding Variables", duration: "10:45", completed: false, type: "video" },
      { id: "5", title: "Working with Strings", duration: "14:20", completed: false, type: "video" },
      { id: "6", title: "Numbers and Arithmetic", duration: "11:30", completed: false, type: "video" },
      { id: "7", title: "Boolean Logic", duration: "9:15", completed: false, type: "video" },
    ]
  },
  {
    title: "Practice",
    lessons: [
      { id: "8", title: "Exercise: Variables", duration: "20:00", completed: false, type: "exercise" },
      { id: "9", title: "Quiz: Core Concepts", duration: "10:00", completed: false, type: "quiz" },
    ]
  }
];

export default function LessonPlayerPage({ params }: { params: { id: string } }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState("1x");
  const [quality, setQuality] = useState("auto");
  const [showSubtitles, setShowSubtitles] = useState(false);
  const [isCompleted, setIsCompleted] = useState(lesson.completed);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(754); // 12:34 in seconds
  const [showChat, setShowChat] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(["Getting Started", "Core Concepts"]);

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = (currentTime / duration) * 100;

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Top Navigation */}
      <header className="bg-slate-800 border-b border-slate-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/learn" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Dashboard</span>
            </a>
            <Separator orientation="vertical" className="h-6 bg-slate-600" />
            <a href="/learn/courses/1" className="text-slate-400 hover:text-white transition-colors text-sm">
              {lesson.courseTitle}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setShowChat(!showChat)}
              className="text-slate-400 hover:text-white hover:bg-slate-700"
            >
              <Bot className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Park AI</span>
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="" />
              <AvatarFallback className="bg-orange-500 text-white text-sm">JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col">
          {/* Video Player */}
          <div className="relative bg-black aspect-video">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-orange-600 transition-colors"
                     onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-white" />
                  ) : (
                    <Play className="w-10 h-10 text-white ml-1" />
                  )}
                </div>
                <p className="text-slate-400 text-sm">Video Player</p>
                <p className="text-slate-500 text-xs mt-1">{lesson.duration}</p>
              </div>
            </div>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              {/* Progress Bar */}
              <div className="relative mb-3 group">
                <Progress value={progressPercent} className="h-1 bg-slate-600 cursor-pointer" />
                <div 
                  className="absolute top-0 left-0 h-1 bg-orange-500 cursor-pointer"
                  style={{ width: `${progressPercent}%` }}
                />
                <input 
                  type="range" 
                  min="0" 
                  max={duration}
                  value={currentTime}
                  onChange={(e) => setCurrentTime(Number(e.target.value))}
                  className="absolute inset-0 w-full h-1 opacity-0 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-slate-700"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-slate-700"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </Button>

                  <span className="text-sm text-slate-300">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Playback Speed */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
                        {playbackSpeed}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-slate-800 border-slate-700">
                      {["0.5x", "0.75x", "1x", "1.25x", "1.5x", "2x"].map(speed => (
                        <DropdownMenuItem 
                          key={speed} 
                          onClick={() => setPlaybackSpeed(speed)}
                          className="text-white hover:bg-slate-700"
                        >
                          {speed}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Quality */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700 hidden sm:flex">
                        {quality}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-slate-800 border-slate-700">
                      {["auto", "1080p", "720p", "480p"].map(q => (
                        <DropdownMenuItem 
                          key={q} 
                          onClick={() => setQuality(q)}
                          className="text-white hover:bg-slate-700"
                        >
                          {q}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Subtitles */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`text-white hover:bg-slate-700 ${showSubtitles ? 'text-orange-500' : ''}`}
                    onClick={() => setShowSubtitles(!showSubtitles)}
                  >
                    <Subtitles className="w-5 h-5" />
                  </Button>

                  {/* PiP */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-slate-700 hidden sm:flex"
                  >
                    <PictureInPicture className="w-5 h-5" />
                  </Button>

                  {/* Fullscreen */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-slate-700"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                  >
                    {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                  </Button>

                  {/* Settings */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-slate-700">
                        <Settings className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-slate-800 border-slate-700 w-48">
                      <DropdownMenuItem className="text-white hover:bg-slate-700">
                        Video Settings
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-white hover:bg-slate-700">
                        Playback Settings
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Info */}
          <div className="p-6 bg-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
                <p className="text-slate-400 mb-4">{lesson.description}</p>
                
                {/* Resources */}
                {lesson.resources.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {lesson.resources.map((resource, index) => (
                      <Button key={index} variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        <Download className="w-4 h-4 mr-2" />
                        {resource.name}
                      </Button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Button 
                  variant={isCompleted ? "default" : "outline"}
                  className={isCompleted ? "bg-green-600 hover:bg-green-700" : "border-slate-600 text-white hover:bg-slate-700"}
                  onClick={() => setIsCompleted(!isCompleted)}
                >
                  <Check className="w-4 h-4 mr-2" />
                  {isCompleted ? "Completed" : "Mark Complete"}
                </Button>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6 pt-6 border-t border-slate-700">
              <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous Lesson
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Next Lesson
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Discussion Section */}
          <div className="p-6 bg-slate-800 border-t border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5" />
              <h2 className="text-lg font-semibold">Discussion</h2>
            </div>
            <p className="text-slate-400 text-sm">Join the discussion and ask questions about this lesson.</p>
            <Button className="mt-4 bg-orange-500 hover:bg-orange-600">Start Discussion</Button>
          </div>
        </div>

        {/* Curriculum Sidebar */}
        <div className="w-full lg:w-96 bg-slate-800 border-l border-slate-700">
          <div className="p-4 border-b border-slate-700">
            <h2 className="font-semibold">{lesson.courseTitle}</h2>
            <div className="flex items-center gap-2 mt-2">
              <Progress value={25} className="flex-1 h-2" />
              <span className="text-sm text-slate-400">25%</span>
            </div>
          </div>

          <ScrollArea className="h-[calc(100vh-200px)]">
            <div className="p-2">
              {curriculum.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-2">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <span className="font-medium">{section.title}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${expandedSections.includes(section.title) ? 'rotate-90' : ''}`} />
                  </button>
                  
                  {expandedSections.includes(section.title) && (
                    <div className="ml-2">
                      {section.lessons.map((lessonItem) => (
                        <a
                          key={lessonItem.id}
                          href={`/learn/lesson/${lessonItem.id}`}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                            lessonItem.id === params.id 
                              ? 'bg-orange-500/20 text-orange-400' 
                              : 'hover:bg-slate-700 text-slate-300'
                          }`}
                        >
                          {lessonItem.completed ? (
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          ) : lessonItem.type === 'video' ? (
                            <Play className="w-4 h-4 flex-shrink-0" />
                          ) : lessonItem.type === 'exercise' ? (
                            <FileText className="w-4 h-4 flex-shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border-2 border-slate-500 flex-shrink-0" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm truncate">{lessonItem.title}</p>
                            <p className="text-xs text-slate-500">{lessonItem.duration}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Park AI Chat Panel */}
      {showChat && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">Park AI</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setShowChat(false)}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-700 rounded-lg p-3 text-sm">
                  <p>Hi! I'm Park, your AI learning assistant. I can help you understand this lesson better.</p>
                  <p className="mt-2 text-slate-400">What would you like to know?</p>
                </div>
              </div>
            </div>
          </ScrollArea>

          <div className="p-4 border-t border-slate-700">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Ask a question..." 
                className="flex-1 bg-slate-700 border-none rounded-lg px-3 py-2 text-sm text-white placeholder:text-slate-400"
              />
              <Button size="icon" className="bg-orange-500 hover:bg-orange-600">
                <MessageSquare className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
