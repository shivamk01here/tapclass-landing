// pages/Management/AddEditModal.jsx
import React from 'react';

const AddEditModal = ({ type, onClose }) => {
  // Logic for different modal forms (add batch, edit subject, etc.)
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-xl p-8 w-full max-w-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {type === 'add-batch' && 'Add New Batch'}
          {type === 'edit-batch' && 'Edit Batch'}
          {type === 'add-subject' && 'Add New Subject'}
          {type === 'edit-subject' && 'Edit Subject'}
          {type === 'add-package' && 'Add New Package'}
          {type === 'edit-package' && 'Edit Package'}
        </h3>
        {/* Your form goes here */}
        <p>Form content for {type} goes here...</p>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 mr-2"
          >
            Cancel
          </button>
          <button
            // onClick={handleSubmit}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditModal;