import React from 'react';
import Footer from '../components/Footer'
const Profile: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between">
          {/* Background Image Section */}
          <div
            className="bg-cover bg-center h-52"
            style={{ backgroundImage: 'url("/path-to-your-background-image.jpg")' }}
          >
            {/* This div is for the background image */}
          </div>
    
          {/* Profile Card Section */}
          <div className="relative bg-gray-800 rounded-lg mx-4 -mt-24 p-6">
            {/* Profile Image */}
            <div className="absolute -top-8 right-8 bg-gray-900 rounded-full w-16 h-16 border-4 border-gray-800 flex items-center justify-center">
              {/* Placeholder for Profile Image */}
            </div>
    
            {/* Profile Details */}
            <div className="pt-10">
              <h1 className="text-xl font-bold">GRADEN HERRELL</h1>
              <ul className="mt-2 space-y-1">
                <li>Artist</li>
                <li>Creative Designer</li>
                <li>Photographer</li>
                <li>Screen-printer</li>
              </ul>
            </div>
    
            {/* Connected Status, Message, and Hamburger Menu */}
            <div className="absolute top-6 right-8 flex flex-col items-end">
              <button className="bg-gray-700 px-4 py-2 rounded-full text-sm mb-2">CONNECTED</button>
              <button className="bg-gray-700 px-4 py-2 rounded-full text-sm mb-2">MESSAGE</button>
              <button className="bg-gray-700 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16m-7 4h7m-7 4h7M4 14h1m0 0h5m-5 4h5"
                  />
                </svg>
              </button>
            </div>
    
            {/* Divider Line */}
            <hr className="my-4 border-gray-600" />
    
            {/* Connection Stats */}
            <div className="flex justify-around my-4">
              <div className="text-center">
                <h2 className="text-xl font-bold">45</h2>
                <p className="text-sm">Connections</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold">19</h2>
                <p className="text-sm">Events</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold">13</h2>
                <p className="text-sm">Collectives</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold">500</h2>
                <p className="text-sm">Impact</p>
              </div>
            </div>
          </div>
    
          {/* Middle Icons */}
          <div className="flex justify-around my-4 px-12">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="16" y1="2" x2="16" y2="6" />
              </svg>
            </button>
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <line x1="12" y1="12" x2="16" y2="8" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="8" y1="16" x2="12" y2="12" />
              </svg>
            </button>
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="16" rx="2" ry="2" />
                <circle cx="8" cy="12" r="1" />
                <path d="M11 16h6" />
              </svg>
            </button>
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 22 22 22 12 2" />
                <line x1="12" y1="11" x2="12" y2="16" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </button>
          </div>
    
          {/* Grid Layout for Content */}
          <div className="px-4 my-4 grid grid-cols-3 gap-2">
            {/* Add content items here */}
            <div className="bg-gray-800 h-24"></div>
            <div className="bg-gray-800 h-24 col-span-2"></div>
            <div className="bg-gray-800 h-24"></div>
            <div className="bg-gray-800 h-24"></div>
            <div className="bg-gray-800 h-24 col-span-2"></div>
            <div className="bg-gray-800 h-24"></div>
            <div className="bg-gray-800 h-24"></div>
            <div className="bg-gray-800 h-24 col-span-2"></div>
            {/* Continue with the grid layout as needed */}
          </div>
    
          {/* Footer Navigation */}
          <Footer/>
        </div>
      );
    };
export default Profile;
