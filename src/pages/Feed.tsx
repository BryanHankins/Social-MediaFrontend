import React from 'react';
import Footer from '../components/Footer'


const Feed: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Top Navigation with Icons */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <button className="p-2">
          {/* Icon Placeholder for Square Grid */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
        </button>

        <div className="flex space-x-4">
          <button className="text-lg font-semibold">Feed</button>
          <button className="text-lg text-gray-500">Recent</button>
        </div>

        <button className="p-2">
          {/* Icon Placeholder for Heart */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0a9.97 9.97 0 0114.11 0m-14.11 0l2 2a9.97 9.97 0 0014.11 0m0 0l-2-2" />
          </svg>
        </button>
      </div>

      {/* Icon Row */}
      <div className="flex justify-around p-4 space-x-2">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex-1 bg-gray-800 h-10 rounded-lg"></div>
        ))}
      </div>

      {/* Sub Tabs */}
      <div className="flex justify-around p-2 border-b border-gray-700">
        {[...Array(4)].map((_, index) => (
          <button key={index} className="text-sm font-semibold text-gray-400 flex-1 text-center">
            Sub Tab {index + 1}
          </button>
        ))}
      </div>

      {/* Today Section */}
      <div className="px-4 py-2 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Today</span>
          <button className="text-gray-400">
            {/* Three dots icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v.01M12 12v.01M12 18v.01" />
            </svg>
          </button>
        </div>
      </div>

      {/* Feed Grid */}
      <div className="p-4 grid grid-cols-2 gap-4 flex-grow">
        {/* Feed Item */}
        <div className="bg-gray-800 rounded-lg p-4 relative">
          <div className="absolute top-2 right-2">
            <button className="text-gray-400">
              {/* Three dots icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v.01M12 12v.01M12 18v.01" />
              </svg>
            </button>
          </div>
          <div className="text-center text-sm mt-4">anthony p.</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 relative">
          <div className="absolute top-2 right-2">
            <button className="text-gray-400">
              {/* Three dots icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v.01M12 12v.01M12 18v.01" />
              </svg>
            </button>
          </div>
          <div className="text-center text-sm mt-4">anthony p.</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 relative">
          <div className="absolute top-2 right-2">
            <button className="text-gray-400">
              {/* Three dots icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v.01M12 12v.01M12 18v.01" />
              </svg>
            </button>
          </div>
          <div className="text-center text-sm mt-4">anthony p.</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 relative">
          <div className="absolute top-2 right-2">
            <button className="text-gray-400">
              {/* Three dots icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v.01M12 12v.01M12 18v.01" />
              </svg>
            </button>
          </div>
          <div className="text-center text-sm mt-4">anthony p.</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 relative">
          <div className="absolute top-2 right-2">
            <button className="text-gray-400">
              {/* Three dots icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v.01M12 12v.01M12 18v.01" />
              </svg>
            </button>
          </div>
          <div className="text-center text-sm mt-4">anthony p.</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 relative">
          <div className="absolute top-2 right-2">
            <button className="text-gray-400">
              {/* Three dots icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v.01M12 12v.01M12 18v.01" />
              </svg>
            </button>
          </div>
          <div className="text-center text-sm mt-4">anthony p.</div>
        </div>
      </div>

      {/* Footer Navigation */}
        <Footer/>
    </div>
  );
};

export default Feed;
