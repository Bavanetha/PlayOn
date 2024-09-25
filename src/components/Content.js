import React from 'react';

import 'aos/dist/aos.css';

import content from '../assets/content.jpg'

const Content = () => {
  return (
    <section className="bg-gray-100 py-16 p-36">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side - Text */}
        <div data-aos="fade-left" className="md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Join the Excitement of Cricket</h2>
          <p className="text-gray-600 mb-6">
            Experience the thrill of the game like never before! From local tournaments to international championships, 
            stay updated with the latest matches, live scores, and player stats. Get ready to support your favorite teams 
            and be part of the action.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
            Explore Tournaments
          </button>
        </div>

        {/* Right side - Image */}
        <div data-aos="fade-down"  className="md:w-1/2 p-8">
          <img
            src= {content}
            alt="Cricket Match"
            className="rounded-lg shadow-lg object-cover w-96 h-64 md:h-auto ml-32"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
