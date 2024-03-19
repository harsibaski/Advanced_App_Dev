import React from 'react';
import OvalImage from '../assets/images/mat.gif'; // Importing the new image

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-white min-h-screen relative"> {/* Updated gradient colors */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-screen">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-5xl font-bold text-white mb-8 transition duration-300 transform hover:scale-105 cursor-pointer">
              <span className="text-white">Welcome to</span> <span className="gradient-text text-[18vh]">Celebrate365</span>
            </h1>
            <p className="text-xl text-black mb-8">Ideas to Execution, We've Got Your Birthday Covered!</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300">Get Started</button> {/* Updated button color */}
          </div>
          <div className="md:w-1/3 relative">
            <img src={OvalImage} alt="Oval Image" className="object-cover w-full h-auto md:w-96 md:h-96 rounded-r-2xl mx-auto mb-8" />
          </div>
        </div>
      </div>
      {/* Gradient for Celebrate365 */}
      <style>
        {`
          .gradient-text {
            background-image: linear-gradient(to right, #e94057, #8a2387, #c77dff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
