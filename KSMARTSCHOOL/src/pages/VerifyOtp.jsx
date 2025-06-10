import { useState, useEffect } from "react";

const VerifyOtp = () => {
  const [enteredOtp, setEnteredOtp] = useState("");
  const [storedOtp, setStoredOtp] = useState("");
  const [contact, setContact] = useState("");
  const [region, setRegion] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const otp = localStorage.getItem("otp");
    const savedContact = localStorage.getItem("contact");
    const savedRegion = localStorage.getItem("region");

    setStoredOtp(otp);
    setContact(savedContact);
    setRegion(savedRegion);
  }, []);

  const handleVerify = (e) => {
    e.preventDefault();
    if (enteredOtp === storedOtp) {
      setSuccess(true);
      setError("");
      alert("OTP verification successful!");
      // Clear storage if needed
      // localStorage.removeItem("otp");
      // localStorage.removeItem("contact");
      // localStorage.removeItem("region");
    } else {
      setSuccess(false);
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleVerify}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm"
      >
        <h2 className="text-pink-600 text-xl font-semibold mb-3">Verify OTP</h2>
        <p className="text-sm text-gray-600 mb-4">
          Enter the OTP sent to{" "}
          <span className="font-semibold">
            {region === "India" ? "Phone" : "Email"}: {contact}
          </span>
        </p>

        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Enter OTP"
          value={enteredOtp}
          onChange={(e) => setEnteredOtp(e.target.value)}
          required
        />

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-2">OTP Verified!</p>}

        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
