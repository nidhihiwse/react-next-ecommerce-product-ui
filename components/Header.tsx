import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">EVFY</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Find EV Cars</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">EV Guides</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Log In / Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
