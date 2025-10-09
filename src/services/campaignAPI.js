// Campaign API Service for E-Mailer campaigns
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('access_token');
};

// Create headers with auth token
const getHeaders = () => {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

// Get all campaigns
export const getAllCampaigns = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/campaigns`, {
      method: 'GET',
      headers: getHeaders()
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return { success: false, error: error.message };
  }
};

// Get campaigns by status
export const getCampaignsByStatus = async (status) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/campaigns?status=${status}`, {
      method: 'GET',
      headers: getHeaders()
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching campaigns by status:', error);
    return { success: false, error: error.message };
  }
};

// Create new campaign
export const createCampaign = async (campaignData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/campaigns`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(campaignData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error creating campaign:', error);
    return { success: false, error: error.message };
  }
};

// Update campaign
export const updateCampaign = async (campaignId, campaignData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/campaigns/${campaignId}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(campaignData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error updating campaign:', error);
    return { success: false, error: error.message };
  }
};

// Delete campaign
export const deleteCampaign = async (campaignId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/campaigns/${campaignId}`, {
      method: 'DELETE',
      headers: getHeaders()
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error deleting campaign:', error);
    return { success: false, error: error.message };
  }
};

// Send campaign
export const sendCampaign = async (campaignId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/campaigns/${campaignId}/send`, {
      method: 'POST',
      headers: getHeaders()
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error sending campaign:', error);
    return { success: false, error: error.message };
  }
};

// Get campaign statistics
export const getCampaignStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/campaigns/stats`, {
      method: 'GET',
      headers: getHeaders()
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching campaign stats:', error);
    return { success: false, error: error.message };
  }
};
