// FeaturedTeams.js
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import match1 from  '../assets/match1.png';
import match2 from  '../assets/match2.png';
import match3 from  '../assets/match3.png';

const FeaturedTeams = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const teams = [
    { name: 'Match 1', img: match1 },
    { name: 'Match 2', img: match2 },
    { name: 'Match 3', img: match3 },
  ];

  return (
    <section className="bg-white py-16 p-5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Featured Matches</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-gray-100 shadow-lg rounded-lg overflow-hidden"
            >
              <img src={team.img} alt={team.name} className="w-full h-48 object-cover" style={{ height: '250px', width: '100%' }} />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-gray-800">{team.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTeams;
