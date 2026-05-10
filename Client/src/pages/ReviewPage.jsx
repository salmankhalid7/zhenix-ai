import React, { useState } from "react";
import LeftsideReview from "../components/LeftsideReview";
import RightsideReview from "../components/RightsideReview";
import Navbar from "../components/Navbar"
const ReviewPage = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-white lg:flex-row border-b border-gray-100">
      {/* LEFT SIDE - Code Input */}
      <div className="flex-1 w-full overflow-y-auto lg:overflow-hidden lg:w-1/2 lg:h-screen touch-auto lg:touch-auto">
        <div className="h-full lg:h-screen">
          <LeftsideReview
            setResponse={setResponse}
            setLoading={setLoading}
            setError={setError}
          />
        </div>
      </div>

      {/* VERTICAL BORDER - Responsive divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center lg:relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent lg:w-px lg:h-full lg:via-gray-300" />
        </div>
      </div>

      {/* RIGHT SIDE - AI Response */}
      <div className="flex-1 w-full overflow-y-auto lg:overflow-hidden lg:w-1/2 lg:h-screen touch-auto lg:touch-auto">
        <div className="h-full lg:h-screen">
          <RightsideReview
            response={response}
            loading={loading}
            error={error}
          />
        </div>
      </div>
      
    </div>
    
  );
};

export default ReviewPage;