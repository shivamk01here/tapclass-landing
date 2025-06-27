// pages/Management/PackageDetail.jsx
import React from 'react';
import { ArrowLeft, Edit3, Trash2, Star } from 'react-feather';

const PackageDetail = ({ pkg, onBack }) => {
  return (
    <div>
      {/* Header for Package Detail */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mr-4"
          >
            <ArrowLeft size={24} className="mr-2" />
          </button>
          <h2 className="text-2xl font-bold text-gray-800">{pkg.name}</h2>
          <span className="ml-4 px-3 py-1 rounded-full text-sm font-medium text-blue-600 bg-blue-100">
            ${pkg.price}
          </span>
        </div>
        <div className="flex space-x-3">
          <button className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
            <Edit3 size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Package Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Description:</p>
            <p className="font-medium text-gray-700">{pkg.description}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Discount:</p>
            <p className="font-medium text-gray-700">{pkg.discount}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Enrolled:</p>
            <p className="font-medium text-gray-700">{pkg.enrolled}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Rating:</p>
            <p className="font-medium text-gray-700 flex items-center">
              <Star size={16} className="text-yellow-500 mr-1" />{pkg.rating}
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-600 mb-2">Included Subjects:</p>
            <div className="flex flex-wrap gap-2">
              {pkg.subjects.map(sub => (
                <span key={sub.id} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {sub.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;