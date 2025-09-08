import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex justify-between items-center">
        <div />
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 text-sm text-gray-600 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors">
            For Instant Help
          </button>
          <button className="px-4 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
            Help Now
          </button>
          <button className="px-4 py-2 text-sm text-red-600 bg-red-100 border border-red-300 rounded-lg hover:bg-red-200 transition-colors">
            Dial 111
          </button>
          <button className="px-4 py-2 text-sm text-red-600 bg-pink-100 border border-pink-300 rounded-lg hover:bg-pink-200 transition-colors">
            SMS Help
          </button>
          <div className="w-10 h-10 bg-gray-300 rounded-full ml-4"></div>
        </div>
      </div>
    </header>
  );
};