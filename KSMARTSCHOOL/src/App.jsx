import React from "react";
import { Routes, Route } from "react-router-dom";
import CitizenLogin from "./pages/CitizenLogin";
import CitizenRegister from "./pages/CitizenRegister";
import OtpEntry from "./pages/OtpEntry";
import LoginDashboard from './pages/LoginDashboard';
import Footer from "./components/Footer";
import KycVerification from "./pages/KycVerification";
import AadhaarKyc from './pages/AadhaarKyc';
import LeftSide from "./components/LeftSide";
import LeftSection from "./components/LeftSection"; 
import ImageCarousel from "./components/ImageCarousel";
import LogoSection from "./components/LogoSection";
import AadhaarOtpVerification from './pages/AadhaarOtpVerification';
import Declaration from "./components/Declaration";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/citizen_login" element={<CitizenLogin />} />
      <Route path="/login_otp" element={<OtpEntry />} />
       <Route path="/login_dashboard" element={<LoginDashboard />} />
      <Route path="/citizen_register" element={<CitizenRegister />} />
      <Route path="/kyc_verification" element={<KycVerification />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/left_side" element={<LeftSide />} />
      <Route path="/left_section" element={<LeftSection />} />
      <Route path="/image_carousel" element={<ImageCarousel />} />
      <Route path="/logo_section" element={<LogoSection />} />
      <Route path="/aadhaar_kyc" element={<AadhaarKyc />} />
      <Route path="/aadhaar_otp_verification" element={<AadhaarOtpVerification />} />
      <Route path="/" element={<Home />} />
      <Route path="/declaration" element={<Declaration />} />

      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;


