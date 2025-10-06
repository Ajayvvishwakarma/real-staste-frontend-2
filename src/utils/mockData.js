// Mock Data for Frontend without API Integration

// Mock user data
export const mockUsers = [
  {
    id: 1,
    username: "john_doe",
    email: "john@example.com",
    name: "John Doe",
    phone: "+1234567890",
    user_type: "client",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane@example.com",
    name: "Jane Smith",
    phone: "+1234567891",
    user_type: "subuser",
    is_active: true,
    created_at: "2024-01-02T00:00:00Z"
  },
  {
    id: 3,
    username: "admin_user",
    email: "admin@example.com",
    name: "Admin User",
    phone: "+1234567892",
    user_type: "admin",
    is_active: true,
    created_at: "2024-01-01T00:00:00Z"
  }
];

// Mock properties data
export const mockProperties = [
  {
    id: 1,
    title: "Luxury Villa in Mumbai",
    description: "Beautiful 4BHK villa with modern amenities",
    price: 25000000,
    property_type: "villa",
    location: "Mumbai",
    area: 2500,
    bedrooms: 4,
    bathrooms: 3,
    features: ["Swimming Pool", "Garden", "Parking", "Security"],
    images: ["/properties_img/property-1.jpg", "/properties_img/property-2.jpg"],
    agent_id: 1,
    status: "available",
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 2,
    title: "Modern Apartment in Delhi",
    description: "2BHK apartment in prime location",
    price: 8500000,
    property_type: "apartment",
    location: "Delhi",
    area: 1200,
    bedrooms: 2,
    bathrooms: 2,
    features: ["Gym", "Lift", "Parking", "Security"],
    images: ["/properties_img/property-3.jpg", "/properties_img/property-4.jpg"],
    agent_id: 2,
    status: "available",
    created_at: "2024-01-02T00:00:00Z"
  },
  {
    id: 3,
    title: "Office Space in Bangalore",
    description: "Commercial office space in tech hub",
    price: 15000000,
    property_type: "office",
    location: "Bangalore",
    area: 1800,
    bedrooms: 0,
    bathrooms: 2,
    features: ["AC", "Parking", "High Speed Internet", "Conference Room"],
    images: ["/properties_img/property-5.jpg", "/properties_img/property-6.jpg"],
    agent_id: 1,
    status: "available",
    created_at: "2024-01-03T00:00:00Z"
  }
];

// Mock agents data
export const mockAgents = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@realestate.com",
    phone: "+919876543210",
    experience: 5,
    specialization: "Residential",
    location: "Mumbai",
    rating: 4.8,
    properties_sold: 150
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@realestate.com",
    phone: "+919876543211",
    experience: 8,
    specialization: "Commercial",
    location: "Delhi",
    rating: 4.9,
    properties_sold: 200
  }
];

// Mock callbacks/inquiries data
export const mockCallbacks = [
  {
    id: 1,
    name: "Amit Patel",
    phone: "+919876543212",
    email: "amit@example.com",
    message: "Interested in 3BHK apartment in Mumbai",
    property_id: 1,
    status: "pending",
    created_at: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    name: "Sunita Gupta",
    phone: "+919876543213",
    email: "sunita@example.com",
    message: "Looking for office space in Bangalore",
    property_id: 3,
    status: "contacted",
    created_at: "2024-01-16T14:20:00Z"
  }
];

// Mock admin stats
export const mockAdminStats = {
  total_users: 1250,
  total_properties: 380,
  total_agents: 45,
  total_inquiries: 620,
  recent_registrations: 25,
  active_listings: 340,
  pending_approvals: 12,
  monthly_revenue: 2500000
};

// Current user state (can be modified for testing different user types)
let currentUser = null;
let isLoggedIn = false;

// Helper functions to simulate API behavior without actual API calls
export const setCurrentUser = (user) => {
  currentUser = user;
  isLoggedIn = !!user;
  if (user) {
    localStorage.setItem('user_info', JSON.stringify(user));
    localStorage.setItem('user_type', user.user_type);
    localStorage.setItem('access_token', 'mock_token_' + Date.now());
    localStorage.setItem('token_type', 'bearer');
  }
};

export const getCurrentUser = () => {
  if (!currentUser) {
    try {
      const storedUser = localStorage.getItem('user_info');
      if (storedUser) {
        currentUser = JSON.parse(storedUser);
        isLoggedIn = true;
      }
    } catch (error) {
      console.error('Error parsing stored user:', error);
    }
  }
  return currentUser;
};

export const getUserInfo = () => {
  return getCurrentUser();
};

export const getUserType = () => {
  const user = getCurrentUser();
  return user ? user.user_type : localStorage.getItem('user_type') || 'subuser';
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('access_token');
  const user = getCurrentUser();
  return !!(token && user);
};

export const logout = () => {
  currentUser = null;
  isLoggedIn = false;
  localStorage.removeItem('access_token');
  localStorage.removeItem('token_type');
  localStorage.removeItem('user_info');
  localStorage.removeItem('user');
  localStorage.removeItem('user_type');
  
  // Simulate async behavior
  return new Promise((resolve) => {
    setTimeout(() => {
      window.location.href = '/login';
      resolve({ message: 'Logged out successfully' });
    }, 100);
  });
};

// Mock login function
export const mockLogin = (username, password, userType = 'subuser') => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Find user by email or username first, regardless of userType
      const user = mockUsers.find(u => 
        u.username === username || u.email === username
      );
      
      if (user && password) { // Accept any non-empty password for demo
        // Auto-detect user type and log them in with their actual role
        setCurrentUser(user);
        resolve({
          access_token: 'mock_token_' + Date.now(),
          token_type: 'bearer',
          user: user
        });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000); // Simulate network delay
  });
};

// Mock registration function
export const mockRegister = (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const existingUser = mockUsers.find(u => 
        u.username === userData.username || u.email === userData.email
      );
      
      if (existingUser) {
        reject(new Error('User already exists'));
      } else {
        const newUser = {
          id: mockUsers.length + 1,
          ...userData,
          user_type: userData.user_type || 'subuser',
          is_active: true,
          created_at: new Date().toISOString()
        };
        
        mockUsers.push(newUser);
        // Don't automatically set current user - require manual login
        resolve({
          access_token: 'mock_token_' + Date.now(),
          token_type: 'bearer',
          user: newUser
        });
      }
    }, 1000);
  });
};

// Mock data fetchers
export const getMockProperties = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockProperties]), 500);
  });
};

export const getMockAgents = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockAgents]), 500);
  });
};

export const getMockUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockUsers]), 500);
  });
};

export const getMockCallbacks = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockCallbacks]), 500);
  });
};

export const getMockAdminStats = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ...mockAdminStats }), 500);
  });
};

// Mock property submission
export const submitPropertyInquiry = (propertyData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Property inquiry submitted:', propertyData);
      resolve({
        success: true,
        message: 'Property inquiry submitted successfully',
        id: Date.now()
      });
    }, 1000);
  });
};

// Mock callback request
export const requestCallback = (callbackData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newCallback = {
        id: mockCallbacks.length + 1,
        ...callbackData,
        status: 'pending',
        created_at: new Date().toISOString()
      };
      mockCallbacks.push(newCallback);
      console.log('Callback requested:', newCallback);
      resolve({
        success: true,
        message: 'Callback request submitted successfully',
        callback: newCallback
      });
    }, 1000);
  });
};

// Auto-login admin user for testing (comment out if not needed)
// setCurrentUser(mockUsers.find(u => u.user_type === 'admin'));