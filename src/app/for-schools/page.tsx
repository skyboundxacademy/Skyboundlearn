"use client";

import * as React from "react";
import Link from "next/link";
import { GraduationCap, Users, BarChart3, Shield, CheckCircle, ArrowRight, Building2, BookOpen, Clock, Award } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  { icon: Users, title: "Bulk Student Import", description: "Easily import students from CSV or Excel files" },
  { icon: BarChart3, title: "Progress Reports", description: "Generate detailed reports on student performance" },
  { icon: Shield, title: "Custom Branding", description: "White-label the platform with your school's identity" },
  { icon: BookOpen, title: "Curriculum Tools", description: "Create and customize learning paths" },
];

const benefits = [
  "Unlimited teacher accounts",
  "Advanced analytics dashboard",
  "Priority support",
  "Custom integrations",
  "Dedicated account manager",
  "Regular training sessions",
];

export default function ForSchoolsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1E1E2F] via-[#2D2D44] to-[#1E1E2F] py-20 text-white">
        <div className="container px-4 text-center">
          <Badge className="mb-4 bg-[#FF6B00]">For Schools</Badge>
          <h1 className="mb-6 text-4xl font-bold">Empower Your School with Xtreme Learn</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Give your students access to world-class education with our comprehensive school platform.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#FF6B00] hover:bg-[#E56000]">
                Request Demo
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#0F172A]">Everything Your School Needs</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6B00]/10">
                    <feature.icon className="h-6 w-6 text-[#FF6B00]" />
                  </div>
                  <h3 className="mb-2 font-semibold text-[#0F172A]">{feature.title}</h3>
                  <p className="text-sm text-[#64748B]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF6B00]">500+</p>
              <p className="text-[#64748B]">Schools</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF6B00]">50K+</p>
              <p className="text-[#64748B]">Students</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF6B00]">2K+</p>
              <p className="text-[#64748B]">Teachers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#FF6B00]">94%</p>
              <p className="text-[#64748B]">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#0F172A]">Why Schools Choose Us</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#10B981]" />
                  <span className="text-[#0F172A]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] py-16 text-white">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Transform Education?</h2>
          <p className="mb-8 text-lg">Join hundreds of schools already using Xtreme Learn</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="font-semibold">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
