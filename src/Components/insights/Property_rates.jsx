// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Popular_Tools from "./Popular_Tools";
// import Cities_popular from "./Cities_popular";

// function Sparkline({ data = [], width = 80, height = 24 }) {
//   if (!data.length) return null;
//   const max = Math.max(...data);
//   const min = Math.min(...data);
//   const len = data.length;
//   const points = data
//     .map((d, i) => {
//       const x = (i / (len - 1)) * width;
//       const y = height - ((d - min) / (max - min || 1)) * height;
//       return `${x},${y}`;
//     })
//     .join(" ");

//   const dAttr = data
//     .map((d, i) => {
//       const x = (i / (len - 1)) * width;
//       const y = height - ((d - min) / (max - min || 1)) * height;
//       return `${i === 0 ? "M" : "L"}${x} ${y}`;
//     })
//     .join(" ");

//   const area = `${dAttr} L ${width} ${height} L 0 ${height} Z`;

//   return (
//     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
//       <path d={area} fill="#e6fcec" />
//       <polyline
//         points={points}
//         fill="none"
//         stroke="#14b8a6"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function DetailedGraph({ data = [], name = "", currentRate = 0 }) {
//   if (!data.length) return null;
  
//   const years = ['2021', '2022', '2023', '2024', '2025'];
//   const max = Math.max(...data);
//   const min = Math.min(...data);
//   const width = 600;
//   const height = 200;
//   const padding = 40;
  
//   const points = data.map((d, i) => {
//     const x = padding + (i / (data.length - 1)) * (width - padding * 2);
//     const y = padding + (1 - (d - min) / (max - min || 1)) * (height - padding * 2);
//     return { x, y, value: d };
//   });

//   const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
//   const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

//   return (
//     <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//       <div className="flex items-center justify-between mb-4">
//         <h4 className="text-lg font-semibold text-slate-800">{name}</h4>
//         <div className="text-sm text-slate-500">
//           Current Rate: <span className="font-semibold text-slate-800">₹{currentRate.toLocaleString()}/sq.ft</span>
//         </div>
//       </div>
      
//       <div className="bg-white rounded-lg p-4">
//         <svg width="100%" height="220" viewBox={`0 0 ${width} ${height + 20}`} className="overflow-visible">
//           <defs>
//             <linearGradient id={`gradient-${name}`} x1="0" x2="0" y1="0" y2="1">
//               <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
//               <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
//             </linearGradient>
//           </defs>
          
//           {[...Array(5)].map((_, i) => {
//             const y = padding + (i / 4) * (height - padding * 2);
//             return (
//               <line
//                 key={i}
//                 x1={padding}
//                 y1={y}
//                 x2={width - padding}
//                 y2={y}
//                 stroke="#e5e7eb"
//                 strokeWidth="1"
//               />
//             );
//           })}
          
//           <path d={areaD} fill={`url(#gradient-${name})`} />
//           <path d={pathD} stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          
//           {points.map((point, i) => (
//             <circle
//               key={i}
//               cx={point.x}
//               cy={point.y}
//               r="4"
//               fill="#10b981"
//               stroke="white"
//               strokeWidth="2"
//             />
//           ))}
          
//           {years.map((year, i) => {
//             const x = padding + (i / (years.length - 1)) * (width - padding * 2);
//             return (
//               <text
//                 key={year}
//                 x={x}
//                 y={height + 15}
//                 textAnchor="middle"
//                 className="text-xs fill-slate-500"
//               >
//                 {year}
//               </text>
//             );
//           })}
          
//           {[...Array(5)].map((_, i) => {
//             const y = padding + (i / 4) * (height - padding * 2);
//             const value = max - (i / 4) * (max - min);
//             return (
//               <text
//                 key={i}
//                 x={padding - 10}
//                 y={y + 4}
//                 textAnchor="end"
//                 className="text-xs fill-slate-500"
//               >
//                 ₹{Math.round(value / 1000)}K
//               </text>
//             );
//           })}
//         </svg>
        
//         <div className="mt-4 flex items-center justify-between text-sm">
//           <div className="text-slate-500">
//             Price trend for <span className="font-medium text-slate-700">{name}</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="text-blue-600 hover:underline">See Detailed Price Insights</button>
//             <div className="text-slate-500">Last updated: Sep 2025</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Property_rates() {
//   const { city } = useParams();
//   const [query, setQuery] = useState("");
//   const [zone, setZone] = useState("All Zones");
//   const [propertyType, setPropertyType] = useState("Apartment");
//   const [duration, setDuration] = useState("5 years");
//   const [expandedCards, setExpandedCards] = useState(new Set());
//   const [expandedFAQs, setExpandedFAQs] = useState(new Set());
  
//   // Enhanced Navigation States
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [popupContent, setPopupContent] = useState(null);

//   const toggleCardExpansion = (cardId) => {
//     const newExpandedCards = new Set(expandedCards);
//     if (newExpandedCards.has(cardId)) {
//       newExpandedCards.delete(cardId);
//     } else {
//       newExpandedCards.add(cardId);
//     }
//     setExpandedCards(newExpandedCards);
//   };

//   const toggleFAQ = (faqId) => {
//     const newExpandedFAQs = new Set(expandedFAQs);
//     if (newExpandedFAQs.has(faqId)) {
//       newExpandedFAQs.delete(faqId);
//     } else {
//       newExpandedFAQs.add(faqId);
//     }
//     setExpandedFAQs(newExpandedFAQs);
//   };

//   const cityData = {
//     bangalore: {
//       name: "Bangalore",
//       zones: ["All Zones", "Bangalore South", "Bangalore East", "Bangalore North", "Bangalore West"],
//       sampleData: [
//         {
//           id: 1,
//           name: "Dommasandra",
//           area: "Bangalore East",
//           segment: "MID-SEGMENT",
//           rate: 11500,
//           changePct: 194.9,
//           duration: "5Y",
//           yield: 2,
//           spark: [10, 12, 11, 14, 18, 16, 22, 26],
//         },
//         {
//           id: 2,
//           name: "Tumkur Road",
//           area: "Bangalore West",
//           segment: "PREMIUM",
//           rate: 17500,
//           changePct: 182.3,
//           duration: "5Y",
//           yield: 1,
//           spark: [8, 9, 11, 13, 18, 21, 20, 22],
//         },
//         {
//           id: 3,
//           name: "Seegahalli",
//           area: "Bangalore East",
//           segment: "MID-SEGMENT",
//           rate: 9300,
//           changePct: 158.3,
//           duration: "5Y",
//           yield: 4,
//           spark: [6, 7, 9, 10, 12, 13, 16, 18],
//         },
//         {
//           id: 4,
//           name: "Hoodi",
//           area: "Bangalore East",
//           segment: "PREMIUM",
//           rate: 13350,
//           changePct: 154.3,
//           duration: "5Y",
//           yield: 3,
//           spark: [9, 10, 8, 11, 14, 13, 15, 17],
//         },
//       ]
//     },
//     pune: {
//       name: "Pune",
//       zones: ["All Zones", "Pune East", "Pune West", "Pune North", "Pune South"],
//       sampleData: [
//         {
//           id: 1,
//           name: "Hinjewadi",
//           area: "Pune West",
//           segment: "PREMIUM",
//           rate: 14500,
//           changePct: 175.2,
//           duration: "5Y",
//           yield: 3,
//           spark: [9, 11, 10, 13, 16, 14, 17, 19],
//         },
//         {
//           id: 2,
//           name: "Kharadi",
//           area: "Pune East",
//           segment: "MID-SEGMENT",
//           rate: 11200,
//           changePct: 155.8,
//           duration: "5Y",
//           yield: 4,
//           spark: [7, 9, 8, 10, 12, 11, 13, 15],
//         },
//         {
//           id: 3,
//           name: "Baner",
//           area: "Pune West",
//           segment: "PREMIUM",
//           rate: 16800,
//           changePct: 168.4,
//           duration: "5Y",
//           yield: 3,
//           spark: [10, 12, 11, 14, 17, 15, 18, 20],
//         },
//         {
//           id: 4,
//           name: "Aundh",
//           area: "Pune North",
//           segment: "LUXURY",
//           rate: 19500,
//           changePct: 145.7,
//           duration: "5Y",
//           yield: 2,
//           spark: [12, 14, 13, 16, 19, 17, 20, 22],
//         },
//       ]
//     },
//     mumbai: {
//       name: "Mumbai",
//       zones: ["All Zones", "Mumbai South", "Mumbai Central", "Mumbai North", "Mumbai West"],
//       sampleData: [
//         {
//           id: 1,
//           name: "Andheri West",
//           area: "Mumbai West",
//           segment: "PREMIUM",
//           rate: 28500,
//           changePct: 145.2,
//           duration: "5Y",
//           yield: 2,
//           spark: [18, 20, 19, 22, 25, 23, 26, 28],
//         },
//         {
//           id: 2,
//           name: "Bandra East",
//           area: "Mumbai West",
//           segment: "LUXURY",
//           rate: 35200,
//           changePct: 125.8,
//           duration: "5Y",
//           yield: 2,
//           spark: [22, 24, 23, 26, 29, 27, 30, 32],
//         },
//         {
//           id: 3,
//           name: "Powai",
//           area: "Mumbai Central",
//           segment: "PREMIUM",
//           rate: 24800,
//           changePct: 158.4,
//           duration: "5Y",
//           yield: 3,
//           spark: [15, 17, 16, 19, 22, 20, 23, 25],
//         },
//         {
//           id: 4,
//           name: "Thane West",
//           area: "Mumbai North",
//           segment: "MID-SEGMENT",
//           rate: 18500,
//           changePct: 175.7,
//           duration: "5Y",
//           yield: 4,
//           spark: [10, 12, 11, 14, 17, 15, 18, 20],
//         },
//       ]
//     },
//     delhi: {
//       name: "Delhi",
//       zones: ["All Zones", "South Delhi", "North Delhi", "East Delhi", "West Delhi"],
//       sampleData: [
//         {
//           id: 1,
//           name: "Dwarka",
//           area: "West Delhi", 
//           segment: "MID-SEGMENT",
//           rate: 16500,
//           changePct: 165.2,
//           duration: "5Y",
//           yield: 3,
//           spark: [9, 11, 10, 13, 16, 14, 17, 19],
//         },
//         {
//           id: 2,
//           name: "Noida Extension",
//           area: "East Delhi",
//           segment: "AFFORDABLE",
//           rate: 8200,
//           changePct: 195.8,
//           duration: "5Y",
//           yield: 5,
//           spark: [4, 5, 6, 7, 9, 8, 10, 12],
//         },
//         {
//           id: 3,
//           name: "Gurgaon Sector 104",
//           area: "South Delhi",
//           segment: "PREMIUM",
//           rate: 22800,
//           changePct: 148.4,
//           duration: "5Y",
//           yield: 2,
//           spark: [13, 15, 14, 17, 20, 18, 21, 23],
//         },
//         {
//           id: 4,
//           name: "Rohini",
//           area: "North Delhi",
//           segment: "MID-SEGMENT",
//           rate: 12500,
//           changePct: 155.7,
//           duration: "5Y",
//           yield: 4,
//           spark: [7, 9, 8, 10, 13, 11, 14, 16],
//         },
//       ]
//     },
//     hyderabad: {
//       name: "Hyderabad",
//       zones: ["All Zones", "Hyderabad East", "Hyderabad West", "Hyderabad North", "Hyderabad South"],
//       sampleData: [
//         {
//           id: 1,
//           name: "Gachibowli",
//           area: "Hyderabad West",
//           segment: "PREMIUM",
//           rate: 13500,
//           changePct: 185.2,
//           duration: "5Y",
//           yield: 3,
//           spark: [7, 9, 8, 11, 14, 12, 15, 17],
//         },
//         {
//           id: 2,
//           name: "HITEC City",
//           area: "Hyderabad West",
//           segment: "LUXURY",
//           rate: 18200,
//           changePct: 165.8,
//           duration: "5Y",
//           yield: 2,
//           spark: [10, 12, 11, 14, 17, 15, 18, 20],
//         },
//         {
//           id: 3,
//           name: "Kompally",
//           area: "Hyderabad North",
//           segment: "MID-SEGMENT",
//           rate: 9800,
//           changePct: 198.4,
//           duration: "5Y",
//           yield: 4,
//           spark: [5, 6, 7, 8, 10, 9, 12, 14],
//         },
//         {
//           id: 4,
//           name: "Manikonda",
//           area: "Hyderabad South",
//           segment: "MID-SEGMENT",
//           rate: 11500,
//           changePct: 175.7,
//           duration: "5Y",
//           yield: 3,
//           spark: [6, 8, 7, 9, 12, 10, 13, 15],
//         },
//       ]
//     }
//   };

//   const currentCityData = cityData[city] || cityData.pune;
//   const cityZones = currentCityData.zones;
//   const currentSampleData = currentCityData.sampleData;

//   // Enhanced Navigation Handler
//   const handleNavigation = (element, href, linkText) => {
//     // Define related components that should stay on current page
//     const relatedComponents = [
//       'property', 'rates', 'pricing', 'cost', 'price', 'locality', 'area', 'zone',
//       'insights', 'overview', 'understand', 'localities', 'rent', 'buy', 'investment'
//     ];
    
//     // Define components that should open as popups
//     const popupComponents = [
//       'calculator', 'emi', 'loan', 'mortgage', 'legal', 'advice', 'services',
//       'tools', 'assistance', 'consultation', 'document', 'registration'
//     ];
    
//     const lowerCaseText = linkText.toLowerCase();
//     const lowerCaseHref = href.toLowerCase();
    
//     // Check if it's a related component
//     const isRelated = relatedComponents.some(comp => 
//       lowerCaseText.includes(comp) || lowerCaseHref.includes(comp)
//     );
    
//     // Check if it should be a popup
//     const isPopup = popupComponents.some(comp => 
//       lowerCaseText.includes(comp) || lowerCaseHref.includes(comp)
//     );
    
//     if (isRelated && !isPopup) {
//       // Show notification that we're staying on current page
//       const notification = document.createElement('div');
//       notification.innerHTML = `
//         <div class="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform transition-all duration-300">
//           🏠 Already on Property Rates page
//         </div>
//       `;
//       document.body.appendChild(notification);
      
//       setTimeout(() => {
//         if (notification.parentNode) {
//           notification.parentNode.removeChild(notification);
//         }
//       }, 2000);
      
//       return true; // Prevent default navigation
//     }
    
//     if (isPopup) {
//       // Open popup with relevant content
//       let popupInfo = {
//         title: linkText,
//         content: `You're about to access ${linkText}.\n\nThis service provides specialized tools and assistance for your real estate needs. Click the button below to open the service in a new tab.`,
//         href: href,
//         actionText: `Open ${linkText}`
//       };
      
//       // Customize content based on service type
//       if (lowerCaseText.includes('calculator') || lowerCaseText.includes('emi')) {
//         popupInfo.content = `EMI Calculator helps you calculate your monthly payments.\n\nGet accurate loan calculations with interest rates, tenure options, and payment breakdowns. Perfect for planning your property investment.`;
//       } else if (lowerCaseText.includes('legal') || lowerCaseText.includes('advice')) {
//         popupInfo.content = `Legal Advisory Services for Property Transactions.\n\nGet expert legal guidance for property documentation, registration, and compliance. Our legal experts ensure smooth property transactions.`;
//       } else if (lowerCaseText.includes('loan') || lowerCaseText.includes('mortgage')) {
//         popupInfo.content = `Home Loan Services and Assistance.\n\nExplore the best home loan options with competitive interest rates, quick approvals, and minimal documentation. Get pre-approved today!`;
//       }
      
//       setPopupContent(popupInfo);
//       setIsPopupOpen(true);
//       return true; // Prevent default navigation
//     }
    
//     return false; // Allow normal navigation
//   };

//   // Enhanced Navigation Effect
//   useEffect(() => {
//     const handleNavbarClicks = () => {
//       // Handle sidebar and navbar city links
//       const cityLinks = document.querySelectorAll('a[href*="/insights/city/"]');
//       cityLinks.forEach(link => {
//         if (link.hasAttribute('data-insights-handled')) return;
//         link.setAttribute('data-insights-handled', 'true');
        
//         link.addEventListener('click', (e) => {
//           const linkText = link.textContent.trim();
//           const href = link.getAttribute('href') || '';
          
//           const shouldPreventDefault = handleNavigation(link, href, linkText);
          
//           if (shouldPreventDefault) {
//             e.preventDefault();
//             e.stopPropagation();
            
//             // Close mobile menu if open
//             const menuToggle = document.querySelector('[data-menu-toggle]');
//             if (menuToggle && menuToggle.getAttribute('aria-expanded') === 'true') {
//               menuToggle.click();
//             }
//           }
          
//           return !shouldPreventDefault;
//         });
//       });
      
//       // Handle all other navigation links
//       const allLinks = document.querySelectorAll('a:not([data-insights-handled])');
//       allLinks.forEach(link => {
//         if (link.hasAttribute('data-insights-handled')) return;
//         link.setAttribute('data-insights-handled', 'true');
        
//         link.addEventListener('click', (e) => {
//           const linkText = link.textContent.trim();
//           const href = link.getAttribute('href') || '';
          
//           // Skip external links and empty hrefs
//           if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || !href) {
//             return; // Allow normal navigation
//           }
          
//           // Use the navigation handler
//           const shouldPreventDefault = handleNavigation(link, href, linkText);
          
//           if (shouldPreventDefault) {
//             e.preventDefault();
//             e.stopPropagation();
            
//             // Close mobile menu if open
//             const menuToggle = document.querySelector('[data-menu-toggle]');
//             if (menuToggle && menuToggle.getAttribute('aria-expanded') === 'true') {
//               menuToggle.click();
//             }
//           }
//         });
//       });
//     };
    
//     // Initial setup
//     handleNavbarClicks();
    
//     // Re-run when DOM changes (for dynamic navbar)
//     const observer = new MutationObserver(handleNavbarClicks);
//     observer.observe(document.body, { childList: true, subtree: true });
    
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800">
//       {/* Popup Modal */}
//       {isPopupOpen && popupContent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
//             <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
//               <h2 className="text-xl font-semibold text-gray-900">{popupContent.title}</h2>
//               <button
//                 onClick={() => {
//                   setIsPopupOpen(false);
//                   setPopupContent(null);
//                 }}
//                 className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
//               >
//                 ×
//               </button>
//             </div>
//             <div className="p-6">
//               <div className="text-gray-700 whitespace-pre-line">
//                 {popupContent.content}
//               </div>
//               {popupContent.actionText && (
//                 <div className="mt-6 pt-4 border-t">
//                   <button
//                     onClick={() => {
//                       setIsPopupOpen(false);
//                       setPopupContent(null);
//                       window.open(popupContent.href, '_blank');
//                     }}
//                     className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
//                   >
//                     {popupContent.actionText}
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* HERO */}
//       <header className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-visible">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">
//           <div className="flex items-center gap-8">
//             <div className="flex-none hidden md:flex items-center justify-center w-64">
//               <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="220" height="140" rx="12" fill="#1e293b" />
//                 <g transform="translate(18,20)">
//                   <rect x="0" y="30" width="26" height="60" rx="4" fill="#fbbf24" />
//                   <rect x="36" y="18" width="26" height="72" rx="4" fill="#f59e0b" />
//                   <rect x="72" y="6" width="26" height="84" rx="4" fill="#d97706" />
//                   <circle cx="150" cy="60" r="22" fill="#fb923c" />
//                   <path d="M120 70 L150 30 L180 70" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//                 </g>
//               </svg>
//             </div>

//             <div className="flex-1">
//               <div className="flex items-center gap-3 text-sm mb-2">
//                 <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 2C8 2 4.7 4.6 3.6 8.4c-1.2 4.1.2 8.6 3.6 11.1L12 22l4.8-2.5c3.4-2.5 4.8-7 3.6-11.1C19.3 4.6 16 2 12 2z" fill="white" opacity="0.12" />
//                   <circle cx="12" cy="9" r="2" fill="white" />
//                 </svg>
//                 <span className="opacity-90">{currentCityData.name}</span>
//               </div>
//               <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
//                 Property Price <br /> Movement Over Time
//               </h1>
//               <p className="mt-4 text-lg text-blue-100">Ghar lena ho ya bechna, 99acres se hi poochna!</p>
//             </div>
//           </div>
//         </div>

//         <div className="absolute left-0 right-0 -bottom-8">
//           <div className="max-w-4xl mx-auto px-6">
//             <div className="bg-white shadow-2xl rounded-2xl p-4 flex items-center gap-3 border border-white/20">
//               <div className="flex items-center gap-2 flex-1">
//                 <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-60">
//                   <path d="M21 21l-4.35-4.35" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                   <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                 </svg>
//                 <input
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   className="w-full outline-none text-slate-700 text-sm"
//                   placeholder="Enter a city, locality or society"
//                 />
//               </div>
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//                 Search Price Trends
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* main content */}
//       <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           {/* left filters - Fixed */}
//           <aside className="lg:col-span-3">
//             <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 sticky top-20 shadow-xl border border-white/50 backdrop-blur-sm">
//               <h3 className="font-bold mb-4 text-slate-800 text-lg">Select Zone</h3>
//               <div className="space-y-3 text-sm">
//                 {cityZones.map((z) => (
//                   <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 cursor-pointer" key={z}>
//                     <input
//                       type="radio"
//                       name="zone"
//                       checked={zone === z}
//                       onChange={() => setZone(z)}
//                       className="accent-blue-600"
//                     />
//                     <span className={zone === z ? "font-semibold text-blue-700" : "text-slate-600"}>{z}</span>
//                   </label>
//                 ))}
//               </div>

//               <div className="mt-8">
//                 <h4 className="font-bold mb-4 text-slate-800">Property Type</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {['Apartment','Plots/Land','Builder Floor'].map((t)=> (
//                     <button
//                       key={t}
//                       onClick={() => setPropertyType(t)}
//                       className={`text-sm px-4 py-2 rounded-full transition-all duration-200 ${
//                         propertyType === t 
//                           ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
//                           : 'bg-white hover:bg-blue-50 text-slate-700 border border-slate-200 hover:border-blue-300'
//                       }`}>
//                       {t}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <h4 className="font-bold mb-4 text-slate-800">Duration</h4>
//                 <div className="flex gap-2 flex-wrap">
//                   {['1 year','3 years','5 years','Max'].map((d) => (
//                     <button
//                       key={d}
//                       onClick={() => setDuration(d)}
//                       className={`text-sm px-4 py-2 rounded-full transition-all duration-200 ${
//                         duration === d 
//                           ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg' 
//                           : 'bg-white hover:bg-green-50 text-slate-700 border border-slate-200 hover:border-green-300'
//                       }`}>
//                       {d}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* right content */}
//           <section className="lg:col-span-9">
//             <div className="flex items-center justify-between mb-8">
//               <div>
//                 <h2 className="font-bold text-2xl text-slate-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Property Rates in {currentCityData.name}
//                 </h2>
//                 <p className="text-slate-500 mt-1">50 of 169 Localities in {currentCityData.name}</p>
//               </div>
//               <div className="flex items-center gap-2 text-sm text-slate-600 bg-white px-4 py-2 rounded-full shadow-md">
//                 <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-60">
//                   <path d="M3 6h18" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
//                   <path d="M7 12h10" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
//                   <path d="M10 18h4" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
//                 </svg>
//                 <span>Recommended ▾</span>
//               </div>
//             </div>

//             {/* Main Property Cards */}
//             <div className="space-y-3">
//               {currentSampleData.map((p, index) => (
//                 <article key={p.id} className={`${
//                   'bg-gray-200 hover:bg-gray-300'
//                 } rounded-lg shadow-md p-3 hover:shadow-lg transition-all duration-300 cursor-pointer`}>
//                   <div className="flex items-center gap-6">
//                     <div className="flex-none">
//                       <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-slate-100 flex items-center justify-center shadow-lg">
//                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#3b82f6"/>
//                           <circle cx="12" cy="9" r="2.5" fill="white"/>
//                         </svg>
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-start justify-between gap-4">
//                         <div>
//                           <h3 className="font-bold text-xl text-slate-800">{p.name}</h3>
//                           <p className="text-slate-600 mt-1">{p.area}</p>
//                           <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-white/80 text-slate-700 font-medium shadow-sm">
//                             {p.segment}
//                           </span>
//                         </div>

//                         <div className="flex flex-col items-end">
//                           <div className="text-xs text-slate-500 mb-1">Rate on 99acres</div>
//                           <div className="font-bold text-2xl text-slate-800">₹{p.rate.toLocaleString()}/sq.ft</div>
//                         </div>
//                       </div>

//                       <div className="mt-6 flex items-center justify-between">
//                         <div className="flex items-center gap-6">
//                           <div className="flex items-center gap-2">
//                             <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-70">
//                               <path d="M6 12l4 4 8-8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                             </svg>
//                             <div className="text-green-600 font-bold">▲ {p.changePct}% in {p.duration}</div>
//                           </div>

//                           <div className="hidden sm:block">
//                             <Sparkline data={p.spark} width={140} height={40} />
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-6">
//                           <div className="text-slate-500 font-medium">Rental Yield</div>
//                           <div className="font-bold text-lg">{p.yield}%</div>
//                           <button 
//                             onClick={() => toggleCardExpansion(p.id)}
//                             className="p-3 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200"
//                           >
//                             <svg 
//                               width="18" 
//                               height="18" 
//                               viewBox="0 0 24 24"
//                               className={`transition-transform duration-200 ${expandedCards.has(p.id) ? 'rotate-180' : ''}`}
//                             >
//                               <path d="M6 9l6 6 6-6" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {expandedCards.has(p.id) && (
//                     <div className="mt-8 pt-6 border-t border-white/50">
//                       <DetailedGraph 
//                         data={p.spark} 
//                         name={p.name} 
//                         currentRate={p.rate} 
//                       />
//                     </div>
//                   )}
//                 </article>
//               ))}
//             </div>

//             {/* Additional Cards Section 1 */}
//             <div className="mt-8 space-y-3">
//               <h3 className="text-lg font-bold text-slate-800 mb-3">More Properties in {currentCityData.name}</h3>
//               {[
//                 {
//                   id: 101,
//                   name: "Chovisawadi",
//                   area: "Pune North",
//                   segment: "AFFORDABLE",
//                   rate: 5500,
//                   changePct: 50.7,
//                   duration: "5Y",
//                   yield: "NA",
//                   spark: [4, 5, 4, 6, 7, 6, 8, 9],
//                 },
//                 {
//                   id: 102,
//                   name: "Shewalewadi",
//                   area: "Pune East",
//                   segment: "MID-SEGMENT",
//                   rate: 7450,
//                   changePct: 49,
//                   duration: "5Y",
//                   yield: 4,
//                   spark: [5, 6, 5, 7, 8, 7, 9, 10],
//                 },
//                 {
//                   id: 103,
//                   name: "Pune Mumbai Highway",
//                   area: "Pune North",
//                   segment: "PREMIUM",
//                   rate: 10500,
//                   changePct: 48.9,
//                   duration: "5Y",
//                   yield: 6,
//                   spark: [7, 8, 7, 9, 10, 9, 11, 12],
//                 },
//               ].map((p, index) => (
//                 <article key={p.id} className={`${
//                   'bg-gray-200 hover:bg-gray-300'
//                 } rounded-lg shadow-md p-3 hover:shadow-lg transition-all duration-300 cursor-pointer`}>
//                   <div className="flex items-center gap-3">
//                     <div className="flex-none">
//                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-slate-100 flex items-center justify-center shadow-md">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#059669"/>
//                           <circle cx="12" cy="9" r="2.5" fill="white"/>
//                         </svg>
//                       </div>
//                     </div>

//                     <div className="flex-1">
//                       <div className="flex items-start justify-between gap-4">
//                         <div>
//                           <h3 className="font-bold text-xl text-slate-800">{p.name}</h3>
//                           <p className="text-slate-600 mt-1">{p.area}</p>
//                           <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-white/80 text-slate-700 font-medium shadow-sm">
//                             {p.segment}
//                           </span>
//                         </div>

//                         <div className="flex flex-col items-end">
//                           <div className="text-xs text-slate-500 mb-1">Rate on 99acres</div>
//                           <div className="font-bold text-2xl text-slate-800">₹{p.rate.toLocaleString()}/sq.ft</div>
//                         </div>
//                       </div>

//                       <div className="mt-6 flex items-center justify-between">
//                         <div className="flex items-center gap-6">
//                           <div className="flex items-center gap-2">
//                             <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-70">
//                               <path d="M6 12l4 4 8-8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                             </svg>
//                             <div className="text-green-600 font-bold">▲ {p.changePct}% in {p.duration}</div>
//                           </div>

//                           <div className="hidden sm:block">
//                             <Sparkline data={p.spark} width={140} height={40} />
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-6">
//                           <div className="text-slate-500 font-medium">Rental Yield</div>
//                           <div className="font-bold text-lg">{p.yield === "NA" ? "NA" : `${p.yield}%`}</div>
//                           <button 
//                             onClick={() => toggleCardExpansion(p.id)}
//                             className="p-3 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200"
//                           >
//                             <svg 
//                               width="18" 
//                               height="18" 
//                               viewBox="0 0 24 24"
//                               className={`transition-transform duration-200 ${expandedCards.has(p.id) ? 'rotate-180' : ''}`}
//                             >
//                               <path d="M6 9l6 6 6-6" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {expandedCards.has(p.id) && (
//                     <div className="mt-8 pt-6 border-t border-white/50">
//                       <DetailedGraph 
//                         data={p.spark} 
//                         name={p.name} 
//                         currentRate={p.rate} 
//                       />
//                     </div>
//                   )}
//                 </article>
//               ))}
//             </div>

//             {/* Rating Section */}
//             <div className="mt-12 p-8 bg-gray-200 hover:bg-gray-300 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
//               <div className="flex items-center gap-6">
//                 <div className="flex-none">
//                   <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-full flex items-center justify-center shadow-lg">
//                     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </div>
//                 </div>
                
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-bold text-slate-800 mb-4">How would you rate your locality / society?</h3>
//                   <div className="flex items-center gap-3">
//                     {[1, 2, 3, 4, 5].map((star) => (
//                       <button key={star} className="p-2 hover:scale-125 transition-transform duration-200">
//                         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path 
//                             d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
//                             stroke="#94a3b8" 
//                             strokeWidth="1.5" 
//                             fill="none"
//                             className="hover:fill-yellow-400 hover:stroke-yellow-400 transition-colors duration-200"
//                           />
//                         </svg>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Show More Button */}
           

//             {/* Additional Cards Section 2 */}
//             <div className="mt-6 space-y-3">
//               {[
//                 {
//                   id: 201,
//                   name: "Kothrud",
//                   area: "Pune West",
//                   segment: "PREMIUM",
//                   rate: 12500,
//                   changePct: 45.2,
//                   duration: "5Y",
//                   yield: 3,
//                   spark: [8, 9, 8, 10, 12, 11, 13, 15],
//                 },
//                 {
//                   id: 202,
//                   name: "Hadapsar",
//                   area: "Pune East",
//                   segment: "MID-SEGMENT",
//                   rate: 9200,
//                   changePct: 42.8,
//                   duration: "5Y",
//                   yield: 4,
//                   spark: [6, 7, 6, 8, 9, 8, 10, 11],
//                 },
//                 {
//                   id: 203,
//                   name: "Warje",
//                   area: "Pune West",
//                   segment: "AFFORDABLE",
//                   rate: 8500,
//                   changePct: 38.5,
//                   duration: "5Y",
//                   yield: 5,
//                   spark: [5, 6, 5, 7, 8, 7, 9, 10],
//                 },
//               ].map((p, index) => (
//                 <article key={p.id} className={`${
//                   'bg-gray-200 hover:bg-gray-300'
//                 } rounded-lg shadow-md p-3 hover:shadow-lg transition-all duration-300 cursor-pointer`}>
//                   <div className="flex items-center gap-3">
//                     <div className="flex-none">
//                       <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-slate-100 flex items-center justify-center shadow-md">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#7c3aed"/>
//                           <circle cx="12" cy="9" r="2.5" fill="white"/>
//                         </svg>
//                       </div>
//                     </div>

//                     <div className="flex-1">
//                       <div className="flex items-start justify-between gap-4">
//                         <div>
//                           <h3 className="font-bold text-xl text-slate-800">{p.name}</h3>
//                           <p className="text-slate-600 mt-1">{p.area}</p>
//                           <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-white/80 text-slate-700 font-medium shadow-sm">
//                             {p.segment}
//                           </span>
//                         </div>

//                         <div className="flex flex-col items-end">
//                           <div className="text-xs text-slate-500 mb-1">Rate on 99acres</div>
//                           <div className="font-bold text-2xl text-slate-800">₹{p.rate.toLocaleString()}/sq.ft</div>
//                         </div>
//                       </div>

//                       <div className="mt-6 flex items-center justify-between">
//                         <div className="flex items-center gap-6">
//                           <div className="flex items-center gap-2">
//                             <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-70">
//                               <path d="M6 12l4 4 8-8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                             </svg>
//                             <div className="text-green-600 font-bold">▲ {p.changePct}% in {p.duration}</div>
//                           </div>

//                           <div className="hidden sm:block">
//                             <Sparkline data={p.spark} width={140} height={40} />
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-6">
//                           <div className="text-slate-500 font-medium">Rental Yield</div>
//                           <div className="font-bold text-lg">{p.yield}%</div>
//                           <button 
//                             onClick={() => toggleCardExpansion(p.id)}
//                             className="p-3 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200"
//                           >
//                             <svg 
//                               width="18" 
//                               height="18" 
//                               viewBox="0 0 24 24"
//                               className={`transition-transform duration-200 ${expandedCards.has(p.id) ? 'rotate-180' : ''}`}
//                             >
//                               <path d="M6 9l6 6 6-6" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {expandedCards.has(p.id) && (
//                     <div className="mt-8 pt-6 border-t border-white/50">
//                       <DetailedGraph 
//                         data={p.spark} 
//                         name={p.name} 
//                         currentRate={p.rate} 
//                       />
//                     </div>
//                   )}
//                 </article>
//               ))}
//             </div>
//           </section>
//         </div>
//  <div className="mt-12 text-center">
//               <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
//                 Show More Properties
//               </button>
//             </div>
//             <Popular_Tools/>
//             <Cities_popular/>
//         {/* About Section */}
//         <section className="mt-4 bg-gray-200 py-4 rounded">
//           <div className="mx-auto px-2">
//             <h2 className="text-xl font-bold text-black mb-2">
//               About {currentCityData.name} Property rates
//             </h2>
//             <p className="text-black text-sm">
//               {currentCityData.name} is a popular IT and educational hub, making it a preferred choice for students and working population. 
//               The city has ample residential apartments at competitive prices compared to Mumbai. Globally recognised IT giants and startups have their offices here, creating excellent job opportunities and driving real estate demand.
//             </p>
//           </div>
//         </section>

//         {/* FAQs Section */}
//         <section className="mt-4 bg-gray-200 py-4 rounded">
//           <div className="mx-auto px-2">
//             <h2 className="text-xl font-bold text-black mb-3">
//               FAQs about {currentCityData.name} Property Prices
//             </h2>
            
//             <div className="space-y-2">
//               <div>
//                 <button 
//                   onClick={() => toggleFAQ(1)}
//                   className="flex justify-between items-center w-full text-left p-2 bg-white rounded text-black hover:bg-gray-50"
//                 >
//                   <span className="font-medium text-sm">Q. Which localities saw highest price growth in {currentCityData.name} in last 3 years?</span>
//                   <span className="text-lg">{expandedFAQs.has(1) ? '−' : '+'}</span>
//                 </button>
//                 {expandedFAQs.has(1) && (
//                   <div className="p-2 bg-white border-t text-black text-sm">
//                     Bhor (180.0%), Uruli Kanchan (78.9%), Kirtane Baugh (68.2%) are the localities with the highest price appreciation for property in last 3 years. These areas have seen significant infrastructure development and improved connectivity, making them attractive investment destinations.
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <button 
//                   onClick={() => toggleFAQ(2)}
//                   className="flex justify-between items-center w-full text-left p-2 bg-white rounded text-black hover:bg-gray-50"
//                 >
//                   <span className="font-medium text-sm">Q. Which are the most popular affordable societies to buy a property in {currentCityData.name}</span>
//                   <span className="text-lg">{expandedFAQs.has(2) ? '−' : '+'}</span>
//                 </button>
//                 {expandedFAQs.has(2) && (
//                   <div className="p-2 bg-white border-t text-black text-sm">
//                     Popular affordable societies include Amanora Park Town, Kharadi, Wagholi, and Hinjewadi Phase 1. These societies offer good amenities, connectivity, and value for money with prices ranging from 4,000 to 8,000 per sq ft.
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <button 
//                   onClick={() => toggleFAQ(3)}
//                   className="flex justify-between items-center w-full text-left p-2 bg-white rounded text-black hover:bg-gray-50"
//                 >
//                   <span className="font-medium text-sm">Q. Which are the affordable areas in {currentCityData.name}</span>
//                   <span className="text-lg">{expandedFAQs.has(3) ? '−' : '+'}</span>
//                 </button>
//                 {expandedFAQs.has(3) && (
//                   <div className="p-2 bg-white border-t text-black text-sm">
//                     Affordable areas include Wagholi, Kharadi, Hadapsar, Kondhwa, and areas beyond the ring road. These locations offer properties starting from 3,500 per sq ft and have good potential for future appreciation.
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <button 
//                   onClick={() => toggleFAQ(4)}
//                   className="flex justify-between items-center w-full text-left p-2 bg-white rounded text-black hover:bg-gray-50"
//                 >
//                   <span className="font-medium text-sm">Q. Where in {currentCityData.name} can investors earn highest rental income?</span>
//                   <span className="text-lg">{expandedFAQs.has(4) ? '−' : '+'}</span>
//                 </button>
//                 {expandedFAQs.has(4) && (
//                   <div className="p-2 bg-white border-t text-black text-sm">
//                     IT hubs like Hinjewadi, Kharadi, and areas near major companies offer the highest rental yields of 3-4%. These locations have high demand from IT professionals and offer steady rental income with low vacancy rates.
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <button 
//                   onClick={() => toggleFAQ(5)}
//                   className="flex justify-between items-center w-full text-left p-2 bg-white rounded text-black hover:bg-gray-50"
//                 >
//                   <span className="font-medium text-sm">Q. What are the factors that influence property rates in {currentCityData.name}?</span>
//                   <span className="text-lg">{expandedFAQs.has(5) ? '−' : '+'}</span>
//                 </button>
//                 {expandedFAQs.has(5) && (
//                   <div className="p-2 bg-white border-t text-black text-sm">
//                     Key factors include proximity to IT parks, metro connectivity, infrastructure development, educational institutions, healthcare facilities, and government policies. Areas with better connectivity and amenities command higher prices.
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }









import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PopularToolsIntegration from "./Popular_Tools";
import CitiesPopularIntegration from "./Cities_popular";

// Sparkline component
function Sparkline({ data = [], width = 80, height = 24 }) {
  if (!data.length) return null;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const len = data.length;
  const points = data.map((d, i) => {
    const x = (i / (len - 1)) * width;
    const y = height - ((d - min) / (max - min || 1)) * height;
    return `${x},${y}`;
  }).join(" ");
  const dAttr = data.map((d, i) => {
    const x = (i / (len - 1)) * width;
    const y = height - ((d - min) / (max - min || 1)) * height;
    return `${i === 0 ? "M" : "L"}${x} ${y}`;
  }).join(" ");
  const area = `${dAttr} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path d={area} fill="#e6fcec" />
      <polyline points={points} fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// DetailedGraph component
function DetailedGraph({ data = [], name = "", currentRate = 0 }) {
  if (!data.length) return null;
  const years = ['2021', '2022', '2023', '2024', '2025'];
  const max = Math.max(...data);
  const min = Math.min(...data);
  const width = 600;
  const height = 200;
  const padding = 40;
  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = padding + (1 - (d - min) / (max - min || 1)) * (height - padding * 2);
    return { x, y, value: d };
  });
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-slate-800">{name}</h4>
        <div className="text-sm text-slate-500">
          Current Rate: <span className="font-semibold text-slate-800">₹{currentRate.toLocaleString()}/sq.ft</span>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4">
        <svg width="100%" height="220" viewBox={`0 0 ${width} ${height + 20}`} className="overflow-visible">
          <defs>
            <linearGradient id={`gradient-${name}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => {
            const y = padding + (i / 4) * (height - padding * 2);
            return (
              <line key={i} x1={padding} y1={y} x2={width - padding} y2={y} stroke="#e5e7eb" strokeWidth="1" />
            );
          })}
          <path d={areaD} fill={`url(#gradient-${name})`} />
          <path d={pathD} stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {points.map((point, i) => (
            <circle key={i} cx={point.x} cy={point.y} r="4" fill="#10b981" stroke="white" strokeWidth="2" />
          ))}
          {years.map((year, i) => {
            const x = padding + (i / (years.length - 1)) * (width - padding * 2);
            return (
              <text key={year} x={x} y={height + 15} textAnchor="middle" className="text-xs fill-slate-500">{year}</text>
            );
          })}
          {[...Array(5)].map((_, i) => {
            const y = padding + (i / 4) * (height - padding * 2);
            const value = max - (i / 4) * (max - min);
            return (
              <text key={i} x={padding - 10} y={y + 4} textAnchor="end" className="text-xs fill-slate-500">
                ₹{Math.round(value / 1000)}K
              </text>
            );
          })}
        </svg>
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="text-slate-500">
            Price trend for <span className="font-medium text-slate-700">{name}</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-blue-600 hover:underline">See Detailed Price Insights</button>
            <div className="text-slate-500">Last updated: Sep 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const cityData = {
  bangalore: {
    name: "Bangalore",
    zones: ["All Zones", "Bangalore South", "Bangalore East", "Bangalore North", "Bangalore West"],
    sampleData: [
      { id: 1, name: "Dommasandra", area: "Bangalore East", segment: "MID-SEGMENT", rate: 11500, changePct: 194.9, duration: "5Y", yield: 2, spark: [10, 12, 11, 14, 18, 16, 22, 26] },
      { id: 2, name: "Tumkur Road", area: "Bangalore West", segment: "PREMIUM", rate: 17500, changePct: 182.3, duration: "5Y", yield: 1, spark: [8, 9, 11, 13, 18, 21, 20, 22] },
      { id: 3, name: "Seegahalli", area: "Bangalore East", segment: "MID-SEGMENT", rate: 9300, changePct: 158.3, duration: "5Y", yield: 4, spark: [6, 7, 9, 10, 12, 13, 16, 18] },
      { id: 4, name: "Hoodi", area: "Bangalore East", segment: "PREMIUM", rate: 13350, changePct: 154.3, duration: "5Y", yield: 3, spark: [9, 10, 8, 11, 14, 13, 15, 17] },
    ]
  },
  pune: {
    name: "Pune",
    zones: ["All Zones", "Pune East", "Pune West", "Pune North", "Pune South"],
    sampleData: [
      { id: 1, name: "Hinjewadi", area: "Pune West", segment: "PREMIUM", rate: 14500, changePct: 175.2, duration: "5Y", yield: 3, spark: [9, 11, 10, 13, 16, 14, 17, 19] },
      { id: 2, name: "Kharadi", area: "Pune East", segment: "MID-SEGMENT", rate: 11200, changePct: 155.8, duration: "5Y", yield: 4, spark: [7, 9, 8, 10, 12, 11, 13, 15] },
      { id: 3, name: "Baner", area: "Pune West", segment: "PREMIUM", rate: 16800, changePct: 168.4, duration: "5Y", yield: 3, spark: [10, 12, 11, 14, 17, 15, 18, 20] },
      { id: 4, name: "Aundh", area: "Pune North", segment: "LUXURY", rate: 19500, changePct: 145.7, duration: "5Y", yield: 2, spark: [12, 14, 13, 16, 19, 17, 20, 22] },
    ]
  },
  mumbai: {
    name: "Mumbai",
    zones: ["All Zones", "Mumbai South", "Mumbai Central", "Mumbai North", "Mumbai West"],
    sampleData: [
      { id: 1, name: "Andheri West", area: "Mumbai West", segment: "PREMIUM", rate: 28500, changePct: 145.2, duration: "5Y", yield: 2, spark: [18, 20, 19, 22, 25, 23, 26, 28] },
      { id: 2, name: "Bandra East", area: "Mumbai West", segment: "LUXURY", rate: 35200, changePct: 125.8, duration: "5Y", yield: 2, spark: [22, 24, 23, 26, 29, 27, 30, 32] },
      { id: 3, name: "Powai", area: "Mumbai Central", segment: "PREMIUM", rate: 24800, changePct: 158.4, duration: "5Y", yield: 3, spark: [15, 17, 16, 19, 22, 20, 23, 25] },
      { id: 4, name: "Thane West", area: "Mumbai North", segment: "MID-SEGMENT", rate: 18500, changePct: 175.7, duration: "5Y", yield: 4, spark: [10, 12, 11, 14, 17, 15, 18, 20] },
    ]
  },
  delhi: {
    name: "Delhi",
    zones: ["All Zones", "South Delhi", "North Delhi", "East Delhi", "West Delhi"],
    sampleData: [
      { id: 1, name: "Dwarka", area: "West Delhi", segment: "MID-SEGMENT", rate: 16500, changePct: 165.2, duration: "5Y", yield: 3, spark: [9, 11, 10, 13, 16, 14, 17, 19] },
      { id: 2, name: "Noida Extension", area: "East Delhi", segment: "AFFORDABLE", rate: 8200, changePct: 195.8, duration: "5Y", yield: 5, spark: [4, 5, 6, 7, 9, 8, 10, 12] },
      { id: 3, name: "Gurgaon Sector 104", area: "South Delhi", segment: "PREMIUM", rate: 22800, changePct: 148.4, duration: "5Y", yield: 2, spark: [13, 15, 14, 17, 20, 18, 21, 23] },
      { id: 4, name: "Rohini", area: "North Delhi", segment: "MID-SEGMENT", rate: 12500, changePct: 155.7, duration: "5Y", yield: 4, spark: [7, 9, 8, 10, 13, 11, 14, 16] },
    ]
  },
  hyderabad: {
    name: "Hyderabad",
    zones: ["All Zones", "Hyderabad East", "Hyderabad West", "Hyderabad North", "Hyderabad South"],
    sampleData: [
      { id: 1, name: "Gachibowli", area: "Hyderabad West", segment: "PREMIUM", rate: 13500, changePct: 185.2, duration: "5Y", yield: 3, spark: [7, 9, 8, 11, 14, 12, 15, 17] },
      { id: 2, name: "HITEC City", area: "Hyderabad West", segment: "LUXURY", rate: 18200, changePct: 165.8, duration: "5Y", yield: 2, spark: [10, 12, 11, 14, 17, 15, 18, 20] },
      { id: 3, name: "Kompally", area: "Hyderabad North", segment: "MID-SEGMENT", rate: 9800, changePct: 198.4, duration: "5Y", yield: 4, spark: [5, 6, 7, 8, 10, 9, 12, 14] },
      { id: 4, name: "Manikonda", area: "Hyderabad South", segment: "MID-SEGMENT", rate: 11500, changePct: 175.7, duration: "5Y", yield: 3, spark: [6, 8, 7, 9, 12, 10, 13, 15] },
    ]
  }
};

export default function PropertyRatesIntegration() {
  const { city } = useParams();
  const [query, setQuery] = useState("");
  const [zone, setZone] = useState("All Zones");
  const [propertyType, setPropertyType] = useState("Apartment");
  const [duration, setDuration] = useState("5 years");
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [expandedFAQs, setExpandedFAQs] = useState(new Set());
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const toggleCardExpansion = (cardId) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(cardId)) next.delete(cardId);
      else next.add(cardId);
      return next;
    });
  };

  const toggleFAQ = (faqId) => {
    setExpandedFAQs((prev) => {
      const next = new Set(prev);
      if (next.has(faqId)) next.delete(faqId);
      else next.add(faqId);
      return next;
    });
  };

  const currentCityData = cityData[city] || cityData.pune;
  const cityZones = currentCityData.zones;
  const currentSampleData = currentCityData.sampleData;

  // Enhanced Navigation Handler and Effect omitted for brevity and to avoid DOM manipulation.

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800">
      {/* HERO */}
      <header className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-visible">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-16">
          <div className="flex items-center gap-8">
            <div className="flex-none hidden md:flex items-center justify-center w-64">
              <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="220" height="140" rx="12" fill="#1e293b" />
                <g transform="translate(18,20)">
                  <rect x="0" y="30" width="26" height="60" rx="4" fill="#fbbf24" />
                  <rect x="36" y="18" width="26" height="72" rx="4" fill="#f59e0b" />
                  <rect x="72" y="6" width="26" height="84" rx="4" fill="#d97706" />
                  <circle cx="150" cy="60" r="22" fill="#fb923c" />
                  <path d="M120 70 L150 30 L180 70" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 text-sm mb-2">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 4.7 4.6 3.6 8.4c-1.2 4.1.2 8.6 3.6 11.1L12 22l4.8-2.5c3.4-2.5 4.8-7 3.6-11.1C19.3 4.6 16 2 12 2z" fill="white" opacity="0.12" />
                  <circle cx="12" cy="9" r="2" fill="white" />
                </svg>
                <span className="opacity-90">{currentCityData.name}</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Property Price <br /> Movement Over Time
              </h1>
              <p className="mt-4 text-lg text-blue-100">Ghar lena ho ya bechna, 99acres se hi poochna!</p>
            </div>
          </div>
        </div>
        <div className="absolute left-0 right-0 -bottom-8">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white shadow-2xl rounded-2xl p-4 flex items-center gap-3 border border-white/20">
              <div className="flex items-center gap-2 flex-1">
                <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-60">
                  <path d="M21 21l-4.35-4.35" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full outline-none text-slate-700 text-sm"
                  placeholder="Enter a city, locality or society"
                />
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Search Price Trends
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* main content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 sticky top-20 shadow-xl border border-white/50 backdrop-blur-sm">
              <h3 className="font-bold mb-4 text-slate-800 text-lg">Select Zone</h3>
              <div className="space-y-3 text-sm">
                {cityZones.map((z) => (
                  <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-100 transition-colors duration-200 cursor-pointer" key={z}>
                    <input
                      type="radio"
                      name="zone"
                      checked={zone === z}
                      onChange={() => setZone(z)}
                      className="accent-blue-600"
                    />
                    <span className={zone === z ? "font-semibold text-blue-700" : "text-slate-600"}>{z}</span>
                  </label>
                ))}
              </div>
              <div className="mt-8">
                <h4 className="font-bold mb-4 text-slate-800">Property Type</h4>
                <div className="flex flex-wrap gap-2">
                  {['Apartment','Plots/Land','Builder Floor'].map((t)=> (
                    <button
                      key={t}
                      onClick={() => setPropertyType(t)}
                      className={`text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                        propertyType === t 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                          : 'bg-white hover:bg-blue-50 text-slate-700 border border-slate-200 hover:border-blue-300'
                      }`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold mb-4 text-slate-800">Duration</h4>
                <div className="flex gap-2 flex-wrap">
                  {['1 year','3 years','5 years','Max'].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      className={`text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                        duration === d 
                          ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg' 
                          : 'bg-white hover:bg-green-50 text-slate-700 border border-slate-200 hover:border-green-300'
                      }`}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <section className="lg:col-span-9">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-bold text-2xl text-slate-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Property Rates in {currentCityData.name}
                </h2>
                <p className="text-slate-500 mt-1">50 of 169 Localities in {currentCityData.name}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 bg-white px-4 py-2 rounded-full shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-60">
                  <path d="M3 6h18" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 12h10" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10 18h4" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Recommended ▾</span>
              </div>
            </div>
            {/* Main Property Cards */}
            <div className="space-y-3">
              {currentSampleData.map((p) => (
                <article key={p.id} className="bg-gray-200 hover:bg-gray-300 rounded-lg shadow-md p-3 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className="flex-none">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-slate-100 flex items-center justify-center shadow-lg">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#3b82f6"/><circle cx="12" cy="9" r="2.5" fill="white"/></svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-xl text-slate-800">{p.name}</h3>
                          <p className="text-slate-600 mt-1">{p.area}</p>
                          <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-white/80 text-slate-700 font-medium shadow-sm">
                            {p.segment}
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="text-xs text-slate-500 mb-1">Rate on 99acres</div>
                          <div className="font-bold text-2xl text-slate-800">₹{p.rate.toLocaleString()}/sq.ft</div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" className="opacity-70">
                              <path d="M6 12l4 4 8-8" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                            </svg>
                            <div className="text-green-600 font-bold">▲ {p.changePct}% in {p.duration}</div>
                          </div>
                          <div className="hidden sm:block"><Sparkline data={p.spark} width={140} height={40} /></div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-slate-500 font-medium">Rental Yield</div>
                          <div className="font-bold text-lg">{p.yield}%</div>
                          <button onClick={() => toggleCardExpansion(p.id)} className="p-3 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-200">
                            <svg width="18" height="18" viewBox="0 0 24 24" className={`transition-transform duration-200 ${expandedCards.has(p.id) ? 'rotate-180' : ''}`}>
                              <path d="M6 9l6 6 6-6" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {expandedCards.has(p.id) && (
                    <div className="mt-8 pt-6 border-t border-white/50">
                      <DetailedGraph data={p.spark} name={p.name} currentRate={p.rate} />
                    </div>
                  )}
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Show More Properties
              </button>
            </div>
            <PopularToolsIntegration />
            <CitiesPopularIntegration />
            {/* About Section */}
            <section className="mt-4 bg-gray-200 py-4 rounded">
              <div className="mx-auto px-2">
                <h2 className="text-xl font-bold text-black mb-2">About {currentCityData.name} Property rates</h2>
                <p className="text-black text-sm">
                  {currentCityData.name} is a popular IT and educational hub, making it a preferred choice for students and working population. 
                  The city has ample residential apartments at competitive prices compared to Mumbai. Globally recognised IT giants and startups have their offices here, creating excellent job opportunities and driving real estate demand.
                </p>
              </div>
            </section>
            {/* FAQs Section */}
            <section className="mt-4 bg-gray-200 py-4 rounded">
              <div className="mx-auto px-2">
                <h2 className="text-xl font-bold text-black mb-3">
                  FAQs about {currentCityData.name} Property Prices
                </h2>
                <div className="space-y-2">
                  <div>
                    <button onClick={() => toggleFAQ(1)} className="flex justify-between items-center w-full text-left p-2 bg-white rounded text-black hover:bg-gray-50">
                      <span className="font-medium text-sm">Q. Which localities saw highest price growth in {currentCityData.name} in last 3 years?</span>
                      <span className="text-lg">{expandedFAQs.has(1) ? '−' : '+'}</span>
                    </button>
                    {expandedFAQs.has(1) && (
                      <div className="p-2 bg-white border-t text-black text-sm">
                        Bhor (180.0%), Uruli Kanchan (78.9%), Kirtane Baugh (68.2%) are the localities with the highest price appreciation for property in last 3 years. These areas have seen significant infrastructure development and improved connectivity, making them attractive investment destinations.
                      </div>
                    )}
                  </div>
                  <div>
                    <button onClick={() => toggleFAQ(2)} className="flex justify-between items-center w-full text-left p-2 bg-white rounded text-black hover:bg-gray-50">
                      <span className="font-medium text-sm">Q. Which are the most popular affordable societies to buy a property in {currentCityData.name}</span>
                      <span className="text-lg">{expandedFAQs.has(2) ? '−' : '+'}</span>
                    </button>
                    {expandedFAQs.has(2) && (
                      <div className="p-2 bg-white border-t text-black text-sm">
                        Popular affordable societies include Amanora Park Town, Kharadi, Wagholi, and Hinjewadi Phase 1. These societies offer good amenities, connectivity, and value for money with prices ranging from 4,000 to 8,000 per sq ft.
                      </div>
                    )}
                  </div>
                  <div>
                    <button onClick={() => toggleFAQ(3)} className="flex justify-between items-center w-full text-left p-2 bg-white rounded text-black hover:bg-gray-50">
                      <span className="font-medium text-sm">Q. Which are the affordable areas in {currentCityData.name}</span>
                      <span className="text-lg">{expandedFAQs.has(3) ? '−' : '+'}</span>
                    </button>
                    {expandedFAQs.has(3) && (
                      <div className="p-2 bg-white border-t text-black text-sm">
                        Affordable areas include Wagholi, Kharadi, Hadapsar, Kondhwa, and areas beyond the ring road. These locations offer properties starting from 3,500 per sq ft and have good potential for future appreciation.
                      </div>
                    )}
                  </div>
                  <div>
                    <button onClick={() => toggleFAQ(4)} className="flex justify-between items-center w-full text-left p-2 bg-white rounded text-black hover:bg-gray-50">
                      <span className="font-medium text-sm">Q. Where in {currentCityData.name} can investors earn highest rental income?</span>
                      <span className="text-lg">{expandedFAQs.has(4) ? '−' : '+'}</span>
                    </button>
                    {expandedFAQs.has(4) && (
                      <div className="p-2 bg-white border-t text-black text-sm">
                        IT hubs like Hinjewadi, Kharadi, and areas near major companies offer the highest rental yields of 3-4%. These locations have high demand from IT professionals and offer steady rental income with low vacancy rates.
                      </div>
                    )}
                  </div>
                  <div>
                    <button onClick={() => toggleFAQ(5)} className="flex justify-between items-center w-full text-left p-2 bg-white rounded text-black hover:bg-gray-50">
                      <span className="font-medium text-sm">Q. What are the factors that influence property rates in {currentCityData.name}?</span>
                      <span className="text-lg">{expandedFAQs.has(5) ? '−' : '+'}</span>
                    </button>
                    {expandedFAQs.has(5) && (
                      <div className="p-2 bg-white border-t text-black text-sm">
                        Key factors include proximity to IT parks, metro connectivity, infrastructure development, educational institutions, healthcare facilities, and government policies. Areas with better connectivity and amenities command higher prices.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}