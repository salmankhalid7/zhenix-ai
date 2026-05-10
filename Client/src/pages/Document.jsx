import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Document = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">
      <Navbar/>
      {/* Hero Section */}
      <div className="border-b border-zinc-200 bg-white/50">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            AI-Powered Code Reviews
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
            Documentation
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Everything you need to know about Zhenix — how it works, what it does, and why it'll make you a better developer.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="sticky top-24 space-y-1">
              <a href="#overview" className="block px-4 py-2 text-zinc-700 hover:bg-zinc-100 rounded-lg transition font-medium">
                Overview
              </a>
              <a href="#features" className="block px-4 py-2 text-zinc-600 hover:bg-zinc-100 rounded-lg transition">
                Features
              </a>
              <a href="#how-it-works" className="block px-4 py-2 text-zinc-600 hover:bg-zinc-100 rounded-lg transition">
                How It Works
              </a>

              <a href="#pricing" className="block px-4 py-2 text-zinc-600 hover:bg-zinc-100 rounded-lg transition">
                Pricing
              </a>
              <a href="#faq" className="block px-4 py-2 text-zinc-600 hover:bg-zinc-100 rounded-lg transition">
                FAQ
              </a>
            </nav>
          </aside>

          {/* Main Documentation Content */}
          <main className="flex-1 space-y-16">
            
            {/* Overview Section */}
            <section id="overview">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">What is Zhenix?</h2>
              <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                Zhenix is an <strong className="text-zinc-900">AI-powered code review platform</strong> that helps developers write better code, faster. 
                It automatically reviews your pull requests, catches bugs, suggests improvements, and teaches modern best practices — all in real-time.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Think of it as having a senior developer sitting next to you, reviewing every line of code you write, 
                but powered by advanced AI that never gets tired and learns from millions of codebases.
              </p>
            </section>
{/* Features Section */}
<section id="features">
  <h2 className="text-3xl font-bold text-zinc-900 mb-6">Key Features</h2>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-white border border-zinc-200 rounded-xl p-6">
      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-zinc-900 mb-2">Bug Detection</h3>
      <p className="text-zinc-600">Catches logic errors, edge cases, and security vulnerabilities before they reach production.</p>
    </div>
    
    <div className="bg-white border border-zinc-200 rounded-xl p-6">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-zinc-900 mb-2">Best Practices</h3>
      <p className="text-zinc-600">Suggests modern patterns, performance optimizations, and cleaner code structures.</p>
    </div>
    
    <div className="bg-white border border-zinc-200 rounded-xl p-6">
      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
        <svg className="w-5 h-5 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-zinc-900 mb-2">Real-Time Feedback</h3>
      <p className="text-zinc-600">Get instant suggestions as you code, integrated directly into your IDE or GitHub workflow.</p>
    </div>
    
    <div className="bg-white border border-zinc-200 rounded-xl p-6">
      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
        <svg className="w-5 h-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-zinc-900 mb-2">Learn & Improve</h3>
      <p className="text-zinc-600">Each suggestion includes detailed explanations, helping you grow as a developer with every review.</p>
    </div>
  </div>
</section>

            {/* How It Works Section */}
<section id="how-it-works">
  <h2 className="text-3xl font-bold text-zinc-900 mb-6">How It Works</h2>
  <div className="space-y-6">
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
      <div>
        <h3 className="text-xl font-semibold text-zinc-900 mb-1">Paste Your Code</h3>
        <p className="text-zinc-600">Simply copy and paste any code snippet you want reviewed — no setup required.</p>
      </div>
    </div>
    
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
      <div>
        <h3 className="text-xl font-semibold text-zinc-900 mb-1">AI Analyzes Instantly</h3>
        <p className="text-zinc-600">Our AI reviews your code for bugs, security issues, and performance problems in seconds.</p>
      </div>
    </div>
    
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
      <div>
        <h3 className="text-xl font-semibold text-zinc-900 mb-1">Get Detailed Feedback</h3>
        <p className="text-zinc-600">Receive actionable suggestions, best practice recommendations, and clear explanations.</p>
      </div>
    </div>
    
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
      <div>
        <h3 className="text-xl font-semibold text-zinc-900 mb-1">Improve Your Code</h3>
        <p className="text-zinc-600">Apply the fixes, learn from the insights, and become a better developer with every review.</p>
      </div>
    </div>
  </div>
</section>

            {/* Integrations Section */}


           {/* Pricing Section */}
{/* Pricing Section */}
<section id="pricing">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    {/* Left side - Text */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
        Free for Everyone
      </h2>
      <p className="text-xl text-zinc-600 mb-6">
        No credit card. No hidden fees. No bullshit.
      </p>
      <p className="text-zinc-600 leading-relaxed">
        Just paste your code and get instant AI-powered reviews. 
        Unlimited reviews, forever. Because improving code shouldn't cost a thing.
      </p>
    </div>

    {/* Right side - Pricing Card */}
    <div>
      <div className="bg-white border-2 border-zinc-200 rounded-2xl p-8">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
          <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          Free for Everyone
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 mb-2">Free model</h3>
        <div className="text-5xl font-bold text-zinc-900 mb-4">$0</div>
        
        <ul className="space-y-3 mb-8">
          <li className="text-zinc-700 flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Unlimited code reviews
          </li>
          <li className="text-zinc-700 flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Bug detection & security checks
          </li>
          <li className="text-zinc-700 flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Best practice suggestions
          </li>
          <li className="text-zinc-700 flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Detailed explanations
          </li>
        </ul>
        
        <button className="w-full px-6 py-3 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-black transition">
          Start Reviewing Now →
        </button>
      </div>
    </div>
  </div>
</section>
            {/* FAQ Section */}
            <section id="faq">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">Which programming languages do you support?</h3>
                  <p className="text-zinc-600">We currently support JavaScript, TypeScript, Python, Java, Go, Rust, and C++. More languages coming soon!</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">Is my code private and secure?</h3>
                  <p className="text-zinc-600">Absolutely. Your code never leaves our secure infrastructure. We're SOC 2 Type II compliant and use enterprise-grade encryption.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">Can I use Zhenix for my entire team?</h3>
                  <p className="text-zinc-600">Yes! We offer team plans with centralized billing, admin controls, and advanced analytics. Contact sales for enterprise pricing.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">How accurate is the AI?</h3>
                  <p className="text-zinc-600">Our AI achieves 99.8% accuracy on bug detection and suggestion relevance, validated across thousands of open-source repositories.</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to write better code?
              </h2>
              <p className="text-zinc-300 mb-6">
                Join 10,000+ developers who ship with confidence using Zhenix.
              </p>
              <Link to="/register">
                <button className="px-8 py-3 bg-white text-zinc-900 rounded-xl font-semibold hover:scale-[1.02] transition shadow-lg">
                  Get Started Free →
                </button>
              </Link>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">© 2024 Zhenix. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm">Twitter</a>
              <a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm">GitHub</a>
              <a href="#" className="text-zinc-500 hover:text-zinc-900 text-sm">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Document;