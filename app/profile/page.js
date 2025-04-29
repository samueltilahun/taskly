'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className="min-h-screen w-full bg-gray-100 py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Profile</h1>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8">
          
          {/* Left Column */}
          <div className="flex flex-col items-center md:w-1/3">
            {/* Profile Picture */}
            <div className="relative w-40 h-40 mb-4">
              <Image 
                // src="/images/default-avatar.png" 
                alt="Profile Picture" 
                className="rounded-full object-cover"
                fill
              />
            </div>

            <button className="btn btn-secondary mt-2 text-sm">
              Upload New Photo
            </button>

            {/* User Info */}
            <div className="text-center mt-6">
              <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
              <p className="text-gray-500">@johndoe</p>
              <p className="text-gray-600 mt-2 text-sm">
                "Turning tasks into accomplishments."
              </p>
            </div>

            {/* Logout Button */}
            <div className="mt-8">
              <button className="btn btn-danger">
                Log Out
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 flex flex-col gap-8">
            
            {/* Personal Info */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 text-sm">Full Name</label>
                  <input
                    type="text"
                    value="John Doe"
                    className="input-field"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Email Address</label>
                  <input
                    type="email"
                    value="john.doe@example.com"
                    className="input-field"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Phone Number</label>
                  <input
                    type="text"
                    value="+123456789"
                    className="input-field"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Username</label>
                  <input
                    type="text"
                    value="@johndoe"
                    className="input-field"
                    readOnly
                  />
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Security Settings</h3>
              <div className="flex flex-col gap-4">
                <Link href="#" className="text-primary hover:underline">
                  Change Password
                </Link>
                <Link href="#" className="text-primary hover:underline">
                  Set up Two-Factor Authentication
                </Link>
              </div>
            </div>

            {/* Preferences */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Preferences</h3>
              <div className="flex items-center gap-4">
                <span className="text-gray-700">Dark Mode</span>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-12 h-6 rounded-full ${darkMode ? 'bg-primary' : 'bg-gray-300'} flex items-center p-1 transition-all`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white shadow-md transform ${darkMode ? 'translate-x-6' : ''}`}></div>
                </button>
              </div>
            </div>

            {/* Activity Summary */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Activity Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h4 className="text-3xl font-bold text-primary">120</h4>
                  <p className="text-gray-500 text-sm mt-2">Tasks Completed</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h4 className="text-3xl font-bold text-primary">8</h4>
                  <p className="text-gray-500 text-sm mt-2">Projects Joined</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                  <h4 className="text-3xl font-bold text-primary">5</h4>
                  <p className="text-gray-500 text-sm mt-2">Upcoming Deadlines</p>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4">Danger Zone</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Deleting your account will remove all your data. This action cannot be undone.
              </p>
              <button className="btn btn-danger">
                Delete Account
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
