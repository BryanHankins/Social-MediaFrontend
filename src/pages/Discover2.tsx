
import React, { useState } from 'react';


const Discover2: React.FC = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBox = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Top Navigation with Event Tabs */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <button className="text-lg font-semibold">EVENTS</button>

        <div className="flex space-x-2 overflow-x-auto p-2">
          {[...Array(7)].map((_, index) => (
            <button
              key={index}
              className={`bg-gray-800 text-white px-3 py-2 rounded-lg ${index === 0 ? 'font-bold' : 'font-normal'}`}
            >
              EVENTS
            </button>
          ))}
        </div>

        <button className="p-2">
          {/* Icon Placeholder for Menu */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16m-7 4h7m-7 4h7" />
          </svg>
        </button>
      </div>

      {/* Trending Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">TRENDING</h2>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-800 rounded-lg h-32"></div>
          ))}
        </div>
      </div>

      {/* Collections Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">COLLECTIONS</h2>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-800 rounded-lg h-32"></div>
          ))}
        </div>
      </div>

      {/* Local Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">LOCAL</h2>
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-800 rounded-lg h-32"></div>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="relative">
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-between items-center border-t border-gray-700">
          <div className="flex justify-between w-full">
            <button className="text-white flex-1 flex justify-center">
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
            </button>
            <button className="text-white flex-1 flex justify-center">
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
            </button>
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
            <button className="text-white flex-1 flex justify-center">
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
            </button>
            <button className="text-white flex-1 flex justify-center">
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
            </button>
            <button className="text-white flex-1 flex justify-center">
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
        </div>
      </div>

      {/* Toggleable Blue Box with Links */}
      {isBoxVisible && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-blue-500 p-4 rounded-lg shadow-lg z-50">
          <div className="grid grid-cols-2 gap-2">
            <a href="/link1" className="bg-white text-blue-500 px-4 py-2 rounded text-center">
              Link 1
            </a>
            <a href="/link2" className="bg-white text-blue-500 px-4 py-2 rounded text-center">
              Link 2
            </a>
            <a href="/link3" className="bg-white text-blue-500 px-4 py-2 rounded text-center">
              Link 3
            </a>
            <a href="/link4" className="bg-white text-blue-500 px-4 py-2 rounded text-center">
              Link 4
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discover2;