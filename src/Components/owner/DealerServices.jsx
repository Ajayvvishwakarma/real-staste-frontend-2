import React, { useState } from "react";
import { FaBuilding, FaFacebook, FaGoogle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineHandshake } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chatbot from "../Chatbot/Chatbot";

// Add custom styles for the slider
const sliderStyles = `
  .testimonials-slider {
    position: relative;
    touch-action: pan-y pinch-zoom;
  }
  .testimonials-slider .slick-list {
    touch-action: pan-y pinch-zoom;
    -webkit-overflow-scrolling: touch;
  }
  .testimonials-slider .slick-track {
    touch-action: pan-y pinch-zoom;
  }
  .testimonials-slider .slick-slide {
    touch-action: pan-y pinch-zoom;
  }
  .testimonials-slider .slick-dots {
    position: absolute !important;
    bottom: -45px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: auto !important;
    display: flex !important;
    justify-content: center !important;
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .testimonials-slider .slick-dots li {
    margin: 0 5px !important;
    transition: all 0.3s ease !important;
  }
  .testimonials-slider .slick-dots li button {
    transition: all 0.3s ease !important;
  }
  .testimonials-slider .slick-dots li button:before {
    font-size: 12px !important;
    color: #3B82F6 !important;
    opacity: 0.5 !important;
    transition: all 0.3s ease !important;
  }
  .testimonials-slider .slick-dots li.slick-active button:before {
    color: #1E40AF !important;
    opacity: 1 !important;
    transform: scale(1.2) !important;
  }
  .testimonials-slider .slick-dots li:hover button:before {
    opacity: 0.8 !important;
    transform: scale(1.1) !important;
  }
  .testimonials-slider .slick-track {
    display: flex !important;
    align-items: stretch !important;
  }
  .testimonials-slider .slick-slide {
    height: auto !important;
    transition: all 0.3s ease !important;
  }
  .testimonials-slider .slick-slide > div {
    height: 100% !important;
  }
  .testimonial-card {
    transition: all 0.3s ease-in-out !important;
    transform: translateY(0) !important;
  }
  .testimonial-card:hover {
    transform: translateY(-8px) !important;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
  }
  .testimonial-avatar {
    transition: all 0.3s ease !important;
  }
  .testimonial-card:hover .testimonial-avatar {
    transform: scale(1.05) !important;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
  .animate-slideInUp {
    animation: slideInUp 0.6s ease-out;
  }
  
  /* Force mobile responsiveness and touch support */
  @media (max-width: 1024px) {
    .testimonials-slider {
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-list {
      touch-action: pan-x pan-y !important;
      overflow: hidden !important;
    }
    .testimonials-slider .slick-track {
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-slide {
      width: 100% !important;
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-track {
      margin-left: 0 !important;
    }
    .testimonials-slider .slick-list {
      overflow: visible !important;
    }
  }
  
  @media (max-width: 768px) {
    .testimonials-slider {
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-list {
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-dots {
      bottom: -35px !important;
    }
    .testimonials-slider .slick-dots li {
      margin: 0 3px !important;
    }
    .testimonials-slider .slick-dots li button:before {
      font-size: 10px !important;
    }
    .testimonial-card:hover {
      transform: translateY(-4px) !important;
    }
    .testimonials-slider .slick-slide {
      width: 100% !important;
      padding: 0 !important;
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-track {
      display: flex !important;
      width: auto !important;
      touch-action: pan-x pan-y !important;
    }
  }
  
  @media (max-width: 640px) {
    .testimonials-slider {
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-list {
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-slide {
      padding: 0 !important;
      width: 100% !important;
      min-width: 100% !important;
      max-width: 100% !important;
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-track {
      margin-left: 0 !important;
      width: auto !important;
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-list {
      overflow: hidden !important;
      width: 100% !important;
      touch-action: pan-x pan-y !important;
    }
  }
  
  @media (max-width: 480px) {
    .testimonials-slider {
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-list {
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-dots {
      bottom: -30px !important;
    }
    .testimonials-slider .slick-dots li {
      margin: 0 2px !important;
    }
    .testimonials-slider .slick-dots li button:before {
      font-size: 8px !important;
    }
    .testimonial-card:hover {
      transform: translateY(-2px) !important;
    }
    .testimonials-slider .slick-slide {
      width: 100% !important;
      min-width: 100% !important;
      max-width: 100% !important;
      padding: 0 !important;
      touch-action: pan-x pan-y !important;
    }
    .testimonials-slider .slick-track {
      width: auto !important;
      margin: 0 !important;
      touch-action: pan-x pan-y !important;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = sliderStyles;
  document.head.appendChild(style);
}

// Custom arrow components
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300 hidden lg:flex"
    onClick={onClick}
  >
    <FaChevronLeft className="text-white text-xs md:text-sm transition-transform duration-200" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300 hidden lg:flex"
    onClick={onClick}
  >
    <FaChevronRight className="text-white text-xs md:text-sm transition-transform duration-200" />
  </button>
);

const DealerServices = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      q: "Why should I buy a paid owner package?",
      a: "Paid packages help you get more visibility, reach more potential buyers, and close deals faster. They also unlock premium listing features.",
    },
    {
      q: "What will the Relationship Manager do?",
      a: "A Relationship Manager will guide you through the process, provide updates, and help resolve any queries while managing your property listing.",
    },
    {
      q: "What is Digital Marketing Campaign for Owners?",
      a: "Our Digital Marketing Campaign includes targeted promotions across online platforms, ensuring your property gets maximum reach and genuine enquiries.",
    },
    {
      q: "Are there any hidden charges in Paid Owner Packages?",
      a: "No, there are no hidden charges. All costs are transparently shared with you upfront when you purchase the package.",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Som",
      role: "Owner, Secunderabad",
      text: "My experience with 99 acres turned out to be very smooth and satisfying. Great support throughout!",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Suman Sharma",
      role: "Owner, Sector 37",
      text: "I put my property on 99 Acres for sale and was flooded with genuine calls. The deal closed quickly!",
      img: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Bhavani Korvi",
      role: "Owner, Karnamgudem",
      text: "I used the platform for selling my property. They helped me connect with genuine buyers easily.",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Rohit Singh",
      role: "Owner, Pune",
      text: "Posting my property here was seamless. Got great responses and successfully sold without hassle.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Anita Desai",
      role: "Owner, Mumbai",
      text: "The Relationship Manager was extremely helpful throughout the listing and sales process. Excellent support!",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 10,
    accessibility: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          swipeToSlide: true,
          touchMove: true,
          draggable: true
        },
      },
      {
        breakpoint: 1024, // Tablets landscape - no arrows, only swipe
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipeToSlide: true,
          touchMove: true,
          draggable: true,
          touchThreshold: 5,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: true,
          accessibility: true
        },
      },
      {
        breakpoint: 768, // Tablets portrait - no arrows, only swipe
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipeToSlide: true,
          touchMove: true,
          draggable: true,
          touchThreshold: 5,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: true,
          accessibility: true
        },
      },
      {
        breakpoint: 640, // Mobile large - no arrows, only swipe
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipeToSlide: true,
          touchMove: true,
          draggable: true,
          touchThreshold: 5,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: true,
          accessibility: true
        },
      },
      {
        breakpoint: 480, // Mobile small - no arrows, only swipe
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipeToSlide: true,
          touchMove: true,
          draggable: true,
          touchThreshold: 5,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: true,
          accessibility: true
        },
      },
      {
        breakpoint: 375, // Mobile extra small - no arrows, only swipe
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipeToSlide: true,
          touchMove: true,
          draggable: true,
          touchThreshold: 5,
          centerMode: false,
          variableWidth: false,
          adaptiveHeight: true,
          accessibility: true
        },
      },
    ],
  };

  return (
    <section className="w-full bg-white py-10">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-blue-50 rounded-lg shadow-sm p-4 sm:p-6 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Now Introducing <span className="text-blue-600 font-bold">Owner PRO</span>
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Get 100% Society/Locality Relevant Leads for Your Property
          </p>
          {/* Features Row */}
          <div className="flex flex-col lg:flex-row justify-center gap-4 sm:gap-6 mt-6">
            <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <span className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                <FaBuilding className="text-blue-600 text-lg sm:text-xl" />
              </span>
              <span className="text-left sm:text-center">Get All Relevant Buyers/Tenants Leads</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <span className="bg-green-100 p-2 rounded-full flex-shrink-0">
                <MdOutlineHandshake className="text-green-600 text-lg sm:text-xl" />
              </span>
              <span className="text-left sm:text-center">WhatsApp Out-Reach to Relevant Buyers/Tenants</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <span className="bg-yellow-100 p-2 rounded-full flex-shrink-0">
                <MdOutlineHandshake className="text-yellow-600 text-lg sm:text-xl" />
              </span>
              <span className="text-left sm:text-center">Connect With High-Intent Active Buyers/Tenants to Close Faster</span>
            </div>
          </div>

          {/* Contact */}
          <p className="text-sm text-gray-500 mt-4">📞 1800-41-99099</p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
        <div className="bg-orange-50 rounded-xl p-4 sm:p-6 lg:p-8 text-center">
          <h3 className="uppercase text-gray-500 text-xs sm:text-sm font-semibold">
            Why Upgrade My Posting?
          </h3>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mt-2">
            Benefits of upgrading your posting on 99acres
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow  p-4 sm:p-6 text-left">
              <div className="flex items-start gap-3 mb-3">
                <FaBuilding className="text-blue-600 text-xl sm:text-2xl flex-shrink-0 mt-1" />
                <h4 className="text-base sm:text-lg font-bold text-blue-900">01. Appear higher in searches</h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Upgraded postings appear higher in search results giving your posting
                more views and responses
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow  p-4 sm:p-6 text-left">
              <div className="flex items-start gap-3 mb-3">
                <MdOutlineHandshake className="text-orange-500 text-xl sm:text-2xl flex-shrink-0 mt-1" />
                <h4 className="text-base sm:text-lg font-bold text-blue-900">
                  02. Hassle free selling/renting
                </h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Relax and sell faster with our dedicated relationship manager assistance
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow  p-4 sm:p-6 text-left">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex gap-1 flex-shrink-0 mt-1">
                  <FaFacebook className="text-blue-600 text-lg sm:text-xl" />
                  <FaGoogle className="text-red-500 text-lg sm:text-xl" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-blue-900">
                  03. Reach users on social media
                </h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Reach more relevant buyers with Facebook and Google marketing
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="#"
              className="text-blue-700 font-semibold hover:underline"
            >
              View owner plans to sell house faster →
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="pt-6 sm:pt-8 lg:pt-10 bg-gradient-to-br from-blue-50 to-blue-100 max-w-7xl mx-auto my-6 sm:my-8 lg:my-10 rounded-2xl overflow-hidden animate-slideInUp">
        <div className="px-3 sm:px-6 lg:px-8">
          <h3 className="uppercase text-xs sm:text-sm text-green-600 font-semibold mb-2 tracking-wider">
            Testimonials
          </h3>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4 lg:mb-8">
            What our happy customers <br className="hidden sm:block" /> 
            <span className="block sm:hidden">are saying about our services</span>
            <span className="hidden sm:inline">are saying about our services</span>
          </h2>
          <p className="text-black mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm lg:text-base leading-relaxed opacity-90">
            Hear from our satisfied owners who had used our services
          </p>
        </div>
        <div className="px-2 sm:px-4 lg:px-8 relative pb-14 sm:pb-16 lg:pb-20">
          <div className="testimonials-slider">
            <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-0 sm:px-1 lg:px-3">
                <div className="testimonial-card bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg mx-1 sm:mx-1 lg:mx-2 overflow-hidden backdrop-blur-sm">
                  <div className="p-4 sm:p-5 lg:p-7">
                    <div className="flex items-center mb-4 sm:mb-5">
                      <div className="relative">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="testimonial-avatar w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full mr-3 sm:mr-4 lg:mr-5 object-cover flex-shrink-0 ring-2 ring-green-200"
                        />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full ring-2 ring-white"></div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-black text-xs sm:text-sm lg:text-base mb-1">{t.name}</p>
                        <p className="text-[10px] sm:text-xs lg:text-sm text-green-600 font-medium">{t.role}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-2 -left-1 text-green-300 text-2xl opacity-50 font-serif">"</div>
                      <p className="text-black text-[10px] sm:text-xs lg:text-sm leading-relaxed pl-4 italic">{t.text}</p>
                      <div className="absolute -bottom-2 -right-1 text-green-300 text-2xl opacity-50 font-serif transform rotate-180">"</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#fff4e3] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          
          {/* FAQ Card */}
          <div className="bg-green-50 rounded-2xl shadow-md p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
            <h4 className="text-xs sm:text-sm text-green-600 mb-2">
              Make a well informed decision
            </h4>
            <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-black mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-3">
                  <button
                    className="w-full text-left flex justify-between items-start text-black font-medium focus:outline-none hover:text-green-600 transition-colors"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="text-sm sm:text-base pr-4 leading-relaxed">Q. {faq.q}</span>
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold flex-shrink-0">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed animate-fadeIn">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg shadow transition w-full sm:w-auto text-sm sm:text-base">
                Browse Owner Plans
              </button>
            </div>
          </div>
          {/* Illustration */}
          <div className="flex justify-center order-1 lg:order-2">
            <img
              src="/image copy 10.png"
              alt="FAQ Illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Upgrade Plans & Payment Methods Section */}
      <section className="bg-white pt-6 sm:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Upgrade Card */}
          <div className="bg-green-50 rounded-xl flex flex-col md:flex-row justify-between items-center gap-4 p-4 sm:p-6 mb-4 sm:mb-6 shadow-sm">
            <div className="text-sm sm:text-base lg:text-lg font-semibold text-black text-center md:text-left">
              Confused on what to buy? See all offerings
            </div>
            <button className="border border-green-600 text-green-600 font-medium px-4 sm:px-5 lg:px-6 py-2 rounded-lg hover:bg-green-100 transition w-full sm:w-auto text-sm sm:text-base">
              View all upgrade plans
            </button>
          </div>

          {/* Notes Section */}
          <div className="text-[10px] sm:text-[11px] lg:text-xs text-gray-700 leading-relaxed mb-4 sm:mb-6 space-y-1">
            <p>*Verification and photo shoot are available in metros and select cities only</p>
            <p>Note: Subscription duration is different from live duration of listing, please refer the subscription details for live duration</p>
            <p>Disclaimer: The search ranking and increase in responses are based on historical data from upgraded plans and not an indication of assured benefits of upgrading</p>
          </div>

          {/* Payment Icons */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 py-4 sm:py-6">
            
            {/* Safe Transactions text with icon */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <img src="/image copy 11.png" alt="Safe Transactions" className="h-6 sm:h-8 lg:h-10 object-contain" />
              <span className="text-[10px] sm:text-[11px] lg:text-xs text-gray-600 leading-snug">
                100% Safe Transactions <br />
                We support secure payment methods
              </span>
            </div>
            {/* Other Payment Method Icons */}
            <img src="/image copy 12.png" alt="Verified by Visa" className="h-6 sm:h-8 lg:h-10 object-contain" />
            <img src="/image copy 13.png" alt="UPI" className="h-6 sm:h-8 lg:h-10 object-contain" />
            <img src="/image copy 14.png" alt="American Express SafeKey" className="h-6 sm:h-8 lg:h-10 object-contain" />
            <img src="/image copy 15.png" alt="Mastercard SecureCode" className="h-6 sm:h-8 lg:h-10 object-contain" />
            <img src="/image copy 16.png" alt="RuPay" className="h-6 sm:h-8 lg:h-10 object-contain" />
            <img src="/image copy 17.png" alt="Norton" className="h-6 sm:h-8 lg:h-10 object-contain" />
            <img src="/image copy 18.png" alt="Maestro" className="h-6 sm:h-8 lg:h-10 object-contain" />
          </div>
        </div>
      </section>

      {/* Chatbot Component */}
      <Chatbot />

    </section>
  );
};

export default DealerServices;
