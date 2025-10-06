// Mock Property Inquiry Service - No API Integration Required

// Mock service functions that simulate the original API behavior
export const submitPropertyInquiry = async (propertyData) => {
  console.log('Mock: Property inquiry submission:', propertyData);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    success: true,
    message: 'Property inquiry submitted successfully',
    id: Date.now(),
    data: propertyData
  };
};

export const requestCallback = async (callbackData) => {
  console.log('Mock: Callback request:', callbackData);
  await new Promise(resolve => setTimeout(resolve, 800));
  return {
    success: true,
    message: 'Callback request submitted successfully',
    id: Date.now(),
    data: callbackData
  };
};

// Mock service functions that provide additional functionality
export const propertyInquiryService = {
  submitInquiry: submitPropertyInquiry,
  requestCallback: requestCallback,
  
  // Additional mock methods that might be needed
  getInquiries: async () => {
    console.log('Mock: Fetching inquiries');
    await new Promise(resolve => setTimeout(resolve, 600));
    // Return mock inquiries
    return [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        phone: "+1234567890",
        property_type: "apartment",
        location: "Mumbai",
        budget: "5000000-8000000",
        status: "pending",
        created_at: new Date().toISOString()
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+1234567891",
        property_type: "villa",
        location: "Delhi",
        budget: "10000000-15000000",
        status: "contacted",
        created_at: new Date().toISOString()
      }
    ];
  },
  
  updateInquiry: async (id, updateData) => {
    console.log(`Mock: Updating inquiry ${id} with data:`, updateData);
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      message: "Inquiry updated successfully",
      id: id
    };
  },
  
  deleteInquiry: async (id) => {
    console.log(`Mock: Deleting inquiry ${id}`);
    await new Promise(resolve => setTimeout(resolve, 400));
    return {
      success: true,
      message: "Inquiry deleted successfully"
    };
  }
};

export default propertyInquiryService;