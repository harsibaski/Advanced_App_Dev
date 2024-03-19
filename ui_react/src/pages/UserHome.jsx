import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import matrixImage from '../assets/images/mk.png';

const UserHome = () => {
  return (
    <div className="flex justify-between items-center h-screen px-8">
      {/* Left Section */}
      <img src={matrixImage} alt="Matrix" className="h-3/4 w-auto object-cover mr-16 hover:scale-105 transition duration-300 ease-in-out" />

      {/* Right Section */}
      <div className="flex h-3/4 w-2/3 flex-col justify-center items-center space-y-2 text-blue-400">
        <p className="text-3xl text-blue-950 font-bold">Hola Grandmasters!</p>
        <div className="text-6xl font-bold">
          <div className="inline-block group-hover:scale-110 transition duration-300 ease-in-out">
            <span className="text-transparent text-[20vh] bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 hover:text-black  transition duration-300 ease-in-out">
              M
            </span>
            <span className="text-transparent text-[20vh] bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 hover:text-black transition duration-300 ease-in-out">
              a
            </span>
            <span className="text-transparent text-[20vh] bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 hover:text-black transition duration-300 ease-in-out">
              t
            </span>
            <span className="text-transparent text-[20vh] bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 hover:text-black transition duration-300 ease-in-out">
              r
            </span>
            <span className="text-transparent text-[20vh] bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 hover:text-black transition duration-300 ease-in-out">
              i
            </span>
            <span className="text-transparent text-[20vh] bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 hover:text-black transition duration-300 ease-in-out">
              X
            </span>
          </div>
        </div>
        <p className="text-2xl text-blue-950">The future of chess is here.</p>
        <div className="space-x-4">
          {/* Link to Register */}
          
          {/* Link to Events */}
          <Link to="/events">
            <button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-red-500 hover:to-orange-400 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">View Events</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
