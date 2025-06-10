import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';


export default function AadhaarKyc() {
  const [aadhaar, setAadhaar] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId || '';

  const handleGetOtp = async () => {
    // Basic Aadhaar validation
    if (!/^\d{12}$/.test(aadhaar)) {
      setError('Please enter a valid 12-digit Aadhaar number.');
      return;
    }

    try {
      const payload = {
        aadhaarNumber: aadhaar,
      };

      const res = await axios.post('http://localhost:8080/home/checkkyc', payload);
      console.log(res.data);

      // Navigate to OTP verification page with userId and aadhaar
      navigate('/aadhaar_otp_verification', {
        state: { userId, aadhaar },
      });
    } catch (err) {
      console.error('Error sending OTP:', err);
      setError('Failed to send OTP. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <div className="bg-white p-8 rounded-3xl shadow-md max-w-md w-full text-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Verification <span className="text-pink-600 font-bold">KYC</span>
        </h2>
        <p className="text-sm text-gray-500 mt-2 mb-6">
          Confirming your identity to ensure security, trust,<br />
          and smooth experience.
        </p>

        <div className="text-left mb-3">
          <label className="text-sm text-gray-600 mb-1 block">Aadhaar Number</label>
          <input
            type="text"
            value={aadhaar}
            maxLength={12}
            onChange={(e) => {
              setAadhaar(e.target.value);
              setError('');
            }}
            placeholder="XXXXXXXXXXXX"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
        </div>

        <button
          onClick={handleGetOtp}
          className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
        >
          Get OTP
        </button>

        <p className="text-sm text-gray-500 mt-4">
          I don’t have Aadhaar?{' '}
          <span className="text-blue-600 underline cursor-pointer">Click here</span>
        </p>
      </div>
    </div>
  );
}
