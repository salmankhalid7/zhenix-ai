import React from "react";
import { useNavigate } from "react-router-dom";
import myPicture from "../images/myPicture.png";
import png1 from "../images/png1.png";
import Navbar from "../components/Navbar";
import BasicFooter from "../components/BasicFooter";

const About = () => {
  const navigate = useNavigate();

  // Contributors/Partners data for the infinite slider
  const technologies = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ];

  return (
    <>
      {/* Animation Styles */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
            width: fit-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
        <Navbar />

        {/* Back Button - Minimalist */}
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-all duration-200 group"
          >
            <svg
              className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Hero Section - Split View */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
            {/* Left Side - Profile Image */}
            <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
              <div>
                <img
                  src={png1}
                  alt="Zhenix AI Platform Preview"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right Side - Text and Social Links */}
            <div className="order-1 lg:order-2">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  Open Source • Free Forever
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Zhenix AI
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Intelligent code reviews that make every developer better.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Zhenix AI is an{" "}
                <strong className="text-gray-900">open-source</strong> platform
                that analyzes your code using artificial intelligence to detect
                bugs, suggest improvements, explain complex logic, and teach
                best practices in real-time.
              </p>

              {/* Social Links - Horizontal with Original Icons */}
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-700">
                  Connect with me
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  {/* GitHub */}
                  <a
                    href="https://github.com/salmankhalid7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/salmankhalid13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#0A66C2] transition-all duration-200 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
                    </svg>
                  </a>

                  {/* Twitter/X */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-all duration-200 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Portfolio Button */}
                  <a
                    href="https://salman-dev-sigma.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-white hover:text-black border border-black transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    My Portfolio
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  href="https://github.com/salmankhalid7/zhenix-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository for Zhenix AI"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Star on GitHub
                </a>

                <span className="text-gray-500 text-sm flex items-center gap-2">
                  Open for contributions — help make it better for everyone
                </span>
              </div>
            </div>
          </div>

          {/* Product Feature Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center my-24">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI-Powered Code Reviews
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Get instant, intelligent feedback on your code. Zhenix AI catches
                bugs, suggests performance improvements, and teaches you modern best
                practices.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    Real-time bug detection and security vulnerability scanning
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    Best practice suggestions with detailed explanations
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    Supports 10+ programming languages and frameworks
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="">
              <img
                src={myPicture}
                alt="Zhenix AI Platform Interface"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Infinite Logo Slider */}
          <div className="mb-24">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Powered By
              </h2>
              <p className="text-gray-500">
                Built with these amazing open-source technologies
              </p>
            </div>

            <div className="relative overflow-hidden bg-white/60 py-8 rounded-2xl border border-gray-200">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

              <div className="flex animate-marquee whitespace-nowrap">
                {[...technologies, ...technologies].map((tech, index) => (
                  <div key={`${tech.name}-${index}`} className="flex items-center mx-8">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                    />
                    <span className="ml-2 text-sm text-gray-500 font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
        <BasicFooter/>
      </div>
    </>
  );
};

export default About;