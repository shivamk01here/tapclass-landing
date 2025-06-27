// pages/people/DeleteConfirmationModal.jsx
import React from 'react';
import { AlertTriangle } from 'react-feather'; // Changed icon for better semantics

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, userName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-4"> {/* Added padding */}
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
        <div className="flex justify-center mb-4">
          <AlertTriangle size={40} className="text-orange-500" /> {/* Changed icon and color */}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Confirm Deletion</h3>
        <p className="text-gray-700 text-sm mb-6">Are you sure you want to delete <span className="font-bold">{userName}</span>? This action cannot be undone.</p>
        <div className="flex justify-center space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;