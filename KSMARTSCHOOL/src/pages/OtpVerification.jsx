import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CitizenLogin = () => {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(userId)) {
      setError("User ID must be a 10-digit number");
      return;
    }

    try {
      const response = await fetch("https://your-api.com/api/verify-userid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("User ID verified:", result);
        navigate("/login_otp", { state: { userId } });
      } else {
        const errData = await response.json();
        setError(errData.message || "User ID verification failed");
      }
    } catch (err) {
      console.error("Error verifying User ID:", err);
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="w-screen h-screen flex bg-gradient-to-br from-white to-gray-100">
      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center items-center p-12 bg-white">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Government_of_Kerala_Logo.png/600px-Government_of_Kerala_Logo.png"
          alt="Kerala Logo"
          className="w-16 mb-4"
        />
        <h1 className="text-2xl text-gray-700 mb-1">Welcome to</h1>
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-pink-600">K</span>
          <span className="text-blue-700">smart</span>
        </h2>
        <img
          src="https://www.linkpicture.com/q/team-working.png"
          alt="Team Working"
          className="rounded w-3/4 mt-2"
        />
        <p className="text-center text-gray-500 mt-6 text-sm">
          One integrated platform for all the services you need
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex justify-center items-center p-10 bg-gray-50">
        <form onSubmit={handleSendOtp} className="w-full max-w-md space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Sign in <span className="text-pink-600">K-SMART</span>
          </h2>
          <p className="text-sm text-center text-gray-500">
            Please enter your login details below
          </p>

          <div>
            <label className="text-sm text-gray-600">User ID</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d{0,10}$/.test(val)) {
                  setUserId(val);
                  setError("");
                }
              }}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter 10-digit User ID"
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
          >
            Send OTP
          </button>

          <div className="text-sm text-center mt-4">
            <p>
              If you don’t have an account?{" "}
              <span className="text-blue-600 cursor-pointer">Create Account</span>
            </p>
            <p className="mt-1 text-blue-600 cursor-pointer">Forgot User ID?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CitizenLogin;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const OtpVerification = () => {
//   const [otp, setOtp] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleVerify = (e) => {
//     e.preventDefault();

//     if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
//       setError("Enter a valid 6-digit OTP.");
//       return;
//     }

//     // Simulate verification success
//     setError("");
//     alert("OTP Verified Successfully!");
//     navigate("/dashboard"); // redirect after success
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <form
//         onSubmit={handleVerify}
//         className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
//       >
//         <h2 className="text-xl font-semibold text-pink-600 mb-4">OTP Verification</h2>
//         <p className="text-gray-600 text-sm mb-4">
//           Please enter the 6-digit OTP sent to your registered contact.
//         </p>

//         <input
//           type="text"
//           maxLength="6"
//           className="w-full border border-gray-300 rounded px-4 py-2 text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-pink-500"
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
//           required
//         />
//         {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

//         <button
//           type="submit"
//           className="w-full mt-4 bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
//         >
//           Verify OTP
//         </button>

//         <div className="text-sm text-center text-gray-600 mt-4">
//           Didn’t receive OTP?{" "}
//           <button
//             type="button"
//             onClick={() => alert("OTP Resent")}
//             className="text-pink-600 hover:underline"
//           >
//             Resend
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default OtpVerification;
