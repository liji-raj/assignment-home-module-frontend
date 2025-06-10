// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import Footer from '../components/Footer';
// // import LeftSide from '../components/LeftSide';

// // export default function KycVerification() {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const userId = location.state?.userId || '';
// //   const [aadhaarNumber, setAadhaarNumber] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleKycSubmit = async () => {
// //     if (!aadhaarNumber || aadhaarNumber.length !== 12) {
// //       setMessage('Please enter a valid 12-digit Aadhaar number.');
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       const payload = {
// //         aadhaarNumber,
// //         ...(userId.includes('@') ? { email: userId } : { phoneNumber: userId })
// //       };

// //       const res = await axios.post('http://localhost:8080/demo-service/checkkyc', payload);
// //       const { message, kycVerified } = res.data;

// //       {showSuccess ? (
// //   <>
// //     <div className="text-center">
// //       <h2 className="text-xl font-bold text-gray-800 mb-1">
// //         Verification <span className="text-pink-600">KYC</span>
// //       </h2>
// //       <p className="text-sm text-gray-600 mb-4">
// //         Confirming your identity to ensure security, trust, and smooth experience.
// //       </p>

// //       {/* Success alert */}
// //       <div className="flex items-center justify-center bg-green-100 text-green-800 px-4 py-2 rounded-md mb-6">
// //         <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
// //         </svg>
// //         Fetched your Aadhaar details for verification.
// //       </div>

// //       {/* Profile */}
// //       <div className="flex justify-center mb-4">
// //         <div className="relative">
// //           <img
// //             src="https://randomuser.me/api/portraits/women/44.jpg"
// //             alt="Profile"
// //             className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
// //           />
// //           <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
// //             <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// //               <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553 2.276A2 2 0 0120 14.118V17a2 2 0 01-2 2h-1.382a1 1 0 00-.894.553l-1.447 2.894a1 1 0 01-1.788 0l-1.447-2.894A1 1 0 0010.382 19H9a2 2 0 01-2-2v-2.882a2 2 0 01.447-1.842L12 10z" />
// //             </svg>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Details Grid */}
// //       <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-left mb-6 text-sm text-gray-700">
// //         <div>
// //           <p className="text-xs text-gray-500">Document Number</p>
// //           <p className="font-medium">1233 4445 1233</p>
// //         </div>
// //         <div>
// //           <p className="text-xs text-gray-500">Date of Birth</p>
// //           <p className="font-medium">12-12-2000</p>
// //         </div>
// //         <div>
// //           <p className="text-xs text-gray-500">Your Name</p>
// //           <p className="font-medium">Sara Sebastian Johnson</p>
// //         </div>
// //         <div>
// //           <p className="text-xs text-gray-500">Gender</p>
// //           <p className="font-medium">Female</p>
// //         </div>
// //       </div>

// //       {/* Continue Button */}
// //       <button
// //         onClick={() => navigate("/kyc_verification", { state: { userId } })}
// //         className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
// //       >
// //         Continue
// //       </button>
// //     </div>
// //   </>
// // ) : (


// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <div className="flex flex-grow">
// //         <LeftSide />
// //         <div className="flex-[1.2] bg-slate-100 flex items-center justify-center p-6">
// //           <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
// //             <div className="space-y-6">
// //               <h2 className="text-3xl font-bold text-center text-pink-600">
// //                 KYC Verification
// //               </h2>
// //               <p className="text-sm text-center text-gray-600">
// //                 Enter your Aadhaar number to verify your identity.
// //               </p>

// //               <div>
// //                 <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700 mb-1">
// //                   Aadhaar Number
// //                 </label>
// //                 <input
// //                   id="aadhaar"
// //                   type="text"
// //                   value={aadhaarNumber}
// //                   onChange={(e) => setAadhaarNumber(e.target.value)}
// //                   placeholder="Enter 12-digit Aadhaar number"
// //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
// //                   maxLength={12}
// //                 />
// //               </div>

// //               <button
// //                 onClick={handleKycSubmit}
// //                 className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
// //                 disabled={loading}
// //               >
// //                 {loading ? 'Verifying...' : 'Verify KYC'}
// //               </button>

// //               {message && (
// //                 <div className="text-center text-sm text-blue-600 font-medium">{message}</div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // }
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';
// import LeftSide from '../components/LeftSide';

// export default function KycVerification() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const userId = location.state?.userId || '';
//   const [aadhaarNumber, setAadhaarNumber] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

//   // const handleKycSubmit = async () => {
//   //   if (!aadhaarNumber || aadhaarNumber.length !== 12) {
//   //     setMessage('Please enter a valid 12-digit Aadhaar number.');
//   //     return;
//   //   }

//   //   try {
//   //     setLoading(true);
//   //     const payload = {
//   //       aadhaarNumber,
//   //       ...(userId.includes('@') ? { email: userId } : { phoneNumber: userId })
//   //     };

//   //     const res = await axios.post('http://localhost:8080/demo-service/checkkyc', payload);
//   //     const { message, kycVerified } = res.data;

//   //     setMessage(message);
//   //     if (kycVerified) {
//   //       setShowSuccess(true);
//   //     }
//   //   } catch (error) {
//   //     setMessage('Verification failed. Please try again.');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
// import { useState } from 'react';

// export default function OtpVerificationCard() {
//   const [showOtpSection, setShowOtpSection] = useState(false);
//   const [otp, setOtp] = useState('');

//   const handleSendOtp = () => {
//     // Simulate sending OTP
//     setShowOtpSection(true);
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
//       {!showOtpSection ? (
//         <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
//           <h2 className="text-xl font-semibold mb-4">Enter your Aadhaar</h2>
//           <input
//             type="text"
//             placeholder="Enter Aadhaar Number"
//             className="w-full border rounded-md p-2 mb-4"
//           />
//           <button
//             onClick={handleSendOtp}
//             className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-md w-full"
//           >
//             Send OTP
//           </button>
//         </div>
//       ) : (
//         <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
//           <h2 className="text-xl font-bold text-pink-600 mb-2">Verification <span className="text-black">KYC</span></h2>
//           <p className="text-gray-600 mb-4">
//             Confirming your identity to ensure security, trust, and smooth experience.
//           </p>

//           <div className="bg-green-100 text-green-800 text-sm rounded-md p-3 mb-4 flex items-center justify-between">
//             <span>
//               OTP has been sent to your Aadhaar-linked mobile number. <br />
//               ******8325 / vv******@gmail.com
//             </span>
//             <button className="text-green-600 font-bold text-xl leading-none">×</button>
//           </div>

//           <label className="text-sm text-gray-700 mb-1 block">Enter OTP</label>
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             className="w-full border rounded-md p-2 mb-2"
//             placeholder="XXXX"
//           />
//           <p className="text-red-500 text-xs mb-2">Please enter the OTP sent to your mobile</p>
//           <div className="text-right mb-4">
//             <button className="text-sm text-blue-500 hover:underline">Resend OTP</button>
//           </div>

//           <button
//             className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-md w-full"
//           >
//             Verify
//           </button>

//           <p className="text-sm text-gray-500 mt-4 text-center">
//             I don’t have Aadhaar <a className="text-blue-500 hover:underline" href="#">Click here</a>
//           </p>
//         </div>
//       )}
//     </div>
//   );


//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex flex-grow">
//         <LeftSide />
//         <div className="flex-[1.2] bg-slate-100 flex items-center justify-center p-6">
//           <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
//             {showSuccess ? (
//               <div className="text-center">
//                 <h2 className="text-xl font-bold text-gray-800 mb-1">
//                   Verification <span className="text-pink-600">KYC</span>
//                 </h2>
//                 <p className="text-sm text-gray-600 mb-4">
//                   Confirming your identity to ensure security, trust, and smooth experience.
//                 </p>
//                 <div className="flex items-center justify-center bg-green-100 text-green-800 px-4 py-2 rounded-md mb-6">
//                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                   </svg>
//                   Fetched your Aadhaar details for verification.
//                 </div>

//                 <div className="flex justify-center mb-4">
//                   <img
//                     src="https://randomuser.me/api/portraits/women/44.jpg"
//                     alt="Profile"
//                     className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-left mb-6 text-sm text-gray-700">
//                   <div>
//                     <p className="text-xs text-gray-500">Document Number</p>
//                     <p className="font-medium">{aadhaarNumber}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Date of Birth</p>
//                     <p className="font-medium">12-12-2000</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Your Name</p>
//                     <p className="font-medium">Sara Sebastian Johnson</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Gender</p>
//                     <p className="font-medium">Female</p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => navigate("/kyc_verification", { state: { userId } })}
//                   className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
//                 >
//                   Continue
//                 </button>
//               </div>
//             ) : (
//               <div className="space-y-6">
//                 <h2 className="text-3xl font-bold text-center text-pink-600">
//                   KYC Verification
//                 </h2>
//                 <p className="text-sm text-center text-gray-600">
//                   Enter your Aadhaar number to verify your identity.
//                 </p>

//                 <div>
//                   <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700 mb-1">
//                     Aadhaar Number
//                   </label>
//                   <input
//                     id="aadhaar"
//                     type="text"
//                     value={aadhaarNumber}
//                     onChange={(e) => setAadhaarNumber(e.target.value)}
//                     placeholder="Enter 12-digit Aadhaar number"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
//                     maxLength={12}
//                   />
//                 </div>

//                 <button
//   onClick={handleSendOtp}
//   className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
//   disabled={loading}
// >
//   {loading ? 'Sending...' : 'Send OTP'}
// </button>

//                 {message && (
//                   <div className="text-center text-sm text-blue-600 font-medium">{message}</div>
//                 )}
//               </div>
//             )}




            
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide';

export default function KycVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state?.userId || '';
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOtp = async () => {
    if (!aadhaarNumber || aadhaarNumber.length !== 12) {
      setMessage('Please enter a valid 12-digit Aadhaar number.');
      return;
    }

    try {
      setLoading(true);
      const payload = {
        aadhaarNumber,
        ...(userId.includes('@') ? { email: userId } : { phoneNumber: userId })
      };

      const res = await axios.post('http://localhost:8080/demo-service/send-otp', payload);
      setMessage('OTP sent successfully.');
      setShowOtpSection(true);
    } catch (error) {
      setMessage('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      setLoading(true);
      const payload = {
        aadhaarNumber,
        otp,
        ...(userId.includes('@') ? { email: userId } : { phoneNumber: userId })
      };

      const res = await axios.post('http://localhost:8080/demo-service/verify-otp', payload);
      const { message, kycVerified } = res.data;

      setMessage(message);
      if (kycVerified) {
        setShowSuccess(true);
      }
    } catch (error) {
      setMessage('OTP verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <LeftSide />
        <div className="flex-[1.2] bg-slate-100 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
            {showSuccess ? (
              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  Verification <span className="text-pink-600">KYC</span>
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Confirming your identity to ensure security, trust, and smooth experience.
                </p>
                <div className="flex items-center justify-center bg-green-100 text-green-800 px-4 py-2 rounded-md mb-6">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Fetched your Aadhaar details for verification.
                </div>
                <div className="flex justify-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
                  />
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-left mb-6 text-sm text-gray-700">
                  <div>
                    <p className="text-xs text-gray-500">Document Number</p>
                    <p className="font-medium">{aadhaarNumber}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Date of Birth</p>
                    <p className="font-medium">12-12-2000</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Your Name</p>
                    <p className="font-medium">Sara Sebastian Johnson</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Gender</p>
                    <p className="font-medium">Female</p>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/kyc_verification", { state: { userId } })}
                  className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
                >
                  Continue
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center text-pink-600">
                  KYC Verification
                </h2>
                <p className="text-sm text-center text-gray-600">
                  {showOtpSection ? 'Enter the OTP sent to your mobile/email.' : 'Enter your Aadhaar number to verify your identity.'}
                </p>

                <div>
                  <label htmlFor="aadhaar" className="block text-sm font-medium text-gray-700 mb-1">
                    Aadhaar Number
                  </label>
                  <input
                    id="aadhaar"
                    type="text"
                    value={aadhaarNumber}
                    onChange={(e) => setAadhaarNumber(e.target.value)}
                    placeholder="Enter 12-digit Aadhaar number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    maxLength={12}
                    disabled={showOtpSection}
                  />
                </div>

                {showOtpSection && (
                  <>
                    <label className="text-sm text-gray-700 mb-1 block">Enter OTP</label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full border rounded-md p-2 mb-2"
                      placeholder="XXXX"
                    />
                    <p className="text-red-500 text-xs mb-2">Please enter the OTP sent to your mobile/email</p>
                    <div className="text-right mb-4">
                      <button className="text-sm text-blue-500 hover:underline">Resend OTP</button>
                    </div>
                    <button
                      onClick={handleVerifyOtp}
                      className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
                      disabled={loading}
                    >
                      {loading ? 'Verifying...' : 'Verify OTP'}
                    </button>
                  </>
                )}

                {!showOtpSection && (
                  <button
                    onClick={handleSendOtp}
                    className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition duration-300"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send OTP'}
                  </button>
                )}

                {message && (
                  <div className="text-center text-sm text-blue-600 font-medium">{message}</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}