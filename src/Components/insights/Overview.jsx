// import React, { useMemo, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   MapPin,
//   Share2,
//   Building,
//   Home,
//   Layers,
//   Grid,
//   ArrowUpRight,
//   Calendar,
//   ThumbsUp,
//   AlertTriangle,
//   Map,
//   MoreHorizontal,
//   Info,
//   BarChart2,
//   ArrowUp,
//   ArrowDown,
//   ChevronDown,
// } from "lucide-react";


// // Simple util to generate area path from numeric values
// const generateAreaPath = (values, width = 700, height = 220, padding = 30) => {
//   if (!values || !values.length) return "";
//   const min = Math.min(...values);
//   const max = Math.max(...values);
//   const len = values.length;
//   const stepX = (width - padding * 2) / (len - 1);

//   const points = values.map((v, i) => {
//     const x = padding + i * stepX;
//     // invert y because SVG y=0 is top
//     const y =
//       padding + (1 - (v - min) / (max - min || 1)) * (height - padding * 2);
//     return { x, y };
//   });

//   // Create simple smooth-ish path using line commands
//   const dTop = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
//   const last = points[points.length - 1];
//   const first = points[0];
//   const dClose = `${dTop} L ${last.x} ${height - padding} L ${first.x} ${height - padding} Z`;
//   return dClose;
// };
// // Simple reusable small circle-stat component
// const StatCircle = ({ IconComponent, count, title }) => (
//   <div className="flex flex-col items-center gap-2">
//     <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-sm">
//       <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
//     </div>
//     <div className="text-sm sm:text-base font-semibold text-slate-800">{count}</div>
//     <div className="text-xs text-slate-500 text-center max-w-[90px]">{title}</div>
//   </div>
// );

// // Small stat box used on the right
// const SmallStat = ({ number, label, hint }) => (
//   <div className="rounded-lg p-4 bg-white border border-gray-100 shadow-sm">
//     <div className="flex items-start justify-between gap-3">
//       <div>
//         <div className="text-2xl font-bold text-slate-800">{number}</div>
//         <div className="text-xs text-slate-500">{label}</div>
//       </div>
//       <div className="text-xs text-amber-500 font-semibold self-start">{hint}</div>
//     </div>
//   </div>
// );

// // TransactionPrices.jsx
// // A single-file React + Tailwind component that reproduces the
// // "Transaction Prices" + "Upcoming Infrastructure" section from your screenshot.

// const LOCALITIES = [
//   {
//     id: 1,
//     name: "Nacharam",
//     avatar: "https://via.placeholder.com/48?text=N",
//     rateOn99: "₹6,200/ sq.ft",
//     txCount: 225,
//     txRate: "₹5,982/ sq.ft",
//   },
//   {
//     id: 2,
//     name: "Medchal",
//     avatar: "https://via.placeholder.com/48?text=M",
//     rateOn99: "₹3,100/ sq.ft",
//     txCount: 166,
//     txRate: "₹2,500/ sq.ft",
//   },
//   {
//     id: 3,
//     name: "Kapra",
//     avatar: "https://via.placeholder.com/48?text=K",
//     rateOn99: "₹5,900/ sq.ft",
//     txCount: 84,
//     txRate: "₹4,744/ sq.ft",
//   },
//   {
//     id: 4,
//     name: "Yapral",
//     avatar: "https://via.placeholder.com/48?text=Y",
//     rateOn99: "₹6,000/ sq.ft",
//     txCount: 79,
//     txRate: "₹6,225/ sq.ft",
//   },
//   {
//     id: 5,
//     name: "Vijayapuri Colony",
//     avatar: "https://via.placeholder.com/48?text=V",
//     rateOn99: "NA",
//     txCount: 68,
//     txRate: "₹5,000/ sq.ft",
//   },
// ];

// const INFRA = [
//   {
//     id: 1,
//     title: "Redevelopment of Secunderabad Railway Station",
//     desc: "Redevelopment of Secunderabad Railway Station to benefit residents",
//   },
//   {
//     id: 2,
//     title: "Widening of NH-44",
//     desc: "Widening of NH-44 to ease travel between Bolarum & Bowenpally",
//   },
//   {
//     id: 3,
//     title: "Elevated roads from Paradise Junction",
//     desc: "Elevated roads from Paradise Junction to Shameerpet & NH44 are on cards",
//   },
//   {
//     id: 4,
//     title: "Elevated road along SH-1 planned",
//     desc: "Elevated road along SH-1 (Jubilee Bus Station-Shamirpet) is planned",
//   },
// ];


// const Overview = () => {
//   const { city } = useParams();
//   const [showMore, setShowMore] = useState(false);
//   const [activeScope, setActiveScope] = useState("localities");

//   // City-specific data
//   const cityData = {
//     bangalore: {
//       name: "Bangalore",
//       title: "Bangalore Overview",
//       description: "IT capital of India with excellent infrastructure and job opportunities",
//       highlights: [
//         "Bangalore is known as the Silicon Valley of India",
//         "Major IT companies like Infosys, Wipro, and TCS have headquarters here",
//         "Namma Metro connects major IT hubs and residential areas",
//         "Pleasant weather throughout the year attracts residents",
//         "Home to prestigious institutions like IISc and IIM-B"
//       ],
//       challenges: [
//         "Traffic congestion during peak hours on major roads",
//         "Water scarcity issues in certain areas during summer",
//         "Rising property prices due to high demand"
//       ],
//       series: {
//         a: [4200, 5800, 6500, 6200, 7200],
//         b: [4800, 5400, 5900, 5700, 6300],
//         c: [3500, 4200, 4900, 5000, 5400],
//       },
//       tableData: [
//         {
//           id: 1,
//           color: "bg-blue-500",
//           name: "Electronic City",
//           current: "₹6,200/ sq.ft",
//           y1: "+15.2%",
//           y3: "+8.4%",
//           y5: "+52.1%",
//         },
//         {
//           id: 2,
//           color: "bg-green-500",
//           name: "Whitefield",
//           current: "₹7,800/ sq.ft",
//           y1: "+12.8%",
//           y3: "+6.2%",
//           y5: "+48.3%",
//         },
//         {
//           id: 3,
//           color: "bg-purple-500",
//           name: "HSR Layout",
//           current: "₹8,500/ sq.ft",
//           y1: "+10.4%",
//           y3: "+18.7%",
//           y5: "+55.8%",
//         },
//       ]
//     },
//     pune: {
//       name: "Pune",
//       title: "Pune Overview", 
//       description: "Growing IT hub with excellent educational institutions and infrastructure",
//       highlights: [
//         "Pune is known as the Oxford of the East",
//         "Major IT parks in Hinjewadi and Kharadi drive employment",
//         "PMC Bus Rapid Transit connects major areas efficiently", 
//         "Home to prestigious colleges and automotive companies",
//         "Pleasant climate and cultural heritage attract residents"
//       ],
//       series: {
//         a: [3800, 5200, 5900, 5600, 6600],
//         b: [4400, 4900, 5300, 5100, 5800],
//         c: [3200, 3800, 4500, 4600, 5000],
//       },
//       tableData: [
//         {
//           id: 1,
//           color: "bg-orange-500",
//           name: "Hinjewadi",
//           current: "₹5,800/ sq.ft",
//           y1: "+18.5%",
//           y3: "+12.3%",
//           y5: "+45.7%",
//         },
//         {
//           id: 2,
//           color: "bg-red-500",
//           name: "Kharadi",
//           current: "₹6,200/ sq.ft",
//           y1: "+14.2%",
//           y3: "+9.8%",
//           y5: "+42.1%",
//         },
//         {
//           id: 3,
//           color: "bg-indigo-500",
//           name: "Baner",
//           current: "₹7,100/ sq.ft",
//           y1: "+11.6%",
//           y3: "+16.4%",
//           y5: "+51.2%",
//         },
//       ]
//     },
//     mumbai: {
//       name: "Mumbai",
//       title: "Mumbai Overview",
//       description: "Financial capital with premium real estate and excellent connectivity",
//       highlights: [
//         "Mumbai is the financial and commercial capital of India",
//         "Home to Bollywood and major financial institutions",
//         "Extensive local train network connects the entire city",
//         "Premium real estate with high investment potential",
//         "Gateway to India with major port and airport"
//       ],
//       series: {
//         a: [8500, 11200, 12800, 12400, 14200],
//         b: [9200, 10600, 11400, 11100, 12500],
//         c: [7800, 8900, 10200, 10500, 11300],
//       },
//       tableData: [
//         {
//           id: 1,
//           color: "bg-pink-500",
//           name: "Andheri West",
//           current: "₹18,500/ sq.ft",
//           y1: "+8.2%",
//           y3: "+4.8%",
//           y5: "+28.3%",
//         },
//         {
//           id: 2,
//           color: "bg-cyan-500",
//           name: "Powai",
//           current: "₹16,800/ sq.ft",
//           y1: "+12.4%",
//           y3: "+7.1%",
//           y5: "+35.7%",
//         },
//         {
//           id: 3,
//           color: "bg-emerald-500",
//           name: "Thane West",
//           current: "₹14,200/ sq.ft",
//           y1: "+15.8%",
//           y3: "+11.2%",
//           y5: "+41.5%",
//         },
//       ]
//     },
//     delhi: {
//       name: "Delhi",
//       title: "Delhi Overview",
//       description: "National capital with diverse real estate options and metro connectivity",
//       highlights: [
//         "Delhi is the national capital and seat of government",
//         "Extensive Delhi Metro network covers NCR region",
//         "Rich historical heritage with modern infrastructure",
//         "Major business and commercial hub of North India",
//         "Diverse real estate options from affordable to luxury"
//       ],
//       series: {
//         a: [4500, 6100, 6900, 6600, 7500],
//         b: [5100, 5700, 6200, 6000, 6800],
//         c: [3900, 4500, 5100, 5300, 5700],
//       },
//       tableData: [
//         {
//           id: 1,
//           color: "bg-yellow-500",
//           name: "Dwarka",
//           current: "₹7,200/ sq.ft",
//           y1: "+13.8%",
//           y3: "+9.4%",
//           y5: "+38.2%",
//         },
//         {
//           id: 2,
//           color: "bg-teal-500",
//           name: "Gurgaon Sec 104",
//           current: "₹8,900/ sq.ft",
//           y1: "+11.2%",
//           y3: "+6.8%",
//           y5: "+45.1%",
//         },
//         {
//           id: 3,
//           color: "bg-violet-500",
//           name: "Noida Extension",
//           current: "₹4,800/ sq.ft",
//           y1: "+22.5%",
//           y3: "+18.7%",
//           y5: "+65.3%",
//         },
//       ]
//     },
//     hyderabad: {
//       name: "Hyderabad",
//       title: "Hyderabad Overview",
//       description: "Cyberabad with booming IT sector and affordable real estate",
//       highlights: [
//         "Hyderabad is known as Cyberabad for its IT industry",
//         "HITEC City houses major tech companies like Microsoft, Google",
//         "Hyderabad Metro connects IT hubs with residential areas",
//         "Affordable real estate compared to other metro cities",
//         "Rich heritage with modern infrastructure development"
//       ],
//       series: {
//         a: [3200, 4500, 5200, 4900, 5800],
//         b: [3800, 4300, 4800, 4600, 5200],
//         c: [2800, 3300, 3900, 4100, 4500],
//       },
//       tableData: [
//         {
//           id: 1,
//           color: "bg-rose-500",
//           name: "Gachibowli",
//           current: "₹5,200/ sq.ft",
//           y1: "+16.4%",
//           y3: "+11.8%",
//           y5: "+48.7%",
//         },
//         {
//           id: 2,
//           color: "bg-lime-500",
//           name: "HITEC City",
//           current: "₹6,100/ sq.ft",
//           y1: "+13.7%",
//           y3: "+8.5%",
//           y5: "+42.9%",
//         },
//         {
//           id: 3,
//           color: "bg-amber-500",
//           name: "Kompally",
//           current: "₹4,300/ sq.ft",
//           y1: "+19.2%",
//           y3: "+15.4%",
//           y5: "+58.1%",
//         },
//       ]
//     },
//     secunderabad: {
//       name: "Secunderabad",
//       title: "Secunderabad Overview",
//       description: "Historic twin city of Hyderabad with good connectivity and infrastructure",
//       highlights: [
//         "Secunderabad is also known as the Twin City of Hyderabad",
//         "Major railway junction connecting North and South India",
//         "Green & Blue metro lines connect Secunderabad to Hyderabad",
//         "Historic cantonment area with planned infrastructure",
//         "Growing IT presence with proximity to HITEC City"
//       ],
//       series: {
//         a: [3600, 5000, 5800, 5400, 6400],
//         b: [4200, 4800, 5200, 5000, 5600],
//         c: [3000, 3500, 4200, 4300, 4700],
//       },
//       tableData: [
//         {
//           id: 1,
//           color: "bg-purple-500",
//           name: "Cherlapally",
//           current: "₹5,550/ sq.ft",
//           y1: "+20.7%",
//           y3: "+5.7%",
//           y5: "+46.8%",
//         },
//         {
//           id: 2,
//           color: "bg-amber-400",
//           name: "Alwal",
//           current: "₹5,650/ sq.ft",
//           y1: "+9.7%",
//           y3: "-3.7%",
//           y5: "+18.6%",
//         },
//         {
//           id: 3,
//           color: "bg-sky-400",
//           name: "Sainikpuri",
//           current: "₹5,900/ sq.ft",
//           y1: "+5.4%",
//           y3: "+15.7%",
//           y5: "+34.1%",
//         },
//       ]
//     }
//   };

//   // Get current city data (default to secunderabad if city not found)
//   const currentCityData = cityData[city] || cityData.secunderabad;

//   // Series data from current city
//   const years = [2021, 2022, 2023, 2024, 2025];
//   const series = useMemo(
//     () => currentCityData.series,
//     [currentCityData]
//   );

//   const areaA = useMemo(() => generateAreaPath(series.a), [series]);
//   const areaB = useMemo(() => generateAreaPath(series.b), [series]);
//   const areaC = useMemo(() => generateAreaPath(series.c), [series]);

//   // Table data from current city
//   const tableData = currentCityData.tableData;
//   const [activeTab, setActiveTab] = useState("localities");
//   const [helpful, setHelpful] = useState(null); // null / true / false

//   return (
//    <div>
//      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Top area: left - big overview, right - summary card */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start lg:h-screen">
//         {/* Left - Main Overview (spans 2 col on lg) */}
//         <div className="lg:col-span-2 lg:overflow-y-auto lg:h-full lg:pr-4">
//           <div className="flex items-start gap-6">
//             {/* Avatar + title */}
//             <div className="flex-shrink-0">
//               <div className="w-20 h-20 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shadow-sm">
//                 <MapPin className="w-8 h-8 text-amber-600" />
//               </div>
//             </div>

//             <div className="flex-1">
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{currentCityData.title}</h1>
//                   <p className="text-sm text-slate-500 mt-1">Telangana, India</p>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <button
//                     type="button"
//                     className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center hover:bg-slate-50"
//                     title="Share"
//                   >
//                     <Share2 className="w-4 h-4 text-slate-500" />
//                   </button>
//                 </div>
//               </div>

//               {/* Four small circular stats */}
//               <div className="mt-6">
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//                   <StatCircle IconComponent={Building} count={"4"} title={"Upcoming Developments"} />
//                   <StatCircle IconComponent={Home} count={"905"} title={"New Apartment Added"} />
//                   <StatCircle IconComponent={Grid} count={"909"} title={"New Villa Added"} />
//                   <StatCircle IconComponent={Layers} count={"153"} title={"Independent Floor Added"} />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Key Highlights Section */}
//           <section className="mt-10 bg-amber-50 rounded-xl p-6 sm:p-8">
//             <div className="flex items-start justify-between gap-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-md bg-white/60 flex items-center justify-center">
//                   <Map className="w-5 h-5 text-amber-600" />
//                 </div>
//                 <h2 className="text-lg sm:text-xl font-bold text-slate-900">Key Highlights of {currentCityData.name}</h2>
//               </div>
//               <div>
//                 <button className="text-sm bg-white border border-blue-200 px-3 py-1 rounded-md text-blue-600 font-semibold hover:bg-white/90">
//                   View All
//                 </button>
//               </div>
//             </div>

//             <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Left card */}
//               <div className="bg-white border border-gray-100 rounded-lg p-4 sm:p-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 rounded-md bg-amber-100 flex items-center justify-center">
//                     <ThumbsUp className="w-4 h-4 text-amber-600" />
//                   </div>
//                   <h3 className="font-semibold text-slate-800">What's great here!</h3>
//                 </div>

//                 <ul className="mt-4 space-y-3 text-sm text-slate-600">
//                   {currentCityData.highlights.map((highlight, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <div className="mt-0.5 text-amber-500">•</div>
//                       <div>{highlight}</div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Right card */}
//               <div className="bg-white border border-gray-100 rounded-lg p-4 sm:p-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center">
//                     <AlertTriangle className="w-4 h-4 text-slate-700" />
//                   </div>
//                   <h3 className="font-semibold text-slate-800">What needs attention!</h3>
//                 </div>

//                 <ul className="mt-4 space-y-3 text-sm text-slate-600">
//                   <li className="flex items-start gap-3">
//                     <div className="mt-0.5 text-amber-500">•</div>
//                     <div>Heavy rain causes severe waterlogging under Arts College RUB here</div>
//                   </li>

//                   <li className="flex items-start gap-3">
//                     <div className="mt-0.5 text-amber-500">•</div>
//                     <div>Traffic congestion at Paradise Circle results in commuting delays</div>
//                   </li>

//                   <li className="flex items-start gap-3">
//                     <div className="mt-0.5 text-amber-500">•</div>
//                     <div>Malkajgiri, Old Bowenpally & Yapral residents complain of poor roads</div>
//                   </li>

//                   <li className="flex items-start gap-3">
//                     <div className="mt-0.5 text-amber-500">•</div>
//                     <div>Secunderabad's Sainathpuram & Bolarum face unscheduled power cuts… <span className="text-blue-600 font-medium">more</span></div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </section>

//           {/* Price Insights Section */}
//           <div className="mt-10">
//             <div className="space-y-6">
//               {/* Title */}
//               <div>
//                 <h3 className="text-xl font-bold text-slate-900">Price Insights</h3>
//                 <p className="text-sm text-slate-500 mt-1">for localities and societies in {currentCityData.name}</p>
//               </div>

//               {/* Top card with insights list */}
//               <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
//                   <div className="md:col-span-9">
//                     <div className="space-y-3">
//                       {[
//                         {
//                           icon: <BarChart2 className="w-5 h-5 text-amber-500" />,
//                           title: "Over 10.9% YOY Appreciation",
//                           desc: "across 10+ localities. Check now",
//                           link: "View localities",
//                         },
//                         {
//                           icon: <MapPin className="w-5 h-5 text-amber-500" />,
//                           title: "Upto 4% Rental Yield",
//                           desc: "See the localities with Higher Rental Returns",
//                           link: "View localities",
//                         },
//                         {
//                           icon: <Building className="w-5 h-5 text-amber-500" />,
//                           title: "Over 5.1% YOY Appreciation",
//                           desc: "in 1 Ready to Move Societies",
//                           link: "View Projects",
//                         },
//                       ].map((item, idx) => (
//                         <div key={idx} className="flex items-center gap-4 py-3">
//                           <div className="w-10 h-10 rounded-md bg-amber-50 border border-amber-100 flex items-center justify-center">
//                             {item.icon}
//                           </div>
//                           <div className="flex-1">
//                             <div className="flex items-center justify-between">
//                               <div>
//                                 <div className="text-sm font-semibold text-slate-900">{item.title}</div>
//                                 <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
//                               </div>
//                               <div>
//                                 <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
//                                   <span>{item.link}</span>
//                                   <ArrowUpRight className="w-3 h-3" />
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}

//                       {!showMore && (
//                         <div className="border-t mt-2 pt-2">
//                           <button onClick={() => setShowMore(true)} className="text-sm text-slate-600 hover:text-slate-800 flex items-center gap-1">
//                             View 2 more <ChevronDown className="w-4 h-4" />
//                           </button>
//                         </div>
//                       )}

//                       {showMore && (
//                         <div className="mt-2 space-y-2">
//                           <div className="text-sm text-slate-700">More insight 1</div>
//                           <div className="text-sm text-slate-700">More insight 2</div>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   <div className="md:col-span-3 flex items-start justify-end">
//                     {/* empty right side or future controls */}
//                   </div>
//                 </div>
//               </div>

//               {/* Trend & Comparison */}
//               <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <h4 className="text-lg font-semibold text-slate-800">Price Trend & Comparison</h4>
//                     <Info className="w-4 h-4 text-slate-400" />
//                   </div>

//                   <div className="flex items-center gap-3">
//                     <div className="text-sm text-slate-500">Showing for <span className="font-medium text-slate-700">Buy — Flat/Apartment</span></div>
//                     <div className="inline-flex bg-slate-100 rounded-full p-1 border border-slate-100">
//                       <button onClick={() => setActiveScope('localities')} className={`px-3 py-1 text-sm rounded-full ${activeScope === 'localities' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500'}`}>
//                         Localities
//                       </button>
//                       <button onClick={() => setActiveScope('societies')} className={`px-3 py-1 text-sm rounded-full ${activeScope === 'societies' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500'}`}>
//                         Societies
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Chart area */}
//                 <div className="mt-6">
//                   <div className="text-xs text-slate-500 mb-3">AVG. PROPERTY RATE</div>
//                   <div className="w-full h-[260px] relative">
//                     <svg viewBox="0 0 740 260" className="w-full h-full">
//                       <defs>
//                         <linearGradient id="gA" x1="0" x2="0" y1="0" y2="1">
//                           <stop offset="0%" stopColor="#c7f9ff" stopOpacity="0.6" />
//                           <stop offset="100%" stopColor="#c7f9ff" stopOpacity="0.02" />
//                         </linearGradient>
//                         <linearGradient id="gB" x1="0" x2="0" y1="0" y2="1">
//                           <stop offset="0%" stopColor="#e6d5ff" stopOpacity="0.5" />
//                           <stop offset="100%" stopColor="#e6d5ff" stopOpacity="0.03" />
//                         </linearGradient>
//                         <linearGradient id="gC" x1="0" x2="0" y1="0" y2="1">
//                           <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.45" />
//                           <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.02" />
//                         </linearGradient>
//                       </defs>

//                       {/* Y axis ticks */}
//                       <g className="text-slate-400">
//                         <text x={40} y={30} className="text-xs fill-current">₹7K</text>
//                         <text x={40} y={70} className="text-xs fill-current">₹6K</text>
//                         <text x={40} y={110} className="text-xs fill-current">₹5K</text>
//                         <text x={40} y={150} className="text-xs fill-current">₹4K</text>
//                         <text x={40} y={190} className="text-xs fill-current">₹3K</text>
//                       </g>

//                       {/* Areas */}
//                       <path d={areaA} fill="url(#gA)" stroke="#7dd3fc" strokeWidth={1.5} opacity={0.95} />
//                       <path d={areaB} fill="url(#gB)" stroke="#c084fc" strokeWidth={1.5} opacity={0.95} />
//                       <path d={areaC} fill="url(#gC)" stroke="#93c5fd" strokeWidth={1.5} opacity={0.95} />

//                       {/* X axis labels (years) */}
//                       {years.map((y, i) => {
//                         const x = 30 + i * ((740 - 60) / (years.length - 1));
//                         return (
//                           <text key={y} x={x} y={245} className="text-xs fill-current text-slate-400" textAnchor="middle">
//                             {y}
//                           </text>
//                         );
//                       })}
//                     </svg>
//                   </div>

//                   <div className="mt-4 flex items-center justify-between">
//                     <div className="flex items-center gap-2 text-sm text-slate-500">
//                       <div className="flex items-center gap-2">
//                         <label className="flex items-center gap-2">
//                           <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
//                           <span className="text-slate-700 text-sm">Cherlapally</span>
//                         </label>
//                       </div>

//                       <div className="flex items-center gap-2">
//                         <label className="flex items-center gap-2">
//                           <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
//                           <span className="text-slate-700 text-sm">Alwal</span>
//                         </label>
//                       </div>

//                       <div className="flex items-center gap-2">
//                         <label className="flex items-center gap-2">
//                           <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
//                           <span className="text-slate-700 text-sm">Sainikpuri</span>
//                         </label>
//                       </div>
//                     </div>

//                     <div>
//                       <button className="text-sm text-blue-600 hover:underline">Compare Prices in any Localities</button>
//                     </div>
//                   </div>

//                   {/* Table */}
//                   <div className="mt-5 overflow-x-auto">
//                     <table className="min-w-full text-sm">
//                       <thead>
//                         <tr className="text-left text-slate-500 border-b border-gray-200">
//                           <th className="py-2 pl-3">Popular Localities</th>
//                           <th className="py-2">Current Price</th>
//                           <th className="py-2">Last 1 year</th>
//                           <th className="py-2">Last 3 years</th>
//                           <th className="py-2">Last 5 years</th>
//                         </tr>
//                       </thead>
//                       <tbody className="text-slate-700">
//                         {tableData.map((row) => (
//                           <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
//                             <td className="py-3 pl-3 flex items-center gap-3">
//                               <input type="checkbox" defaultChecked className="h-4 w-4" />
//                               <div className={`w-3 h-3 rounded-sm ${row.color}`} />
//                               <div className="font-medium">{row.name}</div>
//                             </td>
//                             <td className="py-3">{row.current}</td>
//                             <td className="py-3">
//                               <div className="flex items-center gap-2 text-sm">
//                                 <ArrowUp className="w-4 h-4 text-green-500" />
//                                 <span className="text-green-600 font-medium">{row.y1}</span>
//                               </div>
//                             </td>
//                             <td className="py-3">
//                               <div className={`flex items-center gap-2 text-sm ${row.y3.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
//                                 {row.y3.startsWith('+') ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
//                                 <span className="font-medium">{row.y3}</span>
//                               </div>
//                             </td>
//                             <td className="py-3">
//                               <div className="flex items-center gap-2 text-sm text-green-600">
//                                 <ArrowUp className="w-4 h-4" />
//                                 <span className="font-medium">{row.y5}</span>
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>

//                   <div className="mt-4 text-xs text-slate-500">Is this helpful? <button className="underline ml-2">Yes</button> <button className="ml-2">No</button></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Transaction Prices Section */}
//           <div className="mt-10">
//             <div className="space-y-6">
//               {/* Header row with title and CTA */}
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <h2 className="text-xl font-bold text-slate-900">Transaction Prices in {currentCityData.name}</h2>
//                   <div className="text-sm text-slate-500 mt-1">Check recently sold properties in Last 1 Year</div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <button className="text-sm bg-transparent border border-slate-200 text-slate-700 px-3 py-1 rounded-md hover:bg-slate-50">
//                     View Transaction Prices in more Localities
//                   </button>
//                   <button className="w-10 h-10 rounded-md bg-white border border-slate-100 shadow-sm flex items-center justify-center hover:bg-slate-50">
//                     <Share2 className="w-4 h-4 text-slate-500" />
//                   </button>
//                 </div>
//               </div>

//               {/* Tabs + Table Card */}
//               <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
//                 {/* Tabs header */}
//                 <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={() => setActiveTab("localities")}
//                       className={`px-3 py-1 text-sm rounded-md ${activeTab === "localities" ? "bg-slate-50 text-slate-900 font-semibold" : "text-slate-500"}`}
//                     >
//                       Across Localities
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("societies")}
//                       className={`px-3 py-1 text-sm rounded-md ${activeTab === "societies" ? "bg-slate-50 text-slate-900 font-semibold" : "text-slate-500"}`}
//                     >
//                       Across Societies
//                     </button>
//                   </div>

//                   <div className="text-sm text-slate-500">&nbsp;</div>
//                 </div>

//                 {/* Table */}
//                 <div className="p-4">
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-100 text-sm">
//                       <thead>
//                         <tr className="text-left text-slate-500">
//                           <th className="py-3 pl-3">Locality</th>
//                           <th className="py-3">Rate on 99acres</th>
//                           <th className="py-3">Transaction Count (1Y)</th>
//                           <th className="py-3">Transaction Rate</th>
//                         </tr>
//                       </thead>
//                       <tbody className="divide-y divide-gray-100">
//                         {LOCALITIES.map((row) => (
//                           <tr key={row.id} className="hover:bg-gray-50">
//                             <td className="py-4 pl-3">
//                               <div className="flex items-center gap-3">
//                                 <img src={row.avatar} alt={row.name} className="w-10 h-10 rounded-full object-cover border" />
//                                 <div>
//                                   <div className="font-medium text-slate-800">{row.name}</div>
//                                   <div className="text-xs text-slate-500">Rate on 99acres</div>
//                                 </div>
//                               </div>
//                             </td>

//                             <td className="py-4">
//                               <div className="text-slate-800 font-semibold">{row.rateOn99}</div>
//                             </td>

//                             <td className="py-4">
//                               <div className="text-slate-700">{row.txCount}</div>
//                               <div className="text-xs text-slate-500">No. of Transactions</div>
//                             </td>

//                             <td className="py-4">
//                               <div className="text-slate-800 font-semibold">{row.txRate}</div>
//                               <div className="text-xs text-slate-500">Transaction Rate</div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>

//                   {/* Helpful row */}
//                   <div className="mt-4 text-xs text-slate-500 flex items-center gap-3">
//                     <div>Is this helpful?</div>
//                     <div className="flex items-center gap-3">
//                       <button
//                         onClick={() => setHelpful(true)}
//                         className={`px-2 py-1 rounded-md ${helpful === true ? "bg-slate-100" : "hover:bg-slate-50"}`}
//                       >
//                         Yes
//                       </button>
//                       <button
//                         onClick={() => setHelpful(false)}
//                         className={`px-2 py-1 rounded-md ${helpful === false ? "bg-slate-100" : "hover:bg-slate-50"}`}
//                       >
//                         No
//                       </button>
//                     </div>
//                     <div className="text-slate-400">|</div>
//                     <div className="text-slate-400">&nbsp;</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Upcoming Infrastructure */}
//               <div className="mt-6">
//                 <h3 className="text-lg font-semibold text-slate-900">Upcoming Infrastructure Developments in {currentCityData.name}</h3>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
//                   {INFRA.map((item) => (
//                     <div key={item.id} className="flex gap-3 items-start bg-white border border-gray-100 rounded-md p-4">
//                       <div className="w-12 h-12 rounded-md bg-amber-50 border border-amber-100 flex items-center justify-center">
//                         <MapPin className="w-5 h-5 text-amber-600" />
//                       </div>
//                       <div>
//                         <div className="text-sm font-semibold text-slate-800">{item.title}</div>
//                         <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right column - Overview box */}
//         <aside className="lg:col-span-1 lg:sticky lg:top-4 lg:h-fit">
//           <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm">
//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="text-xs uppercase text-slate-500">Overview</div>
//                 <div className="mt-3 grid grid-cols-2 gap-3">
//                   <SmallStat number={348} label="Societies" hint={"₹4600/sq.ft Onwards"} />
//                   <SmallStat number={39} label="Localities" hint={"₹1950/sq.ft Onwards"} />
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6">
//               <div className="text-xs uppercase text-slate-500 mb-2">Upcoming Developments</div>
//               <div className="flex items-start gap-3">
//                 <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center">
//                   <Calendar className="w-5 h-5 text-blue-600" />
//                 </div>
//                 <div className="text-sm text-slate-700">Elevated roads from Paradise Junction to Shameerpet & NH44 are on cards</div>
//               </div>

//               {/* carousel dots */}
//               <div className="mt-4 flex items-center gap-2">
//                 <div className="w-2 h-2 rounded-full bg-slate-300"></div>
//                 <div className="w-2 h-2 rounded-full bg-slate-300"></div>
//                 <div className="w-2 h-2 rounded-full bg-slate-300"></div>
//                 <div className="w-2 h-2 rounded-full bg-slate-300"></div>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//    </div>
//   )
// }
// export default Overview






import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Share2,
  Building,
  Home,
  Layers,
  Grid,
  ArrowUpRight,
  Calendar,
  ThumbsUp,
  AlertTriangle,
  Map,
  Info,
  BarChart2,
  ArrowUp,
  ArrowDown,
  ChevronDown,
} from "lucide-react";

// Utility to generate area chart path for SVG
const generateAreaPath = (values, width = 700, height = 220, padding = 30) => {
  if (!values || !values.length) return "";
  const min = Math.min(...values);
  const max = Math.max(...values);
  const len = values.length;
  const stepX = (width - padding * 2) / (len - 1);

  const points = values.map((v, i) => {
    const x = padding + i * stepX;
    const y = padding + (1 - (v - min) / (max - min || 1)) * (height - padding * 2);
    return { x, y };
  });

  const dTop = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const last = points[points.length - 1];
  const first = points[0];
  const dClose = `${dTop} L ${last.x} ${height - padding} L ${first.x} ${height - padding} Z`;
  return dClose;
};

const StatCircle = ({ IconComponent, count, title }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center shadow-sm">
      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
    </div>
    <div className="text-sm sm:text-base font-semibold text-slate-800">{count}</div>
    <div className="text-xs text-slate-500 text-center max-w-[90px]">{title}</div>
  </div>
);

const SmallStat = ({ number, label, hint }) => (
  <div className="rounded-lg p-4 bg-white border border-gray-100 shadow-sm">
    <div className="flex items-start justify-between gap-3">
      <div>
        <div className="text-2xl font-bold text-slate-800">{number}</div>
        <div className="text-xs text-slate-500">{label}</div>
      </div>
      <div className="text-xs text-amber-500 font-semibold self-start">{hint}</div>
    </div>
  </div>
);

const LOCALITIES = [
  { id: 1, name: "Nacharam", avatar: "https://via.placeholder.com/48?text=N", rateOn99: "₹6,200/ sq.ft", txCount: 225, txRate: "₹5,982/ sq.ft" },
  { id: 2, name: "Medchal", avatar: "https://via.placeholder.com/48?text=M", rateOn99: "₹3,100/ sq.ft", txCount: 166, txRate: "₹2,500/ sq.ft" },
  { id: 3, name: "Kapra", avatar: "https://via.placeholder.com/48?text=K", rateOn99: "₹5,900/ sq.ft", txCount: 84, txRate: "₹4,744/ sq.ft" },
  { id: 4, name: "Yapral", avatar: "https://via.placeholder.com/48?text=Y", rateOn99: "₹6,000/ sq.ft", txCount: 79, txRate: "₹6,225/ sq.ft" },
  { id: 5, name: "Vijayapuri Colony", avatar: "https://via.placeholder.com/48?text=V", rateOn99: "NA", txCount: 68, txRate: "₹5,000/ sq.ft" },
];

const INFRA = [
  { id: 1, title: "Redevelopment of Secunderabad Railway Station", desc: "Redevelopment of Secunderabad Railway Station to benefit residents" },
  { id: 2, title: "Widening of NH-44", desc: "Widening of NH-44 to ease travel between Bolarum & Bowenpally" },
  { id: 3, title: "Elevated roads from Paradise Junction", desc: "Elevated roads from Paradise Junction to Shameerpet & NH44 are on cards" },
  { id: 4, title: "Elevated road along SH-1 planned", desc: "Elevated road along SH-1 (Jubilee Bus Station-Shamirpet) is planned" }
];

// Add or customize cityData as per your needs. This is a demo structure.
const cityData = {
  secunderabad: {
    name: "Secunderabad",
    title: "Secunderabad Overview",
    description: "Historic twin city of Hyderabad with good connectivity and infrastructure",
    highlights: [
      "Secunderabad is also known as the Twin City of Hyderabad",
      "Major railway junction connecting North and South India",
      "Green & Blue metro lines connect Secunderabad to Hyderabad",
      "Historic cantonment area with planned infrastructure",
      "Growing IT presence with proximity to HITEC City"
    ],
    series: {
      a: [3600, 5000, 5800, 5400, 6400],
      b: [4200, 4800, 5200, 5000, 5600],
      c: [3000, 3500, 4200, 4300, 4700],
    },
    tableData: [
      { id: 1, color: "bg-purple-500", name: "Cherlapally", current: "₹5,550/ sq.ft", y1: "+20.7%", y3: "+5.7%", y5: "+46.8%" },
      { id: 2, color: "bg-amber-400", name: "Alwal", current: "₹5,650/ sq.ft", y1: "+9.7%", y3: "-3.7%", y5: "+18.6%" },
      { id: 3, color: "bg-sky-400", name: "Sainikpuri", current: "₹5,900/ sq.ft", y1: "+5.4%", y3: "+15.7%", y5: "+34.1%" },
    ]
  }
};

const OverviewIntegration = () => {
  const { city } = useParams();
  const [showMore, setShowMore] = useState(false);
  const [activeScope, setActiveScope] = useState("localities");
  const [activeTab, setActiveTab] = useState("localities");
  const [helpful, setHelpful] = useState(null);

  const currentCityData = cityData[city] || cityData.secunderabad;
  const years = [2021, 2022, 2023, 2024, 2025];
  const series = useMemo(() => currentCityData.series, [currentCityData]);
  const areaA = useMemo(() => generateAreaPath(series.a), [series]);
  const areaB = useMemo(() => generateAreaPath(series.b), [series]);
  const areaC = useMemo(() => generateAreaPath(series.c), [series]);
  const tableData = currentCityData.tableData;

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start lg:h-screen">
          {/* Left Main Overview */}
          <div className="lg:col-span-2 lg:overflow-y-auto lg:h-full lg:pr-4">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shadow-sm">
                  <MapPin className="w-8 h-8 text-amber-600" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{currentCityData.title}</h1>
                    <p className="text-sm text-slate-500 mt-1">Telangana, India</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center hover:bg-slate-50"
                      title="Share"
                    >
                      <Share2 className="w-4 h-4 text-slate-500" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    <StatCircle IconComponent={Building} count={"4"} title={"Upcoming Developments"} />
                    <StatCircle IconComponent={Home} count={"905"} title={"New Apartment Added"} />
                    <StatCircle IconComponent={Grid} count={"909"} title={"New Villa Added"} />
                    <StatCircle IconComponent={Layers} count={"153"} title={"Independent Floor Added"} />
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <section className="mt-10 bg-amber-50 rounded-xl p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-white/60 flex items-center justify-center">
                    <Map className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">Key Highlights of {currentCityData.name}</h2>
                </div>
                <div>
                  <button className="text-sm bg-white border border-blue-200 px-3 py-1 rounded-md text-blue-600 font-semibold hover:bg-white/90">
                    View All
                  </button>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-amber-100 flex items-center justify-center">
                      <ThumbsUp className="w-4 h-4 text-amber-600" />
                    </div>
                    <h3 className="font-semibold text-slate-800">What's great here!</h3>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {currentCityData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 text-amber-500">•</div>
                        <div>{highlight}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-gray-100 rounded-lg p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-slate-700" />
                    </div>
                    <h3 className="font-semibold text-slate-800">What needs attention!</h3>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-amber-500">•</div>
                      <div>Heavy rain causes severe waterlogging under Arts College RUB here</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-amber-500">•</div>
                      <div>Traffic congestion at Paradise Circle results in commuting delays</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-amber-500">•</div>
                      <div>Malkajgiri, Old Bowenpally & Yapral residents complain of poor roads</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-amber-500">•</div>
                      <div>Secunderabad's Sainathpuram & Bolarum face unscheduled power cuts… <span className="text-blue-600 font-medium">more</span></div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Price Insights */}
            <div className="mt-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Price Insights</h3>
                  <p className="text-sm text-slate-500 mt-1">for localities and societies in {currentCityData.name}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                    <div className="md:col-span-9">
                      <div className="space-y-3">
                        {[
                          {
                            icon: <BarChart2 className="w-5 h-5 text-amber-500" />,
                            title: "Over 10.9% YOY Appreciation",
                            desc: "across 10+ localities. Check now",
                            link: "View localities",
                          },
                          {
                            icon: <MapPin className="w-5 h-5 text-amber-500" />,
                            title: "Upto 4% Rental Yield",
                            desc: "See the localities with Higher Rental Returns",
                            link: "View localities",
                          },
                          {
                            icon: <Building className="w-5 h-5 text-amber-500" />,
                            title: "Over 5.1% YOY Appreciation",
                            desc: "in 1 Ready to Move Societies",
                            link: "View Projects",
                          },
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-4 py-3">
                            <div className="w-10 h-10 rounded-md bg-amber-50 border border-amber-100 flex items-center justify-center">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                                  <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                                </div>
                                <div>
                                  <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                                    <span>{item.link}</span>
                                    <ArrowUpRight className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        {!showMore && (
                          <div className="border-t mt-2 pt-2">
                            <button onClick={() => setShowMore(true)} className="text-sm text-slate-600 hover:text-slate-800 flex items-center gap-1">
                              View 2 more <ChevronDown className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                        {showMore && (
                          <div className="mt-2 space-y-2">
                            <div className="text-sm text-slate-700">More insight 1</div>
                            <div className="text-sm text-slate-700">More insight 2</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="md:col-span-3 flex items-start justify-end">
                      {/* Empty or future controls */}
                    </div>
                  </div>
                </div>

                {/* Trend & Comparison */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h4 className="text-lg font-semibold text-slate-800">Price Trend & Comparison</h4>
                      <Info className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-slate-500">Showing for <span className="font-medium text-slate-700">Buy — Flat/Apartment</span></div>
                      <div className="inline-flex bg-slate-100 rounded-full p-1 border border-slate-100">
                        <button onClick={() => setActiveScope('localities')} className={`px-3 py-1 text-sm rounded-full ${activeScope === 'localities' ? "bg-white shadow-sm text-slate-800" : "text-slate-500"}`}>Localities</button>
                        <button onClick={() => setActiveScope('societies')} className={`px-3 py-1 text-sm rounded-full ${activeScope === 'societies' ? "bg-white shadow-sm text-slate-800" : "text-slate-500"}`}>Societies</button>
                      </div>
                    </div>
                  </div>
                  {/* Chart area */}
                  <div className="mt-6">
                    <div className="text-xs text-slate-500 mb-3">AVG. PROPERTY RATE</div>
                    <div className="w-full h-[260px] relative">
                      <svg viewBox="0 0 740 260" className="w-full h-full">
                        <defs>
                          <linearGradient id="gA" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#c7f9ff" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#c7f9ff" stopOpacity="0.02" />
                          </linearGradient>
                          <linearGradient id="gB" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#e6d5ff" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#e6d5ff" stopOpacity="0.03" />
                          </linearGradient>
                          <linearGradient id="gC" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.02" />
                          </linearGradient>
                        </defs>
                        <g className="text-slate-400">
                          <text x={40} y={30} className="text-xs fill-current">₹7K</text>
                          <text x={40} y={70} className="text-xs fill-current">₹6K</text>
                          <text x={40} y={110} className="text-xs fill-current">₹5K</text>
                          <text x={40} y={150} className="text-xs fill-current">₹4K</text>
                          <text x={40} y={190} className="text-xs fill-current">₹3K</text>
                        </g>
                        <path d={areaA} fill="url(#gA)" stroke="#7dd3fc" strokeWidth={1.5} opacity={0.95} />
                        <path d={areaB} fill="url(#gB)" stroke="#c084fc" strokeWidth={1.5} opacity={0.95} />
                        <path d={areaC} fill="url(#gC)" stroke="#93c5fd" strokeWidth={1.5} opacity={0.95} />
                        {years.map((y, i) => {
                          const x = 30 + i * ((740 - 60) / (years.length - 1));
                          return (
                            <text key={y} x={x} y={245} className="text-xs fill-current text-slate-400" textAnchor="middle">
                              {y}
                            </text>
                          );
                        })}
                      </svg>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
                            <span className="text-slate-700 text-sm">Cherlapally</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
                            <span className="text-slate-700 text-sm">Alwal</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600" />
                            <span className="text-slate-700 text-sm">Sainikpuri</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <button className="text-sm text-blue-600 hover:underline">Compare Prices in any Localities</button>
                      </div>
                    </div>
                    <div className="mt-5 overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr className="text-left text-slate-500 border-b border-gray-200">
                            <th className="py-2 pl-3">Popular Localities</th>
                            <th className="py-2">Current Price</th>
                            <th className="py-2">Last 1 year</th>
                            <th className="py-2">Last 3 years</th>
                            <th className="py-2">Last 5 years</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700">
                          {tableData.map((row) => (
                            <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                              <td className="py-3 pl-3 flex items-center gap-3">
                                <input type="checkbox" defaultChecked className="h-4 w-4" />
                                <div className={`w-3 h-3 rounded-sm ${row.color}`} />
                                <div className="font-medium">{row.name}</div>
                              </td>
                              <td className="py-3">{row.current}</td>
                              <td className="py-3">
                                <div className="flex items-center gap-2 text-sm">
                                  <ArrowUp className="w-4 h-4 text-green-500" />
                                  <span className="text-green-600 font-medium">{row.y1}</span>
                                </div>
                              </td>
                              <td className="py-3">
                                <div className={`flex items-center gap-2 text-sm ${row.y3.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                                  {row.y3.startsWith('+') ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                                  <span className="font-medium">{row.y3}</span>
                                </div>
                              </td>
                              <td className="py-3">
                                <div className="flex items-center gap-2 text-sm text-green-600">
                                  <ArrowUp className="w-4 h-4" />
                                  <span className="font-medium">{row.y5}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 text-xs text-slate-500">Is this helpful? <button className="underline ml-2">Yes</button> <button className="ml-2">No</button></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Transaction Prices Section */}
            <div className="mt-10">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Transaction Prices in {currentCityData.name}</h2>
                    <div className="text-sm text-slate-500 mt-1">Check recently sold properties in Last 1 Year</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-sm bg-transparent border border-slate-200 text-slate-700 px-3 py-1 rounded-md hover:bg-slate-50">
                      View Transaction Prices in more Localities
                    </button>
                    <button className="w-10 h-10 rounded-md bg-white border border-slate-100 shadow-sm flex items-center justify-center hover:bg-slate-50">
                      <Share2 className="w-4 h-4 text-slate-500" />
                    </button>
                  </div>
                </div>
                {/* Tabs + Table Card */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setActiveTab("localities")}
                        className={`px-3 py-1 text-sm rounded-md ${activeTab === "localities" ? "bg-slate-50 text-slate-900 font-semibold" : "text-slate-500"}`}
                      >
                        Across Localities
                      </button>
                      <button
                        onClick={() => setActiveTab("societies")}
                        className={`px-3 py-1 text-sm rounded-md ${activeTab === "societies" ? "bg-slate-50 text-slate-900 font-semibold" : "text-slate-500"}`}
                      >
                        Across Societies
                      </button>
                    </div>
                    <div className="text-sm text-slate-500">&nbsp;</div>
                  </div>
                  <div className="p-4">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-100 text-sm">
                        <thead>
                          <tr className="text-left text-slate-500">
                            <th className="py-3 pl-3">Locality</th>
                            <th className="py-3">Rate on 99acres</th>
                            <th className="py-3">Transaction Count (1Y)</th>
                            <th className="py-3">Transaction Rate</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {LOCALITIES.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50">
                              <td className="py-4 pl-3">
                                <div className="flex items-center gap-3">
                                  <img src={row.avatar} alt={row.name} className="w-10 h-10 rounded-full object-cover border" />
                                  <div>
                                    <div className="font-medium text-slate-800">{row.name}</div>
                                    <div className="text-xs text-slate-500">Rate on 99acres</div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4">
                                <div className="text-slate-800 font-semibold">{row.rateOn99}</div>
                              </td>
                              <td className="py-4">
                                <div className="text-slate-700">{row.txCount}</div>
                                <div className="text-xs text-slate-500">No. of Transactions</div>
                              </td>
                              <td className="py-4">
                                <div className="text-slate-800 font-semibold">{row.txRate}</div>
                                <div className="text-xs text-slate-500">Transaction Rate</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 text-xs text-slate-500 flex items-center gap-3">
                      <div>Is this helpful?</div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setHelpful(true)}
                          className={`px-2 py-1 rounded-md ${helpful === true ? "bg-slate-100" : "hover:bg-slate-50"}`}
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => setHelpful(false)}
                          className={`px-2 py-1 rounded-md ${helpful === false ? "bg-slate-100" : "hover:bg-slate-50"}`}
                        >
                          No
                        </button>
                      </div>
                      <div className="text-slate-400">|</div>
                      <div className="text-slate-400">&nbsp;</div>
                    </div>
                  </div>
                </div>
                {/* Upcoming Infrastructure */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-slate-900">Upcoming Infrastructure Developments in {currentCityData.name}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    {INFRA.map((item) => (
                      <div key={item.id} className="flex gap-3 items-start bg-white border border-gray-100 rounded-md p-4">
                        <div className="w-12 h-12 rounded-md bg-amber-50 border border-amber-100 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800">{item.title}</div>
                          <div className="text-xs text-slate-500 mt-1">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right column */}
          <aside className="lg:col-span-1 lg:sticky lg:top-4 lg:h-fit">
            <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase text-slate-500">Overview</div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <SmallStat number={348} label="Societies" hint={"₹4600/sq.ft Onwards"} />
                    <SmallStat number={39} label="Localities" hint={"₹1950/sq.ft Onwards"} />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-xs uppercase text-slate-500 mb-2">Upcoming Developments</div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-md bg-blue-50 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-sm text-slate-700">Elevated roads from Paradise Junction to Shameerpet & NH44 are on cards</div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default OverviewIntegration;