import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/auth";
import logincodereview from "../images/login-code-review.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await loginUser({ email, password });
      login(res.data.user, res.data.token);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#ECE9E6",
        background: "-webkit-linear-gradient(to left, #FFFFFF, #ECE9E6)",
        background: "linear-gradient(to left, #FFFFFF, #ECE9E6)",
      }}
    >
      {/* Back Button - Top Extreme Left */}
      <div className="absolute top-8 left-8">
        <Link to="/">
          <button className="px-6 py-2 bg-transparent text-black font-semibold rounded-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-200">
            ← Back to Home
          </button>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-16 items-center">
          {/* Left Side - Login Form */}
          <div className="flex-1 max-w-md w-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-black mb-2">
                  Welcome Back
                </h2>
                <p className="text-black/60">Sign in to continue to Zhenix</p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-black/80 text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:border-black transition-colors text-black placeholder-black/40"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-black/80 text-sm font-semibold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:border-black transition-colors text-black placeholder-black/40"
                    required
                  />
                </div>

                <div className="mb-4 text-right">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-black/60 hover:text-black transition"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-black text-white font-semibold rounded-xl hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Logging in..." : "Sign In"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-black/60 text-sm">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-black font-semibold hover:underline"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - PNG Image */}
<div className="flex-1 flex justify-center items-center">
  <div className="w-full max-w-xl">
    <img
      src={logincodereview}
      alt="Code Review Illustration"
      className="w-full h-auto object-contain"
    />
  </div>
</div>
        </div>
      </div>

      {/* Mini Footer */}
      <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Zhenix. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
