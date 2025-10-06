import React, { useState } from "react";

const Request_a_call = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    query: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    else if (form.name.trim().length < 3) newErrors.name = 'Name must be at least 3 characters.';

    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) newErrors.email = 'Enter a valid email.';

    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^[0-9]{10}$/.test(form.phone.trim())) newErrors.phone = 'Enter a valid 10-digit phone.';

    if (!form.type) newErrors.type = 'Please select your type.';

    if (!form.query.trim()) newErrors.query = 'Query is required.';
    else if (form.query.trim().length < 10) newErrors.query = 'Query must be at least 10 characters.';

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (submitted) setErrors(validate());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitSuccess(true);
        setForm({ name: '', email: '', phone: '', type: '', query: '' });
        setSubmitted(false);
        setTimeout(() => {
          setSubmitSuccess(false);
          if (onClose) onClose();
        }, 3000);
      } catch (error) {
        setErrors({ submit: 'Network error. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-2 sm:px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md"
        style={{
          backgroundImage: `url('/post_property_banner.png'), linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('/property-1.jpg')`
        }}
      ></div>

      {/* Modal */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white/95 backdrop-blur-md rounded-xl shadow-2xl relative animate-fadeIn z-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white text-base sm:text-lg font-semibold px-4 sm:px-6 py-3 sm:py-4 rounded-t-xl flex items-center justify-between">
          <span>Request A Callback</span>
          <button 
            onClick={onClose} 
            className="text-white text-xl sm:text-2xl font-bold hover:text-yellow-300 transition-colors"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form className="px-4 sm:px-6 py-5 flex flex-col gap-4 text-sm sm:text-base" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className={`border-b border-gray-300 focus:border-green-500 outline-none py-2 w-full ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className={`border-b border-gray-300 focus:border-green-500 outline-none py-2 w-full ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">+91</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                className={`border-b border-gray-300 focus:border-green-500 outline-none py-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
          </div>

          {/* Type */}
          <div>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className={`border-b border-gray-300 focus:border-green-500 outline-none py-2 w-full ${errors.type ? 'border-red-500' : ''}`}
            >
              <option value="" disabled>I am</option>
              <option value="Owner">Owner</option>
              <option value="Agent">Agent</option>
              <option value="Buyer">Buyer</option>
              <option value="Renter">Renter</option>
            </select>
            {errors.type && <div className="text-red-500 text-xs mt-1">{errors.type}</div>}
          </div>

          {/* Query */}
          <div>
            <textarea
              name="query"
              value={form.query}
              onChange={handleChange}
              placeholder="Enter your query"
              className={`border-b border-gray-300 focus:border-green-500 outline-none py-2 w-full resize-none ${errors.query ? 'border-red-500' : ''}`}
              rows={3}
            />
            {errors.query && <div className="text-red-500 text-xs mt-1">{errors.query}</div>}
          </div>

          {/* Submit error */}
          {errors.submit && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">
              {errors.submit}
            </div>
          )}

          {/* Success message */}
          {submitSuccess && (
            <div className="text-green-600 text-sm text-center bg-green-50 p-3 rounded">
              ✓ Callback request submitted successfully! We'll contact you within 24 hours.
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-green-600 to-black hover:from-green-700 hover:to-gray-900'
            } text-white font-semibold py-2 sm:py-3 rounded-lg mt-2 transition-all duration-300 w-full flex items-center justify-center text-sm sm:text-base`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Request A Call'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Request_a_call;
