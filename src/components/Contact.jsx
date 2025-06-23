import React from 'react';
import { useNavigate } from 'react-router-dom'; // If using React Router

const Contact = () => {
  // If using React Router
  const navigate = useNavigate();

  const handleContactClick = () => {
    // Method 1: Using React Router
    navigate('/contact');
    
    // OR Method 2: Regular page navigation
    // window.location.href = '/contact';
  };

  return (
    <div className="relative mt-16 py-10 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://framerusercontent.com/images/9c47fOR3CNoSsEtr6IEYJoKM.svg')",
          backgroundRepeat: 'repeat',
          backgroundPosition: 'left top',
          backgroundSize: '63px'
        }}
      ></div>
      
      <div className="relative z-10 p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Ready to Collaborate?</h2>
        <p className="text-gray-600 mb-6">Let's build something amazing together</p>
        
        {/* Method 1: Button with onClick handler */}
        <button
          onClick={handleContactClick}
          className="inline-block bg-black   text-white font-medium py-2 px-7 rounded-lg transition duration-200 text-md cursor-pointer"
        >
          Get in Touch
        </button>

        {/* OR Method 2: Regular anchor tag */}
        {/*
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200 text-lg"
        >
          Get in Touch
        </a>
        */}
        
        
      </div>
    </div>
  );
};

export default Contact;