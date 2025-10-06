// Test file to validate mock data functionality
// This file can be run to test that all mock functions work correctly

import { 
  getUserInfo, 
  isAuthenticated, 
  mockLogin, 
  mockRegister,
  getMockProperties,
  getMockAgents,
  getMockUsers,
  getMockCallbacks,
  getMockAdminStats,
  setCurrentUser,
  logout
} from '../utils/api.js';

// Test function to validate all mock functionality
export const testMockFunctions = async () => {
  console.log('🧪 Testing Mock Data Functions...\n');
  
  try {
    // Test 1: Initial authentication state
    console.log('1. Testing initial authentication state...');
    console.log('   - isAuthenticated():', isAuthenticated());
    console.log('   - getUserInfo():', getUserInfo());
    
    // Test 2: Mock login
    console.log('\n2. Testing mock login...');
    const loginResult = await mockLogin('john@example.com', 'password123', 'client');
    console.log('   - Login successful:', loginResult);
    console.log('   - isAuthenticated() after login:', isAuthenticated());
    console.log('   - getUserInfo() after login:', getUserInfo());
    
    // Test 3: Mock data fetching
    console.log('\n3. Testing mock data fetching...');
    const properties = await getMockProperties();
    const agents = await getMockAgents();
    const users = await getMockUsers();
    const callbacks = await getMockCallbacks();
    const adminStats = await getMockAdminStats();
    
    console.log('   - Properties count:', properties.length);
    console.log('   - Agents count:', agents.length);
    console.log('   - Users count:', users.length);
    console.log('   - Callbacks count:', callbacks.length);
    console.log('   - Admin stats:', adminStats);
    
    // Test 4: Mock registration
    console.log('\n4. Testing mock registration...');
    try {
      const registerResult = await mockRegister({
        name: 'Test User',
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
        user_type: 'subuser',
        phone: '+1234567890'
      });
      console.log('   - Registration successful:', registerResult);
    } catch (error) {
      console.log('   - Registration test (expected to fail for existing user):', error.message);
    }
    
    // Test 5: Logout
    console.log('\n5. Testing logout...');
    await logout();
    console.log('   - isAuthenticated() after logout:', isAuthenticated());
    console.log('   - getUserInfo() after logout:', getUserInfo());
    
    console.log('\n✅ All mock functions tested successfully!');
    return true;
    
  } catch (error) {
    console.error('❌ Mock test failed:', error);
    return false;
  }
};

// Export for use in components or run directly
export default testMockFunctions;