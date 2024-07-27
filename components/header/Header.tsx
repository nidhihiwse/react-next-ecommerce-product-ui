"use client";

import React from "react";
import Dropdown from "./Dropdown";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="mx-auto flex flex-wrap justify-between items-center lg:px-32 px-2">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="EVFY Logo" className="h-8 w-auto" />
          <nav className="hidden md:flex space-x-4">
            <Dropdown label="Find EV Cars" options={['Option 1', 'Option 2', 'Option 3']} />
            <Dropdown label="EV Guides" options={['Guide 1', 'Guide 2', 'Guide 3']} />
          </nav>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <LanguageSelector />
          <div className="font-semibold">Login / Sign up</div>
        </div>
        <nav className="flex md:hidden w-full justify-center mt-4 space-x-4">
          <Dropdown label="Find EV Cars" options={['Option 1', 'Option 2', 'Option 3']} />
          <Dropdown label="EV Guides" options={['Guide 1', 'Guide 2', 'Guide 3']} />
        </nav>
      </div>
    </header>
  );
};

export default Header;