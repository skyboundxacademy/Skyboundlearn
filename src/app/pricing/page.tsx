"use client";

import { useState } from "react";
import { 
  Check, 
  X, 
  Zap, 
  Crown, 
  Building2,
  ArrowRight,
  Star,
  Users,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started",
    icon: Zap,
    features: [
      { name: "Access to 50+ free courses", included: true },
      { name: "Basic progress tracking", included: true },
      { name: "Community forum access", included: true },
      { name: "AI learning assistant (limited)", included: true },
      { name: "Course certificates", included: false },
      { name: "Offline access", included: false },
      { name: "Priority support", included: false },
      { name: "Ad-free experience", included: false },
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Pro Learner",
    price: "19",
    description: "Best for serious learners",
    icon: Crown,
    features: [
      { name: "Access to 500+ courses", included: true },
      { name: "Advanced progress tracking", included: true },
      { name: "Community forum access", included: true },
      { name: "AI learning assistant (unlimited)", included: true },
      { name: "Course certificates", included: true },
      { name: "Offline access", included: true },
      { name: "Priority support", included: false },
      { name: "Ad-free experience", included: true },
    ],
    cta: "Start Pro Trial",
    popular: true
  },
  {
    name: "Pro Teacher",
    price: "49",
    description: "For educators and tutors",
    icon: Users,
    features: [
      { name: "Everything in Pro Learner", included: true },
      { name: "Create & manage classes", included: true },
      { name: "Student progress analytics", included: true },
      { name: "Assign homework & quizzes", included: true },
      { name: "Custom content upload", included: true },
      { name: "Teacher certification", included: true },
      { name: "Priority support", included: true },
      { name: "School branding", included: false },
    ],
    cta: "Start Teaching",
    popular: false
  },
  {
    name: "School",
    price: "Custom",
    description: "For institutions",
    icon: Building2,
    features: [
      { name: "Everything in Pro Teacher", included: true },
      { name: "Unlimited teacher accounts", included: true },
      { name: "Bulk student import", included: true },
      { name: "Custom branding", included: true },
      { name: "Advanced analytics", included: true },
      { name: "API access", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "SLA guarantee", included: true },
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const faqs = [
  {
    question: "Is there a free trial for Pro plans?",
    answer: "Yes! We offer a 7-day free trial for both Pro Learner and Pro Teacher plans. You can cancel anytime during the trial period."
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans."
  },
  {
    question: "Do you offer discounts for students?",
    answer: "Yes! Students with a valid .edu email address get 50% off Pro Learner subscriptions."
  },
  {
    question: "Can I get a refund?",
    answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact us for a full refund."
  },
  {
    question: "Do you support schools in Nigeria?",
    answer: "Yes! We support schools across Africa and offer local payment methods including bank transfers and mobile money."
  }
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 mb-6">
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Choose Your Plan
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Start free and upgrade when you're ready. No hidden fees, cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={!isAnnual ? "text-white" : "text-slate-400"}>Monthly</span>
              <Switch 
                checked={isAnnual} 
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-orange-500"
              />
              <span className={isAnnual ? "text-white" : "text-slate-400"}>
                Annual
                <Badge className="ml-2 bg-green-500/20 text-green-400 hover:bg-green-500/30">
                  Save 20%
                </Badge>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-2 transition-all hover:shadow-xl ${
                  plan.popular ? 'border-orange-500 shadow-lg shadow-orange-100' : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-orange-500 text-white px-4">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-orange-500 to-orange-600' 
                      : 'bg-slate-100'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-slate-600'}`} />
                  </div>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    {plan.price === "Custom" ? (
                      <div className="text-3xl font-bold text-slate-900">Custom</div>
                    ) : (
                      <>
                        <div className="text-4xl font-bold text-slate-900">
                          ${isAnnual ? Math.floor(Number(plan.price) * 0.8) : plan.price}
                        </div>
                        <div className="text-slate-500">/{isAnnual ? 'month' : 'month'}</div>
                      </>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-slate-300 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-slate-700" : "text-slate-400"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-orange-500 hover:bg-orange-600' 
                        : 'bg-slate-900 hover:bg-slate-800'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-lg text-slate-600">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-orange-600">Pro Learner</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">Pro Teacher</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">School</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Courses", free: "50+", learner: "500+", teacher: "500+", school: "Unlimited" },
                  { name: "Certificates", free: false, learner: true, teacher: true, school: true },
                  { name: "AI Assistant", free: "Limited", learner: "Unlimited", teacher: "Unlimited", school: "Unlimited" },
                  { name: "Offline Access", free: false, learner: true, teacher: true, school: true },
                  { name: "Class Management", free: false, learner: false, teacher: true, school: true },
                  { name: "Student Analytics", free: false, learner: false, teacher: true, school: true },
                  { name: "Custom Content", free: false, learner: false, teacher: true, school: true },
                  { name: "Priority Support", free: false, learner: false, teacher: true, school: true },
                  { name: "API Access", free: false, learner: false, teacher: false, school: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-slate-100">
                    <td className="py-4 px-4 text-slate-700">{row.name}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.free === 'boolean' ? (
                        row.free ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />
                      ) : (
                        <span className="text-slate-600">{row.free}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-orange-50">
                      {typeof row.learner === 'boolean' ? (
                        row.learner ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />
                      ) : (
                        <span className="text-slate-600 font-medium">{row.learner}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.teacher === 'boolean' ? (
                        row.teacher ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />
                      ) : (
                        <span className="text-slate-600">{row.teacher}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.school === 'boolean' ? (
                        row.school ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />
                      ) : (
                        <span className="text-slate-600">{row.school}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Have questions? We're here to help.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join over 50,000 learners who are already achieving their goals with Xtreme Learn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-orange-600">
              Talk to Sales
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
                <li><a href="/pricing" className="hover:text-orange-400">Pricing</a></li>
                <li><a href="/for-teachers" className="hover:text-orange-400">For Teachers</a></li>
                <li><a href="/for-schools" className="hover:text-orange-400">For Schools</a></li>
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
