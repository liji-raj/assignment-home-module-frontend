
import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className={`text-xs text-right bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700 ${className}`}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
