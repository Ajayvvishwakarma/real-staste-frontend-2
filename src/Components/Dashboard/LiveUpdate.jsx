// import React, { useState, useEffect } from 'react';

// const LiveUpdate = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [updateCount, setUpdateCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//       setUpdateCount(prev => prev + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
//       <div className="text-center">
//         <div className="text-xs font-bold">🔴 LIVE HMR TEST</div>
//         <div className="text-sm">{currentTime.toLocaleTimeString()}</div>
//         <div className="text-xs">Updates: {updateCount}</div>
//         <div className="text-xs mt-1">✅ HMR Working!</div>
//       </div>
//     </div>
//   );
// };

// export default LiveUpdate;










import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LiveUpdate from './LiveUpdate';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';

const isAuthenticated = () => {
  return !!localStorage.getItem('access_token');
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const LiveUpdateIntegration = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <>
                <Dashboard />
                <LiveUpdate />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default LiveUpdateIntegration;