import React, { useState } from 'react';

export const FilterButtons: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('today');

  const filterOptions = [
    { id: 'last14', label: 'Last 14 Days' },
    { id: 'last7', label: 'Last 7 Days' },
    { id: 'today', label: 'Today' }
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 justify-end mb-6">
      {filterOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => setActiveFilter(option.id)}
          className={`flex justify-center items-center gap-2 border shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] relative px-4 py-2.5 rounded-lg border-solid border-[#D0D5DD] max-sm:w-full ${
            activeFilter === option.id 
              ? 'bg-gray-50 text-[#1D2939]' 
              : 'bg-white text-[#344054]'
          }`}
        >
          <div className="text-sm font-medium leading-5 relative max-sm:w-full">
            <div className="font-normal text-sm">
              {option.label}
            </div>
          </div>
        </button>
      ))}
      
      <div className="flex flex-col items-start gap-2 relative max-sm:w-full">
        <button className="flex justify-center items-center gap-2 border shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] relative bg-white px-4 py-2.5 rounded-lg border-solid border-[#D0D5DD] max-sm:w-full">
          <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: '#344054', strokeWidth: 1.67, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }}>
              <path d="M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M2.5 8.33342H17.5M4.16667 3.33341H15.8333C16.7538 3.33341 17.5 4.07961 17.5 5.00008V16.6667C17.5 17.5872 16.7538 18.3334 15.8333 18.3334H4.16667C3.24619 18.3334 2.5 17.5872 2.5 16.6667V5.00008C2.5 4.07961 3.24619 3.33341 4.16667 3.33341Z" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <div className="text-[#344054] text-sm font-medium leading-5 relative max-sm:w-full">
            <div className="font-normal text-sm text-[rgba(52,64,84,1)]">
              Jan 6, 2022 – Jan 13, 2022
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
