import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import one from "../images/1.png" 
import BasicFooter from "../components/BasicFooter"
import {
  Bug,
  Zap,
  Sparkles,
  ShieldCheck,
  Code2,
  TimerReset,
} from "lucide-react";

const Home = () => {
  const { isAuth, user } = useAuth();

// Authenticated Dashboard Home
if (isAuth) {
  return (
    <>
      <Navbar />
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
  
  <div className="grid lg:grid-cols-2 gap-14 items-center">

    {/* Left Content */}
    <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Welcome back
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-950 mb-6 leading-[1.05]">
        Hello,{" "}
        <span className="text-zinc-700">
          {user?.username || user?.email?.split("@")[0]}
        </span>
        !
      </h1>

      {/* Subtext */}
      <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
        Your AI code reviewer is ready—review faster, ship cleaner code,
        and improve every commit.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Link to="/dashboard">
          <button className="px-8 py-4 bg-zinc-950 text-white font-semibold rounded-2xl shadow-lg shadow-zinc-950/20 hover:scale-[1.03] transition">
            New Code Review
          </button>
        </Link>

        <Link to="/contact">
          <button className="px-8 py-4 bg-white border border-zinc-200 hover:bg-zinc-100 font-semibold rounded-2xl transition">
            Contact Us
          </button>
        </Link>
      </div>
    </div>

{/* Right Side Image */}
<div className="relative flex justify-center lg:justify-end">

  {/* soft glow behind image (optional, you can remove this too if you want fully clean) */}
  <div className="absolute w-[400px] h-[400px] bg-zinc-200/40 blur-3xl rounded-full" />

  <img
    src={one}
    alt="Zhenix AI Dashboard Preview"
    className="relative w-full max-w-md lg:max-w-lg"
  />
</div>
  </div>
</div>
<BasicFooter/>
    </>
  );
}

  // Marketing / Public Home
  return (
    <>
      <Navbar />

      <div className="min-h-screen overflow-hidden bg-white text-zinc-900">
        {/* Background Effects */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-zinc-200/40 blur-3xl rounded-full" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        </div>

        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-15 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white shadow-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

                <span className="text-sm font-medium text-zinc-700">
                  AI-powered code intelligence
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] leading-[0.95]">
                Code Analysis
                <br />
                <span className="inline-block bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-500 bg-clip-text text-transparent leading-none m-0 p-0">
                  built for modern Developers
                </span>
              </h1>

              {/* Paragraph */}
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-zinc-600 max-w-2xl">
                Zhenix uses AI to review your code in real time helping you
                catch issues, improve structure, optimize performance, and apply
                best practices as you build.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                {/* Signup Button */}
                <Link to="/register">
                  <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-zinc-950 text-white font-semibold shadow-2xl shadow-zinc-950/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full">
                    <span className="relative z-10">Get Started for Free</span>

                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-black to-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Link>

                {/* Documentation Button */}
                <Link to="/docs">
                  <button className="px-8 py-4 rounded-2xl border border-zinc-300 bg-white hover:bg-zinc-50 hover:border-zinc-400 font-semibold transition-all duration-200 w-full">
                    View Documentation
                  </button>
                </Link>
              </div>

              {/* Trust */}
              <div className="mt-12">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-5">
                  Trusted by developers worldwide
                </p>

                <div className="flex flex-wrap items-center gap-8 text-zinc-400 font-semibold">
                  <span className="hover:text-zinc-700 transition-colors">
                    Vercel
                  </span>

                  <span className="hover:text-zinc-700 transition-colors">
                    GitHub
                  </span>

                  <span className="hover:text-zinc-700 transition-colors">
                    OpenAI
                  </span>

                  <span className="hover:text-zinc-700 transition-colors">
                    Stripe
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200/40 to-transparent blur-3xl rounded-full" />

              {/* Main Card */}
              <div className="relative w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/50 overflow-hidden">
                {/* Top Bar */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-zinc-100 bg-zinc-50">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* Mock AI Review UI */}
                <div className="p-6 space-y-5">
                  {/* Code Block */}
                  <div className="rounded-2xl bg-zinc-950 p-5 overflow-hidden">
                    <pre className="text-sm text-zinc-300 overflow-x-auto">
                      {`function calculateTotal(items) {
  let total = 0;

  for (let item of items) {
    total += item.price;
  }

  return total;
}`}
                    </pre>
                  </div>

                  {/* AI Suggestion */}
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />

                      <span className="font-semibold text-emerald-900">
                        AI Suggestion
                      </span>
                    </div>

                    <p className="text-zinc-700 leading-relaxed">
                      Consider using <code>reduce()</code> for cleaner and more
                      declarative logic. Also validate item prices to prevent
                      unexpected NaN values.
                    </p>
                  </div>

                  {/* Bottom Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-zinc-100 p-4">
                      <div className="text-2xl font-bold">99.8%</div>
                      <div className="text-sm text-zinc-500 mt-1">Accuracy</div>
                    </div>

                    <div className="rounded-2xl bg-zinc-100 p-4">
                      <div className="text-2xl font-bold">&lt;3s</div>
                      <div className="text-sm text-zinc-500 mt-1">
                        Review Time
                      </div>
                    </div>

                    <div className="rounded-2xl bg-zinc-100 p-4">
                      <div className="text-2xl font-bold">50K+</div>
                      <div className="text-sm text-zinc-500 mt-1">Reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Bug size={24} />,
                title: "AI Bug Detection",
                desc: "Find hidden issues before they reach production.",
              },
              {
                icon: <Zap size={24} />,
                title: "Performance Insights",
                desc: "Optimize slow logic and inefficient rendering instantly.",
              },
              {
                icon: <Sparkles size={24} />,
                title: "Clean Code Suggestions",
                desc: "Get modern best-practice recommendations automatically.",
              },
              {
                icon: <ShieldCheck size={24} />,
                title: "Security Analysis",
                desc: "Detect vulnerabilities and unsafe patterns in your code.",
              },
              {
                icon: <Code2 size={24} />,
                title: "Multi-language Support",
                desc: "Review JavaScript, Python, Java, C++, and more.",
              },
              {
                icon: <TimerReset size={24} />,
                title: "Instant Feedback",
                desc: "Receive intelligent reviews in seconds, not hours.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-zinc-200 bg-white p-8 hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-6 text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div>
                <h3 className="font-semibold mb-5">Product</h3>

                <ul className="space-y-3 text-zinc-500">
                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      Features
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      Docs
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-5">Company</h3>

                <ul className="space-y-3 text-zinc-500">
                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-5">Resources</h3>

                <ul className="space-y-3 text-zinc-500">
                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      Community
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      Support
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-5">Legal</h3>

                <ul className="space-y-3 text-zinc-500">
                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      Privacy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      Terms
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="hover:text-zinc-900 transition-colors"
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">Zhenix</h2>

                <p className="text-zinc-500 mt-1">
                  AI-powered code reviews for developers.
                </p>
              </div>

              <p className="text-sm text-zinc-500">
                © 2026 Zhenix. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Home;
