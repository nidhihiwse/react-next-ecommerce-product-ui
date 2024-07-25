"use client";

import React from "react";
import Dropdown from "./Dropdown";
import LanguageSelector from "./LanguageSelector";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="mx-auto flex justify-between items-center px-32">
        <div className="flex justify-between header-left">
          <img src="/logo.png" alt="EVFY Logo" className="h-8 w-auto" />
          <nav className="ml-8">
          <Dropdown label="Find EV Cars" options={['Option 1', 'Option 2', 'Option 3']} />
          <Dropdown label="EV Guides" options={['Guide 1', 'Guide 2', 'Guide 3']} />
          </nav>
        </div>

        <div className="flex justify-between header-right">
        {/* LanguageSelector component */}
        <LanguageSelector />

        <div className="ml-8 font-semibold">Login / Sign up</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
