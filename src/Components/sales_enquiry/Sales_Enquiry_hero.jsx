import React from 'react';
import Sales_enguiry_Navbar from './Sales_enguiry_Navbar';

const Sales_Enquiry_hero = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-gray-500 mb-3">
          <span className="text-green-700 font-medium cursor-pointer">Home</span> &gt; <span>Contact us</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Contact Info */}
          <div className="flex-1 min-w-[280px]">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Get in Touch</h1>
            <p className="text-sm sm:text-base text-gray-700 mb-6 max-w-lg leading-relaxed">
              Have questions? Tell us about your business. Our experts will review your requirements and call you back 
              to explain how <span className="font-semibold text-green-700">Bhoomi Real Estate</span> can help you get 
              the best deals for your property needs.
            </p>

            <div className="mb-4">
              <span className="block text-green-700 font-semibold text-lg leading-tight">Bhoomi Real Estate</span>
              <a 
                href="https://www.bhoomitherealestate.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-700 text-sm hover:text-green-700 transition"
              >
                www.bhoomitherealestate.com
              </a>
            </div>

            <div className="flex items-start gap-2 mb-3">
              <img src="/public/prop/icon-building.png" alt="Address" className="w-6 h-6 mt-1" />
              <span className="text-gray-700 max-w-lg text-sm sm:text-base">
                Bhoomi Real Estate Pvt. Ltd., 45, Green Avenue, Near Metro Station, 
                New Delhi, India, Pin - 110015
              </span>
            </div>

            <div className="mb-3 text-gray-700 text-sm sm:text-base">
              For any assistance call us at <br />
              <span className="text-gray-500 text-xs">(9:30 AM to 6:00 PM IST, Mon to Sat)</span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <img src="/public/footer/icon_blog.svg" alt="Phone" className="w-5 h-5" />
              <span className="font-semibold text-gray-800">India :</span>
              <span className="text-green-700 font-semibold ml-1">+91-9876543210</span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <img src="/public/footer/icon_blog.svg" alt="Email" className="w-5 h-5" />
              <a 
                href="mailto:support@bhoomitherealestate.com" 
                className="text-green-700 font-medium hover:underline"
              >
                support@bhoomitherealestate.com
              </a>
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="flex-1 min-w-[280px] flex items-center justify-center">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.96407342009!2d77.137516!3d28.651952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d035e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sReal%20Estate%20India%20-%20Explore%20Buy%20Sell%20Rent%20Properties!5e0!3m2!1sen!2sin!4v1693140000000!5m2!1sen!2sin"
              width="100%"
              height="340"
              className="rounded-xl shadow-md"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales_Enquiry_hero;
