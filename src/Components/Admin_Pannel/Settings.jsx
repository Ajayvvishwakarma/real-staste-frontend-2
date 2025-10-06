import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { apiRequest, API_ENDPOINTS } from '../../utils/api';
import Admin_Navbar from './Admin_Navbar';
import Admin_Sidebar from './Admin_Sidebar';

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Set active tab based on URL path
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/email')) {
      setActiveTab('email');
    } else if (path.includes('/payment')) {
      setActiveTab('payment');
    } else if (path.includes('/seo')) {
      setActiveTab('seo');
    } else {
      setActiveTab('general');
    }
  }, [location.pathname]);

  const [settings, setSettings] = useState({
    general: {
      siteName: 'RealEstate India',
      siteDescription: 'Your trusted real estate platform',
      contactEmail: 'admin@realestateindia.com',
      contactPhone: '+91 9876543210',
      address: '123 Business District, New Delhi, India',
      timezone: 'Asia/Kolkata',
      currency: 'INR',
      language: 'en'
    },
    email: {
      smtpHost: 'smtp.gmail.com',
      smtpPort: 587,
      smtpUsername: 'noreply@realestateindia.com',
      smtpPassword: '',
      fromEmail: 'noreply@realestateindia.com',
      fromName: 'RealEstate India',
      enableEmailNotifications: true,
      emailTemplates: {
        welcome: 'Welcome to RealEstate India!',
        propertyApproved: 'Your property has been approved.',
        appointmentConfirmed: 'Your appointment has been confirmed.'
      }
    },
    payment: {
      enablePayments: true,
      razorpayKeyId: '',
      razorpayKeySecret: '',
      stripePublishableKey: '',
      stripeSecretKey: '',
      paypalClientId: '',
      paypalClientSecret: '',
      defaultPaymentMethod: 'razorpay',
      currency: 'INR',
      taxRate: 18
    },
    seo: {
      metaTitle: 'RealEstate India - Find Your Dream Property',
      metaDescription: 'Discover the best properties for sale and rent in India. Connect with verified agents and find your dream Home.',
      metaKeywords: 'real estate, property, buy, sell, rent, india',
      googleAnalyticsId: '',
      googleSearchConsoleId: '',
      facebookPixelId: '',
      enableSitemap: true,
      enableRobotsTxt: true
    },
    security: {
      enableTwoFactor: false,
      passwordMinLength: 8,
      sessionTimeout: 30,
      maxLoginAttempts: 5,
      enableCaptcha: true,
      apiRateLimit: 100,
      enableIpWhitelist: false,
      allowedIps: ''
    },
    notifications: {
      enablePushNotifications: true,
      enableEmailNotifications: true,
      enableSmsNotifications: false,
      newUserNotification: true,
      newPropertyNotification: true,
      appointmentNotification: true,
      contactFormNotification: true
    }
  });

  const tabs = [
    { id: 'general', label: 'General Settings', icon: '⚙️' },
    { id: 'email', label: 'Email Settings', icon: '📧' },
    { id: 'payment', label: 'Payment Settings', icon: '💳' },
    { id: 'seo', label: 'SEO Settings', icon: '🔍' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' }
  ];

  const handleSaveSettings = async (tabId) => {
    try {
      setLoading(true);
      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccessMessage(`${tabs.find(t => t.id === tabId)?.label} saved successfully!`);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = (tab, key, value) => {
    setSettings(prev => ({
      ...prev,
      [tab]: {
        ...prev[tab],
        [key]: value
      }
    }));
  };

  const updateNestedSetting = (tab, nestedKey, key, value) => {
    setSettings(prev => ({
      ...prev,
      [tab]: {
        ...prev[tab],
        [nestedKey]: {
          ...prev[tab][nestedKey],
          [key]: value
        }
      }
    }));
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
          <input
            type="text"
            value={settings.general.siteName}
            onChange={(e) => updateSetting('general', 'siteName', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
          <input
            type="email"
            value={settings.general.contactEmail}
            onChange={(e) => updateSetting('general', 'contactEmail', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
        <textarea
          value={settings.general.siteDescription}
          onChange={(e) => updateSetting('general', 'siteDescription', e.target.value)}
          rows={3}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
          <input
            type="tel"
            value={settings.general.contactPhone}
            onChange={(e) => updateSetting('general', 'contactPhone', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
          <select
            value={settings.general.timezone}
            onChange={(e) => updateSetting('general', 'timezone', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Asia/Kolkata">Asia/Kolkata</option>
            <option value="UTC">UTC</option>
            <option value="America/New_York">America/New_York</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
        <textarea
          value={settings.general.address}
          onChange={(e) => updateSetting('general', 'address', e.target.value)}
          rows={2}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );

  const renderEmailSettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Host</label>
          <input
            type="text"
            value={settings.email.smtpHost}
            onChange={(e) => updateSetting('email', 'smtpHost', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
          <input
            type="number"
            value={settings.email.smtpPort}
            onChange={(e) => updateSetting('email', 'smtpPort', parseInt(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Username</label>
          <input
            type="text"
            value={settings.email.smtpUsername}
            onChange={(e) => updateSetting('email', 'smtpUsername', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Password</label>
          <input
            type="password"
            value={settings.email.smtpPassword}
            onChange={(e) => updateSetting('email', 'smtpPassword', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From Email</label>
          <input
            type="email"
            value={settings.email.fromEmail}
            onChange={(e) => updateSetting('email', 'fromEmail', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">From Name</label>
          <input
            type="text"
            value={settings.email.fromName}
            onChange={(e) => updateSetting('email', 'fromName', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="enableEmailNotifications"
          checked={settings.email.enableEmailNotifications}
          onChange={(e) => updateSetting('email', 'enableEmailNotifications', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="enableEmailNotifications" className="ml-2 block text-sm text-gray-900">
          Enable Email Notifications
        </label>
      </div>
    </div>
  );

  const renderPaymentSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="enablePayments"
          checked={settings.payment.enablePayments}
          onChange={(e) => updateSetting('payment', 'enablePayments', e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="enablePayments" className="ml-2 block text-sm text-gray-900">
          Enable Payment Processing
        </label>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Razorpay Key ID</label>
          <input
            type="text"
            value={settings.payment.razorpayKeyId}
            onChange={(e) => updateSetting('payment', 'razorpayKeyId', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            disabled={!settings.payment.enablePayments}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Razorpay Key Secret</label>
          <input
            type="password"
            value={settings.payment.razorpayKeySecret}
            onChange={(e) => updateSetting('payment', 'razorpayKeySecret', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            disabled={!settings.payment.enablePayments}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Default Payment Method</label>
          <select
            value={settings.payment.defaultPaymentMethod}
            onChange={(e) => updateSetting('payment', 'defaultPaymentMethod', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            disabled={!settings.payment.enablePayments}
          >
            <option value="razorpay">Razorpay</option>
            <option value="stripe">Stripe</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tax Rate (%)</label>
          <input
            type="number"
            value={settings.payment.taxRate}
            onChange={(e) => updateSetting('payment', 'taxRate', parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            disabled={!settings.payment.enablePayments}
          />
        </div>
      </div>
    </div>
  );

  const renderSEOSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
        <input
          type="text"
          value={settings.seo.metaTitle}
          onChange={(e) => updateSetting('seo', 'metaTitle', e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
        <textarea
          value={settings.seo.metaDescription}
          onChange={(e) => updateSetting('seo', 'metaDescription', e.target.value)}
          rows={3}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Meta Keywords</label>
        <input
          type="text"
          value={settings.seo.metaKeywords}
          onChange={(e) => updateSetting('seo', 'metaKeywords', e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Google Analytics ID</label>
          <input
            type="text"
            value={settings.seo.googleAnalyticsId}
            onChange={(e) => updateSetting('seo', 'googleAnalyticsId', e.target.value)}
            placeholder="GA-XXXXXXXXX"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Facebook Pixel ID</label>
          <input
            type="text"
            value={settings.seo.facebookPixelId}
            onChange={(e) => updateSetting('seo', 'facebookPixelId', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="enableSitemap"
            checked={settings.seo.enableSitemap}
            onChange={(e) => updateSetting('seo', 'enableSitemap', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="enableSitemap" className="ml-2 block text-sm text-gray-900">
            Enable Sitemap Generation
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="enableRobotsTxt"
            checked={settings.seo.enableRobotsTxt}
            onChange={(e) => updateSetting('seo', 'enableRobotsTxt', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="enableRobotsTxt" className="ml-2 block text-sm text-gray-900">
            Enable Robots.txt
          </label>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password Minimum Length</label>
          <input
            type="number"
            value={settings.security.passwordMinLength}
            onChange={(e) => updateSetting('security', 'passwordMinLength', parseInt(e.target.value))}
            min="6"
            max="20"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
          <input
            type="number"
            value={settings.security.sessionTimeout}
            onChange={(e) => updateSetting('security', 'sessionTimeout', parseInt(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Max Login Attempts</label>
          <input
            type="number"
            value={settings.security.maxLoginAttempts}
            onChange={(e) => updateSetting('security', 'maxLoginAttempts', parseInt(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">API Rate Limit (per minute)</label>
          <input
            type="number"
            value={settings.security.apiRateLimit}
            onChange={(e) => updateSetting('security', 'apiRateLimit', parseInt(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="enableTwoFactor"
            checked={settings.security.enableTwoFactor}
            onChange={(e) => updateSetting('security', 'enableTwoFactor', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="enableTwoFactor" className="ml-2 block text-sm text-gray-900">
            Enable Two-Factor Authentication
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="enableCaptcha"
            checked={settings.security.enableCaptcha}
            onChange={(e) => updateSetting('security', 'enableCaptcha', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="enableCaptcha" className="ml-2 block text-sm text-gray-900">
            Enable CAPTCHA on Forms
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="enableIpWhitelist"
            checked={settings.security.enableIpWhitelist}
            onChange={(e) => updateSetting('security', 'enableIpWhitelist', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="enableIpWhitelist" className="ml-2 block text-sm text-gray-900">
            Enable IP Whitelist for Admin Panel
          </label>
        </div>
      </div>
      
      {settings.security.enableIpWhitelist && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Allowed IP Addresses (one per line)</label>
          <textarea
            value={settings.security.allowedIps}
            onChange={(e) => updateSetting('security', 'allowedIps', e.target.value)}
            rows={3}
            placeholder="192.168.1.1&#10;203.0.113.1"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-900">Notification Types</h4>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="enablePushNotifications"
            checked={settings.notifications.enablePushNotifications}
            onChange={(e) => updateSetting('notifications', 'enablePushNotifications', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="enablePushNotifications" className="ml-2 block text-sm text-gray-900">
            Enable Push Notifications
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="enableEmailNotifications2"
            checked={settings.notifications.enableEmailNotifications}
            onChange={(e) => updateSetting('notifications', 'enableEmailNotifications', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="enableEmailNotifications2" className="ml-2 block text-sm text-gray-900">
            Enable Email Notifications
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="enableSmsNotifications"
            checked={settings.notifications.enableSmsNotifications}
            onChange={(e) => updateSetting('notifications', 'enableSmsNotifications', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="enableSmsNotifications" className="ml-2 block text-sm text-gray-900">
            Enable SMS Notifications
          </label>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-lg font-medium text-gray-900">Event Notifications</h4>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="newUserNotification"
            checked={settings.notifications.newUserNotification}
            onChange={(e) => updateSetting('notifications', 'newUserNotification', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="newUserNotification" className="ml-2 block text-sm text-gray-900">
            New User Registration
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="newPropertyNotification"
            checked={settings.notifications.newPropertyNotification}
            onChange={(e) => updateSetting('notifications', 'newPropertyNotification', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="newPropertyNotification" className="ml-2 block text-sm text-gray-900">
            New Property Submission
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="appointmentNotification"
            checked={settings.notifications.appointmentNotification}
            onChange={(e) => updateSetting('notifications', 'appointmentNotification', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="appointmentNotification" className="ml-2 block text-sm text-gray-900">
            New Appointment Booking
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="contactFormNotification"
            checked={settings.notifications.contactFormNotification}
            onChange={(e) => updateSetting('notifications', 'contactFormNotification', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="contactFormNotification" className="ml-2 block text-sm text-gray-900">
            Contact Form Submission
          </label>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general': return renderGeneralSettings();
      case 'email': return renderEmailSettings();
      case 'payment': return renderPaymentSettings();
      case 'seo': return renderSEOSettings();
      case 'security': return renderSecuritySettings();
      case 'notifications': return renderNotificationSettings();
      default: return renderGeneralSettings();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar - Full Width */}
      <Admin_Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Sidebar - Left side below navbar */}
      <Admin_Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="pt-16 lg:pl-64 min-h-screen transition-all duration-300">
        <main className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            {/* Page header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
              <p className="text-gray-600">Configure your real estate platform settings</p>
            </div>

            {/* Success Message */}
            {successMessage && (
              <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                {successMessage}
              </div>
            )}

            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <span>{tab.icon}</span>
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {renderTabContent()}
                
                {/* Save Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => handleSaveSettings(activeTab)}
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Saving...' : 'Save Settings'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;