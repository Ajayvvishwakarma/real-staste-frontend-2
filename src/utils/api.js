// Mock API Functions - No Backend Required
// This file provides mock functions that simulate API responses

import { 
  getUserInfo, 
  getUserType, 
  isAuthenticated, 
  logout,
  mockLogin,
  mockRegister,
  getMockProperties,
  getMockAgents,
  getMockUsers,
  getMockCallbacks,
  getMockAdminStats,
  submitPropertyInquiry,
  requestCallback,
  setCurrentUser,
  getCurrentUser
} from './mockData.js';

// Mock functions to replace real API calls
export const register = async (userData) => {
  console.log('Mock: Registration attempt with data:', userData);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, message: 'Registration successful', user: userData };
};

export const login = async (email, password, userType = 'client') => {
  console.log('Mock: Login attempt:', { email, userType });
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const mockUser = {
    id: Date.now(),
    email: email,
    role: userType === 'admin' ? 'admin' : 'user',
    name: email.split('@')[0],
    user_type: userType
  };

  return {
    access_token: 'mock_token_' + Date.now(),
    token_type: 'bearer',
    user: mockUser
  };
};

export const requestCallbackReal = async (callbackData) => {
  console.log('Mock: Callback request:', callbackData);
  await new Promise(resolve => setTimeout(resolve, 1200));
  return {
    success: true,
    message: 'Callback request submitted successfully',
    data: callbackData
  };
};

export const submitPropertyInquiryReal = async (propertyData) => {
  console.log('Mock: Property inquiry submission:', propertyData);
  await new Promise(resolve => setTimeout(resolve, 1500));
  return {
    success: true,
    message: 'Property inquiry submitted successfully',
    id: Date.now(),
    data: propertyData
  };
};

// Export other mock functions
export { 
  getUserInfo, 
  getUserType, 
  isAuthenticated, 
  logout,
  mockLogin,
  getMockProperties,
  getMockProperties as getProperties,
  getMockAgents,
  getMockAgents as getAgents,
  getMockUsers,
  getMockUsers as getUsers,
  getMockCallbacks,
  getMockCallbacks as getCallbacks,
  getMockAdminStats,
  getMockAdminStats as getAdminStats,
  submitPropertyInquiry,
  requestCallback,
  setCurrentUser,
  getCurrentUser
};

// Mock API endpoints
export const API_ENDPOINTS = {
  LOGIN: '/mock/auth/login',
  CLIENT_LOGIN: '/mock/auth/login',
  SUBUSER_LOGIN: '/mock/auth/login',
  REGISTER: '/mock/auth/register',
  LOGOUT: '/mock/auth/logout',
  USERS: '/mock/users',
  PROFILE: '/mock/users/profile',
  PROPERTIES: '/mock/properties',
  AGENTS: '/mock/agents',
  ADMIN_DASHBOARD: '/mock/admin/',
  ADMIN_STATS: '/mock/admin/stats',
  ADMIN_USERS: '/mock/admin/users',
  ADMIN_CALLBACKS: '/mock/admin/callbacks',
};

// Mock API request function
export const apiRequest = async (url, options = {}) => {
  console.log('Mock API request to:', url, 'with options:', options);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return mock response based on URL
  if (url.includes('/users')) {
    const { getMockUsers } = await import('./mockData.js');
    const users = await getMockUsers();
    return {
      ok: true,
      status: 200,
      json: async () => ({ users })
    };
  }
  
  if (url.includes('/properties')) {
    const { getMockProperties } = await import('./mockData.js');
    const properties = await getMockProperties();
    return {
      ok: true,
      status: 200,
      json: async () => ({ properties })
    };
  }
  
  if (url.includes('/callbacks')) {
    const { getMockCallbacks } = await import('./mockData.js');
    const callbacks = await getMockCallbacks();
    return {
      ok: true,
      status: 200,
      json: async () => ({ callbacks })
    };
  }
  
  if (url.includes('/stats')) {
    const { getMockAdminStats } = await import('./mockData.js');
    const stats = await getMockAdminStats();
    return {
      ok: true,
      status: 200,
      json: async () => stats
    };
  }
  
  // Default mock response
  return {
    ok: true,
    status: 200,
    json: async () => ({ message: 'Mock response', data: null })
  };
};
