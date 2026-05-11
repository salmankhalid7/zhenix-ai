import ReviewPage from "./pages/ReviewPage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Document from "./pages/Document";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/docs" element={<Document />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />{" "}
    </Routes>
  );
}

export default App;
