// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 items-center">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <p>&copy; 2024 XYZ Cricket. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-blue-500"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://twitter.com" className="hover:text-blue-500"><i class="fa-brands fa-square-x-twitter"></i></a>
          <a href="https://instagram.com" className="hover:text-blue-500"><i class="fa-brands fa-square-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
