// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getUserInfo, isAuthenticated, logout } from '../../utils/api';
// import UpperFooter from '../UpperFooter';
// import LowerFooter from '../LowerFooter';

// const Post_Property = () => {
//   const [userInfo, setUserInfo] = useState(null);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [propertiesDropdownOpen, setPropertiesDropdownOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//   const [completedSteps, setCompletedSteps] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [propertyScore, setPropertyScore] = useState(0);
//   const [availableCities, setAvailableCities] = useState([]);
//   const [availableLocalities, setAvailableLocalities] = useState([]);
  
//   // Form state
//   const [formData, setFormData] = useState({
//     propertyFor: 'Sell',
//     state: '',
//     city: '',
//     locality: '',
//     society: '',
//     address: '',
//     propertyType: '',
//     bhkType: '',
//     floor: '',
//     totalFloors: '',
//     buildingType: '',
//     age: '',
//     facing: '',
//     builtUpArea: '',
//     plotArea: '',
//     washrooms: '',
//     balconies: '',
//     availability: '',
//     price: '',
//     description: '',
//     images: [],
//     videos: [],
//     amenities: {
//       powerBackup: false,
//       liftAvailable: false,
//       parking: false,
//       gym: false,
//       swimmingPool: false,
//       garden: false,
//       security: false,
//       playground: false,
//       clubhouse: false,
//       internetWifi: false,
//       airConditioning: false,
//       gasConnection: false,
//     },
//     landmarks: {
//       nearestSchool: '',
//       nearestHospital: '',
//       nearestMarket: '',
//       publicTransport: '',
//     }
//   });

//   const navigate = useNavigate();

//   // State-wise cities data
//   const stateCitiesData = {
//     'andhra-pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati', 'Kadapa'],
//     'arunachal-pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Tezpur', 'Bomdila', 'Ziro', 'Along', 'Changlang'],
//     'assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon'],
//     'bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Bihar Sharif', 'Arrah'],
//     'chhattisgarh': ['Raipur', 'Bhilai', 'Korba', 'Bilaspur', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh'],
//     'goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Sanquelim'],
//     'gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar'],
//     'haryana': ['Gurgaon', 'Faridabad', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal'],
//     'himachal-pradesh': ['Shimla', 'Dharamshala', 'Solan', 'Mandi', 'Kullu', 'Hamirpur', 'Una', 'Bilaspur'],
//     'jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh'],
//     'karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga', 'Davanagere', 'Bellary'],
//     'kerala': ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Alappuzha', 'Malappuram'],
//     'madhya-pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Dewas', 'Satna'],
//     'maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Amravati'],
//     'manipur': ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Kakching', 'Ukhrul', 'Senapati', 'Tamenglong'],
//     'meghalaya': ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Baghmara', 'Williamnagar', 'Nongstoin', 'Resubelpara'],
//     'mizoram': ['Aizawl', 'Lunglei', 'Serchhip', 'Champhai', 'Kolasib', 'Lawngtlai', 'Saitual', 'Mamit'],
//     'nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Zunheboto', 'Phek', 'Kiphire'],
//     'odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak'],
//     'punjab': ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Firozpur', 'Hoshiarpur'],
//     'rajasthan': ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar'],
//     'sikkim': ['Gangtok', 'Namchi', 'Geyzing', 'Mangan', 'Jorethang', 'Singtam', 'Rangpo', 'Pakyong'],
//     'tamil-nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tiruppur', 'Vellore'],
//     'telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar', 'Ramagundam', 'Mahbubnagar', 'Nalgonda'],
//     'tripura': ['Agartala', 'Dharmanagar', 'Udaipur', 'Kailashahar', 'Belonia', 'Khowai', 'Ambassa', 'Teliamura'],
//     'uttar-pradesh': ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Varanasi', 'Meerut', 'Allahabad', 'Bareilly'],
//     'uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Kashipur', 'Rishikesh', 'Kotdwar'],
//     'west-bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Malda', 'Bardhaman', 'Kharagpur'],
//     'andaman-nicobar': ['Port Blair', 'Havelock Island', 'Neil Island', 'Diglipur', 'Mayabunder', 'Rangat', 'Car Nicobar', 'Campbell Bay'],
//     'chandigarh': ['Chandigarh', 'Sector 17', 'Sector 22', 'Sector 35', 'Sector 8', 'Sector 15', 'Sector 34', 'Sector 43'],
//     'dadra-nagar-haveli': ['Silvassa', 'Vapi', 'Dadra', 'Naroli', 'Khanvel', 'Samarvarni', 'Dudhani', 'Kherdi'],
//     'delhi': ['New Delhi', 'Gurgaon', 'Faridabad', 'Noida', 'Ghaziabad', 'Greater Noida', 'Dwarka', 'Rohini'],
//     'jammu-kashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Kupwara', 'Pulwama', 'Rajouri', 'Poonch'],
//     'ladakh': ['Leh', 'Kargil', 'Nubra', 'Zanskar', 'Drass', 'Padum', 'Khardung La', 'Pangong'],
//     'lakshadweep': ['Kavaratti', 'Agatti', 'Minicoy', 'Amini', 'Androth', 'Kalpeni', 'Kadmat', 'Bangaram'],
//     'puducherry': ['Puducherry', 'Karaikal', 'Yanam', 'Mahe', 'Oulgaret', 'Villianur', 'Ariyankuppam', 'Bahour']
//   };

//   // City-wise localities data
//   const cityLocalitiesData = {
//     // Uttar Pradesh
//     'lucknow': ['Gomti Nagar', 'Hazratganj', 'Aminabad', 'Aliganj', 'Indira Nagar', 'Mahanagar', 'Rajajipuram', 'Chowk'],
//     'kanpur': ['Civil Lines', 'Mall Road', 'Swaroop Nagar', 'Kidwai Nagar', 'Govind Nagar', 'Kalyanpur', 'Barra', 'Kakadeo'],
//     'ghaziabad': ['Vaishali', 'Indirapuram', 'Raj Nagar', 'Kaushambi', 'Crossings Republik', 'Sahibabad', 'Vasundhara', 'Mohan Nagar'],
//     'agra': ['Taj Ganj', 'Sadar', 'Civil Lines', 'Kamla Nagar', 'Dayalbagh', 'Sikandra', 'Fatehabad Road', 'Raja Ki Mandi'],
//     'varanasi': ['Cantonment', 'Sigra', 'Lanka', 'Godowlia', 'Mahmoorganj', 'Nadesar', 'Bhelupur', 'Ramnagar'],
//     'meerut': ['Civil Lines', 'Cantonment', 'Shastri Nagar', 'Brahmpuri', 'Lalkurti', 'Sadar Bazaar', 'Mohkampur', 'Partapur'],
//     'allahabad': ['Civil Lines', 'Georgetown', 'Katra', 'Mumfordganj', 'Tagore Town', 'Kareli', 'Naini', 'Jhunsi'],
//     'bareilly': ['Civil Lines', 'Pilibhit Road', 'Rampur Garden', 'Subhash Nagar', 'Cantt', 'Railway Road', 'Faridpur', 'Izzatnagar'],

//     // Maharashtra
//     'mumbai': ['Bandra', 'Andheri', 'Powai', 'Juhu', 'Worli', 'Lower Parel', 'Colaba', 'Chembur'],
//     'pune': ['Koregaon Park', 'Baner', 'Hinjewadi', 'Wakad', 'Aundh', 'Viman Nagar', 'Kothrud', 'Magarpatta'],
//     'nagpur': ['Civil Lines', 'Dharampeth', 'Sadar', 'Sitabuldi', 'Ramdaspeth', 'Mahal', 'Lakadganj', 'Nandanvan'],
//     'thane': ['Naupada', 'Kopri', 'Vartak Nagar', 'Hiranandani Estate', 'Ghodbunder Road', 'Majiwada', 'Wagle Estate', 'Kasarvadavali'],
//     'nashik': ['College Road', 'Gangapur Road', 'Panchavati', 'Canada Corner', 'Ashok Stambh', 'Cidco', 'Govind Nagar', 'Satpur'],
//     'aurangabad': ['Cidco', 'Jalna Road', 'Cantonment', 'Town Center', 'Samarth Nagar', 'Osmanpura', 'Paithan Road', 'Garkheda'],
//     'solapur': ['Hotgi Road', 'Ashok Chowk', 'Railway Lines', 'Sadar Bazaar', 'Budhwar Peth', 'Civil Hospital', 'Kumthe Nagar', 'Barshi Road'],
//     'amravati': ['Rajapeth', 'Camp', 'Cotton Market', 'Jaistambh Square', 'Badnera Road', 'Khalsa Road', 'Nagpur Road', 'Shivaji Square'],

//     // Delhi
//     'new-delhi': ['Connaught Place', 'Khan Market', 'India Gate', 'Karol Bagh', 'Lajpat Nagar', 'Green Park', 'Hauz Khas', 'Safdarjung'],
//     'gurgaon': ['Cyber City', 'MG Road', 'Sector 14', 'Golf Course Road', 'Sohna Road', 'DLF Phase 1', 'Udyog Vihar', 'New Gurgaon'],
//     'faridabad': ['Sector 15', 'NIT', 'Old Faridabad', 'Neelam Chowk', 'Greater Faridabad', 'Sector 21', 'Ballabhgarh', 'Sector 37'],
//     'noida': ['Sector 18', 'Sector 62', 'Sector 137', 'Film City', 'City Center', 'Sector 76', 'Sector 50', 'Botanical Garden'],
//     'greater-noida': ['Alpha 1', 'Beta 1', 'Gamma 1', 'Knowledge Park', 'Techzone', 'Pari Chowk', 'Sector Omicron', 'Sector Pi'],
//     'dwarka': ['Sector 1', 'Sector 7', 'Sector 12', 'Sector 19', 'Sector 23', 'Pochanpur', 'Nasirpur', 'Kakrola'],
//     'rohini': ['Sector 3', 'Sector 7', 'Sector 11', 'Sector 18', 'Sector 22', 'Pitampura', 'Kohat Enclave', 'Avantika'],

//     // Karnataka
//     'bangalore': ['Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'Jayanagar', 'BTM Layout', 'HSR Layout', 'Marathahalli'],
//     'mysore': ['Saraswathipuram', 'Kuvempunagar', 'Vijayanagar', 'Hebbal', 'Gokulam', 'Jayalakshmipuram', 'Bogadi', 'Yadavagiri'],
//     'hubli': ['Vidyanagar', 'Keshwapur', 'Gokul Road', 'Club Road', 'Akshay Park', 'Deshpande Nagar', 'Navanagar', 'Hosur'],
//     'mangalore': ['Kankanady', 'Kadri', 'Hampankatta', 'Ballalbagh', 'Lalbagh', 'Pandeshwar', 'Urwa', 'Bendoorwell'],
//     'belgaum': ['Tilakwadi', 'Camp', 'Angol', 'Hindalga', 'Shahapur', 'Club Road', 'Vadgaon', 'Nehru Nagar'],
//     'gulbarga': ['Jewargi Road', 'Super Market', 'Humnabad Road', 'Sedam Road', 'Station Road', 'BRIMS', 'Gunj', 'Kalaburagi'],
//     'davanagere': ['PJ Extension', 'Shivaji Nagar', 'Vidyanagar', 'MCC B Block', 'Azad Nagar', 'Lokikere Road', 'Avaragere', 'Shamanur'],
//     'bellary': ['Gandhi Nagar', 'Cowl Bazaar', 'Cantonment', 'Fort Area', 'Siruguppa Road', 'Hospet Road', 'Kurugodu', 'RCS'],

//     // Tamil Nadu
//     'chennai': ['Anna Nagar', 'T. Nagar', 'Adyar', 'Velachery', 'OMR', 'Nungambakkam', 'Mylapore', 'Guindy'],
//     'coimbatore': ['Race Course', 'RS Puram', 'Saibaba Colony', 'Gandhipuram', 'Peelamedu', 'Avinashi Road', 'Singanallur', 'Vadavalli'],
//     'madurai': ['Anna Nagar', 'KK Nagar', 'Goripalayam', 'Sellur', 'SS Colony', 'Arapalayam', 'Pasumalai', 'Thiruparankundram'],
//     'tiruchirappalli': ['Cantonment', 'Srirangam', 'Thillai Nagar', 'Anna Nagar', 'KK Nagar', 'Golden Rock', 'Ariyamangalam', 'Ponmalai'],
//     'salem': ['Five Roads', 'Fairlands', 'Anna Nagar', 'Suramangalam', 'Sankari Main Road', 'Shevapet', 'Ammapet', 'Hasthampatti'],
//     'tirunelveli': ['Palayamkottai', 'Town', 'Melapalayam', 'High Ground', 'Vannarpet', 'Junction', 'Kalakad Road', 'Thatchanallur'],
//     'tiruppur': ['Kumaran Road', 'Avinashi Road', 'Palladam Road', 'Kangeyam Road', 'Udumalpet Road', 'Dharapuram Road', 'Angeripalayam', 'Veerapandi'],
//     'vellore': ['Katpadi', 'Gandhinagar', 'Sathuvachari', 'Anna Salai', 'Bagayam', 'Kavanur', 'Ida Scudder', 'Virupakshipuram'],

//     // Gujarat
//     'ahmedabad': ['Navrangpura', 'Satellite', 'Vastrapur', 'Bopal', 'Prahlad Nagar', 'SG Highway', 'Maninagar', 'Ghatlodia'],
//     'surat': ['Adajan', 'Vesu', 'Ghod Dod Road', 'Citylight', 'Piplod', 'Nanpura', 'Rander Road', 'Althan'],
//     'vadodara': ['Alkapuri', 'Fatehgunj', 'Akota', 'Gotri', 'Manjalpur', 'Sama', 'Karelibaug', 'Vasna Road'],
//     'rajkot': ['University Road', 'Kalawad Road', 'Raiya Road', 'Yagnik Road', 'Race Course', 'Mavdi', 'Gondal Road', 'Sorathiyawadi'],
//     'bhavnagar': ['Crescent Circle', 'Waghawadi Road', 'Kalanala', 'Ghogha Circle', 'Rupani Circle', 'Nari Main Road', 'Surendra Nagar Road', 'Palitana Road'],
//     'jamnagar': ['Bedi Bunder', 'Teen Batti', 'Pandit Nehru Marg', 'Kalawad Road', 'Digvijay Plot', 'PM College Road', 'Patel Colony', 'Vardhman Nagar'],
//     'junagadh': ['Kalwa Chowk', 'Zanzarda Road', 'Joshipura', 'Girnar Road', 'MG Road', 'Railway Station Road', 'Sardar Nagar', 'Bhavnath Road'],
//     'gandhinagar': ['Sector 1', 'Sector 7', 'Sector 21', 'Sector 28', 'Infocity', 'Kudasan', 'Raysan', 'Kalol'],

//     // West Bengal
//     'kolkata': ['Salt Lake', 'Park Street', 'Ballygunge', 'Alipore', 'New Town', 'Rajarhat', 'Jadavpur', 'Behala'],
//     'howrah': ['Shibpur', 'Liluah', 'Bally', 'Belur', 'Sankrail', 'Botanical Garden', 'Kadamtala', 'Golap Bag'],
//     'durgapur': ['City Center', 'Benachity', 'Bidhannagar', 'Steel Township', 'Muchipara', 'Amra Ram', 'Sagarbhanga', 'A-Zone'],
//     'asansol': ['Burnpur', 'Ushagram', 'Kulti', 'Raniganj', 'Jamuria', 'Hirapur', 'Neamatpur', 'Barabani'],
//     'siliguri': ['Matigara', 'Pradhan Nagar', 'Darjeeling More', 'Sevoke Road', 'Hill Cart Road', 'Salugara', 'Bagdogra', 'Kawakhali'],
//     'malda': ['English Bazar', 'Old Malda', 'Gajole', 'Bamangola', 'Habibpur', 'Manikchak', 'Ratua', 'Gazole'],
//     'bardhaman': ['GT Road', 'Burdwan University', 'Nazrul Avenue', 'Golapbag', 'Rajbati', 'Station Road', 'Curzon Gate', 'Baburbag'],
//     'kharagpur': ['IIT Kharagpur', 'Malancha', 'Inda', 'Keshiary', 'Belda', 'Chandrakona', 'Sabang', 'Garhbeta'],

//     // Rajasthan
//     'jaipur': ['Malviya Nagar', 'Vaishali Nagar', 'Mansarovar', 'Jagatpura', 'C-Scheme', 'Civil Lines', 'Bani Park', 'Tonk Road'],
//     'jodhpur': ['Ratanada', 'Paota', 'Chopasni Road', 'Shastri Nagar', 'Sardarpura', 'Basni', 'Pal Road', 'Mandore Road'],
//     'kota': ['Vigyan Nagar', 'Dadabari', 'Mahaveer Nagar', 'Talwandi', 'Gumanpura', 'Civil Lines', 'Borkhera', 'Rangbari Road'],
//     'bikaner': ['Karni Nagar', 'Rani Bazar', 'Kote Gate', 'Ganga Nagar', 'Sadul Ganj', 'Jail Road', 'Pugal Road', 'Station Road'],
//     'ajmer': ['Vaishali Nagar', 'Civil Lines', 'Nasirabad', 'Kaiser Ganj', 'Dargah Sharif', 'Pushkar Road', 'Jaipur Road', 'Beawar Road'],
//     'udaipur': ['Fateh Sagar', 'City Palace', 'Sukhadia Circle', 'Hiran Magri', 'Sector 4', 'Shobhagpura', 'Sector 14', 'Ashok Nagar'],
//     'bhilwara': ['Sanganer Gate', 'Tilak Nagar', 'Subhash Nagar', 'Pur Road', 'Pratap Nagar', 'Gandhi Nagar', 'Shastri Circle', 'Azad Nagar'],
//     'alwar': ['Company Bagh', 'Arya Nagar', 'Shivaji Park', 'Malakhera Gate', 'Railway Station', 'Maccheri Gate', 'Hope Circus', 'Delhi Gate'],

//     // Additional cities from other states that need locality data
//     // Andhra Pradesh
//     'visakhapatnam': ['Beach Road', 'MVP Colony', 'Gajuwaka', 'Madhurawada', 'Rushikonda', 'Siripuram', 'Dwaraka Nagar', 'Akkayyapalem'],
//     'vijayawada': ['Benz Circle', 'Labbipet', 'Governorpet', 'One Town', 'Patamata', 'Bhavanipuram', 'Krishna Lanka', 'Gollapudi'],
//     'guntur': ['Brodipet', 'Kothapet', 'Arundelpet', 'Lakshmipuram', 'Vidyanagar', 'Chandramouli Nagar', 'Syamala Nagar', 'Nagarampalem'],
//     'nellore': ['Vedayapalem', 'Magunta Layout', 'Dargamitta', 'Stonehousepet', 'Ramamurthy Nagar', 'Balaji Nagar', 'Gandhi Nagar', 'Mini Bypass'],
//     'kurnool': ['Ballari Road', 'Kothapet', 'Railway Station Area', 'Forest College', 'General Hospital', 'Panyam Road', 'Nandyal Road', 'Bellary Road'],
//     'rajahmundry': ['Danavaipeta', 'T.Nagar', 'Innispeta', 'Morampudi', 'Lalacheruvu', 'Seetharampuram', 'Ramaraopet', 'Ananda Rao Circle'],
//     'tirupati': ['Renigunta Road', 'Air Bypass Road', 'Korlagunta', 'Tiruchanur', 'Red Hills', 'Balaji Colony', 'Leela Mahal', 'Ramachandra Nagar'],
//     'kadapa': ['Bypass Road', 'Jillelguda', 'R.K.Puram', 'Rayachoti', 'Gandhi Nagar', 'Prakasham Nagar', 'Railway Station', 'Ganganamma Temple'],

//     // Assam
//     'guwahati': ['Paltan Bazaar', 'Fancy Bazaar', 'Ganeshguri', 'Dispur', 'Ulubari', 'Pan Bazaar', 'Zoo Road', 'Maligaon'],
//     'silchar': ['Rangirkhari', 'Link Road', 'Tarapur', 'Ambicapatty', 'National Institute of Technology', 'Meherpur', 'Rongpur', 'Hospital Road'],
//     'dibrugarh': ['Mancotta Road', 'Graham Bazaar', 'Naliapool', 'Lahowal', 'New Market', 'Jhalukpara', 'Amolapatty', 'Naharkatiya Road'],
//     'jorhat': ['AT Road', 'Garmur', 'Cinnamara', 'Pulibor', 'Gar-Ali', 'Bhogdoi', 'Titabor Road', 'Teok'],
//     'nagaon': ['Haibargaon', 'Kampur', 'Jakhalabandha', 'Bamunimaidam', 'Lanka', 'Pub-Kampur', 'Kachari Gaon', 'Chaparmukh'],
//     'tinsukia': ['Rangaghar Road', 'AT Road', 'Makum Road', 'Bordoloi Nagar', 'Rangapara', 'Sadiya Road', 'Railway Station', 'Oil India'],
//     'tezpur': ['Main Road', 'Mission Chariali', 'Mahabhairab', 'College Road', 'Bebejia', 'Nikamul', 'KB Road', 'Da-Parbatia'],
//     'bongaigaon': ['Ward No 1', 'Ward No 2', 'Ward No 3', 'Ward No 4', 'Railway Colony', 'North Salmara', 'Jogighopa', 'Abhayapuri'],

//     // Bihar
//     'patna': ['Boring Road', 'Fraser Road', 'Kankarbagh', 'Rajendra Nagar', 'Patna City', 'Danapur', 'Patliputra', 'Phulwari Sharif'],
//     'gaya': ['Station Road', 'Civil Lines', 'Ramna Road', 'College Road', 'Manpur', 'Dobhi', 'Magadh University', 'Tekari'],
//     'bhagalpur': ['Nathnagar', 'Adampur', 'Ghantaghar', 'Sabaur', 'Barari', 'Mirjanhat', 'Sultanganj Road', 'Champanagar'],
//     'muzaffarpur': ['Kazi Mohalla', 'Jubba Sahni Park', 'Saraiyaganj', 'Kalyani', 'Motipur', 'Ahiyapur', 'Mithanpura', 'Brahmapura'],
//     'purnia': ['Hospital Road', 'Line Bazar', 'Khuskibagh', 'Gulabbagh', 'Madhubani Chowk', 'Pumphery Hill', 'Jalalgarh', 'Ranipatra'],
//     'darbhanga': ['Donar', 'Laheriasarai', 'Manigachhi', 'Town Thana', 'Biraul', 'Tardih', 'Keotia', 'Kusheshwar'],
//     'bihar-sharif': ['Hilsa Road', 'Pawapuri Road', 'Sheikhpura Road', 'Rajgir Road', 'Belar Road', 'Nalanda Medical College', 'Biharsharif University', 'Railway Station'],
//     'arrah': ['Station Road', 'Civil Lines', 'Shahpur', 'Agiaon', 'Koelwar', 'Sandesh', 'Dumraon', 'Buxar Road'],

//     // Chhattisgarh
//     'raipur': ['Civil Lines', 'Shankar Nagar', 'Samta Colony', 'Telibandha', 'Tatibandh', 'New Rajendra Nagar', 'Devendra Nagar', 'Avanti Vihar'],
//     'bhilai': ['Sector 1', 'Sector 6', 'Sector 7', 'Sector 9', 'Supela', 'Smriti Nagar', 'Risali', 'Khursipar'],
//     'korba': ['Transport Nagar', 'Civil Lines', 'Power House', 'Banki Mongra', 'Katghora Road', 'Dipka', 'Gevra', 'Pali'],
//     'bilaspur': ['Civil Lines', 'Vyapar Vihar', 'Sarkanda', 'Link Road', 'Seepat Road', 'Ratanpur', 'Korba Road', 'Sakri'],
//     'durg': ['Supela', 'City Kotwali', 'Durg Railway Station', 'Power House', 'Borsi', 'Padmanabhpur', 'Kumhari', 'Tandula'],
//     'rajnandgaon': ['Civil Lines', 'Ganj Ward', 'Lalbagh', 'Budha Talab', 'Khairagarh Road', 'Station Road', 'Dongargarh Road', 'Ambagarh Chowki'],
//     'jagdalpur': ['Station Road', 'Dharampura', 'Kumharpara', 'Nagarnaar', 'Bastar', 'Dimrapal', 'Kotwali', 'Hospital Road'],
//     'raigarh': ['Station Road', 'Kharsia Road', 'Gharghoda Road', 'Power House', 'Civil Lines', 'Sarangarh Road', 'Lailunga Road', 'Pathalgaon Road'],

//     // Goa
//     'panaji': ['Altinho', 'Fontainhas', 'Miramar', 'Dona Paula', 'Caranzalem', 'Taleigao', 'Betim', 'Ribandar'],
//     'margao': ['Fatorda', 'Navelim', 'Aquem', 'Comba', 'Pajifond', 'Gogol', 'Raia', 'Nuvem'],
//     'vasco-da-gama': ['Baina', 'Chicalim', 'Bogmalo', 'Dabolim', 'Cortalim', 'Sancoale', 'Cansaulim', 'Majorda'],
//     'mapusa': ['Duler', 'Guirim', 'Porvorim', 'Sangolda', 'Saligao', 'Candolim', 'Calangute', 'Assagao'],
//     'ponda': ['Farmagudi', 'Curti', 'Kundaim', 'Shiroda', 'Bandora', 'Priol', 'Borim', 'Usgao'],
//     'bicholim': ['Mayem', 'Lamgao', 'Pale', 'Navelim', 'Sanquelim', 'Adpoi', 'Maulinguem', 'Piligao'],
//     'curchorem': ['Sanvordem', 'Quepem', 'Paroda', 'Xeldem', 'Rivona', 'Bali', 'Morpirla', 'Chandor'],
//     'sanquelim': ['Maulinguem', 'Adpoi', 'Piligao', 'Poriem', 'Dargalim', 'Thivim', 'Velguem', 'Pilgao'],

//     // Additional states will be added as needed...
//     'default': ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5', 'Area 6', 'Area 7', 'Area 8'] // Default localities for cities without specific data
//   };

//   // Update localities when city changes
//   const updateLocalitiesForCity = (cityValue) => {
//     console.log('Selected city:', cityValue); // Debug log
//     const localities = cityLocalitiesData[cityValue] || cityLocalitiesData['default'] || [];
//     console.log('Available localities:', localities); // Debug log
//     setAvailableLocalities(localities);
//     // Clear locality selection when city changes
//     setFormData(prev => ({
//       ...prev,
//       locality: ''
//     }));
//   };

//   // Get proper city name for display
//   const getCityDisplayName = () => {
//     if (!formData.city || !formData.state) return '';
//     const stateKey = formData.state;
//     const cityKey = formData.city;
//     const citiesForState = stateCitiesData[stateKey] || [];
//     return citiesForState.find(city => 
//       city.toLowerCase().replace(/\s+/g, '-') === cityKey
//     ) || cityKey.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
//   };

//   // Update cities when state changes
//   const updateCitiesForState = (stateValue) => {
//     const cities = stateCitiesData[stateValue] || [];
//     setAvailableCities(cities);
//     // Clear city selection when state changes
//     setFormData(prev => ({
//       ...prev,
//       city: ''
//     }));
//   };

//   // Validation functions
//   const validateStep1 = () => {
//     const stepErrors = {};
//     if (!formData.propertyFor) stepErrors.propertyFor = 'Property For is required';
//     if (!formData.state) stepErrors.state = 'State is required';
//     if (!formData.city) stepErrors.city = 'City is required';
//     if (formData.city && !formData.locality) stepErrors.locality = 'Locality is required';
//     return stepErrors;
//   };

//   const validateStep2 = () => {
//     const stepErrors = {};
//     if (!formData.propertyType) stepErrors.propertyType = 'Property Type is required';
//     if (!formData.bhkType) stepErrors.bhkType = 'BHK Type is required';
//     if (!formData.price) stepErrors.price = 'Price is required';
//     if (formData.price && formData.price <= 0) stepErrors.price = 'Price must be greater than 0';
//     return stepErrors;
//   };

//   const validateStep3 = () => {
//     const stepErrors = {};
//     if (!formData.description.trim()) stepErrors.description = 'Property description is required';
//     return stepErrors;
//   };

//   const validateStep4 = () => {
//     // Step 4 is optional but should have meaningful content to be considered "complete"
//     const stepErrors = {};
    
//     // Check if user has provided any amenities
//     const hasAmenities = formData.amenities && formData.amenities.length > 0;
//     // Check if user has provided landmarks
//     const hasLandmarks = formData.nearbyLandmarks && formData.nearbyLandmarks.trim().length > 0;
    
//     // For completion, we'll make it lenient - if user has filled ANY content in step 4, consider it complete
//     // This makes the step truly optional while still encouraging completion
//     if (!hasAmenities && !hasLandmarks) {
//       // Don't add errors for truly optional step, just return empty for incomplete
//       // Step will be marked as incomplete but won't prevent form submission
//     }
    
//     return stepErrors; // Always return empty - step 4 is optional
//   };

//   // Calculate property score
//   const calculatePropertyScore = () => {
//     let totalFields = 0;
//     let completedFields = 0;

//     // Step 1 fields
//     const step1Fields = ['propertyFor', 'state', 'city'];
//     step1Fields.forEach(field => {
//       totalFields++;
//       if (formData[field]) completedFields++;
//     });

//     // Optional step 1 fields
//     const step1OptionalFields = ['society', 'address'];
//     step1OptionalFields.forEach(field => {
//       totalFields++;
//       if (formData[field]) completedFields++;
//     });

//     // Step 2 fields
//     const step2Fields = ['propertyType', 'bhkType', 'price'];
//     step2Fields.forEach(field => {
//       totalFields++;
//       if (formData[field]) completedFields++;
//     });

//     // Optional step 2 fields
//     const step2OptionalFields = ['floor', 'totalFloors', 'builtUpArea'];
//     step2OptionalFields.forEach(field => {
//       totalFields++;
//       if (formData[field]) completedFields++;
//     });

//     // Step 3 fields
//     totalFields++;
//     if (formData.description.trim()) completedFields++;
    
//     // Images/videos
//     totalFields += 2;
//     if (formData.images.length > 0) completedFields++;
//     if (formData.videos.length > 0) completedFields++;

//     // Step 4 amenities
//     const amenityCount = Object.values(formData.amenities).filter(Boolean).length;
//     totalFields += 5; // Consider 5 key amenities
//     completedFields += Math.min(amenityCount, 5);

//     // Step 4 landmarks
//     const landmarkFields = Object.values(formData.landmarks).filter(val => val.trim()).length;
//     totalFields += 4;
//     completedFields += landmarkFields;

//     return Math.round((completedFields / totalFields) * 100);
//   };

//   // Check if step is completed
//   const isStepCompleted = (stepNumber) => {
//     switch (stepNumber) {
//       case 1:
//         return Object.keys(validateStep1()).length === 0;
//       case 2:
//         return Object.keys(validateStep2()).length === 0;
//       case 3:
//         return Object.keys(validateStep3()).length === 0;
//       case 4:
//         // For step 4, check if user has added meaningful content (amenities or landmarks)
//         const hasAmenities = formData.amenities && formData.amenities.length > 0;
//         const hasLandmarks = formData.nearbyLandmarks && formData.nearbyLandmarks.trim().length > 0;
//         return hasAmenities || hasLandmarks;
//       default:
//         return false;
//     }
//   };

//   // Get step status text
//   const getStepStatus = (stepNumber) => {
//     if (isStepCompleted(stepNumber)) {
//       return 'Completed';
//     }
//     if (currentStep === stepNumber) {
//       return 'In Progress';
//     }
//     if (currentStep > stepNumber) {
//       return 'Incomplete';
//     }
//     return 'Not Started';
//   };

//   useEffect(() => {
//     const score = calculatePropertyScore();
//     setPropertyScore(score);
    
//     // Update completed steps
//     const completed = [];
//     for (let i = 1; i <= 4; i++) {
//       if (isStepCompleted(i)) {
//         completed.push(i);
//       }
//     }
    
//     // Check if any new step was completed (for celebration effect)
//     const newlyCompleted = completed.filter(step => !completedSteps.includes(step));
//     if (newlyCompleted.length > 0) {
//       // Add a small celebration for each newly completed step
//       newlyCompleted.forEach(step => {
//         console.log(`🎉 Step ${step} completed!`);
//       });
//     }
    
//     setCompletedSteps(completed);
//   }, [formData, completedSteps]);

//   useEffect(() => {
//     // Initialize cities if state is already selected
//     if (formData.state) {
//       updateCitiesForState(formData.state);
//     }
//     // Initialize localities if city is already selected
//     if (formData.city) {
//       updateLocalitiesForCity(formData.city);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isAuthenticated()) {
//       navigate('/login');
//       return;
//     }
//     const user = getUserInfo();
//     setUserInfo(user);
//   }, [navigate]);

//   const handleLogout = async () => {
//     if (isLoggingOut) return;
//     setIsLoggingOut(true);
//     try {
//       await logout();
//       navigate('/login');
//     } catch (error) {
//       console.error('Logout error:', error);
//       window.location.href = '/login';
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
    
//     // Special handling for state change
//     if (name === 'state') {
//       updateCitiesForState(value);
//     }
    
//     // Special handling for city change
//     if (name === 'city') {
//       updateLocalitiesForCity(value);
//     }
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleAmenityChange = (amenity) => {
//     setFormData(prev => ({
//       ...prev,
//       amenities: {
//         ...prev.amenities,
//         [amenity]: !prev.amenities[amenity]
//       }
//     }));
//   };

//   const handleLandmarkChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       landmarks: {
//         ...prev.landmarks,
//         [name]: value
//       }
//     }));
//   };

//   const handleFileChange = (e, type) => {
//     const files = Array.from(e.target.files);
//     setFormData(prev => ({
//       ...prev,
//       [type]: files
//     }));
//   };

//   const nextStep = () => {
//     let stepErrors = {};
    
//     switch (currentStep) {
//       case 1:
//         stepErrors = validateStep1();
//         break;
//       case 2:
//         stepErrors = validateStep2();
//         break;
//       case 3:
//         stepErrors = validateStep3();
//         break;
//       case 4:
//         stepErrors = validateStep4();
//         break;
//     }
    
//     if (Object.keys(stepErrors).length > 0) {
//       setErrors(stepErrors);
//       return;
//     }
    
//     setErrors({});
//     if (currentStep < 4) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//       setErrors({}); // Clear errors when going back
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate all steps
//     const allErrors = {
//       ...validateStep1(),
//       ...validateStep2(),
//       ...validateStep3(),
//       ...validateStep4()
//     };
    
//     if (Object.keys(allErrors).length > 0) {
//       setErrors(allErrors);
//       // Go to first step with errors
//       for (let i = 1; i <= 4; i++) {
//         const stepErrors = i === 1 ? validateStep1() : 
//                           i === 2 ? validateStep2() : 
//                           i === 3 ? validateStep3() : validateStep4();
//         if (Object.keys(stepErrors).length > 0) {
//           setCurrentStep(i);
//           break;
//         }
//       }
//       return;
//     }
    
//     try {
//       // Here you would submit to your API
//       console.log('Submitting property:', formData);
//       alert('Property submitted successfully!');
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error submitting property:', error);
//       alert('Error submitting property. Please try again.');
//     }
//   };

//   const steps = [
//     { number: 1, title: 'Property Info & Location', completed: completedSteps.includes(1) },
//     { number: 2, title: 'Property Features & Price', completed: completedSteps.includes(2) },
//     { number: 3, title: 'Describe Property, Images / Videos', completed: completedSteps.includes(3) },
//     { number: 4, title: 'Property Amenities & Land Mark', completed: completedSteps.includes(4) },
//   ];

//   if (!userInfo) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Top Navbar */}
//       <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-full px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Left side - Logo and Menu Toggle */}
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
//               >
//                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
              
//               <div className="flex items-center">
//                 <img className="h-8 w-auto" src="/logo.png" alt="99acres" />
//                 <span className="ml-2 text-xl font-bold text-blue-600">99acres</span>
//               </div>
//             </div>

//             {/* Center - Page Title */}
//             <div className="hidden md:block">
//               <h1 className="text-lg font-semibold text-gray-900">Post Property</h1>
//             </div>

//             {/* Right side - User Menu */}
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="flex items-center space-x-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
//                 >
//                   <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
//                     <span className="text-white font-medium">
//                       {userInfo?.first_name?.charAt(0) || 'U'}
//                     </span>
//                   </div>
//                   <span className="hidden md:block text-gray-700">
//                     {userInfo?.first_name || 'User'}
//                   </span>
//                   <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>

//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
//                     <div className="py-1">
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         onClick={() => {
//                           navigate('/dashboard');
//                           setDropdownOpen(false);
//                         }}
//                       >
//                         Dashboard
//                       </a>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         onClick={() => setDropdownOpen(false)}
//                       >
//                         Profile
//                       </a>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         onClick={() => {
//                           handleLogout();
//                           setDropdownOpen(false);
//                         }}
//                       >
//                         Logout
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="flex">
//         {/* Sidebar */}
//         <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
//           sidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}>
//           <div className="flex flex-col h-full pt-16 lg:pt-0">
//             {/* Sidebar Header */}
//             <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
//               <span className="text-lg font-semibold text-gray-900">Menu</span>
//               <button
//                 onClick={() => setSidebarOpen(false)}
//                 className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//               >
//                 <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {/* Sidebar Navigation */}
//             <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
//               <button
//                 onClick={() => navigate('/dashboard')}
//                 className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
//               >
//                 <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
//                 </svg>
//                 Dashboard
//               </button>

//               <div className="space-y-1">
//                 <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
//                   Properties
//                 </div>
//                 <button
//                   className="w-full flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md"
//                 >
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                   </svg>
//                   Post Property
//                 </button>
//                 <button
//                   onClick={() => navigate('/dashboard')}
//                   className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
//                 >
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                   </svg>
//                   Manage Properties
//                 </button>
//               </div>

//               <div className="space-y-1">
//                 <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
//                   Leads & Enquiries
//                 </div>
//                 <button
//                   onClick={() => navigate('/dashboard')}
//                   className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
//                 >
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                   </svg>
//                   Enquiries
//                 </button>
//                 <button
//                   onClick={() => navigate('/dashboard')}
//                   className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
//                 >
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                   </svg>
//                   Property Leads
//                 </button>
//               </div>

//               <div className="space-y-1">
//                 <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
//                   Account
//                 </div>
//                 <button
//                   onClick={() => navigate('/dashboard')}
//                   className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
//                 >
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                   Profile
//                 </button>
//                 <button
//                   onClick={() => navigate('/dashboard')}
//                   className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
//                 >
//                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Subscription
//                 </button>
//               </div>
//             </nav>

//             {/* Sidebar Footer */}
//             <div className="border-t border-gray-200 p-4">
//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors duration-150"
//               >
//                 <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
//                 </svg>
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar Overlay for mobile */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           ></div>
//         )}

//         {/* Main Content Area */}
//         <div className="flex-1 lg:ml-0">
//           {/* Main Content */}
//           <main className="max-w-8xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
//         {/* Page Header */}
//         <div className="mb-6 sm:mb-8">
//           <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Post your Property</h1>
          
//           {/* Property Score Progress */}
//           <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
//             <div className="flex items-center mb-2">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                 <span className="text-lg font-bold text-blue-600">{propertyScore}%</span>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-900">Property Score</h3>
//                 <p className="text-sm text-gray-600">
//                   (Follow these <span className="font-semibold text-blue-600">4 simple steps</span> to post your property and get better responses.)
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form Content */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//           {/* Step 1: Property Info & Location */}
//           {currentStep === 1 && (
//             <div>
//               {/* Step Header */}
//               <div className="bg-blue-50 px-4 sm:px-6 py-4 border-b border-gray-200">
//                 <div className="flex flex-col sm:flex-row sm:items-center">
//                   <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-3 ${
//                       completedSteps.includes(1) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
//                     }`}>
//                       {completedSteps.includes(1) ? '✓' : '1'}
//                     </div>
//                     <h2 className="text-lg font-semibold text-gray-900">Property Info & Location</h2>
//                   </div>
//                   <div className="flex-1 bg-gray-300 rounded-full h-2 sm:ml-4">
//                     <div 
//                       className={`h-2 rounded-full transition-all duration-300 ${
//                         completedSteps.includes(1) ? 'bg-green-500' : 'bg-blue-500'
//                       }`}
//                       style={{ width: completedSteps.includes(1) ? '100%' : `${Math.min(Object.keys(validateStep1()).length === 0 ? 100 : 25, 100)}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Form Content */}
//               <div className="p-4 sm:p-6">
//                 {/* Property Location Container */}
//                 <div className="border border-gray-200 rounded-lg p-4 sm:p-6 bg-gray-50">
//                   <h3 className="text-base font-medium text-gray-900 mb-6">Property Location:</h3>
                  
//                   <div className="space-y-6">
//                     {/* Property For Row */}
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
//                       <div className="lg:col-span-3">
//                         <label className="text-sm font-medium text-gray-700 flex items-center">
//                           Property For <span className="text-red-500 ml-1">*</span>
//                         </label>
//                       </div>
//                       <div className="lg:col-span-9">
//                         <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
//                           {['Sell', 'Rent/Lease'].map((option) => (
//                             <label key={option} className="flex items-center">
//                               <input
//                                 type="radio"
//                                 name="propertyFor"
//                                 value={option}
//                                 checked={formData.propertyFor === option}
//                                 onChange={handleInputChange}
//                                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
//                               />
//                               <span className="ml-2 text-sm text-gray-700">{option}</span>
//                             </label>
//                           ))}
//                         </div>
//                         {errors.propertyFor && (
//                           <p className="mt-1 text-sm text-red-600">{errors.propertyFor}</p>
//                         )}
//                       </div>
//                     </div>

//                     {/* State Row */}
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
//                       <div className="lg:col-span-3">
//                         <label className="text-sm font-medium text-gray-700 flex items-center">
//                           State <span className="text-red-500 ml-1">*</span>
//                         </label>
//                       </div>
//                       <div className="lg:col-span-9">
//                         <div className="relative">
//                           <select
//                             name="state"
//                             value={formData.state}
//                             onChange={handleInputChange}
//                             className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none ${
//                               errors.state ? 'border-red-500' : 'border-gray-300'
//                             }`}
//                           >
//                             <option value="">Select State</option>
//                             <option value="andhra-pradesh">Andhra Pradesh</option>
//                             <option value="arunachal-pradesh">Arunachal Pradesh</option>
//                             <option value="assam">Assam</option>
//                             <option value="bihar">Bihar</option>
//                             <option value="chhattisgarh">Chhattisgarh</option>
//                             <option value="goa">Goa</option>
//                             <option value="gujarat">Gujarat</option>
//                             <option value="haryana">Haryana</option>
//                             <option value="himachal-pradesh">Himachal Pradesh</option>
//                             <option value="jharkhand">Jharkhand</option>
//                             <option value="karnataka">Karnataka</option>
//                             <option value="kerala">Kerala</option>
//                             <option value="madhya-pradesh">Madhya Pradesh</option>
//                             <option value="maharashtra">Maharashtra</option>
//                             <option value="manipur">Manipur</option>
//                             <option value="meghalaya">Meghalaya</option>
//                             <option value="mizoram">Mizoram</option>
//                             <option value="nagaland">Nagaland</option>
//                             <option value="odisha">Odisha</option>
//                             <option value="punjab">Punjab</option>
//                             <option value="rajasthan">Rajasthan</option>
//                             <option value="sikkim">Sikkim</option>
//                             <option value="tamil-nadu">Tamil Nadu</option>
//                             <option value="telangana">Telangana</option>
//                             <option value="tripura">Tripura</option>
//                             <option value="uttar-pradesh">Uttar Pradesh</option>
//                             <option value="uttarakhand">Uttarakhand</option>
//                             <option value="west-bengal">West Bengal</option>
//                             <option value="andaman-nicobar">Andaman and Nicobar Islands</option>
//                             <option value="chandigarh">Chandigarh</option>
//                             <option value="dadra-nagar-haveli">Dadra and Nagar Haveli and Daman and Diu</option>
//                             <option value="delhi">Delhi</option>
//                             <option value="jammu-kashmir">Jammu and Kashmir</option>
//                             <option value="ladakh">Ladakh</option>
//                             <option value="lakshadweep">Lakshadweep</option>
//                             <option value="puducherry">Puducherry</option>
//                           </select>
//                           <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                             <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                             </svg>
//                           </div>
//                         </div>
//                         {errors.state && (
//                           <p className="mt-1 text-sm text-red-600">{errors.state}</p>
//                         )}
//                       </div>
//                     </div>

//                     {/* City Row */}
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
//                       <div className="lg:col-span-3">
//                         <label className="text-sm font-medium text-gray-700 flex items-center">
//                           City <span className="text-red-500 ml-1">*</span>
//                         </label>
//                       </div>
//                       <div className="lg:col-span-9">
//                         {formData.state ? (
//                           <div className="relative">
//                             <select
//                               name="city"
//                               value={formData.city}
//                               onChange={handleInputChange}
//                               className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none ${
//                                 errors.city ? 'border-red-500' : 'border-gray-300'
//                               }`}
//                             >
//                               <option value="">Select City</option>
//                               {availableCities.map((city) => (
//                                 <option key={city} value={city.toLowerCase().replace(/\s+/g, '-')}>
//                                   {city}
//                                 </option>
//                               ))}
//                             </select>
//                             <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                               </svg>
//                             </div>
//                           </div>
//                         ) : (
//                           <input
//                             type="text"
//                             name="city"
//                             value=""
//                             disabled
//                             placeholder="Select a state first"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed"
//                           />
//                         )}
//                         {errors.city && (
//                           <p className="mt-1 text-sm text-red-600">{errors.city}</p>
//                         )}
//                         {formData.state && availableCities.length > 0 && (
//                           <p className="mt-1 text-xs text-gray-500">
//                             {availableCities.length} cities available for selected state
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     {/* Locality Row - Only show when city is selected */}
//                     {formData.city && (
//                       <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
//                         <div className="lg:col-span-3">
//                           <label className="text-sm font-medium text-gray-700 flex items-center">
//                             Locality <span className="text-red-500 ml-1">*</span>
//                           </label>
//                         </div>
//                         <div className="lg:col-span-9">
//                           {availableLocalities.length > 0 ? (
//                             <div className="relative">
//                               <select
//                                 name="locality"
//                                 value={formData.locality}
//                                 onChange={handleInputChange}
//                                 className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none ${
//                                   errors.locality ? 'border-red-500' : 'border-gray-300'
//                                 }`}
//                               >
//                                 <option value="">Select Locality</option>
//                                 {availableLocalities.map((locality) => (
//                                   <option key={locality} value={locality.toLowerCase().replace(/\s+/g, '-')}>
//                                     {locality}
//                                   </option>
//                                 ))}
//                               </select>
//                               <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                                 </svg>
//                               </div>
//                             </div>
//                           ) : (
//                             <input
//                               type="text"
//                               name="locality"
//                               value={formData.locality}
//                               onChange={handleInputChange}
//                               placeholder="Enter Locality"
//                               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                             />
//                           )}
//                           {errors.locality && (
//                             <p className="mt-1 text-sm text-red-600">{errors.locality}</p>
//                           )}
//                           {availableLocalities.length > 0 && (
//                             <p className="mt-1 text-xs text-gray-500">
//                               {availableLocalities.length} localities available for {getCityDisplayName()}
//                             </p>
//                           )}
//                         </div>
//                       </div>
//                     )}

//                     {/* Society/Apartment Row */}
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
//                       <div className="lg:col-span-3">
//                         <label className="text-sm font-medium text-gray-700">
//                           Society/Apartment
//                         </label>
//                       </div>
//                       <div className="lg:col-span-9">
//                         <input
//                           type="text"
//                           name="society"
//                           value={formData.society}
//                           onChange={handleInputChange}
//                           placeholder="Name of Apartment/Society"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       </div>
//                     </div>

//                     {/* Address Row */}
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
//                       <div className="lg:col-span-3">
//                         <label className="text-sm font-medium text-gray-700">
//                           Address
//                         </label>
//                       </div>
//                       <div className="lg:col-span-9">
//                         <input
//                           type="text"
//                           name="address"
//                           value={formData.address}
//                           onChange={handleInputChange}
//                           placeholder="Enter Property Address"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Navigation Buttons */}
//                 <div className="flex justify-end pt-6 mt-6">
//                   <button
//                     onClick={nextStep}
//                     className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-2 rounded-md font-medium transition-colors duration-200 flex items-center w-full sm:w-auto justify-center"
//                   >
//                     Save & Continue →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 2: Property Features & Price */}
//           {currentStep === 2 && (
//             <div>
//               {/* Step Header */}
//               <div className="bg-blue-50 px-4 sm:px-6 py-4 border-b border-gray-200">
//                 <div className="flex flex-col sm:flex-row sm:items-center">
//                   <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-3 ${
//                       completedSteps.includes(2) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
//                     }`}>
//                       {completedSteps.includes(2) ? '✓' : '2'}
//                     </div>
//                     <h2 className="text-lg font-semibold text-gray-900">Property Features & Price</h2>
//                   </div>
//                   <div className="flex-1 bg-gray-300 rounded-full h-2 sm:ml-4">
//                     <div 
//                       className={`h-2 rounded-full transition-all duration-300 ${
//                         completedSteps.includes(2) ? 'bg-green-500' : 'bg-blue-500'
//                       }`}
//                       style={{ width: completedSteps.includes(2) ? '100%' : `${Math.min(Object.keys(validateStep2()).length === 0 ? 100 : 25, 100)}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="p-4 sm:p-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Property Type */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Property Type <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       name="propertyType"
//                       value={formData.propertyType}
//                       onChange={handleInputChange}
//                       className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                         errors.propertyType ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                     >
//                       <option value="">Select Property Type</option>
//                       <option value="apartment">Apartment</option>
//                       <option value="house">House</option>
//                       <option value="villa">Villa</option>
//                       <option value="plot">Plot</option>
//                       <option value="commercial">Commercial</option>
//                     </select>
//                     {errors.propertyType && (
//                       <p className="mt-1 text-sm text-red-600">{errors.propertyType}</p>
//                     )}
//                   </div>

//                   {/* BHK Type */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       BHK Type <span className="text-red-500">*</span>
//                     </label>
//                     <select
//                       name="bhkType"
//                       value={formData.bhkType}
//                       onChange={handleInputChange}
//                       className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                         errors.bhkType ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                     >
//                       <option value="">Select BHK</option>
//                       <option value="1RK">1 RK</option>
//                       <option value="1BHK">1 BHK</option>
//                       <option value="2BHK">2 BHK</option>
//                       <option value="3BHK">3 BHK</option>
//                       <option value="4BHK">4 BHK</option>
//                       <option value="5+BHK">5+ BHK</option>
//                     </select>
//                     {errors.bhkType && (
//                       <p className="mt-1 text-sm text-red-600">{errors.bhkType}</p>
//                     )}
//                   </div>

//                   {/* Floor */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Floor</label>
//                     <input
//                       type="number"
//                       name="floor"
//                       value={formData.floor}
//                       onChange={handleInputChange}
//                       placeholder="Floor Number"
//                       min="0"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>

//                   {/* Total Floors */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Total Floors</label>
//                     <input
//                       type="number"
//                       name="totalFloors"
//                       value={formData.totalFloors}
//                       onChange={handleInputChange}
//                       placeholder="Total Floors"
//                       min="1"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>

//                   {/* Built Up Area */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Built Up Area (sq ft)</label>
//                     <input
//                       type="number"
//                       name="builtUpArea"
//                       value={formData.builtUpArea}
//                       onChange={handleInputChange}
//                       placeholder="Built Up Area"
//                       min="0"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>

//                   {/* Price */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Price <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="number"
//                       name="price"
//                       value={formData.price}
//                       onChange={handleInputChange}
//                       placeholder="Enter Price"
//                       min="0"
//                       className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                         errors.price ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                     />
//                     {errors.price && (
//                       <p className="mt-1 text-sm text-red-600">{errors.price}</p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Navigation Buttons */}
//                 <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 mt-6">
//                   <button
//                     onClick={prevStep}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-6 sm:px-8 py-2 rounded-md font-medium transition-colors duration-200 order-2 sm:order-1 w-full sm:w-auto"
//                   >
//                     ← Previous
//                   </button>
//                   <button
//                     onClick={nextStep}
//                     className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-2 rounded-md font-medium transition-colors duration-200 order-1 sm:order-2 w-full sm:w-auto"
//                   >
//                     Save & Continue →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 3: Describe Property, Images / Videos */}
//           {currentStep === 3 && (
//             <div>
//               {/* Step Header */}
//               <div className="bg-blue-50 px-4 sm:px-6 py-4 border-b border-gray-200">
//                 <div className="flex flex-col sm:flex-row sm:items-center">
//                   <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-3 ${
//                       completedSteps.includes(3) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
//                     }`}>
//                       {completedSteps.includes(3) ? '✓' : '3'}
//                     </div>
//                     <h2 className="text-lg font-semibold text-gray-900">Describe Property, Images / Videos</h2>
//                   </div>
//                   <div className="flex-1 bg-gray-300 rounded-full h-2 sm:ml-4">
//                     <div 
//                       className={`h-2 rounded-full transition-all duration-300 ${
//                         completedSteps.includes(3) ? 'bg-green-500' : 'bg-blue-500'
//                       }`}
//                       style={{ width: completedSteps.includes(3) ? '100%' : `${Math.min(Object.keys(validateStep3()).length === 0 ? 100 : 25, 100)}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="p-4 sm:p-6">
//                 <div className="space-y-6">
//                   {/* Description */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Property Description <span className="text-red-500">*</span>
//                     </label>
//                     <textarea
//                       name="description"
//                       value={formData.description}
//                       onChange={handleInputChange}
//                       rows="6"
//                       placeholder="Describe your property..."
//                       className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                         errors.description ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                     ></textarea>
//                     {errors.description && (
//                       <p className="mt-1 text-sm text-red-600">{errors.description}</p>
//                     )}
//                   </div>

//                   {/* Images Upload */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Property Images
//                     </label>
//                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-blue-400 transition-colors duration-200">
//                       <svg className="mx-auto h-8 sm:h-12 w-8 sm:w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
//                         <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                       </svg>
//                       <div className="mt-4">
//                         <label htmlFor="images" className="cursor-pointer">
//                           <span className="mt-2 block text-sm font-medium text-gray-900">
//                             Upload Property Images
//                           </span>
//                           <input 
//                             id="images" 
//                             name="images" 
//                             type="file" 
//                             className="sr-only" 
//                             multiple 
//                             accept="image/*"
//                             onChange={(e) => handleFileChange(e, 'images')}
//                           />
//                         </label>
//                         <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
//                       </div>
//                       {formData.images.length > 0 && (
//                         <div className="mt-4">
//                           <p className="text-sm text-green-600">{formData.images.length} file(s) selected</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Videos Upload */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Property Videos (Optional)
//                     </label>
//                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-blue-400 transition-colors duration-200">
//                       <svg className="mx-auto h-8 sm:h-12 w-8 sm:w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                       </svg>
//                       <div className="mt-4">
//                         <label htmlFor="videos" className="cursor-pointer">
//                           <span className="mt-2 block text-sm font-medium text-gray-900">
//                             Upload Property Videos
//                           </span>
//                           <input 
//                             id="videos" 
//                             name="videos" 
//                             type="file" 
//                             className="sr-only" 
//                             multiple 
//                             accept="video/*"
//                             onChange={(e) => handleFileChange(e, 'videos')}
//                           />
//                         </label>
//                         <p className="mt-1 text-xs text-gray-500">MP4, MOV up to 50MB each</p>
//                       </div>
//                       {formData.videos.length > 0 && (
//                         <div className="mt-4">
//                           <p className="text-sm text-green-600">{formData.videos.length} file(s) selected</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Navigation Buttons */}
//                 <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 mt-6">
//                   <button
//                     onClick={prevStep}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-6 sm:px-8 py-2 rounded-md font-medium transition-colors duration-200 order-2 sm:order-1 w-full sm:w-auto"
//                   >
//                     ← Previous
//                   </button>
//                   <button
//                     onClick={nextStep}
//                     className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-2 rounded-md font-medium transition-colors duration-200 order-1 sm:order-2 w-full sm:w-auto"
//                   >
//                     Save & Continue →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 4: Property Amenities & Land Mark */}
//           {currentStep === 4 && (
//             <div>
//               {/* Step Header */}
//               <div className="bg-blue-50 px-4 sm:px-6 py-4 border-b border-gray-200">
//                 <div className="flex flex-col sm:flex-row sm:items-center">
//                   <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-3 ${
//                       completedSteps.includes(4) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
//                     }`}>
//                       {completedSteps.includes(4) ? '✓' : '4'}
//                     </div>
//                     <h2 className="text-lg font-semibold text-gray-900">Property Amenities & Land Mark</h2>
//                   </div>
//                   <div className="flex-1 bg-gray-300 rounded-full h-2 sm:ml-4">
//                     <div 
//                       className={`h-2 rounded-full transition-all duration-300 ${
//                         completedSteps.includes(4) ? 'bg-green-500' : 'bg-blue-500'
//                       }`}
//                       style={{ width: completedSteps.includes(4) ? '100%' : `${Math.min(Object.keys(validateStep4()).length === 0 ? 100 : 25, 100)}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="p-4 sm:p-6">
//                 <div className="space-y-8">
//                   {/* Amenities */}
//                   <div>
//                     <h3 className="text-lg font-medium text-gray-900 mb-4">Amenities</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {Object.entries(formData.amenities).map(([key, value]) => (
//                         <label key={key} className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
//                           <input
//                             type="checkbox"
//                             checked={value}
//                             onChange={() => handleAmenityChange(key)}
//                             className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                           />
//                           <span className="ml-3 text-sm text-gray-700 capitalize">
//                             {key.replace(/([A-Z])/g, ' $1').trim()}
//                           </span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Landmarks */}
//                   <div>
//                     <h3 className="text-lg font-medium text-gray-900 mb-4">Nearby Landmarks</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Nearest School
//                         </label>
//                         <input
//                           type="text"
//                           name="nearestSchool"
//                           value={formData.landmarks.nearestSchool}
//                           onChange={handleLandmarkChange}
//                           placeholder="School name and distance"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Nearest Hospital
//                         </label>
//                         <input
//                           type="text"
//                           name="nearestHospital"
//                           value={formData.landmarks.nearestHospital}
//                           onChange={handleLandmarkChange}
//                           placeholder="Hospital name and distance"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Nearest Market
//                         </label>
//                         <input
//                           type="text"
//                           name="nearestMarket"
//                           value={formData.landmarks.nearestMarket}
//                           onChange={handleLandmarkChange}
//                           placeholder="Market name and distance"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Public Transport
//                         </label>
//                         <input
//                           type="text"
//                           name="publicTransport"
//                           value={formData.landmarks.publicTransport}
//                           onChange={handleLandmarkChange}
//                           placeholder="Metro/Bus stop distance"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Navigation Buttons */}
//                 <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 mt-6">
//                   <button
//                     onClick={prevStep}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-6 sm:px-8 py-2 rounded-md font-medium transition-colors duration-200 order-2 sm:order-1 w-full sm:w-auto"
//                   >
//                     ← Previous
//                   </button>
//                   <button
//                     onClick={handleSubmit}
//                     className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-2 rounded-md font-medium transition-colors duration-200 order-1 sm:order-2 w-full sm:w-auto"
//                   >
//                     Submit Property
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Step Progress Bar - Below Form */}
//         <div className="mt-8 bg-white rounded-lg shadow-sm p-4 sm:p-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Overview</h3>
//           <div className="space-y-4">
//             {steps.map((step, index) => (
//               <div key={step.number} className="flex items-center">
//                 <div className="flex items-center min-w-0 flex-1">
//                   <div className="flex items-center mr-3">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
//                       step.completed ? 'bg-green-500 text-white' : 
//                       currentStep === step.number ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
//                     }`}>
//                       {step.completed ? '✓' : step.number}
//                     </div>
//                     <div className="ml-3">
//                       <div className="text-sm font-medium text-gray-900">Step {step.number}</div>
//                       <div className={`text-xs ${
//                         step.completed ? 'text-green-600' : 
//                         currentStep === step.number ? 'text-blue-600' : 'text-gray-500'
//                       }`}>
//                         {getStepStatus(step.number)}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex-1 mx-3">
//                     <div className="text-sm font-medium text-gray-900 mb-1">{step.title}</div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div 
//                         className={`h-2 rounded-full transition-all duration-300 ${
//                           step.completed ? 'bg-green-500' : 
//                           currentStep === step.number ? 'bg-blue-500' : 'bg-gray-300'
//                         }`}
//                         style={{ 
//                           width: step.completed ? '100%' : 
//                                  currentStep === step.number ? '50%' : '0%'
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="ml-3 text-xs text-gray-500">
//                     {step.completed ? '100%' : currentStep === step.number ? 'In Progress' : '0%'}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Overall Progress Summary */}
//           <div className="mt-6 pt-4 border-t border-gray-200">
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-sm font-medium text-gray-900">Overall Progress</span>
//               <span className="text-sm text-gray-600">{completedSteps.length}/4 Steps Completed</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-3">
//               <div 
//                 className="h-3 bg-green-500 rounded-full transition-all duration-300" 
//                 style={{ width: `${(completedSteps.length / 4) * 100}%` }}
//               ></div>
//             </div>
//             <div className="mt-2 text-center">
//               <span className="text-lg font-bold text-green-600">{Math.round((completedSteps.length / 4) * 100)}%</span>
//               <span className="text-sm text-gray-500 ml-1">Complete</span>
//             </div>
//           </div>
//         </div>
//           </main>

//           {/* Footer */}
//           <UpperFooter />
//           <LowerFooter />
//         </div>
//       </div>
      
//       {/* Close dropdown when clicking outside */}
//       {(dropdownOpen || propertiesDropdownOpen) && (
//         <div 
//           className="fixed inset-0 z-40" 
//           onClick={() => {
//             setDropdownOpen(false);
//             setPropertiesDropdownOpen(false);
//           }}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Post_Property;
















import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Replace these with actual API utility imports in your project
// import { getUserInfo, isAuthenticated, logout } from '../../utils/api';

const PostPropertyIntegration = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({ first_name: "User" }); // Replace with real user fetch
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyFor: 'Sell',
    state: '',
    city: '',
    locality: '',
    // ...Add all other fields as needed for integration
  });
  const [errors, setErrors] = useState({});
  const [availableCities, setAvailableCities] = useState([]);
  const [availableLocalities, setAvailableLocalities] = useState([]);
  const [propertyScore, setPropertyScore] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const stateCitiesData = {
    'uttar-pradesh': ['Lucknow', 'Kanpur'],
    'maharashtra': ['Mumbai', 'Pune'],
  };
  const cityLocalitiesData = {
    'lucknow': ['Gomti Nagar', 'Hazratganj'],
    'kanpur': ['Civil Lines', 'Swaroop Nagar'],
    'mumbai': ['Bandra', 'Andheri'],
    'pune': ['Baner', 'Kothrud'],
    'default': ['Area 1', 'Area 2']
  };

  // Simulate authentication and user info
  useEffect(() => {
    // Replace with isAuthenticated() and getUserInfo() for real integration
    setUserInfo({ first_name: "Ajay" });
  }, []);

  // Update city list when state changes
  const updateCitiesForState = (stateValue) => {
    setAvailableCities(stateCitiesData[stateValue] || []);
    setFormData(prev => ({ ...prev, city: '', locality: '' }));
    setAvailableLocalities([]);
  };

  // Update locality list when city changes
  const updateLocalitiesForCity = (cityValue) => {
    setAvailableLocalities(cityLocalitiesData[cityValue.toLowerCase()] || cityLocalitiesData['default']);
    setFormData(prev => ({ ...prev, locality: '' }));
  };

  // Property score calculation (simple for demo)
  useEffect(() => {
    let score = 0;
    if (formData.propertyFor) score += 25;
    if (formData.state) score += 25;
    if (formData.city) score += 25;
    if (formData.locality) score += 25;
    setPropertyScore(score);
    setCompletedSteps(score === 100 ? [1] : []);
  }, [formData]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'state') updateCitiesForState(value);
    if (name === 'city') updateLocalitiesForCity(value);
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  // Step 1 validation
  const validateStep1 = () => {
    const errs = {};
    if (!formData.propertyFor) errs.propertyFor = 'Property For is required';
    if (!formData.state) errs.state = 'State is required';
    if (!formData.city) errs.city = 'City is required';
    if (!formData.locality) errs.locality = 'Locality is required';
    return errs;
  };

  // Next step handler (only step 1 for now)
  const nextStep = () => {
    const stepErrors = validateStep1();
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    // setCurrentStep(currentStep + 1); // Uncomment for multiple steps
    alert('Step 1 completed! Integrate API/next step as required.');
  };

  // Submit handler (demo)
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
    // Add API integration for final submit here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="flex items-center">
                <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
                <span className="ml-2 text-xl font-bold text-blue-600">99acres</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
                >
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-medium">
                      {userInfo?.first_name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <span className="hidden md:block text-gray-700">{userInfo?.first_name || 'User'}</span>
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-16 lg:pt-0">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
              <span className="text-lg font-semibold text-gray-900">Menu</span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150">Dashboard</button>
              <div className="space-y-1">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Properties</div>
                <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">Post Property</button>
                <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150">Manage Properties</button>
              </div>
            </nav>
            <div className="border-t border-gray-200 p-4">
              <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors duration-150">Logout</button>
            </div>
          </div>
        </div>
        {/* Main Content Area */}
        <div className="flex-1 lg:ml-0">
          <main className="max-w-8xl mx-auto py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Post your Property</h1>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-lg font-bold text-blue-600">{propertyScore}%</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Property Score</h3>
                    <p className="text-sm text-gray-600">
                      (Follow these <span className="font-semibold text-blue-600">4 simple steps</span> to post your property and get better responses.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Form Content: Step 1 */}
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="bg-blue-50 px-4 sm:px-6 py-4 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mr-3 ${
                        completedSteps.includes(1) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {completedSteps.includes(1) ? '✓' : '1'}
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900">Property Info & Location</h2>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  {/* Property For */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Property For <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-6 mt-2">
                      {['Sell', 'Rent/Lease'].map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name="propertyFor"
                            value={option}
                            checked={formData.propertyFor === option}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                    {errors.propertyFor && (
                      <p className="mt-1 text-sm text-red-600">{errors.propertyFor}</p>
                    )}
                  </div>
                  {/* State */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select State</option>
                      {Object.keys(stateCitiesData).map((stateKey) => (
                        <option key={stateKey} value={stateKey}>
                          {stateKey.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </option>
                      ))}
                    </select>
                    {errors.state && (
                      <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                    )}
                  </div>
                  {/* City */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      City <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      disabled={!availableCities.length}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select City</option>
                      {availableCities.map(city => (
                        <option key={city.toLowerCase()} value={city.toLowerCase()}>{city}</option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                    )}
                  </div>
                  {/* Locality */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Locality <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="locality"
                      value={formData.locality}
                      onChange={handleInputChange}
                      disabled={!availableLocalities.length}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Locality</option>
                      {availableLocalities.map(locality => (
                        <option key={locality} value={locality}>{locality}</option>
                      ))}
                    </select>
                    {errors.locality && (
                      <p className="mt-1 text-sm text-red-600">{errors.locality}</p>
                    )}
                  </div>

                  <div className="flex justify-end mt-8">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Next"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PostPropertyIntegration;