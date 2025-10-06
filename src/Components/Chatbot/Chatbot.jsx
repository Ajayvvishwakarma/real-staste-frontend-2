import React, { useState, useRef, useEffect } from 'react';
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to 99acres! 👋 How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Pre-defined responses for common queries
  const botResponses = {
    'hello': "Hello! Welcome to 99acres! How can I assist you today?",
    'hi': "Hi there! I'm here to help you with property queries. What are you looking for?",
    'help': "I can help you with:\n• Property listings\n• Buying/Selling guidance\n• Owner packages\n• Payment information\n• Contact support",
    'owner': "Our Owner packages include:\n• Enhanced visibility\n• Relationship manager support\n• Social media marketing\n• Priority listing\n\nWould you like to know more about any specific package?",
    'package': "We offer various owner packages:\n• Basic Package - ₹999\n• Premium Package - ₹2999\n• Pro Package - ₹4999\n\nEach package includes different benefits. Which one interests you?",
    'price': "Our packages start from ₹999. For detailed pricing and features, I can connect you with our team. What's your budget range?",
    'contact': "You can reach us at:\n📞 1800-41-99099\n📧 support@99acres.com\n\nOr I can help you right here! What do you need assistance with?",
    'buy': "Looking to buy a property? Great! I can help you find:\n• Residential properties\n• Commercial spaces\n• Plots/Land\n\nWhat type of property are you interested in?",
    'sell': "Want to sell your property? Our Owner packages can help you:\n• Get more visibility\n• Connect with genuine buyers\n• Faster sales process\n\nShall I explain our selling packages?",
    'rent': "Looking for rental properties? We have:\n• Apartments\n• Houses\n• Commercial spaces\n• PG/Hostels\n\nWhat's your preferred location and budget?",
    'thanks': "You're welcome! Happy to help. Is there anything else you'd like to know about 99acres?",
    'bye': "Thank you for visiting 99acres! Feel free to reach out anytime. Have a great day! 👋"
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase());
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (message) => {
    // Check for keywords in the message
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (message.includes(keyword)) {
        return response;
      }
    }

    // Default responses for unrecognized queries
    const defaultResponses = [
      "I understand you're looking for information. Could you please be more specific about what you need help with?",
      "That's a great question! For detailed information, I'd recommend speaking with our property experts at 1800-41-99099.",
      "I'm here to help! Could you rephrase your question or let me know which specific service you're interested in?",
      "For specific property details and personalized assistance, our team can better help you. Meanwhile, is there anything general I can assist with?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickReplies = [
    "Owner Packages",
    "Buy Property", 
    "Sell Property",
    "Rent Property",
    "Contact Support"
  ];

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <>
      {/* Chat Icon - Fixed Position */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce"
            style={{ animationDuration: '2s' }}
          >
            <FaComments size={24} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 h-[500px] flex flex-col border border-gray-200 animate-slideInUp">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <FaRobot size={20} />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">99acres Support</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-blue-500 p-1 rounded transition-colors"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {message.sender === 'user' ? <FaUser size={12} /> : <FaRobot size={12} />}
                    </div>
                    <div className={`rounded-2xl p-3 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-white text-gray-800 rounded-bl-md shadow-sm border'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                      <FaRobot size={12} />
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-md p-3 shadow-sm border">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 border-t bg-white">
                <p className="text-xs text-gray-500 mb-2">Quick options:</p>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t bg-white rounded-b-2xl">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500 text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputMessage.trim() === ''}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-full p-2 transition-colors"
                >
                  <FaPaperPlane size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideInUp {
          animation: slideInUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Chatbot;