// pages/people/UserDetail.jsx
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Edit, Trash2, Save, XCircle } from 'react-feather'; // Added Save, XCircle for edit mode

const UserDetail = ({ user, activeRole, onBack, onEdit, onDelete, getRoleName, getStatusColor }) => {
  const [editMode, setEditMode] = useState(false);
  const [editableUser, setEditableUser] = useState(user);

  useEffect(() => {
    setEditableUser(user); // Reset editableUser when user prop changes (e.g., when a new user is selected)
    setEditMode(false); // Exit edit mode when a new user is selected
  }, [user]);

  if (!user) return null;

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setEditableUser(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e, fieldName, index) => {
    const newArray = [...(editableUser[fieldName] || [])];
    newArray[index] = e.target.value;
    setEditableUser(prev => ({ ...prev, [fieldName]: newArray }));
  };

  const handleAddArrayItem = (fieldName) => {
    setEditableUser(prev => ({
      ...prev,
      [fieldName]: [...(prev[fieldName] || []), ''], // Add an empty string for new item
    }));
  };

  const handleRemoveArrayItem = (fieldName, index) => {
    const newArray = (editableUser[fieldName] || []).filter((_, i) => i !== index);
    setEditableUser(prev => ({ ...prev, [fieldName]: newArray }));
  };

  const handleSaveClick = () => {
    onEdit(editableUser); // Call the onEdit prop from parent with updated data
    setEditMode(false); // Exit edit mode
  };

  const handleCancelEdit = () => {
    setEditableUser(user); // Revert changes
    setEditMode(false); // Exit edit mode
  };

  const renderField = (label, fieldName, type = 'text') => (
    <div>
      <strong className="text-gray-700">{label}:</strong>
      {editMode ? (
        <input
          type={type}
          name={fieldName}
          value={editableUser[fieldName] || ''}
          onChange={handleFieldChange}
          className="w-full border border-gray-300 p-1.5 rounded-md text-sm focus:ring-gray-500 focus:border-gray-500 mt-1"
        />
      ) : (
        <span className="ml-2 text-gray-800">{user[fieldName] || 'N/A'}</span>
      )}
    </div>
  );

  const renderArrayField = (label, fieldName) => (
    <div>
      <strong className="text-gray-700">{label}:</strong>
      {editMode ? (
        <div className="space-y-2 mt-1">
          {(editableUser[fieldName] || []).map((item, index) => (
            <div key={index} className="flex items-center">
              <input
                type="text"
                value={item}
                onChange={(e) => handleArrayChange(e, fieldName, index)}
                className="flex-grow border border-gray-300 p-1.5 rounded-md text-sm focus:ring-gray-500 focus:border-gray-500"
              />
              <button
                type="button"
                onClick={() => handleRemoveArrayItem(fieldName, index)}
                className="ml-2 text-red-500 hover:text-red-700 p-1 rounded-full"
              >
                <XCircle size={16} />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddArrayItem(fieldName)}
            className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-xs"
          >
            Add {label.slice(0, -1)}
          </button>
        </div>
      ) : (
        <ul className="list-disc list-inside ml-2">
          {(user[fieldName] || []).length > 0 ? (
            (user[fieldName] || []).map((item, index) => <li key={index} className="text-gray-800">{item}</li>)
          ) : (
            <span className="text-gray-800">N/A</span>
          )}
        </ul>
      )}
    </div>
  );

  const renderStatusField = () => (
    <div>
      <strong className="text-gray-700">Status:</strong>
      {editMode ? (
        activeRole === '5' ? ( // For Leads (string status)
          <select
            name="status"
            value={editableUser.status}
            onChange={handleFieldChange}
            className="w-full border border-gray-300 p-1.5 rounded-md text-sm focus:ring-gray-500 focus:border-gray-500 mt-1"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Converted">Converted</option>
          </select>
        ) : ( // For Students/Staff (number status)
          <select
            name="status"
            value={editableUser.status}
            onChange={(e) => setEditableUser({ ...editableUser, status: parseInt(e.target.value) })}
            className="w-full border border-gray-300 p-1.5 rounded-md text-sm focus:ring-gray-500 focus:border-gray-500 mt-1"
          >
            <option value={1}>Active</option>
            <option value={0}>Inactive</option>
          </select>
        )
      ) : (
        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
          {activeRole === '5' ? user.status : (user.status === 1 ? 'Active' : 'Inactive')}
        </span>
      )}
    </div>
  );


  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span className="font-semibold text-sm">Back to {getRoleName(activeRole, false)}</span>
        </button>
        <div className="flex space-x-2">
          {editMode ? (
            <>
              <button
                onClick={handleSaveClick}
                className="px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center text-sm"
              >
                <Save size={16} className="mr-1" /> Save
              </button>
              <button
                onClick={handleCancelEdit}
                className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors flex items-center text-sm"
              >
                <XCircle size={16} className="mr-1" /> Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setEditMode(true)}
                className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => onDelete(user)}
                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md"
              >
                <Trash2 size={18} />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm text-sm">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">
          {getRoleName(activeRole, true)} Details: {user.name}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          {renderField('Name', 'name')}
          {renderField('Email', 'email', 'email')}
          {renderField('Mobile', 'mobile', 'tel')}
          {renderStatusField()} {/* Use the dedicated status field renderer */}

          {activeRole === '3' && ( // Student-specific details
            <>
              {renderField('Department', 'department')}
              {renderField('Batch', 'batch')}
              {renderArrayField('Courses', 'courses')}
              {/* Add more student-specific fields if needed */}
            </>
          )}
          {activeRole === '2' && ( // Staff-specific details
            <>
              {renderField('Department', 'department')}
              {renderField('Position', 'position')}
              {renderArrayField('Expertise', 'expertise')}
              {renderField('Office Hours', 'officeHours')}
              {/* Add more staff-specific fields if needed */}
            </>
          )}
          {activeRole === '5' && ( // Lead-specific details
            <>
              {renderField('Source', 'source')}
              {renderField('Date', 'date', 'date')}
              {renderArrayField('Interests', 'interests')}
              {renderArrayField('Follow-up Notes', 'followUpNotes')}
              {/* Add more lead-specific fields if needed */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;