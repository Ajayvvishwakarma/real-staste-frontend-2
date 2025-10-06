import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UnderstandLocalities from './UnderstandLocalities';
import Overview from './Overview';
import Property_rates from './Property_rates';

const InsightsRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="understand-localities" replace />} />
      <Route path="understand-localities" element={<UnderstandLocalities />} />
      <Route path="overview" element={<Overview />} />
      <Route path="rates/:city" element={<Property_rates />} />
      <Route path="all" element={<Navigate to="understand-localities" replace />} />
      <Route path="*" element={<Navigate to="understand-localities" replace />} />
    </Routes>
  );
};

export default InsightsRoutes;