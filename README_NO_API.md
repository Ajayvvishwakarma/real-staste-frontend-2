# Real Estate Frontend - No API Version

This is a **standalone frontend application** that works without any backend API. All data is mocked and stored locally, making it perfect for demonstrations, testing, or frontend-only deployment.

## 🌟 Key Features

### ✅ **Complete API Removal**
- No backend dependencies
- All API calls replaced with mock functions
- Local data storage using localStorage
- Simulated network delays for realistic UX

### ✅ **Mock Data System**
- **Users**: Admin, Client, and Subuser roles
- **Properties**: Residential, Commercial listings
- **Agents**: Real estate agent profiles
- **Inquiries**: Property inquiries and callbacks
- **Admin Stats**: Dashboard statistics

### ✅ **Authentication System**
- Mock login with predefined users
- Session management with localStorage
- Role-based access (Admin/Client/Subuser)
- Logout functionality

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## 👥 Demo Users

Use these credentials to test different user roles:

### Admin User
- **Email**: `admin@example.com`
- **Password**: `any password`
- **Access**: Admin Dashboard, User Management, Analytics

### Client User  
- **Email**: `john@example.com`
- **Password**: `any password`
- **Access**: Property Dashboard, Post Property

### Subuser
- **Email**: `jane@example.com` 
- **Password**: `any password`
- **Access**: Basic Dashboard Features

> **Note**: Any non-empty password will work for demo purposes.

## 📁 Project Structure

```
src/
├── utils/
│   ├── api.js           # Mock API wrapper (maintains original interface)
│   └── mockData.js      # All mock data and functions
├── services/
│   └── propertyInquiryAPI.js  # Mock property services
├── contexts/
│   └── AuthContext.jsx  # Authentication context (uses mock)
├── test/
│   └── mockTest.js      # Test file for validating mock functions
└── Components/
    ├── Admin_Panel/     # Admin components (use mock data)
    ├── Dashboard/       # User dashboard (use mock data)
    └── ...
```

## 🔧 Mock Data Features

### Properties
- 3 sample properties (Villa, Apartment, Office)
- Images, pricing, location data
- Property types and features

### Users
- Admin, Client, and Subuser examples
- User profiles with contact information
- Active status tracking

### Real Estate Agents
- Agent profiles with ratings
- Specializations and experience
- Contact information

### Inquiries & Callbacks
- Property inquiry submissions
- Callback request handling
- Status tracking (pending, contacted)

### Admin Statistics
- Total users, properties, agents
- Recent activities and registrations
- Revenue and inquiry metrics

## 🎯 Available Features

### For All Users
- ✅ Property browsing and search
- ✅ Property inquiry submission
- ✅ Callback requests
- ✅ User registration and login
- ✅ Contact forms

### For Registered Users
- ✅ Dashboard access
- ✅ Property management
- ✅ Profile management
- ✅ Inquiry history

### For Admin Users
- ✅ Admin dashboard with statistics
- ✅ User management interface
- ✅ Property management
- ✅ Inquiry and callback management
- ✅ Analytics and reporting

## 🔄 Data Persistence

- **localStorage**: User sessions, preferences
- **Mock Functions**: Simulate API responses with delays
- **State Management**: React state for UI interactions
- **No Database**: All data resets on browser refresh

## 🛠 Customization

### Adding New Mock Data

Edit `src/utils/mockData.js`:

```javascript
// Add new properties
export const mockProperties = [
  // ... existing properties
  {
    id: 4,
    title: "New Property",
    price: 12000000,
    // ... other fields
  }
];

// Add new users
export const mockUsers = [
  // ... existing users
  {
    id: 4,
    name: "New User",
    email: "newuser@example.com",
    // ... other fields
  }
];
```

### Modifying UI Components

All components work the same way as before, but now use mock data instead of API calls. The interface remains identical, so existing components require minimal changes.

### Testing Mock Functions

Run the test suite:
```javascript
import { testMockFunctions } from './src/test/mockTest.js';
testMockFunctions();
```

## 🎨 UI Components

All original UI components work without modification:
- Forms submit to mock functions
- Data displays from mock sources  
- Navigation and routing unchanged
- Styling and animations preserved

## 📱 Responsive Design

- Mobile-first responsive design
- Works on all screen sizes
- Touch-friendly interfaces
- Progressive enhancement

## 🔍 Development Notes

### Mock API Behavior
- Simulates network delays (500ms-1000ms)
- Returns realistic error scenarios
- Maintains original API interface
- Console logging for debugging

### State Management
- Uses React hooks and context
- localStorage for persistence
- No external state management needed
- Simple and maintainable

### Error Handling
- Graceful fallbacks for mock failures
- User-friendly error messages
- Console logging for development
- Retry mechanisms where appropriate

## 🚀 Deployment

Since this is a pure frontend application:

### Static Hosting
Deploy to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Build Command
```bash
npm run build
```

### Environment Variables
No environment variables needed - everything is self-contained!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your changes to mock data or components
4. Test with the mock system
5. Submit a pull request

## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

**Perfect for**: Demos, Portfolios, Frontend Testing, UI/UX Development, Client Presentations

**No Backend Required** ✨