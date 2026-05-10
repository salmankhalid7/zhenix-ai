import React from 'react'
import Navbar from "../components/Navbar"
import ReviewPage from "../pages/ReviewPage";
import BasicFooter from './BasicFooter';

const Dashboard = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-gray-50 relative">
      <Navbar/>
      <div className="flex-1 overflow-hidden">
        <ReviewPage />
      </div>
      {/* Gradient border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
    </div>
  )
}

export default Dashboard;