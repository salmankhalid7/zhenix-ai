import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logout, isAuth } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-zinc-200/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Navbar */}
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* Icon (bigger) */}
            <Code2 size={40} className="text-zinc-900" />

            {/* Text */}
            <div className="leading-tight">
              <h1 className="text-xl font-semibold text-zinc-950">Zhenix</h1>

              <p className="hidden sm:block text-xs text-zinc-500">
                AI-powered code reviews
              </p>
            </div>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {!isAuth ? (
              <>
                {/* Links */}
                <nav className="flex items-center gap-8 text-sm font-medium">
                  <Link
                    to="/about"
                    className="text-zinc-600 hover:text-zinc-950 transition-colors"
                  >
                    About
                  </Link>

                  <Link
                    to="/pricing"
                    className="text-zinc-600 hover:text-zinc-950 transition-colors"
                  >
                    Pricing
                  </Link>

                  <Link
                    to="/docs"
                    className="text-zinc-600 hover:text-zinc-950 transition-colors"
                  >
                    Documentation
                  </Link>
                  <Link
                    to="/contact"
                    className="text-zinc-600 hover:text-zinc-950 transition-colors"
                  >
                    Contact us
                  </Link>
                </nav>

                {/* Buttons */}
                <div className="flex items-center gap-3 ml-2">
                  <Link to="/login">
                    <button className="px-5 py-2.5 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-800 font-medium transition-all duration-200">
                      Login
                    </button>
                  </Link>

                  <Link to="/register">
                    <button className="group relative overflow-hidden px-5 py-2.5 rounded-xl bg-zinc-950 text-white font-medium shadow-lg shadow-zinc-950/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
                      <span className="relative z-10">Get Started</span>

                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-black to-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* Auth Links */}
                <nav className="flex items-center gap-8 text-sm font-medium">
                  <Link
                    to="/contact"
                    className="text-zinc-600 hover:text-zinc-950 transition-colors"
                  >
                    Contact us
                  </Link>

                  <Link
                    to="/dashboard"
                    className="text-zinc-600 hover:text-zinc-950 transition-colors"
                  >
                    New Review
                  </Link>
                </nav>

                {/* User */}
                <div className="flex items-center gap-4 pl-6 border-l border-zinc-200">
                  <div className="hidden lg:block text-right">
                    <p className="text-sm font-medium text-zinc-900">
                      {user?.username || "Developer"}
                    </p>

                    <p className="text-xs text-zinc-500">{user?.email}</p>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-medium">
                    {(user?.username || user?.email || "U")
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-xl border border-zinc-300 hover:bg-zinc-100 text-sm font-medium transition-all duration-200"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-11 h-11 rounded-xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:bg-zinc-100 transition"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-zinc-200 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-3">
              {!isAuth ? (
                <>
                  <Link
                    to="/features"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-zinc-100 text-zinc-700 font-medium transition"
                  >
                    Features
                  </Link>

                  <Link
                    to="/pricing"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-zinc-100 text-zinc-700 font-medium transition"
                  >
                    Pricing
                  </Link>

                  <Link
                    to="/docs"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-zinc-100 text-zinc-700 font-medium transition"
                  >
                    Documentation
                  </Link>

                  <div className="flex flex-col gap-3 pt-4">
                    <Link to="/login">
                      <button className="w-full px-4 py-3 rounded-xl border border-zinc-300 bg-white font-medium">
                        Login
                      </button>
                    </Link>

                    <Link to="/register">
                      <button className="w-full px-4 py-3 rounded-xl bg-zinc-950 text-white font-medium">
                        Get Started
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-zinc-100 text-zinc-700 font-medium transition"
                  >
                    Contact us
                  </Link>

                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-zinc-100 text-zinc-700 font-medium transition"
                  >
                    New Review
                  </Link>

                  {/* User Card */}
                  <div className="mt-4 p-4 rounded-2xl border border-zinc-200 bg-zinc-50">
                    <p className="font-medium text-zinc-900">
                      {user?.username}
                    </p>

                    <p className="text-sm text-zinc-500 mt-1">{user?.email}</p>

                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="mt-4 w-full px-4 py-3 rounded-xl bg-zinc-950 text-white font-medium"
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
