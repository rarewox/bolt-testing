import React from 'react';
import { CreditCard, Shield, CheckCircle } from 'lucide-react';

export const VTINTab: React.FC = () => {
  return (
    <div className="max-w-2xl">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <CreditCard className="text-green-600" size={24} />
          <h3 className="text-xl font-semibold">VTIN Information</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div>
              <div className="text-sm text-gray-600">Your VTIN Number</div>
              <div className="font-mono text-2xl font-bold text-green-700">1234567890</div>
            </div>
            <CheckCircle className="text-green-600" size={24} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Status</div>
              <div className="font-semibold text-green-600">Active</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-1">Issue Date</div>
              <div className="font-semibold">Jan 15, 2024</div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start space-x-3">
              <Shield className="text-blue-600 mt-1" size={20} />
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Security Notice</h4>
                <p className="text-sm text-blue-700">
                  Your VTIN is linked to your verified identity. Keep it secure and report any 
                  unauthorized use immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};