// pages/Management/SubjectDetail.jsx
import React from 'react';
import { ArrowLeft, Edit3, Trash2 } from 'react-feather';

const SubjectDetail = ({ subject, onBack }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span className="font-semibold">Back to Subjects</span>
        </button>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
            <Edit3 size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">{subject.name}</h2>
        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${subject.status === 1 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`}>
          {subject.status === 1 ? 'Active' : 'Inactive'}
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <p className="text-sm text-gray-600">Description:</p>
            <p className="font-medium text-gray-700">{subject.description}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Duration:</p>
            <p className="font-medium text-gray-700">{subject.duration}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Difficulty:</p>
            <p className="font-medium text-gray-700">{subject.difficulty}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Instructor:</p>
            <p className="font-medium text-gray-700">{subject.instructor}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Enrolled Students:</p>
            <p className="font-medium text-gray-700">{subject.enrolled}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;