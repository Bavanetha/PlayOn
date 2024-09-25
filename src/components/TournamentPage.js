import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tournaments = [
  {
    id: 1,
    name: 'Super Sixes Tournament',
    format: 'Six-a-side',
    date: '2024-10-10',
    location: 'Chennai',
    status: 'Open for Registration',
  },
  {
    id: 2,
    name: 'Power Play Cup',
    format: 'T20',
    date: '2024-11-15',
    location: 'Mumbai',
    status: 'Registration Closed',
  },
  {
    id: 3,
    name: 'Champions League',
    format: 'ODI',
    date: '2024-12-05',
    location: 'Bangalore',
    status: 'Open for Registration',
  },
  {
    id: 4,
    name: 'Junior Premier League',
    format: 'T20',
    date: '2025-01-12',
    location: 'Delhi',
    status: 'Upcoming',
  },
  {
    id: 5,
    name: 'Golden Age Trophy',
    format: 'ODI',
    date: '2025-02-18',
    location: 'Kolkata',
    status: 'Upcoming',
  },
  {
    id: 6,
    name: 'Super Smash Challenge',
    format: 'T10',
    date: '2024-11-25',
    location: 'Hyderabad',
    status: 'Open for Registration',
  },
  {
    id: 7,
    name: 'Midnight Madness Tournament',
    format: 'T20',
    date: '2024-12-20',
    location: 'Pune',
    status: 'Open for Registration',
  },
  {
    id: 8,
    name: 'Knockout Kings Cup',
    format: 'Knockout',
    date: '2024-10-30',
    location: 'Jaipur',
    status: 'Registration Closed',
  },
  {
    id: 9,
    name: 'Masters Cricket League',
    format: 'ODI',
    date: '2024-12-01',
    location: 'Chennai',
    status: 'Open for Registration',
  },
  {
    id: 10,
    name: 'National T20 Series',
    format: 'T20',
    date: '2024-11-20',
    location: 'Ahmedabad',
    status: 'Open for Registration',
  },
  {
    id: 11,
    name: 'Street Cricket Championship',
    format: 'Six-a-side',
    date: '2024-12-15',
    location: 'Goa',
    status: 'Upcoming',
  },
  {
    id: 12,
    name: 'State Premier League',
    format: 'T20',
    date: '2024-11-05',
    location: 'Lucknow',
    status: 'Registration Closed',
  },
  {
    id: 13,
    name: 'All-Stars Cricket Cup',
    format: 'ODI',
    date: '2025-01-28',
    location: 'Nagpur',
    status: 'Upcoming',
  }
];


const TournamentPage = () => {
  const [filter, setFilter] = useState({
    format: '',
    location: '',
    date: '',
  });

  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    navigate('/register');
  };

  const filteredTournaments = tournaments.filter((tournament) => {
    return (
      (filter.format === '' || tournament.format === filter.format) &&
      (filter.location === '' || tournament.location === filter.location) &&
      (filter.date === '' || tournament.date >= filter.date)
    );
  });

  return (
    <div className="p-8">
      <h1 className="text-4xl text-blue-500 font-bold mb-6">Upcoming Tournaments</h1>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div>
          <label className="block mb-2 text-gray-700">Format</label>
          <select
            name="format"
            value={filter.format}
            onChange={handleFilterChange}
            className="block w-full p-2 border rounded-md"
          >
            <option value="">All Formats</option>
            <option value="Six-a-side">Six-a-side</option>
            <option value="T20">T20</option>
            <option value="ODI">ODI</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Location</label>
          <select
            name="location"
            value={filter.location}
            onChange={handleFilterChange}
            className="block w-full p-2 border rounded-md"
          >
            <option value="">All Locations</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={filter.date}
            onChange={handleFilterChange}
            className="block w-full p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Tournament Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTournaments.map((tournament) => (
          <div
            key={tournament.id}
            className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
          >
            <h2 className="text-2xl font-semibold mb-4">{tournament.name}</h2>
            <p><strong>Format:</strong> {tournament.format}</p>
            <p><strong>Date:</strong> {new Date(tournament.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {tournament.location}</p>
            <p><strong>Status:</strong> {tournament.status}</p>
            <div className="mt-4">
            <button
              className={`px-4 py-2 rounded-md ${
                  tournament.status === 'Open for Registration'
                  ? 'bg-blue-500 text-white'
                  : tournament.status === 'Upcoming'
                  ? 'bg-gray-500 text-white'
                  : 'bg-red-300 text-gray-600 cursor-not-allowed'
               }`}
              disabled={tournament.status !== 'Open for Registration'}
              onClick={handleRegister}
            >
              {tournament.status === 'Open for Registration' ? 'Register Now' : tournament.status === 'Upcoming'? 'Will Open soon'  : 'Closed'}
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TournamentPage;
