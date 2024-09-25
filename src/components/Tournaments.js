// Tournaments.js
import React from 'react';
import 'aos/dist/aos.css';

import tour1 from  '../assets/tour1.jpg';
import tour2 from  '../assets/tour2.jpg';


const Tournaments = () => {
  const tournaments = [
    { name: 'Junior Premier League', img: tour1 },
    { name: 'Golden Age Trophy', img: tour2},
  ];

  return (
    <section className="bg-gray-100 py-16 p-5 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Upcoming Tournaments</h2>
        <div data-aos="fade-center" className="grid md:grid-cols-3 gap-8 ml-44"  style={{ height:'250px' , width: '120%' }}>
          {tournaments.map((tournament, index) => (
            <div key={index}  className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 box-">
              <img src={tournament.img} alt={tournament.name} className="w-full object-cover" style={{ height: '200px', width: '100%' }} />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-blue-800">{tournament.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tournaments;
