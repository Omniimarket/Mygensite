import React from 'react';

const SubFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 md:px-8 lg:px-12 text-center">
      <p className="text-gray-500 text-sm">&copy; 2025 AI Generator Hub. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4 text-sm">
        <a href="/privacy-policy" className="text-gray-400 hover:text-blue-300 transition-colors">Privacy Policy</a>
        <a href="/terms-of-service" className="text-gray-400 hover:text-blue-300 transition-colors">Terms of Service</a>
        <a href="/about" className="text-gray-400 hover:text-blue-300 transition-colors">About Us</a>
        <a href="/contact" className="text-gray-400 hover:text-blue-300 transition-colors">Contact</a>
      </div>
    </footer>
  );
};

export default SubFooter;
