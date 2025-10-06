// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   FaComments, 
//   FaTimes, 
//   FaPaperPlane, 
//   FaUser, 
//   FaRobot,
//   FaSmile,
//   FaPaperclip,
//   FaPhone,
//   FaVideo,
//   FaCheck,
//   FaCheckDouble,
//   FaMicrophone,
//   FaImage,
//   FaFile,
//   FaChevronDown,
//   FaDotCircle
// } from 'react-icons/fa';

// const Messenger = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);
//   const [isOnline, setIsOnline] = useState(true);
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Hello! Welcome to 99acres Customer Support. How can I help you today? 👋",
//       sender: "support",
//       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//       avatar: "CS",
//       status: "delivered"
//     }
//   ]);
//   const [newMessage, setNewMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [showAttachments, setShowAttachments] = useState(false);
//   const [unreadCount, setUnreadCount] = useState(1);
//   const messagesEndRef = useRef(null);
//   const inputRef = useRef(null);

//   // Auto scroll to bottom when new message arrives
//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // Simulate support response
//   const simulateResponse = (userMessage) => {
//     setIsTyping(true);
    
//     setTimeout(() => {
//       const responses = [
//         "Thank you for your message! Our team will get back to you shortly. 😊",
//         "I understand your concern. Let me help you with that right away! 🏠",
//         "That's a great question! Let me provide you with the information you need. 📋",
//         "I'm here to help! Could you please provide more details? 🤝",
//         "Thanks for reaching out. I'll connect you with the right specialist. 👨‍💼",
//         "Your query is important to us. We're working on a solution. ⚡"
//       ];
      
//       const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
//       setMessages(prev => [...prev, {
//         id: Date.now(),
//         text: randomResponse,
//         sender: "support",
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         avatar: "CS",
//         status: "delivered"
//       }]);
      
//       setIsTyping(false);
      
//       // Mark user's message as read
//       setTimeout(() => {
//         setMessages(prev => prev.map(msg => 
//           msg.sender === 'user' && msg.status === 'sent' 
//             ? { ...msg, status: 'read' }
//             : msg
//         ));
//       }, 500);
//     }, 1500);
//   };

//   const handleSendMessage = () => {
//     if (newMessage.trim()) {
//       const userMsg = {
//         id: Date.now(),
//         text: newMessage,
//         sender: "user",
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         avatar: "U",
//         status: "sent"
//       };
      
//       setMessages(prev => [...prev, userMsg]);
//       setNewMessage('');
//       setShowEmojiPicker(false);
//       setShowAttachments(false);
      
//       // Mark as delivered after a short delay
//       setTimeout(() => {
//         setMessages(prev => prev.map(msg => 
//           msg.id === userMsg.id ? { ...msg, status: 'delivered' } : msg
//         ));
//       }, 800);
      
//       // Simulate support response
//       simulateResponse(newMessage);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const toggleMessenger = () => {
//     setIsOpen(!isOpen);
//     setIsMinimized(false);
//     if (!isOpen) {
//       setTimeout(() => {
//         inputRef.current?.focus();
//       }, 300);
//       setUnreadCount(0);
//     }
//   };

//   const minimizeMessenger = () => {
//     setIsMinimized(!isMinimized);
//   };

//   // Quick reply buttons
//   const quickReplies = [
//     "I need help with property listing",
//     "How to contact customer care?",
//     "I want to report a fraud",
//     "Need rental agreement info"
//   ];

//   const handleQuickReply = (reply) => {
//     setNewMessage(reply);
//     setTimeout(() => {
//       handleSendMessage();
//     }, 100);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-[9999]">
//       {/* Chat Toggle Button */}
//       {!isOpen && (
//         <button
//           onClick={toggleMessenger}
//           className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse"
//         >
//           <FaComments className="text-2xl" />
//           <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
//             1
//           </div>
//         </button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="bg-white rounded-lg shadow-2xl w-96 h-96 flex flex-col border border-gray-200 animate-fadeInUp">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
//                 99
//               </div>
//               <div>
//                 <h3 className="font-semibold text-sm">Customer Support</h3>
//                 <p className="text-xs text-blue-100">Usually replies in minutes</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <button className="text-white hover:text-blue-200 transition-colors">
//                 <FaPhone className="text-sm" />
//               </button>
//               <button className="text-white hover:text-blue-200 transition-colors">
//                 <FaVideo className="text-sm" />
//               </button>
//               <button 
//                 onClick={toggleMessenger}
//                 className="text-white hover:text-blue-200 transition-colors"
//               >
//                 <FaTimes className="text-lg" />
//               </button>
//             </div>
//           </div>

//           {/* Messages Area */}
//           <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div className={`flex items-end space-x-2 max-w-[75%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
//                   <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
//                     message.sender === 'user' 
//                       ? 'bg-blue-600 text-white' 
//                       : 'bg-green-600 text-white'
//                   }`}>
//                     {message.avatar}
//                   </div>
//                   <div className={`p-3 rounded-lg ${
//                     message.sender === 'user'
//                       ? 'bg-blue-600 text-white rounded-br-none'
//                       : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
//                   }`}>
//                     <p className="text-sm">{message.text}</p>
//                     <span className={`text-xs mt-1 block ${
//                       message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
//                     }`}>
//                       {message.timestamp}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
            
//             {/* Typing Indicator */}
//             {isTyping && (
//               <div className="flex justify-start">
//                 <div className="flex items-end space-x-2">
//                   <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
//                     CS
//                   </div>
//                   <div className="bg-white p-3 rounded-lg rounded-bl-none border border-gray-200">
//                     <div className="flex space-x-1">
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                       <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
            
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Quick Replies */}
//           {messages.length <= 2 && (
//             <div className="p-2 bg-gray-50 border-t">
//               <p className="text-xs text-gray-600 mb-2">Quick replies:</p>
//               <div className="space-y-1">
//                 {quickReplies.slice(0, 2).map((reply, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleQuickReply(reply)}
//                     className="w-full text-left text-xs p-2 bg-white hover:bg-blue-50 border border-gray-200 rounded text-gray-700 hover:text-blue-600 transition-colors"
//                   >
//                     {reply}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Input Area */}
//           <div className="p-3 border-t bg-white rounded-b-lg">
//             <div className="flex items-center space-x-2">
//               <button className="text-gray-400 hover:text-gray-600 transition-colors">
//                 <FaPaperclip />
//               </button>
//               <div className="flex-1 relative">
//                 <input
//                   ref={inputRef}
//                   type="text"
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   placeholder="Type your message..."
//                   className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-sm pr-10"
//                 />
//                 <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
//                   <FaSmile />
//                 </button>
//               </div>
//               <button
//                 onClick={handleSendMessage}
//                 disabled={!newMessage.trim()}
//                 className={`p-2 rounded-full transition-colors ${
//                   newMessage.trim()
//                     ? 'bg-blue-600 text-white hover:bg-blue-700'
//                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                 }`}
//               >
//                 <FaPaperPlane />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Messenger;










import React, { useState, useRef, useEffect } from 'react';
import { 
  FaComments, FaTimes, FaPaperPlane, FaUser, FaSmile, FaPaperclip, FaPhone, FaVideo
} from 'react-icons/fa';

// Replace with your backend chat API endpoint
const API_URL = "http://localhost:8000/api/support-chat";

const MessengerIntegration = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to Customer Support. How can I help you today? 👋",
      sender: "support",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "CS",
      status: "delivered"
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to bottom when new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Backend: Send message & simulate support response
  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;
    const userMsg = {
      id: Date.now(),
      text: newMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "U",
      status: "sent"
    };
    setMessages(prev => [...prev, userMsg]);
    setNewMessage('');
    setIsTyping(true);

    try {
      // Send user message to backend
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userMsg.text }),
      });
      const data = await res.json();
      // Add support response from backend
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: data.reply || "Thank you for your message! Our team will get back to you shortly. 😊",
          sender: "support",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: "CS",
          status: "delivered"
        }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 2,
          text: "Sorry, there was an error connecting to support. Please try again.",
          sender: "support",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: "CS",
          status: "delivered"
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleMessenger = () => {
    setIsOpen(!isOpen);
    setUnreadCount(0);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  };

  // Quick reply buttons
  const quickReplies = [
    "I need help with property listing",
    "How to contact customer care?",
    "I want to report a fraud",
    "Need rental agreement info"
  ];

  const handleQuickReply = (reply) => {
    setNewMessage(reply);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleMessenger}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse"
        >
          <FaComments className="text-2xl" />
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {unreadCount}
            </div>
          )}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-96 h-96 flex flex-col border border-gray-200 animate-fadeInUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
                99
              </div>
              <div>
                <h3 className="font-semibold text-sm">Customer Support</h3>
                <p className="text-xs text-blue-100">Usually replies in minutes</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="text-white hover:text-blue-200 transition-colors">
                <FaPhone className="text-sm" />
              </button>
              <button className="text-white hover:text-blue-200 transition-colors">
                <FaVideo className="text-sm" />
              </button>
              <button 
                onClick={toggleMessenger}
                className="text-white hover:text-blue-200 transition-colors"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-end space-x-2 max-w-[75%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-green-600 text-white'
                  }`}>
                    {message.avatar}
                  </div>
                  <div className={`p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <span className={`text-xs mt-1 block ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    CS
                  </div>
                  <div className="bg-white p-3 rounded-lg rounded-bl-none border border-gray-200">
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
            <div className="p-2 bg-gray-50 border-t">
              <p className="text-xs text-gray-600 mb-2">Quick replies:</p>
              <div className="space-y-1">
                {quickReplies.slice(0, 2).map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="w-full text-left text-xs p-2 bg-white hover:bg-blue-50 border border-gray-200 rounded text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 border-t bg-white rounded-b-lg">
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <FaPaperclip />
              </button>
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-sm pr-10"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <FaSmile />
                </button>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className={`p-2 rounded-full transition-colors ${
                  newMessage.trim()
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default MessengerIntegration;