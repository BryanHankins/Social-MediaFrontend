
import React, { useState } from 'react';
import Footer from '../components/Footer'

const Discover2: React.FC = () => {
 

  
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
      <Footer/>


    </div>
  );
};

export default Discover2;