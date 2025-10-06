import React, { useState } from 'react'

const FAQ_Section = () => {
  const faqs = [
    {
      question: 'How to Choose House Inspection Company?',
      color: 'border-blue-600',
      answer: 'Check for certifications, experience, customer reviews, and transparency in reporting. Choose a company that provides detailed inspection reports and is recognized by industry standards.'
    },
    {
      question: 'What is the Advantages of Home inspection for Homebuyers?',
      color: 'border-orange-600',
      answer: 'Home inspection helps buyers identify hidden issues, ensures safety, and provides peace of mind before making a purchase. It can save money by revealing costly repairs early.'
    },
    {
      question: 'What checks are done under Building inspection services?',
      color: 'border-blue-600',
      answer: 'Building inspection covers structural integrity, electrical systems, plumbing, roofing, dampness, pest infestation, and compliance with local bylaws.'
    },
    {
      question: 'What is the charge of Home Inspection Services?',
      color: 'border-orange-600',
      answer: 'Charges vary by property size and location, typically ranging from ₹2,000 to ₹10,000. Contact service providers for exact quotes.'
    },
  ];

  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="bg-[#fafafa] py-10">
      <h2 className="text-2xl font-semibold text-center mb-4">FAQ For Home Inspection in India</h2>
      <p className="text-gray-700 text-center max-w-7xl mx-auto mb-8">
        There is nothing more fascinating than moving into a new Home. If you decide after evaluating all the property-related matters very well, you can avoid the probable risks of buying a new property. Therefore a proper Home inspection service is obligatory. Here we are attaching some of the most asked questions and their answer to get a better understanding.
      </p>
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className={`bg-white shadow rounded-lg px-6 py-0 transition-all duration-200 ${faq.color} border-l-4`}> 
              <div className="flex items-center py-2 cursor-pointer" onClick={() => setOpenIdx(isOpen ? null : idx)}>
                <span className="font-bold text-red-600 mr-2">Q.</span>
                <span className="font-semibold text-lg text-gray-800 flex-1">{faq.question}</span>
                <span className={`w-10 h-10 flex items-center justify-center ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                  <svg width="24" height="24" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 10l4 4 4-4"/></svg>
                </span>
              </div>
              {isOpen && (
                <div className="pb-5 pt-0 text-gray-700 text-base pl-12 pr-2 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ_Section
