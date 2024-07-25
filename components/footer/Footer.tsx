import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2023 EVFY. All rights reserved.</p>
        <nav className="flex space-x-4">
          <a href="#" className="text-sm hover:underline">Privacy Policy</a>
          <a href="#" className="text-sm hover:underline">Terms of Service</a>
          <a href="#" className="text-sm hover:underline">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;