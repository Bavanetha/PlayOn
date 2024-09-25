import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
import profile from '../assets/profile.png';

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for controlling dropdown visibility

  const handleLoginSignupClick = () => {
    navigate('/signup'); // Navigate to signup page (change to '/login' if desired)
  };

  const handleLinkClick = (path) => {
    if (user) {
      navigate(path); // Navigate to the desired page if user is logged in
    } else {
      alert("Please log in or sign up to access this page."); // Alert if not logged in
    }
  };

  const handleLogout = () => {
    logout(); // Call the logout function from the AuthContext
    navigate('/'); // Redirect to home after logout
  };


  return (
    <header className="bg-blue-400 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo} alt="XYZ Organization" className="h-10 mr-4" />
        </div>
        <div>
          <ul className="flex space-x-6 text-gray-700">
            <li className="text-white text-lg font-normal hover:text-blue-900 cursor-pointer" onClick={() => navigate('/')}>Home</li>
            <li className="text-white text-lg font-normal hover:text-blue-900 cursor-pointer" onClick={() => handleLinkClick('/tournament')}>Tournaments</li>
            <li className="text-white text-lg font-normal hover:text-blue-900 cursor-pointer" onClick={() => handleLinkClick('/register')}>Registration</li>
            <li className="text-white text-lg font-normal hover:text-blue-900 cursor-pointer" onClick={() => handleLinkClick('/about')}>About</li>
            <li className="text-white text-lg font-normal hover:text-blue-900 cursor-pointer" onClick={() => handleLinkClick('/contact')}>Contact</li>
          </ul>
        </div>
        <div>
          {user ? (
            <div className="relative group">
            <img
              src={profile} // Replace with the actual profile picture URL
              alt="Profile"
              className="h-10 w-10 rounded-full cursor-pointer hover:opacity-80"
            />
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="px-4 py-2 text-gray-800 border-b">Hello, {user.username}</div>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          ) : (
            <button className="bg-blue-200 text-blue-900 p-2 rounded hover:bg-blue-300" onClick={handleLoginSignupClick}>
              Signup/Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
