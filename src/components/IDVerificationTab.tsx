import React, { useState } from 'react';
import { Upload, FileText } from 'lucide-react';

export const IDVerificationTab: React.FC = () => {
  const [idType, setIdType] = useState('National Identity Number');
  const [idNumber, setIdNumber] = useState('123456789');
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file drop logic here
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select ID Type</label>
          <select
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option>National Identity Number</option>
            <option>Driver's License</option>
            <option>Passport</option>
            <option>Voter's Card</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">ID No.</label>
          <input
            type="text"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Enter your ID number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload ID Picture</label>
          <div
            className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              dragActive
                ? 'border-green-400 bg-green-50'
                : 'border-gray-300 hover:border-green-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 mb-2">Drop your ID document here or</p>
            <button className="text-green-600 hover:text-green-700 font-medium">
              Browse Files
            </button>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept="image/*,.pdf"
            />
          </div>
        </div>

        <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors">
          Update
        </button>
      </div>

      <div className="flex justify-center items-start">
        <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg shadow-lg">
          <div className="bg-white rounded-lg p-4 relative overflow-hidden">
            <div className="text-xs text-green-800 font-bold mb-2">FEDERAL REPUBLIC OF NIGERIA</div>
            <div className="text-xs text-green-700 mb-4">DIGITAL NIN SLIP</div>
            
            <div className="flex items-start space-x-4">
              <div className="w-16 h-20 bg-gray-300 rounded"></div>
              <div className="flex-1">
                <div className="text-xs space-y-1 text-gray-700">
                  <div>SURNAME/NNEWI</div>
                  <div>FIRSTNAME/CHUKWU</div>
                  <div>MIDDLE NAME/IFUNANYA</div>
                  <div>PHONE: NIGERIAN</div>
                </div>
              </div>
              <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded-sm"></div>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-700 space-y-1">
              <div>DATE OF BIRTH: 01 OCT 1960</div>
              <div className="text-lg font-mono font-bold">0000 0000 0000</div>
            </div>

            <div className="absolute top-2 right-2 text-xs font-bold text-green-800">NGA</div>
            <div className="absolute bottom-2 right-2 text-xs text-gray-600">ISSUE DATE: 01 JAN 2016</div>
          </div>
        </div>
      </div>
    </div>
  );
};