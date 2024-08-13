import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBox = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <div className="relative">
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-between items-center border-t border-gray-700">
        <div className="flex justify-between w-full">
          <Link to="/" className="text-white flex-1 flex justify-center">
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
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l6.16-3.422A12.053 12.053 0 0119.5 20.5H4.5a12.053 12.053 0 011.34-6.922L12 14z"
              />
            </svg>
          </Link>
          <Link to="/events" className="text-white flex-1 flex justify-center">
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
                d="M16.24 3.86A5.985 5.985 0 0012 4c-1.18 0-2.31.34-3.24.92L5 7l1.18 1.68a6.028 6.028 0 000 5.65L5 16.99l3.76 2.27c.93.58 2.06.91 3.24.91s2.31-.34 3.24-.92l3.76-2.26-1.18-1.68a6.028 6.028 0 000-5.65L19 7l-3.76-3.14z"
              />
            </svg>
          </Link>
        </div>

        {/* Central Circular Button */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={toggleBox}
            className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-800 text-xl text-white"
          >
            1
          </button>
        </div>

        <div className="flex justify-between w-full">
          <Link to="/feed" className="text-white flex-1 flex justify-center">
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
                d="M9 14l6 0m-3 3a3 3 0 100-6 3 3 0 000 6z"
              />
            </svg>
          </Link>
          <Link to="/about" className="text-white flex-1 flex justify-center">
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
                d="M19 11l-6-6m0 0l-6 6m6-6v12"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Toggleable Blue Box with Links */}
      {isBoxVisible && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-blue-500 p-4 rounded-lg shadow-lg z-50">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/profileh" className="bg-white text-blue-500 px-4 py-2 rounded text-center">
              Profileh
            </Link>
            <Link to="/profile" className="bg-white text-blue-500 px-4 py-2 rounded text-center">
              Profile
            </Link>
            <Link to="/feed" className="bg-white text-blue-500 px-4 py-2 rounded text-center">
              Feed
            </Link>
            <Link to="/discover" className="bg-white text-blue-500 px-4 py-2 rounded text-center">
              Discover
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
