"use client";

import React, { useState } from 'react';

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="my-8">
      {items.map((item, index) => (
        <div key={index} className="border-t py-6">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between w-full px-4 py-2 text-left text-black focus:outline-none"
          >
            <span className="font-semibold">{item.title}</span>
            <span className="text-xl">
              {activeIndex === index ? '-' : '+'}
            </span>
          </button>
          <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
            <div className="px-4 text-gray-500">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;