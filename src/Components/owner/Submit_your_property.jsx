import React from 'react'
import { useState } from 'react';
import { submitPropertyInquiry } from '../../utils/api';

const Submit_your_property = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    propertyFor: 'Buy',
    propertyType: '',
    budgetMin: '',
    budgetMax: '',
    builtUpUnit: '',
    builtUpMin: '',
    builtUpMax: '',
    city: '',
    mobile: '',
    countryCode: 'IN (+91)',
    name: '',
    email: '',
    agree: false,
  });

  // Step 1: Requirement Details
  const handleStep1Change = (e) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Step 2: Mobile Verification
  const handleStep2Change = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Step 3: Confirmation
  const handleStep3Change = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  // Step navigation
  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      // Basic validation for step 1
      if (!form.propertyType || !form.city) {
        alert('Please fill all required fields.');
        return;
      }
    }
    if (step === 2) {
      if (!form.mobile) {
        alert('Please enter your mobile number.');
        return;
      }
    }
    setStep((prev) => Math.min(prev + 1, 3));
  };
  const handlePrev = (e) => {
    e.preventDefault();
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // Final submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.agree) {
      alert('Please fill all required fields and agree to Terms & Conditions.');
      return;
    }
    
    try {
      // Call the mock property submission function
      const result = await submitPropertyInquiry(form);
      
      if (result.success) {
        alert(`Thank you! Your property requirement has been submitted successfully.\nRequirement ID: ${result.id}\n\nWe will match you with suitable properties and contact you at ${form.mobile}.`);
        
        // Reset form to initial state
        setStep(1);
        setForm({
          propertyFor: 'Buy',
          propertyType: '',
          budgetMin: '',
          budgetMax: '',
          builtUpUnit: '',
          builtUpMin: '',
          builtUpMax: '',
          city: '',
          mobile: '',
          countryCode: 'IN (+91)',
          name: '',
          email: '',
          agree: false,
        });
      } else {
        const error = await response.json();
        alert(`Failed to submit requirement: ${error.detail || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f7f7f7] flex flex-col items-center py-10 px-2 md:px-0">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-center text-xl md:text-2xl font-bold text-[#f75c5c] mb-2">Tell us About Your Property Need!</h2>
        <p className="text-center text-gray-700 mb-6">We'll give you the best Matching Properties in your localities</p>
        {/* Interactive Stepper */}
        <div className="w-full flex flex-col items-center mb-8">
          <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto" style={{minHeight: '70px'}}>
            {/* Line behind steps */}
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-gray-300 z-0" style={{margin: '0 60px'}}></div>
            {/* Step 1 - Overlapping the line */}
            <div className="flex flex-col items-center z-10 flex-1">
              <div className="relative flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow border-2 ${step === 1 ? 'bg-[#1756a9] text-white border-[#1756a9]' : 'bg-white text-[#1756a9] border-gray-400'}`} style={{position: 'relative', top: '-6px'}}>1</div>
                <div className={`mt-2 text-center font-bold text-base ${step === 1 ? 'text-black' : 'text-gray-600'}`} style={{fontWeight: step === 1 ? 'bold' : 'normal'}}>Tell us your requirements</div>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center z-10 flex-1">
              <div className="relative flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow border-2 ${step === 2 ? 'bg-[#1756a9] text-white border-[#1756a9]' : 'bg-white text-[#1756a9] border-gray-400'}`} style={{position: 'relative', top: '-6px'}}>2</div>
                <div className={`mt-2 text-center font-bold text-base ${step === 2 ? 'text-black' : 'text-gray-600'}`} style={{fontWeight: step === 2 ? 'bold' : 'normal'}}>Mobile verification</div>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center z-10 flex-1">
              <div className="relative flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow border-2 ${step === 3 ? 'bg-[#1756a9] text-white border-[#1756a9]' : 'bg-white text-[#1756a9] border-gray-400'}`} style={{position: 'relative', top: '-6px'}}>3</div>
                <div className={`mt-2 text-center font-bold text-base ${step === 3 ? 'text-black' : 'text-gray-600'}`} style={{fontWeight: step === 3 ? 'bold' : 'normal'}}>Confirmation</div>
              </div>
            </div>
            {/* Blue line progress */}
            <div className="absolute top-6 left-0 h-[2px] bg-[#1756a9] z-10 transition-all duration-300" style={{width: `${(step-1)*50}%`, marginLeft: '60px'}}></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-10 p-15 ">
          {/* Left: Form - Step 1 */}
          {step === 1 && (
            <div className="flex-1 bg-white rounded-l-4xl p-8" style={{boxShadow: '0 12px 48px 0 rgba(34, 34, 34, 0.22), 0 2px 12px 0 rgba(34,34,34,0.14)'}}>
              <form onSubmit={handleNext}>
                <div className="mb-6">
                  <h3 className="text-sm text-gray-500 mb-2">Requirement Details</h3>
                  <div className="flex items-center gap-6 mb-4">
                    <label className="text-sm text-gray-500">Property for</label>
                    <label className="flex items-center gap-1 text-sm text-gray-500"><input type="radio" name="propertyFor" value="Buy" checked={form.propertyFor === 'Buy'} onChange={handleStep1Change} className="accent-[#2ca3e6]" /> Buy</label>
                    <label className="flex items-center gap-1 text-sm text-gray-500"><input type="radio" name="propertyFor" value="Rent" checked={form.propertyFor === 'Rent'} onChange={handleStep1Change} className="accent-[#2ca3e6]" /> Rent</label>
                    <label className="flex items-center gap-1 text-sm text-gray-500"><input type="radio" name="propertyFor" value="PG" checked={form.propertyFor === 'PG'} onChange={handleStep1Change} className="accent-[#2ca3e6]" /> PG</label>
                  </div>
                  <div className="mb-4">
                    <label className="text-sm text-gray-500">Property Type</label>
                    <select name="propertyType" value={form.propertyType} onChange={handleStep1Change} className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm text-gray-500">
                      <option value="">Select Property Type</option>
                      <optgroup label="Residential Property">
                        <option value="Flats / Apartments">Flats / Apartments</option>
                        <option value="Independent House">Independent House</option>
                        <option value="Builder Floor">Builder Floor</option>
                        <option value="Farm House">Farm House</option>
                        <option value="Residential Land / Plots">Residential Land / Plots</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Studio Apartments">Studio Apartments</option>
                        <option value="Villa">Villa</option>
                      </optgroup>
                      <optgroup label="Commercial Property">
                        <option value="Commercial Shops">Commercial Shops</option>
                        <option value="Showrooms">Showrooms</option>
                        <option value="Office Space">Office Space</option>
                        <option value="Business Center">Business Center</option>
                        <option value="Farm / Agricultural Land">Farm / Agricultural Land</option>
                        <option value="Commercial Plots">Commercial Plots</option>
                        <option value="Industrial Land">Industrial Land</option>
                        <option value="Guest House">Guest House</option>
                        <option value="Hotel & Restaurant">Hotel & Restaurant</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-500">Budget</label>
                      <div className="flex gap-2 mt-1">
                        <select name="budgetMin" value={form.budgetMin} onChange={handleStep1Change} className="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm text-gray-500">
                          <option value="">Min</option>
                          <option value="1 Lac">1 Lac</option>
                          <option value="2 Lacs">2 Lacs</option>
                          <option value="3 Lacs">3 Lacs</option>
                          <option value="4 Lacs">4 Lacs</option>
                          <option value="5 Lacs">5 Lacs</option>
                          <option value="10 Lacs">10 Lacs</option>
                          <option value="15 Lacs">15 Lacs</option>
                          <option value="20 Lacs">20 Lacs</option>
                          <option value="25 Lacs">25 Lacs</option>
                          <option value="30 Lacs">30 Lacs</option>
                          <option value="35 Lacs">35 Lacs</option>
                          <option value="40 Lacs">40 Lacs</option>
                          <option value="45 Lacs">45 Lacs</option>
                          <option value="50 Lacs">50 Lacs</option>
                          <option value="55 Lacs">55 Lacs</option>
                          <option value="60 Lacs">60 Lacs</option>
                          <option value="65 Lacs">65 Lacs</option>
                          <option value="70 Lacs">70 Lacs</option>
                          <option value="75 Lacs">75 Lacs</option>
                        </select>
                        <input name="budgetMax" type="text" value={form.budgetMax} onChange={handleStep1Change} placeholder="Max" className="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm text-gray-500" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">Built Up Area</label>
                    <div className="flex gap-2 mt-1">
                      <select name="builtUpUnit" value={form.builtUpUnit} onChange={handleStep1Change} className="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm text-gray-500">
                        <option value="">Select Unit</option>
                        <option value="Sq. Ft.">Sq. Ft.</option>
                        <option value="Sq. Meter">Sq. Meter</option>
                        <option value="Sq. Yard">Sq. Yard</option>
                        <option value="Acre">Acre</option>
                        <option value="Hectare">Hectare</option>
                        <option value="Marla">Marla</option>
                        <option value="Cent">Cent</option>
                        <option value="Bigha">Bigha</option>
                        <option value="Kanal">Kanal</option>
                        <option value="Ground">Ground</option>
                      </select>
                      <input name="builtUpMin" type="text" value={form.builtUpMin} onChange={handleStep1Change} placeholder="Min" className="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm text-gray-500" />
                      <input name="builtUpMax" type="text" value={form.builtUpMax} onChange={handleStep1Change} placeholder="Max" className="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm text-gray-500" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="text-sm text-gray-500">City / Location</label>
                    <input name="city" type="text" value={form.city} onChange={handleStep1Change} placeholder="Select your City / Location" className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm text-gray-500" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-[#1756a9] text-white font-bold py-3 rounded mt-4 hover:bg-[#2ca3e6] transition">Next</button>
              </form>
            </div>
          )}
          {/* Step 2: Mobile Verification */}
          {step === 2 && (
            <div className="flex-1 bg-white rounded-xl p-8 flex flex-col items-center justify-center" style={{boxShadow: '0 12px 48px 0 rgba(34, 34, 34, 0.22), 0 2px 12px 0 rgba(34,34,34,0.14)'}}>
              <h3 className="text-sm text-gray-500 mb-4">Mobile Verification</h3>
              <form onSubmit={handleNext} className="w-full max-w-sm">
                <label className="text-sm text-gray-500">Mobile No</label>
                <div className="flex gap-2 mt-1 mb-4">
                  <select name="countryCode" value={form.countryCode} onChange={handleStep2Change} className="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm text-gray-500">
                    <option value="IN (+91)">IN (+91)</option>
                    <option value="US (+1)">US (+1)</option>
                    <option value="UK (+44)">UK (+44)</option>
                  </select>
                  <input name="mobile" type="text" value={form.mobile} onChange={handleStep2Change} placeholder="Enter your Mobile No." className="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm text-gray-500" />
                </div>
                <button type="submit" className="w-full bg-[#1756a9] text-white py-3 rounded mt-4 hover:bg-[#2ca3e6] transition text-sm">Verify & Next</button>
                <button type="button" onClick={handlePrev} className="w-full bg-gray-200 text-[#1756a9] py-3 rounded mt-2 hover:bg-gray-300 transition text-sm">Back</button>
              </form>
            </div>
          )}
          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="flex-1 bg-white rounded-xl p-8 flex flex-col items-center justify-center" style={{boxShadow: '0 12px 48px 0 rgba(34, 34, 34, 0.22), 0 2px 12px 0 rgba(34,34,34,0.14)'}}>
              <h3 className="text-sm text-gray-500 mb-4">Confirmation</h3>
              <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <label className="text-sm text-gray-500">Your Name</label>
                <input name="name" type="text" value={form.name} onChange={handleStep3Change} placeholder="Enter your Name" className="w-full border border-gray-300 rounded px-3 py-2 mt-1 mb-4 text-sm text-gray-500" />
                <label className="text-sm text-gray-500">Email ID</label>
                <input name="email" type="email" value={form.email} onChange={handleStep3Change} placeholder="Enter your email" className="w-full border border-gray-300 rounded px-3 py-2 mt-1 mb-4 text-sm text-gray-500" />
                <div className="flex items-center gap-2 mt-2 mb-4">
                  <input name="agree" type="checkbox" checked={form.agree} onChange={handleStep3Change} className="accent-[#2ca3e6]" />
                  <span className="text-xs text-gray-500">Yes I agree to the Terms & Conditions</span>
                </div>
                <button type="submit" className="w-full bg-[#1756a9] text-white py-3 rounded mt-4 hover:bg-[#2ca3e6] transition text-sm">Submit Your Property Requirement</button>
                <button type="button" onClick={handlePrev} className="w-full bg-gray-200 text-[#1756a9] py-3 rounded mt-2 hover:bg-gray-300 transition text-sm">Back</button>
              </form>
            </div>
          )}
          {/* Right: How it works */}
          <div className="flex-1 bg-[#377bb7] p-8 text-white flex flex-col rounded-r-4xl gap-8 min-h-[500px]" style={{boxShadow: '0 12px 48px 0 rgba(34, 34, 34, 0.22), 0 2px 12px 0 rgba(34,34,34,0.14)'}}>
            <h3 className="text-xl font-bold mb-2">How it works ?</h3>
            <div className="w-full ">
              <div className="border-b border-white"></div>
            </div>
            {/* Step 1 */}
            <div className="flex items-center gap-6 mb-1">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                {/* Magnifying glass icon */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="22" cy="22" r="12" stroke="#377bb7" strokeWidth="2"/><rect x="32" y="32" width="8" height="2" rx="1" transform="rotate(45 32 32)" fill="#377bb7"/><circle cx="22" cy="22" r="6" stroke="#377bb7" strokeWidth="2"/></svg>
              </div>
              <div>
                <div className="font-bold text-lg">Share your Property Requirement</div>
                <div className="text-base text-white">Post your requirement to get the best deals for Buy/Rent/PG Properties</div>
              </div>
            </div>
            <div className="border-b border-white mb-1"></div>
            {/* Step 2 */}
            <div className="flex items-center gap-6 mb-1">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                {/* Property owner icon */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="12" y="24" width="24" height="12" rx="2" fill="#377bb7"/><rect x="18" y="18" width="12" height="6" rx="2" fill="#377bb7"/><rect x="20" y="12" width="8" height="6" rx="2" fill="#377bb7"/></svg>
              </div>
              <div>
                <div className="font-bold text-lg">Connect directly with property owner</div>
                <div className="text-base text-white">We will forward your requirement to property owner/property advertiser that you can make deal directly.</div>
              </div>
            </div>
            <div className="border-b border-white mb-1"></div>
            {/* Step 3 */}
            <div className="flex items-center gap-1">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                {/* Scale icon */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><ellipse cx="24" cy="32" rx="10" ry="4" fill="#377bb7"/><rect x="22" y="12" width="4" height="20" rx="2" fill="#377bb7"/><ellipse cx="24" cy="16" rx="6" ry="2" fill="#377bb7"/></svg>
              </div>
              <div>
                <div className="font-bold text-lg">Get the best deals</div>
                <div className="text-base text-white">Send accurate information about the property need that will help us to search perfect matching properties</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Submit_your_property
