import React, { createContext, useContext, useState, useEffect } from 'react';

// Mock functions to replace API imports
const isAuthenticated = () => {
  return !!localStorage.getItem('access_token');
};

const getUserInfo = () => {
  const userInfo = localStorage.getItem('user_info');
  return userInfo ? JSON.parse(userInfo) : null;
};

const setCurrentUser = (userInfo) => {
  localStorage.setItem('user_info', JSON.stringify(userInfo));
};

const mockApiLogout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('token_type');
  localStorage.removeItem('user_info');
  localStorage.removeItem('user_type');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userRole');
  localStorage.removeItem('user');
};

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated on app start
    if (isAuthenticated()) {
      const userInfo = getUserInfo();
      setUser(userInfo);
    }
    setLoading(false);
  }, []);

  const login = (userInfo, accessToken, tokenType = 'bearer') => {
    // Store tokens and set current user in mock system
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('token_type', tokenType);
    localStorage.setItem('user_info', JSON.stringify(userInfo));
    
    // Update mock user state
    setCurrentUser(userInfo);
    
    // Update context state
    setUser(userInfo);
  };

  const logout = () => {
    // Clear storage
    mockApiLogout();
    
    // Update state
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
