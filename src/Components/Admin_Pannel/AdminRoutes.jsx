import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import Admin Panel Components
import Admin_Dashboard from './Admin_Dashboard';
import UserManagement from './UserManagement';
import PropertyManagement from './PropertyManagement';
import AppointmentManagement from './AppointmentManagement';
import ContactManagement from './ContactManagement';
import Analytics from './Analytics';
import Settings from './Settings';
import MarketingManagement from './MarketingManagement';

// Protected Route Component for Admin Access
const ProtectedAdminRoute = ({ children }) => {
  // First check the user_info from localStorage (used by login system)
  const userInfo = JSON.parse(localStorage.getItem('user_info') || '{}');
  // Also check the 'user' key used by some admin components
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  // Check if user is authenticated
  const token = localStorage.getItem('access_token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  // Check admin role from either storage location
  const userRole = userInfo.role || user.role;
  const isAdmin = userRole === 'admin' || userRole === 'staff' || userRole === 'super_admin';
  
  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Admin Routes Component
const AdminRoutes = () => {
  return (
    <Routes>
      {/* Redirect /admin to /admin/dashboard */}
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      
      {/* Protected Admin Routes */}
      <Route path="/dashboard" element={
        <ProtectedAdminRoute>
          <Admin_Dashboard />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/users" element={
        <ProtectedAdminRoute>
          <UserManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/users/agents" element={
        <ProtectedAdminRoute>
          <UserManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/users/staff" element={
        <ProtectedAdminRoute>
          <UserManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/users/admins" element={
        <ProtectedAdminRoute>
          <UserManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/properties" element={
        <ProtectedAdminRoute>
          <PropertyManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/properties/pending" element={
        <ProtectedAdminRoute>
          <PropertyManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/properties/featured" element={
        <ProtectedAdminRoute>
          <PropertyManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/properties/categories" element={
        <ProtectedAdminRoute>
          <PropertyManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/appointments" element={
        <ProtectedAdminRoute>
          <AppointmentManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/inquiries" element={
        <ProtectedAdminRoute>
          <ContactManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/contacts" element={
        <ProtectedAdminRoute>
          <ContactManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/analytics" element={
        <ProtectedAdminRoute>
          <Analytics />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/analytics/users" element={
        <ProtectedAdminRoute>
          <Analytics />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/analytics/properties" element={
        <ProtectedAdminRoute>
          <Analytics />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/analytics/financial" element={
        <ProtectedAdminRoute>
          <Analytics />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/marketing" element={
        <ProtectedAdminRoute>
          <MarketingManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/marketing/campaigns" element={
        <ProtectedAdminRoute>
          <MarketingManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/marketing/emails" element={
        <ProtectedAdminRoute>
          <MarketingManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/marketing/seo" element={
        <ProtectedAdminRoute>
          <MarketingManagement />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/settings" element={
        <ProtectedAdminRoute>
          <Settings />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/settings/email" element={
        <ProtectedAdminRoute>
          <Settings />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/settings/payment" element={
        <ProtectedAdminRoute>
          <Settings />
        </ProtectedAdminRoute>
      } />
      
      <Route path="/settings/seo" element={
        <ProtectedAdminRoute>
          <Settings />
        </ProtectedAdminRoute>
      } />
    </Routes>
  );
};

export default AdminRoutes;