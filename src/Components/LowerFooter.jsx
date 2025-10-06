import React from 'react';
import { Link } from 'react-router-dom';
const navLinks = [
  'Home', 'About Us', 'Contact Us', 'Feedback', 'Complaints', 'Terms & Conditions', 'Testimonials', 'Sitemap', 'Property Leads', 'FAQ', 'Advertise With Us'
];

const socialIcons = [
  { icon: 'facebook', color: '#1877f3' },
  { icon: 'blogger', color: '#f57c00' },
  { icon: 'linkedin', color: '#0077b5' },
  { icon: 'pinterest', color: '#e60023' },
  { icon: 'x', color: '#000' },
  { icon: 'youtube', color: '#ff0000' },
  { icon: 'instagram', color: '#e4405f' },
];

const partnerSites = [
  { img: '/realstateproject/placementindia.png', alt: 'PlacementIndia' },
  { img: '/realstateproject/exportersindia.png', alt: 'ExportersIndia' },
  { img: '/realstateproject/tourtravelworld.png', alt: 'TourTravelWorld' },
  { img: '/realstateproject/matrimonialsindia.png', alt: 'MatrimonialsIndia' },
  { img: '/realstateproject/weblinkindia.png', alt: 'WeblinkIndia' },
];
  
const LowerFooter = () => {
  return (
  <div className="w-full bg-gray-600 pb-0 border-t border-gray-200 overflow-x-hidden">
    {/* Footer Copyright Bar */}
  <div className="w-full bg- text-white text-center text-xs sm:text-sm py-1 mt-1 flex flex-col md:flex-row items-center justify-center gap-2 px-2 hover:bg-gray-700 transition-colors duration-300">
        <span className="hover:scale-105 transition-transform duration-300">© <span className="text-green-400 font-medium hover:text-green-300 transition-colors duration-300 cursor-pointer">Bhoomi The Real Estate Services</span> || All Rights Reserved</span>
      </div>
    </div>
  );
};

export default LowerFooter;
