"use client";

import { 
  GraduationCap, 
  Users, 
  Award, 
  Globe, 
  Heart, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  BookOpen,
  MessageSquare,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const stats = [
  { label: "Active Learners", value: "50,000+", icon: Users },
  { label: "Courses Available", value: "500+", icon: BookOpen },
  { label: "Expert Instructors", value: "200+", icon: GraduationCap },
  { label: "Countries", value: "30+", icon: Globe },
];

const values = [
  {
    icon: Zap,
    title: "Fast-Track Learning",
    description: "Our unique approach helps you learn faster with AI-powered assistance and bite-sized lessons."
  },
  {
    icon: Heart,
    title: "Student-Centered",
    description: "Every feature is designed with learners in mind. Your success is our priority."
  },
  {
    icon: Globe,
    title: "Accessible Everywhere",
    description: "Learn on any device, anywhere. Education should have no boundaries."
  },
  {
    icon: Shield,
    title: "Trusted Quality",
    description: "Expert-created content with rigorous quality standards and continuous improvement."
  }
];

const team = [
  { name: "Sarah Johnson", role: "CEO & Founder", image: "" },
  { name: "Michael Chen", role: "CTO", image: "" },
  { name: "Amara Okonkwo", role: "Head of Education", image: "" },
  { name: "David Kim", role: "Head of Product", image: "" },
];

const testimonials = [
  {
    name: "Chioma Adeyemi",
    role: "Student, University of Lagos",
    content: "Xtreme Learn transformed my understanding of mathematics. The AI assistant helped me grasp concepts my teachers couldn't explain.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Parent",
    content: "My daughter loves learning here. The progress tracking gives me peace of mind and she actually enjoys her lessons.",
    rating: 5
  },
  {
    name: "Dr. Emmanuel Okafor",
    role: "Teacher, Lagos",
    content: "As an educator, Xtreme Learn has been invaluable. The teacher tools make tracking student progress effortless.",
    rating: 5
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">X</span>
                </div>
                <span className="text-xl font-bold text-slate-800">Xtreme Learn</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="/courses" className="text-slate-600 hover:text-orange-500 font-medium">Explore</a>
              <a href="/login" className="text-slate-600 hover:text-orange-500 font-medium">Sign In</a>
              <Button className="bg-orange-500 hover:bg-orange-600">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 mb-6">
              About Xtreme Learn
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming Education
              <span className="block text-orange-500">Across Africa & Beyond</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              We're on a mission to make world-class education accessible to everyone, 
              everywhere. Combining the best of Khan Academy's approach with cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8">
                Start Learning Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-slate-600 hover:bg-slate-800 text-lg px-8">
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything we do is guided by these core principles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Xtreme Learn was founded in 2024 with a simple vision: to democratize education 
                  and make high-quality learning accessible to every student in Africa and around the world.
                </p>
                <p>
                  Inspired by Khan Academy's revolutionary approach to free education, we went further 
                  by integrating cutting-edge AI technology. Our AI assistant, Park, provides 
                  personalized support that adapts to each student's learning style.
                </p>
                <p>
                  Today, we're proud to serve learners across 30+ countries, offering courses in 
                  mathematics, science, computing, languages, and professional skills. Every 
                  lesson is crafted by expert educators and continuously improved based on 
                  learner feedback.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Free for learners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Teacher tools included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Parent oversight features</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl rotate-3"></div>
              <div className="relative bg-slate-900 rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
                    <div className="text-slate-400">Courses</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-orange-400 mb-2">50K+</div>
                    <div className="text-slate-400">Students</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-orange-400 mb-2">200+</div>
                    <div className="text-slate-400">Teachers</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-orange-400 mb-2">30+</div>
                    <div className="text-slate-400">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Passionate educators and technologists working together to transform education
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.image} />
                  <AvatarFallback className="bg-slate-200 text-slate-600 text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                <p className="text-orange-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-slate-600">Join thousands of satisfied learners</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-orange-100 text-orange-600">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of learners who are already transforming their future with Xtreme Learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-orange-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">X</span>
                </div>
                <span className="text-xl font-bold text-white">Xtreme Learn</span>
              </div>
              <p className="text-slate-400">
                Making world-class education accessible to everyone, everywhere.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/courses" className="hover:text-orange-400">Courses</a></li>
                <li><a href="/for-teachers" className="hover:text-orange-400">For Teachers</a></li>
                <li><a href="/for-schools" className="hover:text-orange-400">For Schools</a></li>
                <li><a href="/pricing" className="hover:text-orange-400">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
                <li><a href="/help" className="hover:text-orange-400">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-400">Careers</a></li>
                <li><a href="#" className="hover:text-orange-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-400">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>© 2026 Xtreme Learn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
