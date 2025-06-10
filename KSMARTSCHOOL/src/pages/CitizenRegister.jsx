import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide';

export default function CitizenRegister() {
  const [userId, setUserId] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [countryType, setCountryType] = useState('India');
  const navigate = useNavigate();

  const isPhone = countryType === 'India';
  const isValidPhone = /^\d{10}$/.test(userId);
  const isValidEmail = /^\S+@\S+\.\S+$/.test(userId);
  const isValidUserId = isPhone ? isValidPhone : isValidEmail;

  const handleSendOtp = async () => {
    if (!isValidUserId) {
      setMessage(`Please enter a valid ${isPhone ? '10-digit mobile number' : 'email address'}.`);
      return;
    }

    try {
      const payload = isPhone ? { phoneNumber: userId } : { email: userId };
      //const res = await axios.post('http://localhost:8088/demo-service/api/user/login', payload);

      setOtp('');
      setShowOtp(true);
      setMessage(res.data);
    } catch (error) {
      console.error('Error sending OTP:', error);
      setMessage('User Exist Go to Login.');
    }
  };

  const handleLogin = async () => {
    try {
      const payload = { otp, ...(isPhone ? { phoneNumber: userId } : { email: userId }) };
      const res = await axios.post('http://localhost:8088/demo-service/api/user/register', payload);
      const message = res.data;
      setMessage(message);

      if (/successful|proceed/i.test(message)) {
        setShowSuccess(true);
      } else {
        setMessage(message || 'Login failed.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Login failed. Please try again.');
    }
  };

  const handleSubmit = showOtp ? handleLogin : handleSendOtp;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <LeftSide />

        <div className="flex-[1.2] bg-slate-100 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl shadow-md px-8 py-10 w-full max-w-md text-center">
            {!showSuccess ? (
              <>
                <h2 className="text-xl font-semibold text-gray-700 mb-1">
                  Sign Up <span className="text-pink-600 font-bold">K-SMART</span>
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  To complete your registration, please fill in the details below
                </p>

                {/* Country Type Selection */}
                <div className="flex justify-center gap-6 mb-4">
                  {['India', 'Abroad'].map((type) => (
                    <label key={type} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="countryType"
                        value={type}
                        checked={countryType === type}
                        onChange={() => setCountryType(type)}
                        className="text-pink-600 focus:ring-pink-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>

                {!showOtp && (
                  <div className="text-left mb-2">
                    <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
                      {isPhone ? 'Mobile Number' : 'Email'}
                    </label>
                    <input
                      id="userId"
                      type="text"
                      placeholder={isPhone ? 'XXXXXXXXXX' : 'your@email.com'}
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    {!isValidUserId && userId && (
                      <p className="text-sm text-red-600 mt-1">
                        Please enter a valid {isPhone ? '10-digit mobile number' : 'email address'}.
                      </p>
                    )}
                  </div>
                )}

                {showOtp && (
                  <div className="text-left mb-4">
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                      OTP
                    </label>
                    <input
                      id="otp"
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={!userId || (showOtp && !otp)}
                  className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300 mb-4 disabled:opacity-50"
                >
                  {showOtp ? 'Verify' : 'Send OTP'}
                </button>

                {message && <div className="text-sm text-blue-600 mb-4">{message}</div>}

                <div className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/citizen_login" className="text-pink-600 font-medium">
                    Login
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-gray-700 mb-1">
                  Sign Up <span className="text-pink-600 font-bold">K-SMART</span>
                </h2>
                <p className="text-sm text-gray-600 mb-4">Registration Complete</p>

                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full">
                    <svg
                      className="w-10 h-10 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-blue-900 mb-2">User Account Created</h3>
                <p className="text-sm text-gray-600 mb-4">
                  You are about to begin the KYC verification process. This will require personal
                  information and document uploads.
                </p>

                <p className="text-sm font-medium text-gray-800 mb-6">
                  User ID: <span className="text-blue-700">{userId}</span>
                </p>

                <button
                  onClick={() =>
                    isPhone
                      ? navigate('/aadhaar_kyc', { state: { userId } })
                      : navigate('/kyc_verification', { state: { userId } })
                  }
                  className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
                >
                  Proceed to KYC
                </button>

                <p className="text-sm text-gray-600 mt-4">
                  Already have an account?{' '}
                  <Link to="/login" className="text-pink-600 font-medium">
                    Login
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
