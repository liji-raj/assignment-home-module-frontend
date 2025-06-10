// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function AadhaarOtpVerification() {
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [resendClicked, setResendClicked] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { userId, aadhaar } = location.state || {};

//   const handleVerify = async () => {
//     if (!otp || otp.length < 4) {
//       setError('Please enter the OTP sent to your mobile');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:8080/home/checkkyc', {
//         phoneNumber:userId,
//         aadhaarNo: aadhaar,
//         otp,
//       });

//       if (res.data?.toLowerCase().includes('verified')) {
//         setSuccessMessage('OTP verified successfully!');
//         // Proceed to full KYC
//         navigate('/aadhaar_kyc_verification', { state: { userId } });
//       } else {
//         setError(res.data || 'Invalid OTP');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Failed to verify OTP');
//     }
//   };

//   const handleResendOtp = async () => {
//     setResendClicked(true);
//     try {
//       const res = await axios.post('http://localhost:8080/home/send-aadhaar-otp', {
//         userId,
//         aadhaarNumber: aadhaar,
//       });
//       if (res.data?.toLowerCase().includes('otp sent')) {
//         setSuccessMessage('OTP has been resent to your Aadhaar-linked mobile number');
//         setError('');
//       } else {
//         setError('Failed to resend OTP');
//       }
//     } catch (err) {
//       setError('Failed to resend OTP');
//     }
//     setTimeout(() => setResendClicked(false), 3000);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-slate-100">
//       <div className="bg-white p-8 rounded-3xl shadow-md max-w-md w-full text-center">
//         {/* Back arrow + Title */}
//         <div className="flex justify-between items-center mb-4">
//           <button onClick={() => navigate(-1)} className="text-gray-600 text-lg">←</button>
//           <div className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-bold">1</div>
//         </div>

//         <h2 className="text-xl font-semibold text-gray-700">
//           Verification <span className="text-pink-600 font-bold">KYC</span>
//         </h2>
//         <p className="text-sm text-gray-600 mb-4 mt-1">
//           Confirming your identity to ensure security, trust,<br />
//           and smooth experience.
//         </p>

//         {successMessage && (
//           <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md mb-4 text-sm flex items-center justify-between">
//             <span>OTP has been sent to your Aadhaar-linked mobile number.</span>
//             <button onClick={() => setSuccessMessage('')}>✕</button>
//           </div>
//         )}

//         {/* OTP Input */}
//         <div className="text-left mb-2">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
//           <input
//             type="text"
//             placeholder="XXXX"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//         </div>

//         {error && <p className="text-sm text-red-600 mb-2">{error}</p>}

//         <div className="text-right text-sm text-blue-600 cursor-pointer mb-4">
//           <button onClick={handleResendOtp} disabled={resendClicked}>
//             Resend OTP
//           </button>
//         </div>

//         <button
//           onClick={handleVerify}
//           className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
//         >
//           Verify
//         </button>

//         <p className="text-sm text-gray-600 mt-4">
//           I don’t have Aadhaar?{' '}
//           <span className="text-blue-600 underline cursor-pointer">Click here</span>
//         </p>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AadhaarOtpVerification() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [resendClicked, setResendClicked] = useState(false);
  const [showKycDetails, setShowKycDetails] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { userId, aadhaar } = location.state || {};

  const handleVerify = async () => {
    if (!otp || otp.length < 4) {
      setError('Please enter the OTP sent to your mobile');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/home/checkkyc', {
        phoneNumber: userId,
        aadhaarNo: aadhaar,
        otp,
      });

      if (res.data?.toLowerCase().includes('verified')) {
        setSuccessMessage('OTP verified successfully!');
        setError('');
        setShowKycDetails(true); // Show Aadhaar details panel
      } else {
        setError(res.data || 'Invalid OTP');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to verify OTP');
    }
  };

  const handleResendOtp = async () => {
    setResendClicked(true);
    try {
      const res = await axios.post('http://localhost:8080/home/send-aadhaar-otp', {
        userId,
        aadhaarNumber: aadhaar,
      });
      if (res.data?.toLowerCase().includes('otp sent')) {
        setSuccessMessage('OTP has been resent to your Aadhaar-linked mobile number');
        setError('');
      } else {
        setError('Failed to resend OTP');
      }
    } catch (err) {
      setError('Failed to resend OTP');
    }
    setTimeout(() => setResendClicked(false), 3000);
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Left panel */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white p-8 rounded-3xl shadow-md max-w-md w-full text-center">
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => navigate(-1)} className="text-gray-600 text-lg">←</button>
            <div className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-bold">1</div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700">
            Verification <span className="text-pink-600 font-bold">KYC</span>
          </h2>
          <p className="text-sm text-gray-600 mb-4 mt-1">
            Confirming your identity to ensure security, trust,<br />
            and smooth experience.
          </p>

          {successMessage && (
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md mb-4 text-sm flex items-center justify-between">
              <span>{successMessage}</span>
              <button onClick={() => setSuccessMessage('')}>✕</button>
            </div>
          )}

          {/* OTP Input */}
          <div className="text-left mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
            <input
              type="text"
              placeholder="XXXX"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {error && <p className="text-sm text-red-600 mb-2">{error}</p>}

          <div className="text-right text-sm text-blue-600 cursor-pointer mb-4">
            <button onClick={handleResendOtp} disabled={resendClicked}>
              Resend OTP
            </button>
          </div>

          <button
            onClick={handleVerify}
            className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
          >
            Verify
          </button>

          <p className="text-sm text-gray-600 mt-4">
            I don’t have Aadhaar?{' '}
            <span className="text-blue-600 underline cursor-pointer">Click here</span>
          </p>
        </div>
      </div>

      {/* Right panel - Aadhaar Details */}
      {showKycDetails && (
        <div className="flex-1 bg-white shadow-md p-8 rounded-l-3xl flex flex-col justify-center items-center">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md mb-4 text-sm w-full text-center">
            ✓ Fetched your Aadhaar details for verification.
          </div>

          <img
            src="/aadhaar-preview.png" // make sure the image is available in `public/` folder
            alt="Aadhaar"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />

          <div className="text-center">
            <p className="font-semibold text-sm text-gray-600">Document Number</p>
            <p className="text-lg font-bold text-gray-800 mb-2">1233 4445 1233</p>

            <p className="font-semibold text-sm text-gray-600">Date of Birth</p>
            <p className="text-lg text-gray-800 mb-2">12-12-2000</p>

            <p className="font-semibold text-sm text-gray-600">Your Name</p>
            <p className="text-lg text-gray-800 mb-2">Sara Sebastian Johnson</p>

            <p className="font-semibold text-sm text-gray-600">Gender</p>
            <p className="text-lg text-gray-800 mb-6">Female</p>

            <button
              onClick={() => navigate('/aadhaar_kyc_verification', { state: { userId } })}
              className="bg-pink-600 text-white px-8 py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
