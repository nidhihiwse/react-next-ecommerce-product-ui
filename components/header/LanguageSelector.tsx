import React, { useState } from 'react';

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="block w-full pl-3 pr-2 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="en">🇬🇧</option>
        <option value="fr">🇫🇷</option>
        <option value="de">🇩🇪</option>
        <option value="es">🇪🇸</option>
        <option value="zh">🇨🇳</option>
      </select>
    </div>
  );
};

export default LanguageSelector;