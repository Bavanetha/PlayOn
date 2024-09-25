import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img from '../assets/img.jpg'; // Import the image

const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // AOS options for duration and to run once
  }, []);

  return (
    <div className="bg-white min-h-screen p-10">
      {/* Top Title - ABOUT US */}
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-10" data-aos="fade-up">
        ABOUT US
      </h1>

      {/* Background Image Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center mb-20">
        {/* Background Image with reduced opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80" // Set the image as background and reduce opacity
          style={{ backgroundImage: `url(${img})` }}
          data-aos="fade-in" // AOS effect for the background image
        ></div>

        {/* Content in front of background */}
        <div className="relative z-10 p-6 bg-white bg-opacity-80 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">
            Organizing Premier Cricket Tournaments
          </h2>
          <p className="text-lg text-gray-700">
            PlayOn is a leading organizer of cricket tournaments, offering thrilling competitions for players of all levels. With a focus on fair play, sportsmanship, and a love for the game, we bring together talent from across the country to compete in professionally managed tournaments.
          </p>
        </div>
      </section>

      {/* Creative Section: Why Choose Us */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-blue-500 mb-8" data-aos="fade-up">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-blue-500 text-white rounded-lg shadow-lg" data-aos="fade-right">
            <h3 className="text-xl font-semibold mb-4">Professional Management</h3>
            <p>
              We ensure smooth, organized, and fair tournament management with a dedicated team of professionals who handle logistics, scheduling, and umpiring.
            </p>
          </div>
          <div className="p-6 bg-blue-500 text-white rounded-lg shadow-lg" data-aos="zoom-in">
            <h3 className="text-xl font-semibold mb-4">Engaging Fan Experience</h3>
            <p>
              Our tournaments not only focus on the players but also provide a thrilling experience for fans, with live score updates, interactive events, and on-ground activities.
            </p>
          </div>
          <div className="p-6 bg-blue-500 text-white rounded-lg shadow-lg" data-aos="fade-left">
            <h3 className="text-xl font-semibold mb-4">Building Player Networks</h3>
            <p>
              Our tournaments foster a community of passionate cricketers, giving them opportunities to connect with coaches, scouts, and fellow athletes, helping them take their game to the next level.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="text-center bg-white p-10 rounded-lg shadow-lg max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Founder's Message</h2>
        <div className="flex items-center justify-center mb-4">
          <div className="border-t-4 border-blue-500 w-12 mr-2"></div>
          <span className="text-4xl text-blue-500">🏏</span> {/* Bat Icon */}
          <div className="border-t-4 border-blue-500 w-12 ml-2"></div>
        </div>
        <p className="text-lg text-gray-700 mb-4">
          "At PlayOn, we are passionate about organizing world-class cricket tournaments that bring out the best in players and captivate audiences. Our mission is to provide a platform where talent meets opportunity, and where the love for cricket can be celebrated on a grand stage."
        </p>
        <div className="flex items-center justify-center">
          <div className="border-t-4 border-blue-500 w-12 mr-2"></div>
          <span className="text-4xl text-blue-500">🏏</span> {/* Ball Icon */}
          <div className="border-t-4 border-blue-500 w-12 ml-2"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
