import React from 'react';
import { useNavigate } from 'react-router-dom';
import EMailers from './EMailers';

export const EMailersWithNavigation = () => {
  const navigate = useNavigate();
  return <EMailers onBackToDashboard={() => navigate('/dashboard')} />;
};

export default EMailersWithNavigation;