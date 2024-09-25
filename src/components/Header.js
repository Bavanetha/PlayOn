// HeroSection.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // import carousel styles

import cricket1 from '../assets/Banner1.png';
import cricket2 from '../assets/Banner2.png';
import cricket3 from '../assets/Banner3.png';

const Header = () => {
  return (
    <section className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}    
        transitionTime={1000} 
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        showArrows={true}
        className="hero-carousel"
      >
        <div style={{ height: "500px" }}>
          <img src={cricket1} alt="Cricket 1" className="w-full  object-cover"  style={{ height: "600px" }}/>
          
        </div>
        <div>
          <img src={cricket2} alt="Cricket 2" className="w-full  object-cover" style={{ height: "500px" }} />
        </div>
        <div>
          <img src={cricket3} alt="Cricket 3" className="w-full  object-cover"  style={{ height: "500px" }}/>
        </div>
      </Carousel>
      <div className="absolute inset-x-0 bottom-10 flex justify-center">
        <a href="#register" className="bg-blue-500 text-white px-6 py-3 rounded-md text-xl hover:bg-blue-600 animate-bounce">Register Now</a>
      </div>
    </section>
  );
};

export default Header;

