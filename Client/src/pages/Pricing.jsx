import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">
      <Navbar/>
      {/* Back Button & Header */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition mb-8 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
      </div>

      {/* Pricing Content */}
      <div className="max-w-6xl mx-auto px-6 py-8 pb-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            No hidden fees. No credit card required. Just free code reviews for everyone.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white border-2 border-zinc-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            
            {/* Badge */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Free for Everyone
              </div>
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-zinc-900 mb-2">Free Forever</h2>
              <div className="text-6xl font-bold text-zinc-900">$0</div>
              <p className="text-zinc-500 mt-2">No credit card required</p>
            </div>

            {/* Divider */}
            <div className="border-t border-zinc-200 my-6"></div>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              <li className="text-zinc-700 flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited code reviews</span>
              </li>
              <li className="text-zinc-700 flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Bug detection & security checks</span>
              </li>
              <li className="text-zinc-700 flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Best practice suggestions</span>
              </li>
              <li className="text-zinc-700 flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Detailed explanations</span>
              </li>
              <li className="text-zinc-700 flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Paste any code snippet</span>
              </li>
              <li className="text-zinc-700 flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Instant AI feedback</span>
              </li>
            </ul>

            {/* CTA Button */}
            <button 
              onClick={() => navigate('/register')}
              className="w-full px-6 py-3 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-black transition hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Reviewing Now →
            </button>

            {/* Trust Text */}
            <p className="text-center text-zinc-500 text-sm mt-4">
              Join 10,000+ developers who ship better code
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-bold text-zinc-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h3 className="font-semibold text-zinc-900 mb-2">Is it really free forever?</h3>
              <p className="text-zinc-600">Yes! No tricks, no hidden fees, no "pro" plans. We believe code reviews should be accessible to everyone.</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h3 className="font-semibold text-zinc-900 mb-2">Do I need to enter credit card info?</h3>
              <p className="text-zinc-600">Not at all. Just paste your code and start reviewing. No signup required for basic usage.</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h3 className="font-semibold text-zinc-900 mb-2">What languages do you support?</h3>
              <p className="text-zinc-600">We support JavaScript, TypeScript, Python, Java, Go, Rust, C++, and more coming soon.</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-6">
              <h3 className="font-semibold text-zinc-900 mb-2">Is my code private?</h3>
              <p className="text-zinc-600">Yes, your code is never stored or shared. We process it in real-time and discard it after review.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;