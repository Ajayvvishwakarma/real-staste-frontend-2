import React, { useState } from 'react';
import { FaSearch, FaPhone, FaWhatsapp, FaPhoneAlt, FaGlobe, FaChevronDown, FaQuestionCircle, FaHome, FaCog, FaUserPlus, FaExclamationTriangle, FaPlay, FaUser, FaTimes, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Messenger from '../Messenger';
import UpperFooter from '../UpperFooter';
import LowerFooter from '../LowerFooter';
const Customer_servicess = ({ hideMainNavbar = false }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [showCustomerService, setShowCustomerService] = useState(hideMainNavbar);
  const [showCallBackModal, setShowCallBackModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callBackForm, setCallBackForm] = useState({
    name: '',
    phone: '',
    preferredTime: ''
  });

  // FAQ Categories Data
  const categories = [
    {
      id: 'manage',
      title: 'Manage Services',
      icon: <FaCog className="text-blue-600" />,
      description: 'Category: Manage Services',
      question: 'How can I see my property advertisement on 99acres?'
    },
    {
      id: 'login',
      title: 'Login / Registration',
      icon: <FaUserPlus className="text-green-600" />,
      description: 'Category: Login / Registration',
      question: 'How to register on 99acres?'
    },
    {
      id: 'general',
      title: 'General Questions',
      icon: <FaQuestionCircle className="text-orange-600" />,
      description: 'Category: General Questions',
      question: 'How can 99acres be accessed?'
    },
    {
      id: 'market',
      title: 'General Questions',
      icon: <FaQuestionCircle className="text-purple-600" />,
      description: 'Category: General Questions',
      question: 'How to know the right market value of my property?'
    }
  ];

  // Main FAQ Data
  const faqData = {
    general: [
      {
        question: "Is an online Rental Agreement valid or legal?",
        answer: "Yes, online rental agreements are legally valid in India when properly executed with digital signatures and following the IT Act guidelines."
      },
      {
        question: "How much stamp duty should I pay on my rental agreement?",
        answer: "Stamp duty varies by state, typically ranging from 0.25% to 4% of the annual rent. Please check your state's specific rates."
      },
      {
        question: "How can I check the validity of E-stamped Rental Agreements?",
        answer: "You can verify e-stamped agreements through the official state stamp duty department website using the certificate number."
      },
      {
        question: "What are the important points to validate in a rental agreement?",
        answer: "Key points include rent amount, security deposit, tenure, maintenance clauses, termination conditions, and legal compliance."
      },
      {
        question: "I am yet to find a tenant for my property, why should I pre-purchase the Rental Agreement Service?",
        answer: "Pre-purchasing helps you close deals faster when you find tenants, shows professionalism, and often comes with validity periods."
      },
      {
        question: "What are the types of tenancy agreements in India?",
        answer: "Main types include Leave & License Agreement, Lease Deed, and Rental Agreement, each with different legal implications."
      },
      {
        question: "What is a Rental Agreement?",
        answer: "A rental agreement is a legal contract between landlord and tenant outlining terms and conditions of the rental arrangement."
      }
    ],
    property: [
      {
        question: "Is property verification/photoshoot available in my locality/city?",
        answer: "Property verification and photoshoot services are available in major metros and select cities. Contact us to check availability in your area."
      },
      {
        question: "How can buyers/tenants contact me after my property advertisement is live?",
        answer: "Buyers/tenants can contact you through phone calls, WhatsApp, or the contact form on your property listing."
      },
      {
        question: "Can I extend the duration of my active property advertisement on 99acres? How to do it?",
        answer: "Yes, you can extend your property advertisement duration through your account dashboard or by contacting customer support."
      },
      {
        question: "How much time it takes to activate my property advertisement?",
        answer: "Property advertisements are typically activated within 2-4 hours after posting, subject to verification."
      }
    ],
    manage: [
      {
        question: "What are the documents required for a rental agreement?",
        answer: "Required documents include ID proofs of landlord and tenant, property documents, passport size photos, and witness details."
      },
      {
        question: "How can I see my property advertisement on 99acres?",
        answer: "You can view your property advertisement by logging into your account and checking the 'My Properties' section."
      },
      {
        question: "Can I extend the duration of my active property advertisement on 99acres? How to do it?",
        answer: "Yes, you can extend through your dashboard under 'Manage Properties' or contact support for assistance."
      },
      {
        question: "How can I unsubscribe from receiving property alerts and other promotional emails?",
        answer: "You can unsubscribe by clicking the unsubscribe link in emails or updating preferences in your account settings."
      }
    ],
    login: [
      {
        question: "How to register on 99acres?",
        answer: "You can register by clicking 'Sign Up' on our homepage, providing your email/phone number, and following the verification process."
      },
      {
        question: "How to post a property on 99acres?",
        answer: "After registration, click 'Post Property', fill in property details, upload photos, and submit for approval."
      },
      {
        question: "Do I have to register on 99acres to post a property advertisement?",
        answer: "Yes, registration is mandatory to post property advertisements and access seller/owner features."
      }
    ],
    enquiry: [
      {
        question: "What to do if I am a victim of a fraud?",
        answer: "Report fraud immediately to our customer support, local police, and cyber crime cell. We'll assist in the investigation."
      },
      {
        question: "How can I protect myself from fraudsters?",
        answer: "Verify property ownership, avoid advance payments, meet in person, check documents, and use secure payment methods."
      },
      {
        question: "How does 99acres assure safety of its users against fraudulent activities?",
        answer: "We use verification processes, fraud detection systems, user reporting, and work with authorities to ensure safety."
      },
      {
        question: "How to contact 99acres customer care?",
        answer: "Contact us via phone: 1800-41-99099, email: services@99acres.com, or use the contact form on our website."
      }
    ]
  };

  // Topic categories for browsing
  const topicCategories = [
    {
      id: 'property',
      title: 'Property Listing',
      icon: <FaHome />,
      questions: [
        "Is property verification/photoshoot available in my locality/city?",
        "How can buyers/tenants contact me after my property advertisement is live?",
        "Can I extend the duration of my active property advertisement on 99acres? How to do it?",
        "How much time it takes to activate my property advertisement?"
      ],
      moreCount: 4
    },
    {
      id: 'manage',
      title: 'Manage Services',
      icon: <FaCog />,
      questions: [
        "What are the documents required for a rental agreement?",
        "How can I see my property advertisement on 99acres?",
        "Can I extend the duration of my active property advertisement on 99acres? How to do it?",
        "How can I unsubscribe from receiving property alerts and other promotional emails?"
      ],
      moreCount: 16
    },
    {
      id: 'login',
      title: 'Login / Registration',
      icon: <FaUserPlus />,
      questions: [
        "How to register on 99acres?",
        "How to post a property on 99acres?",
        "Do I have to register on 99acres to post a property advertisement?"
      ],
      moreCount: 0
    },
    {
      id: 'enquiry',
      title: 'Enquiry / Complaint',
      icon: <FaExclamationTriangle />,
      questions: [
        "What to do if I am a victim of a fraud?",
        "How can I protect myself from fraudsters?",
        "How does 99acres assure safety of its users against fraudulent activities?",
        "How to contact 99acres customer care?"
      ],
      moreCount: 1
    }
  ];

  // Expert articles data
  const expertArticles = [
    {
      title: "गोल्ड कोर्ट सिटी, गुरुग्राम में घर कहीं खरीदें?",
      author: "Gulshan Bhanshaniya",
      designation: "Research Analyst",
      company: "99acres.com",
      image: "/api/placeholder/200/150"
    },
    {
      title: "गुरुग्राम के अप्पार सेक्टर में निवेश के लिए बेस्ट सेक्टर कौन से हैं?",
      author: "Ankita",
      company: "99acres.com",
      image: "/api/placeholder/200/150"
    },
    {
      title: "गोल्ड सी टावर प्रोजेक्ट्स महाराजाओं के कया है रेट्स?",
      author: "Subha Nandi",
      designation: "Research Analyst",
      company: "99acres.com",
      image: "/api/placeholder/200/150"
    },
    {
      title: "2025 में रियल एस्टेट में भवन सक्या की आपको अपने करने की जरूरत है?",
      author: "Snehal Agarwal",
      designation: "Research Analyst",
      company: "99acres.com",
      image: "/api/placeholder/200/150"
    }
  ];

  const handleFAQToggle = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  // Handle WhatsApp click
  const handleWhatsAppClick = () => {
    const phoneNumber = '919650017061'; // Remove + and spaces
    const message = encodeURIComponent('Hello! I need assistance with 99acres services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Handle email click
  const handleEmailClick = () => {
    window.open('mailto:services@99acres.com?subject=Customer Support Inquiry&body=Hello, I need assistance with 99acres services. Please contact me.');
  };

  // Handle phone call
  const handlePhoneCall = (number) => {
    window.open(`tel:${number}`);
  };

  // Handle call back modal
  const handleCallBackClick = () => {
    setShowCallBackModal(true);
  };

  const handleCallBackSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert(`Thank you ${callBackForm.name}! We will call you back at ${callBackForm.phone} during ${callBackForm.preferredTime}.`);
    setShowCallBackModal(false);
    setCallBackForm({ name: '', phone: '', preferredTime: '' });
  };

  const handleCallBackFormChange = (field, value) => {
    setCallBackForm(prev => ({ ...prev, [field]: value }));
  };

  // Navigation handlers
  const handlePostPropertyClick = () => {
    navigate('/post-property');
  };

  const handleHomeLoansClick = () => {
    navigate('/home-loans');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - Show only when hideMainNavbar is true */}
      {showCustomerService && (
        <div className="bg-gradient-to-r from-green-600 to-black text-white">
          {/* Navigation Bar */}
          <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-green-400">99acres</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm">
              <button 
                onClick={() => setShowCustomerService(false)}
                className="hover:text-green-300 transition-all duration-300 cursor-pointer font-medium border-b-2 border-green-400 pb-1 transform hover:scale-105 px-2 py-1"
              >
                CUSTOMER SERVICE
              </button>
              <button 
                onClick={handlePostPropertyClick}
                className="hover:text-green-300 transition-all duration-300 cursor-pointer transform hover:scale-105 px-2 py-1"
              >
                SELL / RENT PROPERTY
              </button>
              <button 
                onClick={handleHomeLoansClick}
                className="hover:text-green-300 transition-all duration-300 cursor-pointer transform hover:scale-105 px-2 py-1"
              >
                HOME LOANS
              </button>
              <div className="flex items-center space-x-1 hover:text-green-300 transition-all duration-300 cursor-pointer transform hover:scale-105 px-2 py-1">
                <FaGlobe className="w-4 h-4" />
                <span>EN</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden text-white hover:text-green-300 transition-colors"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </nav>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-black bg-opacity-95 border-t border-green-600">
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
                <button 
                  onClick={() => {
                    setShowCustomerService(false);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-white hover:text-green-300 transition-colors py-2 border-b border-gray-700"
                >
                  CUSTOMER SERVICE
                </button>
                <button 
                  onClick={() => {
                    handlePostPropertyClick();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-white hover:text-green-300 transition-colors py-2 border-b border-gray-700"
                >
                  SELL / RENT PROPERTY
                </button>
                <button 
                  onClick={() => {
                    handleHomeLoansClick();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-white hover:text-green-300 transition-colors py-2 border-b border-gray-700"
                >
                  HOME LOANS
                </button>
                <div className="flex items-center space-x-1 text-white hover:text-green-300 transition-colors py-2">
                  <FaGlobe className="w-4 h-4" />
                  <span>EN</span>
                </div>
              </div>
            </div>
          )}

          {/* Hero Section */}
          <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 lg:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 sm:mb-8">
              Hello, how can we help?
            </h2>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search by Keywords"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg text-black rounded-xl focus:outline-none focus:ring-4 focus:ring-green-400 border-2 border-transparent focus:border-green-500 transition-all duration-300 shadow-lg"
              />
              <FaSearch className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-green-600 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-green-700 transition-colors" />
            </div>
          </div>

          {/* Contact Info Bar */}
          <div className="bg-black py-3 sm:py-4 border-t border-green-600">
            <div className="max-w-7xl mx-auto px-4">
              
              {/* Mobile Contact Info - Stack vertically */}
              <div className="flex flex-col space-y-3 sm:hidden">
                {/* Phone Numbers Row */}
                <div className="flex flex-wrap justify-center gap-3 text-xs">
                  <button 
                    onClick={() => handlePhoneCall('+918004199099')}
                    className="flex items-center space-x-2 hover:text-green-400 transition-all duration-300 cursor-pointer group transform hover:scale-105 bg-gray-800 px-2 py-1 rounded-lg hover:bg-gray-700"
                  >
                    <img src="/api/placeholder/20/15" alt="India Flag" className="w-4 h-2" />
                    <span className="group-hover:underline text-white text-xs">(IND) 1800-41-99099</span>
                  </button>
                  
                  <button 
                    onClick={handleWhatsAppClick}
                    className="flex items-center space-x-1 bg-green-600 hover:bg-green-500 px-2 py-1 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <FaWhatsapp className="w-3 h-3" />
                    <span className="font-medium text-xs">WHATSAPP</span>
                  </button>
                </div>
                
                {/* Email and Call Back Row */}
                <div className="flex flex-wrap justify-center gap-3 text-xs">
                  <button
                    onClick={handleEmailClick}
                    className="text-green-400 hover:text-green-300 transition-all duration-300 hover:underline cursor-pointer font-medium"
                  >
                    services@99acres.com
                  </button>
                  
                  <button
                    onClick={handleCallBackClick}
                    className="flex items-center space-x-1 bg-gray-800 hover:bg-green-700 border border-green-600 px-2 py-1 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <FaPhoneAlt className="w-3 h-3" />
                    <span className="font-medium text-xs">CALL BACK</span>
                  </button>
                </div>
              </div>
              
              {/* Desktop Contact Info - Horizontal */}
              <div className="hidden sm:flex flex-wrap items-center justify-between text-sm gap-4">
                
                {/* India Phone Number */}
                <button 
                  onClick={() => handlePhoneCall('+918004199099')}
                  className="flex items-center space-x-2 hover:text-green-400 transition-all duration-300 cursor-pointer group transform hover:scale-105 bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700"
                >
                  <img src="/api/placeholder/20/15" alt="India Flag" className="w-5 h-3" />
                  <span className="group-hover:underline text-white">(IND) 1800-41-99099</span>
                </button>
                
                {/* Email */}
                <div className="text-gray-300 hidden md:block">
                  <span className="font-semibold text-white">WRITE TO US AT:</span>
                  <button
                    onClick={handleEmailClick}
                    className="ml-2 text-green-400 hover:text-green-300 transition-all duration-300 hover:underline cursor-pointer font-medium transform hover:scale-105"
                  >
                    services@99acres.com
                  </button>
                </div>
                
                {/* WhatsApp */}
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-green-500/25"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span className="font-medium">WHATSAPP US</span>
                </button>
                
                {/* Call Me Back */}
                <button
                  onClick={handleCallBackClick}
                  className="flex items-center space-x-2 bg-gray-800 hover:bg-green-700 border border-green-600 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-green-500/25"
                >
                  <FaPhoneAlt className="w-4 h-4" />
                  <span className="font-medium">CALL ME BACK</span>
                </button>
                
                {/* International Number */}
                <div className="text-gray-300 hidden lg:block">
                  <span className="text-white">INTERNATIONAL USERS, CALL</span>
                  <button 
                    onClick={() => handlePhoneCall('+911206637501')}
                    className="ml-2 text-green-400 hover:text-green-300 transition-all duration-300 hover:underline cursor-pointer font-medium transform hover:scale-105"
                  >
                    +91-120-6637501
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show minimal header when not in customer service mode */}
      {!showCustomerService && (
        <div className="bg-white shadow-lg border-b-4 border-green-600">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-black">99<span className="text-green-600">acres</span></h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm">
              <button 
                onClick={() => setShowCustomerService(true)}
                className="text-black hover:text-green-600 transition-all duration-300 cursor-pointer font-medium transform hover:scale-105 px-3 py-2 rounded-lg hover:bg-green-50"
              >
                CUSTOMER SERVICE & FAQ
              </button>
              <button 
                onClick={handlePostPropertyClick}
                className="text-black hover:text-green-600 transition-all duration-300 cursor-pointer transform hover:scale-105 px-3 py-2 rounded-lg hover:bg-green-50"
              >
                SELL / RENT PROPERTY
              </button>
              <button 
                onClick={handleHomeLoansClick}
                className="text-black hover:text-green-600 transition-all duration-300 cursor-pointer transform hover:scale-105 px-3 py-2 rounded-lg hover:bg-green-50"
              >
                HOME LOANS
              </button>
              <div className="flex items-center space-x-1 text-black hover:text-green-600 transition-all duration-300 cursor-pointer transform hover:scale-105 px-3 py-2 rounded-lg hover:bg-green-50">
                <FaGlobe className="w-4 h-4" />
                <span>EN</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden text-black hover:text-green-600 transition-colors"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </nav>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-green-600 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
                <button 
                  onClick={() => {
                    setShowCustomerService(true);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-black hover:text-green-600 transition-colors py-2 border-b border-gray-200"
                >
                  CUSTOMER SERVICE & FAQ
                </button>
                <button 
                  onClick={() => {
                    handlePostPropertyClick();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-black hover:text-green-600 transition-colors py-2 border-b border-gray-200"
                >
                  SELL / RENT PROPERTY
                </button>
                <button 
                  onClick={() => {
                    handleHomeLoansClick();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-black hover:text-green-600 transition-colors py-2 border-b border-gray-200"
                >
                  HOME LOANS
                </button>
                <div className="flex items-center space-x-1 text-black hover:text-green-600 transition-colors py-2">
                  <FaGlobe className="w-4 h-4" />
                  <span>EN</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Show Customer Service Content only when active */}
      {showCustomerService && (
        <div>
          {/* Category Cards */}
          <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {categories.map((category, index) => (
                <div key={category.id} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer border-l-4 border-green-600 transform hover:-translate-y-2 hover:border-green-500 group">
                  <div className="flex items-start space-x-3">
                    <div className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-gray-500 mb-2 group-hover:text-green-600 transition-colors">{category.description}</p>
                      <h3 className="font-medium text-black leading-tight group-hover:text-green-700 transition-colors text-sm sm:text-base">
                        {category.question}
                      </h3>
                    </div>
                    {index === categories.length - 1 && (
                      <FaChevronDown className="text-green-600 w-4 h-4 flex-shrink-0 mt-1 group-hover:text-green-500 transition-colors" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* FAQ Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <FaQuestionCircle className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
            <h2 className="text-xl sm:text-2xl font-bold text-black">General <span className="text-green-600">Questions</span></h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100">
            {faqData.general.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => handleFAQToggle(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left hover:bg-green-50 focus:outline-none focus:bg-green-50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-black text-sm sm:text-base group-hover:text-green-700 transition-colors pr-4">
                      • {faq.question}
                    </span>
                    <FaChevronDown className={`text-green-600 w-4 h-4 transition-transform duration-300 flex-shrink-0 ${expandedFAQ === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {expandedFAQ === index && (
                  <div className="px-4 sm:px-6 pb-4 bg-green-50 border-t border-green-100">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
            
            <div className="px-6 py-4 bg-gray-50">
              <button className="text-green-600 font-medium text-sm hover:text-green-700 hover:underline transition-all duration-300 transform hover:scale-105">
                +12 more questions
              </button>
            </div>
          </div>

          {/* Video Section */}
          <div className="mt-6 sm:mt-8 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="relative">
              <video 
                src="/hero-vedio copy.mp4" 
                alt="Property Building" 
                className="w-full h-48 sm:h-64 object-cover"
                controls
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <div className="bg-green-600 hover:bg-green-500 rounded-full p-3 sm:p-4 mb-3 sm:mb-4 mx-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-300 shadow-lg">
                    <FaPlay className="text-white w-4 h-4 sm:w-6 sm:h-6 ml-1" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">Video Answers</h3>
                  <p className="text-xs sm:text-sm">How do I search for New Projects on 99acres?</p>
                  <p className="text-xs sm:text-sm mt-2">How to use my99acres account?</p>
                </div>
              </div>
            </div>
          </div>

          {/* How can 99acres FAQ help users section */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <FaQuestionCircle className="text-green-600 w-5 h-5" />
              <h3 className="text-lg font-semibold text-black">How can <span className="text-green-600">99acres FAQ</span> help users?</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Welcome to the <strong className="text-green-600">99acres FAQ (Frequently Asked Questions)</strong> page, where buyers and owners can find answers to their questions related to login or registration, property search, property advertisement posting, account management and other related topics. Start your search by simply entering keywords in the search-bar, located at the top of the page or you can browse through questions under the categories given below. Alternatively, you can also reach out to us at <strong className="text-green-600">1800-41-99099</strong> (Monday to Sunday, 9:30 AM to 6:30 PM) to talk to our customer support executive. Additionally, you can also explore the Articles section below, for the latest real estate news and updates.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-1 mt-6 lg:mt-0">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
            <h3 className="text-base sm:text-lg font-semibold text-black mb-4 sm:mb-6">We'll get in <span className="text-green-600">touch</span> with you</h3>
            
            <form className="space-y-3 sm:space-y-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-10 pr-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              <div className="flex space-x-2">
                <select className="px-2 sm:px-3 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm sm:text-base">
                  <option>IND (+91)</option>
                </select>
                <div className="relative flex-1">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-4 h-4" />
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              <div>
                <select className="w-full px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm sm:text-base">
                  <option>Owner</option>
                  <option>Buyer</option>
                  <option>Agent</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Preferred call back time"
                  className="w-full px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 text-sm sm:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Browse Questions by Topic */}
      <div className="bg-gradient-to-br from-green-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-black mb-2">
            BROWSE <span className="text-green-600">QUESTIONS BY TOPIC</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {topicCategories.map((topic) => (
              <div key={topic.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-green-600 group-hover:text-green-700 transition-colors text-xl">{topic.icon}</div>
                  <h3 className="font-semibold text-black group-hover:text-green-700 transition-colors">{topic.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {topic.questions.map((question, index) => (
                    <p key={index} className="text-sm text-gray-700 hover:text-green-600 cursor-pointer transition-colors duration-300 hover:underline">
                      {question}
                    </p>
                  ))}
                  
                  {topic.moreCount > 0 && (
                    <p className="text-sm text-green-600 font-medium hover:text-green-700 cursor-pointer transition-colors duration-300 hover:underline">
                      +{topic.moreCount} more questions
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expert Section and Articles */}
      <div className="bg-gradient-to-br from-gray-50 to-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Expert Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Expert <span className="text-green-600">Section</span></h3>
              <button className="text-green-600 hover:text-green-700 hover:underline text-sm transition-colors duration-300 transform hover:scale-105">
                View all Experts
              </button>
            </div>

            {/* Articles */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-semibold text-black mb-6">Articles</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertArticles.map((article, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
                    <div className="relative">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                        <div className="bg-green-600 hover:bg-green-500 rounded-full p-2 transition-colors duration-300 transform hover:scale-110">
                          <FaPlay className="text-white w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="font-medium text-black text-sm mb-3 line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
                        {article.title}
                      </h4>
                      
                      <div className="text-xs text-gray-600">
                        <p className="font-medium text-green-600">{article.author}</p>
                        {article.designation && (
                          <p className="text-gray-500">{article.designation}</p>
                        )}
                        <p className="text-gray-500">{article.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      )}

     
<UpperFooter />
<LowerFooter />
      {/* Call Me Back Modal */}
      {showCallBackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-md mx-4 transform transition-all shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-black">Request <span className="text-green-600">Call Back</span></h3>
              <button
                onClick={() => setShowCallBackModal(false)}
                className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110 duration-200 p-1"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleCallBackSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1 sm:mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={callBackForm.name}
                  onChange={(e) => handleCallBackFormChange('name', e.target.value)}
                  className="w-full px-3 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-1 sm:mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={callBackForm.phone}
                  onChange={(e) => handleCallBackFormChange('phone', e.target.value)}
                  className="w-full px-3 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter your mobile number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-1 sm:mb-2">
                  Preferred Call Time *
                </label>
                <select
                  required
                  value={callBackForm.preferredTime}
                  onChange={(e) => handleCallBackFormChange('preferredTime', e.target.value)}
                  className="w-full px-3 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-sm sm:text-base"
                >
                  <option value="">Select preferred time</option>
                  <option value="9:00 AM - 12:00 PM">9:00 AM - 12:00 PM</option>
                  <option value="12:00 PM - 3:00 PM">12:00 PM - 3:00 PM</option>
                  <option value="3:00 PM - 6:00 PM">3:00 PM - 6:00 PM</option>
                  <option value="6:00 PM - 9:00 PM">6:00 PM - 9:00 PM</option>
                </select>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-3 sm:pt-4">
                <button
                  type="button"
                  onClick={() => setShowCallBackModal(false)}
                  className="flex-1 px-4 py-2 sm:py-3 border-2 border-gray-300 text-black rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 text-sm sm:text-base font-semibold"
                >
                  Request Call Back
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Messenger Component - Fixed to bottom right */}
      <Messenger />
    </div>
  );
};

export default Customer_servicess;
