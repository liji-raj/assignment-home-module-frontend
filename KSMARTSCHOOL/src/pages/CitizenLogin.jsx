import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide';

export default function CitizenLogin() {
  const [userId, setUserId] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!userId.trim()) {
      setMessage("Please enter a valid User ID.");
      setShowOtp(false);
      return;
    }

    try {
      const payload = userId.includes("@") ? { email: userId } : { phoneNumber: userId };
      const response = await axios.post("http://localhost:8080/home/check-existence", payload);

      setOtp(""); // clear old OTP
      setShowOtp(true);
      setMessage(response.data);
    } catch (error) {
      console.error("Error sending OTP:", error);
      setShowOtp(false);
      setMessage(
        error.response?.data?.message ||
        "User not found. Please enter a valid User ID."
        
      );
     
    }
  };

  const handleLogin = async () => {
    if (!otp.trim()) {
      setMessage("Please enter the OTP.");
      return;
    }

    try {
      const payload = {
        otp,
        ...(userId.includes("@") ? { email: userId } : { phoneNumber: userId })
      };

      const response = await axios.post("http://localhost:8080/home/login", payload);
      const message = response.data;
      setMessage(message);

      if (message.toLowerCase().includes("successful") || message.toLowerCase().includes("proceed")) {
        const redirectToKyc = message.toLowerCase().includes("aadhaar");
        navigate(redirectToKyc ? "/kyc_verification" : "/login_dashboard", {
          state: { userId }
        });
      } else {
        setMessage(message || "Login failed.");
      }

    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left Side */}
        <LeftSide />

        {/* Right Side */}
        <div className="flex-[1.2] bg-slate-100 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-pink-600">
                Sign in <span className="text-black">K-SMART</span>
              </h2>
              <h3 className="text-sm text-center text-gray-600">Login using OTP</h3>

              {!showOtp && (
                <div>
                  <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
                    User ID (Phone or Email)
                  </label>
                  <input
                    id="userId"
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter phone or email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              )}

              {showOtp && (
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                    Enter OTP
                  </label>
                  <input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              )}

              <button
                onClick={showOtp ? handleLogin : handleSendOtp}
                className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700"
              >
                {showOtp ? "Login" : "Send OTP"}
              </button>

              {message && (
                <div className="text-center text-sm text-blue-600 font-medium">
                  {message}
                </div>
              )}

              <div className="text-sm text-center text-gray-600">
                Don’t have an account?{" "}
                <Link to="/citizen_register" className="text-pink-600 font-medium">
                  Create Account
                </Link>
              </div>

              <div className="text-sm text-center">
                <a href="#" className="text-black font-semibold underline">
                  Forgot User ID?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
