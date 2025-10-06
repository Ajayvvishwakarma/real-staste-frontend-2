import React from 'react';
import { Link } from 'react-router-dom';

const UpperFooter = () => {
  return (
    <footer className="w-full bg-black py-10 sm:py-10 lg:py-10 px-6 sm:px-8 lg:px-6 relative overflow-hidden min-h-[400px]">
      {/* Decorative Green Accent Line (hidden on mobile) */}
      <div className="absolute top-0 left-0 w-full h-1 
        bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-pulse 
        hidden sm:block"></div>

      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Company Logo and Description */}
          <div className="text-center sm:text-left space-y-4">
            <div className="flex justify-center sm:justify-start mb-4">
              <img 
                src="/abc.png" 
                alt="BHOOMI - The Real Estate Services" 
                className="h-20 w-auto hover:scale-105 hover:brightness-110 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, elit dollar consectetur adipiscing elit. Diam lectus purus ultricies neque.
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center sm:justify-start flex-wrap items-center gap-3">
              {[
                { src: "/footer/icon_facebook.svg", alt: "Facebook" },
                { src: "/footer/icon_blog.svg", alt: "Blogger" },
                { src: "/footer/icon_linkedin.svg", alt: "LinkedIn" },
                { src: "/footer/icon_pinterest.svg", alt: "Pinterest" },
                { src: "/footer/icon_youtube.svg", alt: "YouTube", href: "https://youtube.com" },
                { src: "/footer/icon_instagram.svg", alt: "Instagram", href: "https://instagram.com" }
              ].map((icon, idx) => (
                <a
                  key={idx}
                  href={icon.href || "#"}
                  target={icon.href ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-7 h-7 rounded cursor-pointer hover:scale-125 hover:rotate-6 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Reusable Section Component */}
          {[
            {
              title: "Company",
              links: [
                { name: "About Us", to: "/about" },
                { name: "Contact Us", to: "/contact" },
                { name: "Our Reviews", to: "/reviews" },
                { name: "Terms & Conditions", to: "/terms" },
                { name: "Privacy Policy", to: "/privacy" }
              ]
            },
            {
              title: "Resources",
              links: [
                { name: "Best Projects", to: "/projects" },
                { name: "Commercial Property", to: "/commercial" },
                { name: "Residential Property", to: "/residential" },
                { name: "Industrial Property", to: "/industrial" },
                { name: "Flat / Villa", to: "/flats" }
              ]
            },
            {
              title: "Quick Links",
              links: [
                { name: "Projects", to: "/projects" },
                { name: "What We Do", to: "/what-we-do" },
                { name: "Post Property", to: "/post-property" },
                { name: "Blog", to: "/blog" },
                { name: "Career", to: "/career" }
              ]
            }
          ].map((section, idx) => (
            <div key={idx} className="space-y-4 text-center sm:text-left">
              <h3 className="text-lg font-bold text-green-400 pb-2 inline-block sm:block">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      className="text-gray-300 hover:text-green-400 text-sm flex items-center justify-center sm:justify-start transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 hidden sm:inline-block"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-bold pb-2 text-green-400 inline-block sm:block">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-green-400">Address:</p>
                <p className="text-gray-300">A-43, Sector63, Noida, U.P., India (201301)</p>
              </div>
              <div>
                <p className="font-semibold text-green-400">Email:</p>
                <a href="mailto:bhoomitherealestate@gmail.com" className="text-white hover:text-green-400 underline">
                  bhoomitherealestate@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold text-green-400">Phone:</p>
                <a href="tel:+918960399597" className="text-white hover:text-green-400 underline">
                  +918960399597
                </a>
              </div>
              <div>
                <p className="font-semibold text-green-400">Fax:</p>
                <p className="text-gray-300">+919650017061</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UpperFooter;
