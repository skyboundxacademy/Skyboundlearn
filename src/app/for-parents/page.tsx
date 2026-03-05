"use client";

import * as React from "react";
import Link from "next/link";
import { GraduationCap, Users, Shield, BarChart3, ArrowRight, CheckCircle, Clock, Award } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  { icon: Users, title: "Manage Children", description: "Link multiple child accounts to monitor progress" },
  { icon: BarChart3, title: "Progress Reports", description: "See detailed reports on your child's learning" },
  { icon: Shield, title: "Safety Controls", description: "Set time limits and content restrictions" },
  { icon: Clock, title: "Activity Tracking", description: "Monitor daily learning time and habits" },
];

export default function ForParentsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      <section className="bg-gradient-to-br from-[#1E1E2F] via-[#2D2D44] to-[#1E1E2F] py-20 text-white">
        <div className="container px-4 text-center">
          <Badge className="mb-4 bg-[#10B981]">For Parents</Badge>
          <h1 className="mb-6 text-4xl font-bold">Support Your Child's Learning</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Monitor your children's progress and guide their educational journey.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="bg-[#FF6B00] hover:bg-[#E56000]">
                Get Started
              </Button>
            </Link>
            <a href="#features">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-16">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0F172A]">Parent Features</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#10B981]/10">
                    <feature.icon className="h-6 w-6 text-[#10B981]" />
                  </div>
                  <h3 className="mb-2 font-semibold text-[#0F172A]">{feature.title}</h3>
                  <p className="text-sm text-[#64748B]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] py-16 text-white">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Start Monitoring Today</h2>
          <p className="mb-8 text-lg">Help your child succeed with Xtreme Learn</p>
          <Link href="/signup">
            <Button size="lg" variant="secondary" className="font-semibold">
              Create Parent Account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
