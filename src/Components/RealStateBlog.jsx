import React, { useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const benefits = [
  {
    id: "01",
    title: "Over 12 Lac properties",
    desc: "10,000+ properties are added every day",
    icon: "🏢",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-200",
  },
  {
    id: "02",
    title: "Verification by Bhoomi team",
    desc: "Photos / Videos and other details are verified on location",
    icon: "✅",
    bgColor: "bg-green-100",
    borderColor: "border-green-200",
    iconBg: "bg-green-200",
  },
  {
    id: "03",
    title: "Large user base",
    desc: "High active user count and user engagement to find and close deals",
    icon: "👥",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-200",
  },
  {
    id: "04",
    title: "Expert guidance",
    desc: "Professional support and guidance throughout your property journey",
    icon: "💼",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-200",
  },
  {
    id: "05",
    title: "Secure transactions",
    desc: "Safe and secure payment processing with complete transparency",
    icon: "🔒",
    bgColor: "bg-red-100",
    borderColor: "border-red-200",
    iconBg: "bg-red-200",
  },
  {
    id: "06",
    title: "24/7 support",
    desc: "Round the clock customer support for all your queries and concerns",
    icon: "🕐",
    bgColor: "bg-teal-100",
    borderColor: "border-teal-200",
    iconBg: "bg-teal-200",
  },
];

const testimonials = [
  {
    name: "Srikanth Malleboina",
    role: "Owner, Hyderabad",
    message: "You get an exclusive RM from Bhoomi team who tracks your property closely.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-200",
  },
  {
    name: "Prateek Sengar",
    role: "Owner, Delhi",
    message: "Bhoomi has a better response rate compared to any of their competitors.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    bgColor: "bg-green-100",
    borderColor: "border-green-200",
  },
  {
    name: "SOBHA Developers",
    role: "Real Estate Company",
    message: "Platform to meet customers and increase revenues with lowest cost.",
    image: "https://dummyimage.com/100x100/ccc/000.png&text=SOBHA",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-200",
  },
  {
    name: "Neha Sharma",
    role: "Tenant, Mumbai",
    message: "Found my perfect rental Home in just a few days thanks to bhoomi.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-200",
  },
  {
    name: "Rajesh Kumar",
    role: "Owner, Bangalore",
    message: "Listing my property was super easy and I received genuine leads quickly.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    bgColor: "bg-red-100",
    borderColor: "border-red-200",
  },
  {
    name: "Ananya Verma",
    role: "Agent, Pune",
    message: "The platform has helped me connect with serious buyers and grow my business.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bgColor: "bg-teal-100",
    borderColor: "border-teal-200",
  },
];

const RealStateBlog = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: -width, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: width, behavior: "smooth" });
    }
  };

  // ✅ Auto slider with smooth looping
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const isAtEnd =
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth;

        if (isAtEnd) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRight();
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white">
      {/* Benefits Section */}
      <div className="py-4 sm:py-6 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-green-600 font-semibold tracking-wide text-sm uppercase">
              Benefits of Bhoomi the RealEstate
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-2 mb-2 leading-tight">
              Why choose Bhoomi the RealEstate
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto">
              Discover the advantages that make us the preferred choice for all your real estate needs
            </p>
          </div>

          {/* Benefits Grid for desktop, horizontal scroll for mobile/tablet */}
          <div className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
            {benefits.map((b) => (
              <div
                key={b.id}
                className={`flex flex-col items-center text-center ${b.bgColor} rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-3 sm:p-4 border ${b.borderColor} h-40 sm:h-44`}
              >
                <div className={`${b.iconBg} rounded-full p-2 sm:p-3 mb-2 sm:mb-3`}>
                  <div className="text-xl sm:text-2xl">{b.icon}</div>
                </div>
                <h3 className="font-bold text-xs sm:text-sm lg:text-base mb-1 text-gray-900">
                  <span className="text-green-600 mr-1">{b.id}.</span>
                  {b.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet horizontal scroll */}
          <div className="flex md:hidden gap-3 sm:gap-4 overflow-x-auto scroll-smooth">
            {benefits.map((b) => (
              <div
                key={b.id}
                className={`flex-shrink-0 w-64 sm:w-72 ${b.bgColor} rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 border ${b.borderColor}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${b.iconBg} rounded-full p-2 sm:p-3 mb-2 sm:mb-3`}>
                    <div className="text-xl sm:text-2xl">{b.icon}</div>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base mb-1 text-gray-900">
                    <span className="text-green-600 mr-1">{b.id}.</span>
                    {b.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-2 sm:py-8">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-green-600 font-semibold uppercase tracking-wider text-sm">
              Testimonials
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-2 mb-2 leading-tight">
              What our customers are saying
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto">
              Hear from our satisfied buyers, tenants, owners and dealers
            </p>
          </div>

          {/* Slider with Buttons */}
          <div className="relative group">
            {/* Left Button (desktop only) */}
            <button
              onClick={scrollLeft}
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 bg-white text-green-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300 hidden md:flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Previous slide"
            >
              <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden">
              <div
                ref={sliderRef}
                className="flex gap-3 sm:gap-4 overflow-x-auto scroll-smooth transition-transform duration-300"
                style={{
                  scrollSnapType: "x mandatory",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className={`${t.bgColor} flex-shrink-0 w-full sm:w-[80%] md:w-96 h-48 sm:h-52 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border ${t.borderColor}`}
                    style={{ scrollSnapAlign: "center" }}
                  >
                    <div className="p-3 sm:p-4 h-full flex flex-col">
                      {/* Author */}
                      <div className="flex items-center mb-2 sm:mb-3">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-green-400 ring-offset-1 flex-shrink-0"
                        />
                        <div className="ml-2 sm:ml-3">
                          <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">
                            {t.name}
                          </h4>
                          <p className="text-xs text-green-600 font-medium">
                            {t.role}
                          </p>
                        </div>
                      </div>

                      {/* Message */}
                      <blockquote className="text-gray-700 text-xs sm:text-sm leading-relaxed italic flex-1 mb-2">
                        "{t.message}"
                      </blockquote>

                      {/* Stars */}
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3 h-3 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Button (desktop only) */}
            <button
              onClick={scrollRight}
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 bg-white text-green-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300 hidden md:flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Next slide"
            >
              <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Mobile Swipe Info */}
          <div className="flex justify-center mt-3 md:hidden">
            <p className="text-xs text-gray-500 text-center">
              Swipe to see more testimonials →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealStateBlog;











