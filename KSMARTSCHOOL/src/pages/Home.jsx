import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-3 border-b shadow-sm">
        <div className="flex items-center space-x-4">
          <img src="/ksmart-logo.png" alt="KSmart" className="h-8" />
          <img src="/kerala-logo.png" alt="Kerala" className="h-8" />
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Government of Kerala</span><br />
            Local Self Government Department
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <button className="text-blue-900">മലയാളം</button>
          <button className="text-blue-900">About</button>
          <button className="text-blue-900">K-Suite</button>
          <button className="text-blue-900">Support</button>
          <a href="/declaration" className="border border-pink-500 text-pink-600 px-4 py-1 rounded-full">
          Register
          </a>
          <a href="/citizen_login" className="bg-pink-500 text-white px-4 py-1 rounded-full">Login</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-50 p-10 flex items-center justify-between rounded-bl-3xl">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-gray-800">
            Delivering <span className="text-pink-600">Digital Happiness</span>
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Providing Happiness to the citizen through<br />
            seamless service delivery
          </p>
        </div>

        <div className="flex space-x-4 items-end">
          <img src="/images/person1.png" alt="Person" className="h-60 rounded-md object-cover" />
          <img src="/person2.png" alt="Person" className="h-72 rounded-md object-cover" />
        </div>

        {/* Arrow nav (dummy) */}
        <div className="absolute right-6 bottom-6 text-xl text-white">
          <div className="bg-pink-600 rounded-full px-3 py-1 cursor-pointer">{'>'}</div>
        </div>
      </section>

      {/* Search Section */}
      <section className="mt-6 px-6">
        <div className="flex items-center max-w-3xl mx-auto bg-white shadow-lg rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Find a service"
            className="flex-1 px-6 py-3 focus:outline-none text-gray-700"
          />
          <button className="bg-pink-500 text-white px-6 py-3 font-semibold">Search</button>
        </div>
        <div className="text-center mt-4 text-sm text-gray-600">
          Suggested:{" "}
          <span className="text-blue-600 underline cursor-pointer mx-1">Public Grievance Redressal and Complaints</span> |
          <span className="text-blue-600 underline cursor-pointer mx-1">Marriage Registration</span> |
          <span className="text-blue-600 underline cursor-pointer mx-1">Building Permit</span>
        </div>
      </section>
    </div>
  );
}
