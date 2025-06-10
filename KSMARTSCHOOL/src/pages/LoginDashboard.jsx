import React from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; 
import LogoutButton from "../components/LogoutButton";
import {
  FaBaby,
  FaHeart,
  FaUser,
  FaFileAlt,
  FaBell,
  FaBuilding,
  FaUserCircle,
} from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const LoginDashboard = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <LogoutButton />
      {/* Top Navigation */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center" >
        
        <div className="text-xl font-bold text-blue-700">
          <span className="text-pink-600">K</span>smart
        </div>
        <div className="flex items-center gap-6 text-sm">
          <span>Hi John, Good Morning</span>
          <div className="flex items-center gap-4">
            <span>My Applications</span>
            <span className="text-pink-600 border-b-2 border-pink-600">Apply for new Service</span>
            <span>Payments</span>
            <span>My Documents</span>
            <span>Notifications</span>
            <span>My Building</span>
            <span>My Profile</span>
          </div>
          <select className="border rounded px-2 py-1 text-xs">
            <option>Attingal Municipality</option>
          </select>
          <select className="border rounded px-2 py-1 text-xs">
            <option>EN</option>
          </select>
          <FaUserCircle className="text-xl" />
        </div>
      </div>

      {/* Main Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/5 bg-white p-6 shadow-sm">
          <label className="block mb-2 font-medium text-gray-600 text-sm">Select a Module</label>
          <select className="w-full border rounded px-3 py-2 mb-6">
            <option>Civil Registration</option>
          </select>

          <div className="space-y-4">
            <SidebarItem label="Birth Registration" count="0" icon={<FaBaby />} />
            <SidebarItem label="Marriage Registration" count="0" icon={<FaHeart />} />
            <SidebarItem label="Death Registration" count="0" icon={<FaUser />} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-8">
          {/* Top - New Application & Search */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-700">New Application</h2>
            <div className="relative w-64">
              <input
                type="text"
                className="w-full border border-gray-300 rounded pl-10 py-2"
                placeholder="Search by name, number"
              />
              <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Card
              img="https://www.linkpicture.com/q/baby-hospital.jpg"
              title="New Birth Registration"
              icon={<FaBaby />}
            />
            <Card
              img="https://www.linkpicture.com/q/baby-wrapped.jpg"
              title="Still Birth"
              icon={<IoDocumentText />}
            />
            <Card
              img="https://www.linkpicture.com/q/adoption-hands.jpg"
              title="Adoption"
              icon={<FaUser />}
            />
            <Card
              img="https://www.linkpicture.com/q/form-sign.jpg"
              title="Name Inclusion And Correction"
              icon={<FaFileAlt />}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-3 border-t">
        Copyright © 2023, KSmart, Government of Kerala. | Design & Developed by Information Kerala Mission
      </footer>
    </div>
  );
};

const SidebarItem = ({ label, count, icon }) => (
  <div className="flex items-center justify-between bg-blue-100 px-4 py-2 rounded text-sm font-medium text-blue-800">
    <div className="flex items-center gap-2">
      <span className="text-lg">{icon}</span>
      {label}
    </div>
    <span className="bg-white px-2 py-0.5 rounded text-blue-600 text-xs">{count}</span>
  </div>
);

const Card = ({ img, title, icon }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
    <img src={img} alt={title} className="h-40 w-full object-cover" />
    <div className="p-4 text-center">
      <div className="text-2xl text-gray-400 mb-2">+</div>
      <div className="text-sm font-medium text-gray-700 flex justify-center items-center gap-1">
        <span className="text-lg text-pink-600">{icon}</span>
        {title}
      </div>
    </div>
  </div>
);

export default LoginDashboard;
