// // import React, { useState } from 'react';

// // const OtpEntry = () => {
// //   const [otp, setOtp] = useState('');
// //   const [error, setError] = useState('');
// //   const [resendDisabled, setResendDisabled] = useState(false);

// //   const handleChange = (e) => {
// //     setOtp(e.target.value);
// //     if (e.target.value.length === 6) setError('');
// //   };

// //   const handleSubmit = () => {
// //     if (otp.length !== 6) {
// //       setError('Please enter the OTP sent to your mobile');
// //     } else {
// //       setError('');
// //       alert(`OTP Submitted: `);
// //     }
// //   };

// //   const handleResend = () => {
// //     alert('OTP resent to your mobile');
// //     setResendDisabled(true);
// //     setTimeout(() => setResendDisabled(false), 30000); // 30 seconds wait
// //   };

// //   return (
// //     <div className="flex h-screen font-sans">
// //       {/* Left Panel */}
// //       <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8">
// //         <h2 className="text-xl text-gray-600 mb-2">Welcome to</h2>
// //         <h1 className="text-4xl font-bold text-[#D9007E]">
// //           K<span className="text-blue-500">smart</span>
// //         </h1>
// //         <div className="my-6">
// //           <img
// //             src="https://cdn.pixabay.com/photo/2017/01/10/19/05/meeting-1979261_1280.jpg"
// //             alt="Team discussion"
// //             className="rounded-md w-72 h-48 object-cover"
// //           />
// //         </div>
// //         <p className="text-center text-gray-600 max-w-xs">
// //           One integrated platform for all the services you need
// //         </p>
// //       </div>

// //       {/* Right Panel */}
// //       <div className="w-1/2 flex justify-center items-center bg-white">
// //         <div className="w-96">
// //           <button className="text-sm text-gray-600 mb-2">&larr;</button>
// //           <h2 className="text-2xl font-bold text-pink-600">Sign in K-SMART</h2>
// //           <p className="text-sm text-gray-600 mt-1 mb-4">Please enter your login details below</p>

// //           <label className="block text-sm text-gray-600 mb-1">Enter OTP</label>
// //           <input
// //             type="text"
// //             value={otp}
// //             onChange={handleChange}
// //             placeholder="X X X X X X"
// //             maxLength={6}
// //             className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
// //           />
// //           {error && <p className="text-sm text-red-500">{error}</p>}
// //           <div className="text-right text-sm text-blue-500 cursor-pointer" onClick={handleResend}>
// //             {resendDisabled ? 'Please wait...' : 'Resend OTP'}
// //           </div>

// //           <button
// //             onClick={handleSubmit}
// //             className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
// //           >
// //             Submit
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OtpEntry;
// import React, { useState } from 'react';

// const OtpEntry = () => {
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [resendDisabled, setResendDisabled] = useState(false);

//   const handleChange = (e) => {
//     setOtp(e.target.value);
//     if (e.target.value.length === 6) setError('');
//   };

//   const handleSubmit = async () => {
//     if (otp.length !== 6) {
//       setError('Please enter the OTP sent to your mobile');
//       return;
//     }

//     try {
//       const response = await fetch('https://your-api-endpoint.com/verify-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ otp })
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       console.log('API Response:', result);
//       // Handle success (e.g., navigate to another page or display a success message)
//     } catch (error) {
//       console.error('Error during API call:', error);
//       setError('Failed to verify OTP. Please try again.');
//     }
//   };

//   const handleResend = () => {
//     alert('OTP resent to your mobile');
//     setResendDisabled(true);
//     setTimeout(() => setResendDisabled(false), 30000); // 30 seconds wait
//   };

//   return (
//     <div className="flex h-screen font-sans">
//       {/* Left Panel */}
//       <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8">
//         <h2 className="text-xl text-gray-600 mb-2">Welcome to</h2>
//         <h1 className="text-4xl font-bold text-[#D9007E]">
//           K<span className="text-blue-500">smart</span>
//         </h1>
//         <div className="my-6">
//           <img
//             src="https://cdn.pixabay.com/photo/2017/01/10/19/05/meeting-1979261_1280.jpg"
//             alt="Team discussion"
//             className="rounded-md w-72 h-48 object-cover"
//           />
//         </div>
//         <p className="text-center text-gray-600 max-w-xs">
//           One integrated platform for all the services you need
//         </p>
//       </div>

//       {/* Right Panel */}
//       <div className="w-1/2 flex justify-center items-center bg-white">
//         <div className="w-96">
//           <button className="text-sm text-gray-600 mb-2">&larr;</button>
//           <h2 className="text-2xl font-bold text-pink-600">Sign in K-SMART</h2>
//           <p className="text-sm text-gray-600 mt-1 mb-4">Please enter your login details below</p>

//           <label className="block text-sm text-gray-600 mb-1">Enter OTP</label>
//           <input
//             type="text"
//             value={otp}
//             onChange={handleChange}
//             placeholder="X X X X X X"
//             maxLength={6}
//             className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//           {error && <p className="text-sm text-red-500">{error}</p>}
//           <div className="text-right text-sm text-blue-500 cursor-pointer" onClick={handleResend}>
//             {resendDisabled ? 'Please wait...' : 'Resend OTP'}
//           </div>

//           <button
//             onClick={handleSubmit}
//             className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
//           >
//             Submit OTP
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtpEntry;
// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// const OtpEntry = () => {
//   const [otp, setOtp] = useState('');
//    const navigate = useNavigate();
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [resendDisabled, setResendDisabled] = useState(false);

//   const DEFAULT_OTP = '123456'; // Default OTP for validation

//   const handleChange = (e) => {
//     setOtp(e.target.value);
//     setError('');
//     setSuccess('');
//   };

//   const handleSubmit = () => {
//     if (otp.length !== 6) {
//       setError('Please enter the 6-digit OTP sent to your mobile');
//       return;
//     }

//     if (otp === DEFAULT_OTP) {
//       setSuccess('OTP verified successfully!');
//       navigate("/LoginDashboard", { state: { userId } });
//       setError('');
//     } else {
//       setError('Invalid OTP. Please try again.');
//       setSuccess('');
//     }
//   };

//   const handleResend = () => {
//     alert(`OTP resent to your mobile: ${DEFAULT_OTP}`);
//     setResendDisabled(true);
//     setTimeout(() => setResendDisabled(false), 30000); // 30 seconds wait
//   };

//   return (
//     <div className="flex h-screen font-sans">
//       {/* Left Panel */}
//       <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8">
//         <h2 className="text-xl text-gray-600 mb-2">Welcome to</h2>
//         <h1 className="text-4xl font-bold text-[#D9007E]">
//           K<span className="text-blue-500">smart</span>
//         </h1>
//         <div className="my-6">
//           <img
//             src="https://cdn.pixabay.com/photo/2017/01/10/19/05/meeting-1979261_1280.jpg"
//             alt="Team discussion"
//             className="rounded-md w-72 h-48 object-cover"
//           />
//         </div>
//         <p className="text-center text-gray-600 max-w-xs">
//           One integrated platform for all the services you need
//         </p>
//       </div>

//       {/* Right Panel */}
//       <div className="w-1/2 flex justify-center items-center bg-white">
//         <div className="w-96">
//           <button className="text-sm text-gray-600 mb-2">&larr;</button>
//           <h2 className="text-2xl font-bold text-pink-600">Sign in K-SMART</h2>
//           <p className="text-sm text-gray-600 mt-1 mb-4">Please enter your login details below</p>

//           <label className="block text-sm text-gray-600 mb-1">Enter OTP</label>
//           <input
//             type="text"
//             value={otp}
//             onChange={handleChange}
//             placeholder="X X X X X X"
//             maxLength={6}
//             className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />

//           {error && <p className="text-sm text-red-500">{error}</p>}
//           {success && <p className="text-sm text-green-600">{success}</p>}

//           <div
//             className={`text-right text-sm ${
//               resendDisabled ? 'text-gray-400' : 'text-blue-500 cursor-pointer'
//             }`}
//             onClick={!resendDisabled ? handleResend : undefined}
//           >
//             {resendDisabled ? 'Please wait...' : 'Resend OTP'}
//           </div>

//           <button
//             onClick={handleSubmit}
//             className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
//           >
//             Submit 
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtpEntry;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpEntry = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);
  
  const navigate = useNavigate();
  const DEFAULT_OTP = '123456';

  const handleChange = (e) => {
    setOtp(e.target.value);
    setError('');
    setSuccess('');
  };

  const handleSubmit = () => {
    if (otp.length !== 6) {
      setError('Please enter the 6-digit OTP sent to your mobile');
      return;
    }

    if (otp === DEFAULT_OTP) {
      setSuccess('OTP verified successfully!');
      setError('');
      navigate('/login_dasgboard');
    } else {
      setError('Invalid OTP. Please try again.');
      setSuccess('');
    }
  };

  const handleResend = () => {
    alert(`OTP resent to your mobile: ${DEFAULT_OTP}`);
    setResendDisabled(true);
    setTimeout(() => setResendDisabled(false), 30000); // 30 seconds wait
  };


  return (
    <div className="flex h-screen font-sans">
      {/* Left Panel */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8">
        <h2 className="text-xl text-gray-600 mb-2">Welcome to</h2>
        <h1 className="text-4xl font-bold text-[#D9007E]">
          K<span className="text-blue-500">smart</span>
        </h1>
        <div className="my-6">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/10/19/05/meeting-1979261_1280.jpg"
            alt="Team discussion"
            className="rounded-md w-72 h-48 object-cover"
          />
        </div>
        <p className="text-center text-gray-600 max-w-xs">
          One integrated platform for all the services you need
        </p>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="w-96">
          <button className="text-sm text-gray-600 mb-2">&larr;</button>
          <h2 className="text-2xl font-bold text-pink-600">Sign in K-SMART</h2>
          <p className="text-sm text-gray-600 mt-1 mb-4">Please enter your login details below</p>

          <label className="block text-sm text-gray-600 mb-1">Enter OTP</label>
          <input
            type="text"
            value={otp}
            onChange={handleChange}
            placeholder="X X X X X X"
            maxLength={6}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {error && <p className="text-sm text-red-500">{error}</p>}
          {success && <p className="text-sm text-green-600">{success}</p>}

          <div
            className={`text-right text-sm ${
              resendDisabled ? 'text-gray-400' : 'text-blue-500 cursor-pointer'
            }`}
            onClick={!resendDisabled ? handleResend : undefined}
          >
            {resendDisabled ? 'Please wait...' : 'Resend OTP'}
          </div>

          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpEntry;

