import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UnderstandLocalitiesIntegration from './UnderstandLocalities';
import OverviewIntegration from './Overview';
import PropertyRatesIntegration from './Property_rates';

const InsightsRoutes = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="understand-localities" replace />} />
      <Route path="understand-localities" element={<UnderstandLocalitiesIntegration />} />
      <Route path="overview" element={<OverviewIntegration />} />
      <Route path="rates/:city" element={<PropertyRatesIntegration />} />
      <Route path="all" element={<Navigate to="understand-localities" replace />} />
      <Route path="*" element={<Navigate to="understand-localities" replace />} />
    </Routes>
  );
};

export default InsightsRoutes;