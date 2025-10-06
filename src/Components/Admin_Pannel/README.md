# Real Estate Admin Panel

A comprehensive admin panel for managing all aspects of the real estate application.

## 🚀 Features

### 📊 Dashboard
- **Overview Statistics**: Total users, properties, appointments, and revenue
- **Recent Activities**: Latest user registrations, property listings, and inquiries
- **Quick Actions**: Fast access to common administrative tasks
- **Performance Metrics**: Visual charts and progress indicators

### 👥 User Management
- **Complete User Control**: View, edit, block, and delete users
- **Role-Based Management**: Separate views for admins, staff, agents, and regular users
- **Advanced Filtering**: Filter by role, status, registration date
- **Bulk Operations**: Perform actions on multiple users simultaneously
- **User Details Modal**: Comprehensive user information and activity history

### 🏠 Property Management
- **Property Oversight**: Manage all property listings and approvals
- **Status Control**: Approve, reject, or feature properties
- **Advanced Search**: Filter by status, type, location, and price range
- **Property Details**: Full property information with image gallery
- **Bulk Actions**: Approve/reject multiple properties at once

### 📅 Appointment Management
- **Appointment Tracking**: View and manage all property viewing appointments
- **Status Updates**: Confirm, complete, or cancel appointments
- **Agent Assignment**: Track which agent is handling each appointment
- **Schedule Overview**: Filter appointments by date and status
- **Client Communication**: View appointment notes and client details

### 📧 Contact Management
- **Inquiry Handling**: Manage customer inquiries and contact requests
- **Status Tracking**: Mark inquiries as new, read, or archived
- **Response Management**: Track and manage customer communications
- **Search & Filter**: Find inquiries by client name, subject, or status
- **Detailed View**: Full inquiry details with response history

### 📈 Analytics & Reports
- **Business Intelligence**: Comprehensive analytics dashboard
- **Revenue Tracking**: Financial performance and trends
- **User Analytics**: User growth, engagement, and demographics
- **Property Analytics**: Listing performance and market trends
- **Visual Charts**: Interactive charts and graphs for data visualization

### ⚙️ System Settings
- **General Configuration**: Site settings, company information, and preferences
- **Email Settings**: SMTP configuration and email templates
- **Payment Integration**: Payment gateway configuration and settings
- **SEO Management**: Meta tags, social media, and search optimization
- **Security Controls**: Authentication settings and access controls
- **Notification Settings**: Email and system notification preferences

## 🛠️ Technical Implementation

### Component Structure
```
Admin_Pannel/
├── Admin_Dashboard.jsx      # Main dashboard with overview
├── Admin_Navbar.jsx         # Top navigation bar
├── Admin_Sidebar.jsx        # Side navigation menu
├── UserManagement.jsx       # User management interface
├── PropertyManagement.jsx   # Property management interface
├── AppointmentManagement.jsx # Appointment management
├── ContactManagement.jsx    # Contact/inquiry management
├── Analytics.jsx            # Analytics and reports
├── Settings.jsx             # System settings
├── AdminRoutes.jsx          # Route integration guide
└── index.js                 # Component exports
```

### Authentication & Security
- **Role-Based Access Control**: Admin and staff role verification
- **JWT Token Integration**: Secure authentication using existing auth system
- **Protected Routes**: All admin routes require authentication
- **Permission Levels**: Different access levels for various admin functions

### API Integration
- **RESTful API Calls**: Integration with FastAPI backend
- **Error Handling**: Comprehensive error handling and user feedback
- **Loading States**: Loading indicators for better user experience
- **Real-time Updates**: Live data updates and synchronization

### Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Tailwind CSS**: Consistent styling using utility classes
- **Interactive Elements**: Hover effects, transitions, and animations
- **Accessibility**: ARIA labels and keyboard navigation support

## 🔧 Installation & Setup

### 1. Route Integration
Add the following routes to your main `App.jsx` file:

```jsx
import {
  Admin_Dashboard,
  UserManagement,
  PropertyManagement,
  AppointmentManagement,
  ContactManagement,
  Analytics,
  Settings
} from './Components/Admin_Pannel';

// Add these routes to your Routes component:
<Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
<Route path="/admin/dashboard" element={<Admin_Dashboard />} />
<Route path="/admin/users" element={<UserManagement />} />
<Route path="/admin/properties" element={<PropertyManagement />} />
<Route path="/admin/appointments" element={<AppointmentManagement />} />
<Route path="/admin/contacts" element={<ContactManagement />} />
<Route path="/admin/analytics" element={<Analytics />} />
<Route path="/admin/settings" element={<Settings />} />
```

### 2. Authentication Protection
Optionally, add authentication protection for admin routes:

```jsx
const ProtectedAdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAdmin = user.role === 'admin' || user.role === 'staff';
  
  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Wrap admin routes with protection
<Route path="/admin/dashboard" element={
  <ProtectedAdminRoute>
    <Admin_Dashboard />
  </ProtectedAdminRoute>
} />
```

### 3. API Configuration
Update your API endpoints to match the admin panel requirements:

```javascript
// Add these endpoints to your API configuration
const API_ENDPOINTS = {
  // ... existing endpoints
  ADMIN: {
    DASHBOARD_STATS: '/admin/dashboard/stats',
    USERS: '/admin/users',
    PROPERTIES: '/admin/properties',
    APPOINTMENTS: '/admin/appointments',
    CONTACTS: '/admin/contacts',
    ANALYTICS: '/admin/analytics',
    SETTINGS: '/admin/settings'
  }
};
```

## 🎨 Customization

### Styling
- All components use Tailwind CSS classes
- Colors can be customized by modifying the Tailwind configuration
- Component styling follows a consistent design system

### Functionality
- Mock data is currently used for demonstration
- Replace mock API calls with actual backend integration
- Customize user roles and permissions as needed

### Layout
- Responsive layout adapts to different screen sizes
- Sidebar can be customized with additional menu items
- Dashboard widgets can be rearranged or modified

## 📝 Usage

### Accessing the Admin Panel
1. Navigate to `/admin` (redirects to `/admin/dashboard`)
2. Ensure user has admin or staff role
3. Use the sidebar navigation to access different sections

### Managing Users
1. Go to **User Management** section
2. Filter users by role or status
3. Use action buttons to edit, block, or delete users
4. Click on user names to view detailed information

### Managing Properties
1. Access **Property Management** section
2. Review pending properties for approval
3. Use filters to find specific properties
4. Toggle featured status or approve/reject listings

### Viewing Analytics
1. Navigate to **Analytics & Reports**
2. View overview statistics and trends
3. Use date filters to analyze specific periods
4. Export reports (feature can be implemented)

## 🔄 Future Enhancements

### Planned Features
- **Real-time Notifications**: Live updates for new inquiries and appointments
- **Advanced Analytics**: More detailed reporting and data visualization
- **Bulk Import/Export**: CSV import/export functionality
- **Email Templates**: Customizable email templates for communications
- **Audit Logs**: Track all administrative actions and changes
- **Multi-language Support**: Internationalization for global use

### Technical Improvements
- **Performance Optimization**: Lazy loading and code splitting
- **Caching**: Redis integration for improved performance
- **WebSocket Integration**: Real-time updates and notifications
- **Advanced Search**: Elasticsearch integration for complex queries
- **File Management**: Advanced file upload and management system

## 🐛 Troubleshooting

### Common Issues
1. **Authentication Errors**: Ensure JWT token is valid and user has admin role
2. **Route Not Found**: Verify routes are properly configured in App.jsx
3. **API Errors**: Check backend API endpoints and authentication
4. **Styling Issues**: Ensure Tailwind CSS is properly configured

### Support
For technical support or feature requests, please refer to the main application documentation or contact the development team.

---

## 📄 License
This admin panel is part of the Real Estate Application and follows the same licensing terms as the main project.