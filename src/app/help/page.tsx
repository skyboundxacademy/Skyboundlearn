"use client";

import * as React from "react";
import Link from "next/link";
import { GraduationCap, Search, Book, MessageCircle, Mail, ChevronRight, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  { q: "How do I enroll in a course?", a: "Browse our course catalog and click 'Enroll' on any course you want to learn." },
  { q: "How does the parent-child linking work?", a: "Parents can create child accounts and generate a unique code for their children to link." },
  { q: "Can I track my child's progress?", a: "Yes! Parents can monitor their children's learning progress through the parent dashboard." },
  { q: "How do I become a teacher?", a: "Sign up for a teacher account and complete your profile to start creating classes." },
  { q: "Are courses free or paid?", a: "We offer both free and paid courses. Look for the Free or Pro badge on each course." },
];

const topics = [
  { title: "Getting Started", icon: Book, count: 12 },
  { title: "Account & Billing", icon: Mail, count: 8 },
  { title: "Learning", icon: GraduationCap, count: 15 },
  { title: "Teaching", icon: GraduationCap, count: 10 },
  { title: "Parents", icon: GraduationCap, count: 7 },
  { title: "Technical", icon: GraduationCap, count: 5 },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      <main className="container py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#0F172A] mb-4">How can we help?</h1>
            <p className="text-[#64748B] mb-8">Search our knowledge base or browse topics below</p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#64748B]" />
              <Input 
                type="search" 
                placeholder="Search for help..." 
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {topics.map((topic) => (
              <Link href="/help/topic" key={topic.title}>
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center">
                      <topic.icon className="h-5 w-5 text-[#FF6B00]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[#0F172A]">{topic.title}</p>
                      <p className="text-sm text-[#64748B]">{topic.count} articles</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-[#64748B]" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.q}>
                  <CardHeader>
                    <CardTitle className="text-base">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#64748B]">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Still need help?</h2>
            <p className="text-[#64748B] mb-6">Our support team is here to assist you</p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[#FF6B00] hover:bg-[#E56000]">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Live Chat
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
