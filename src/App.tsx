import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MyBioTab } from './components/MyBioTab';
import { IDVerificationTab } from './components/IDVerificationTab';
import { VTINTab } from './components/VTINTab';

function App() {
  const [activeTab, setActiveTab] = useState('bio');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'bio':
        return <MyBioTab />;
      case 'id-verification':
        return <IDVerificationTab />;
      case 'vtin':
        return <VTINTab />;
      default:
        return <MyBioTab />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1">
        <Header />
        
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
            <p className="text-gray-600">Your safety is our priority</p>
          </div>

          <div className="mb-8">
            <nav className="flex space-x-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('bio')}
                className={`pb-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === 'bio'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                My Bio
              </button>
              <button
                onClick={() => setActiveTab('id-verification')}
                className={`pb-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === 'id-verification'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                ID Verification
              </button>
              <button
                onClick={() => setActiveTab('vtin')}
                className={`pb-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === 'vtin'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                VTIN
              </button>
            </nav>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            {renderActiveTab()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;