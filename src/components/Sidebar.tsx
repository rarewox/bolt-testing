import React from 'react';
import { User, Shield, CreditCard, FileText, Phone } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'profile', label: 'Documents', icon: User, active: false },
    { id: 'verification', label: 'Verify', icon: Shield, active: false },
    { id: 'vtin', label: 'MY VTIN', icon: CreditCard, active: false },
    { id: 'subscription', label: 'Subscription', icon: FileText, active: false },
  ];

  return (
    <div className="w-64 bg-gray-50 min-h-screen border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-green-600 mb-8">VTIN</h1>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.active || activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-gray-400'}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button className="w-full mt-6 flex items-center space-x-3 px-4 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors">
          <div className="w-2 h-2 rounded-full bg-white" />
          <span className="font-medium">Instant SOS</span>
        </button>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-sm text-gray-500 mb-2">VTIN Number</div>
          <div className="font-mono text-lg font-semibold text-gray-900 mb-4">1234567890</div>
          <button className="text-green-600 hover:text-green-700 text-sm font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};