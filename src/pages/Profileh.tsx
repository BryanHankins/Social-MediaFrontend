import React from 'react';
import Footer from '../components/Footer'


const Profileh: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between">
          {/* Background Image Section */}
          <div className="bg-cover bg-center h-40" style={{ backgroundImage: 'url("/path-to-your-background-image.jpg")' }}>
            {/* This div is for the background image */}
          </div>
    
          {/* Profile Card Section */}
          <div className="relative bg-gray-800 rounded-lg mx-4 mt-12 p-6">
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
    
            {/* Message and Hamburger Menu */}
            <div className="absolute top-6 right-8 flex flex-col items-end">
              <button className="bg-gray-700 px-4 py-2 rounded-full text-sm mb-2">MESSAGE</button>
              <button className="bg-gray-700 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16m-7 4h7m-7 4h7M4 14h1m0 0h5m-5 4h5" />
                </svg>
              </button>
            </div>
    
            {/* Divider Line */}
            <hr className="my-4 border-gray-600" />
    
            {/* Not Connected Section */}
            <div className="text-center text-2xl">
              NOT CONNECTED
            </div>
          </div>
    
            <Footer/>
        </div>
      );
    }
    

export default Profileh;
