// pages/people/UserFormModal.jsx
import React, { useState, useEffect } from 'react';
import { X } from 'react-feather';

const UserFormModal = ({ isOpen, onClose, onSubmit, modalType, roleName, activeRoleID, initialData }) => {
  // Initialize local form data based on modalType (add vs. edit)
  const [localFormData, setLocalFormData] = useState(() => {
    if (modalType === 'edit' && initialData) {
      // For editing, deep copy initialData to allow modification without affecting original prop
      const data = JSON.parse(JSON.stringify(initialData));
      // Convert status from number to string for select if necessary
      if (activeRoleID !== '5') { // Students/Staff
        data.status = data.status === 1 ? '1' : '0';
      }
      return data;
    } else {
      // For adding, set defaults based on role
      const baseData = { name: '', email: '', mobile: '' };
      if (activeRoleID === '3') return { ...baseData, department: '', batch: '', courses: [], attendance: {} };
      if (activeRoleID === '2') return { ...baseData, department: '', position: '', expertise: [], officeHours: '' };
      if (activeRoleID === '5') return { ...baseData, source: '', date: '', interests: [], followUpNotes: [] };
      return baseData;
    }
  });

  useEffect(() => {
    // Sync initialData with localFormData when it changes, especially for edit mode
    if (modalType === 'edit' && initialData) {
      const data = JSON.parse(JSON.stringify(initialData));
      if (activeRoleID !== '5') {
        data.status = data.status === 1 ? '1' : '0';
      }
      setLocalFormData(data);
    } else if (modalType === 'add') {
      // Reset for add form
      const baseData = { name: '', email: '', mobile: '' };
      if (activeRoleID === '3') setLocalFormData({ ...baseData, department: '', batch: '', courses: [], attendance: {} });
      if (activeRoleID === '2') setLocalFormData({ ...baseData, department: '', position: '', expertise: [], officeHours: '' });
      if (activeRoleID === '5') setLocalFormData({ ...baseData, source: '', date: '', interests: [], followUpNotes: [] });
    }
  }, [initialData, modalType, activeRoleID]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Handle number/string conversion for status based on role
    if (name === 'status' && activeRoleID !== '5') {
      setLocalFormData(prev => ({ ...prev, [name]: parseInt(value) }));
    } else {
      setLocalFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  const handleArrayChange = (e, fieldName, index) => {
    const newArray = [...(localFormData[fieldName] || [])];
    newArray[index] = e.target.value;
    setLocalFormData(prev => ({ ...prev, [fieldName]: newArray }));
  };

  const handleAddArrayItem = (fieldName) => {
    setLocalFormData(prev => ({
      ...prev,
      [fieldName]: [...(prev[fieldName] || []), ''], // Add an empty string for new item
    }));
  };

  const handleRemoveArrayItem = (fieldName, index) => {
    const newArray = (localFormData[fieldName] || []).filter((_, i) => i !== index);
    setLocalFormData(prev => ({ ...prev, [fieldName]: newArray }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(localFormData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"> {/* Wider modal */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            {modalType === 'add' ? `Add New ${roleName}` : `Edit ${roleName}`}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Grid for basic fields */}
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-700 text-sm font-medium">Name</label>
              <input type="text" id="name" name="name" required value={localFormData.name || ''} onChange={handleChange}
                className="w-full border border-gray-300 p-2.5 rounded-md text-base focus:ring-gray-500 focus:border-gray-500" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-700 text-sm font-medium">Email</label>
              <input type="email" id="email" name="email" required value={localFormData.email || ''} onChange={handleChange}
                className="w-full border border-gray-300 p-2.5 rounded-md text-base focus:ring-gray-500 focus:border-gray-500" />
            </div>
            <div>
              <label htmlFor="mobile" className="block mb-1 text-gray-700 text-sm font-medium">Mobile</label>
              <input type="tel" id="mobile" name="mobile" value={localFormData.mobile || ''} onChange={handleChange}
                className="w-full border border-gray-300 p-2.5 rounded-md text-base focus:ring-gray-500 focus:border-gray-500" />
            </div>

            {modalType === 'edit' && ( // Show status dropdown only in edit mode
              <div>
                <label htmlFor="status" className="block mb-1 text-gray-700 text-sm font-medium">Status</label>
                {activeRoleID === '5' ? ( // Leads have string status
                  <select id="status" name="status" value={localFormData.status || 'Active'} onChange={handleChange}
                    className="w-full border border-gray-300 p-2.5 rounded-md text-base focus:ring-gray-500 focus:border-gray-500">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Converted">Converted</option>
                  </select>
                ) : ( // Students/Staff have number status
                  <select id="status" name="status" value={localFormData.status === 1 ? '1' : '0'} onChange={handleChange}
                    className="w-full border border-gray-300 p-2.5 rounded-md text-base focus:ring-gray-500 focus:border-gray-500">
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                )}
              </div>
            )}

            {/* Role-specific fields */}
            {activeRoleID === '3' && ( // Student
              <>
                <div>
                  <label htmlFor="department" className="block mb-1 text-gray-700 text-sm font-medium">Department</label>
                  <input type="text" id="department" name="department" value={localFormData.department || ''} onChange={handleChange}
                    className="w-full border border-gray-300 p-2.5 rounded-md text-base focus:ring-gray-500 focus:border-gray-500" />
                </div>
                <div>
                  <label htmlFor="batch" className="block mb-1 text-gray-700 text-sm font-medium">Batch</label>
                  <input type="text" id="batch" name="batch" value={localFormData.batch || ''} onChange={handleChange}
                    className="w-full border border-gray-300 p-2.5 rounded-md text-base focus:ring-gray-500 focus:border-gray-500" />
                </div>
                {/* Dynamic fields for courses */}
                <div className="md:col-span-2">
                  <label className="block mb-1 text-gray-700 text-sm font-medium">Courses</label>
                  {(localFormData.courses || []).map((course, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input type="text" value={course} onChange={(e) => handleArrayChange(e, 'courses', index)}
                        className="flex-grow border border-gray-300 p-2 rounded-md text-sm focus:ring-gray-500 focus:border-gray-500" />
                      <button type="button" onClick={() => handleRemoveArrayItem('courses', index)}
                        className="ml-2 text-red-500 hover:text-red-700 p-1 rounded-full"><X size={16} /></button>
                    </div>
                  ))}
                  <button type="button" onClick={() => handleAddArrayItem('courses')}
                    className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-xs">Add Course</button>
                </div>
              </>
            )}

            {activeRoleID === '2' && ( // Staff
              <>
                <div>
                  <label htmlFor="department" className="block mb-1 text-gray-700 text-sm font-medium">Department</label>
                  <input type="text" id="department" name="department" value={localFormData.department || ''} onChange={handleChange}
                    className="w-full border border-gray-300 p-2.5 rounded-md text-base focus:ring-gray-500 focus:border-gray-500" />
                </div>
                <div>
                  <label htmlFor="position" className="block mb-1 text-gray-700 text-sm font-medium">Position</label>
                  <input type="text" id="position" name="position" value={localFormData.position || ''} onChange={handleChange}
                    className="w-full border border-gray-300 p-2.5 rounded-md text-base focus:ring-gray-500 focus:border-gray-500" />
                </div>
                <div>
                  <label htmlFor="officeHours" className="block mb-1 text-gray-700 text-sm font-medium">Office Hours</label>
                  <input type="text" id="officeHours" name="officeHours" value={localFormData.officeHours || ''} onChange={handleChange}
                    className="w-full border border-gray-300 p-2.5 rounded-md text-base focus:ring-gray-500 focus:border-gray-500" />
                </div>
                {/* Dynamic fields for expertise */}
                <div className="md:col-span-2">
                  <label className="block mb-1 text-gray-700 text-sm font-medium">Expertise</label>
                  {(localFormData.expertise || []).map((skill, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input type="text" value={skill} onChange={(e) => handleArrayChange(e, 'expertise', index)}
                        className="flex-grow border border-gray-300 p-2 rounded-md text-sm focus:ring-gray-500 focus:border-gray-500" />
                      <button type="button" onClick={() => handleRemoveArrayItem('expertise', index)}
                        className="ml-2 text-red-500 hover:text-red-700 p-1 rounded-full"><X size={16} /></button>
                    </div>
                  ))}
                  <button type="button" onClick={() => handleAddArrayItem('expertise')}
                    className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-xs">Add Skill</button>
                </div>
              </>
            )}

            {activeRoleID === '5' && ( // Lead
              <>
                <div>
                  <label htmlFor="source" className="block mb-1 text-gray-700 text-sm font-medium">Source</label>
                  <input type="text" id="source" name="source" value={localFormData.source || ''} onChange={handleChange}
                    className="w-full border border-gray-300 p-2.5 rounded-md text-base focus:ring-gray-500 focus:border-gray-500" />
                </div>
                <div>
                  <label htmlFor="date" className="block mb-1 text-gray-700 text-sm font-medium">Date</label>
                  <input type="date" id="date" name="date" value={localFormData.date || ''} onChange={handleChange}
                    className="w-full border border-gray-300 p-2.5 rounded-md text-base focus:ring-gray-500 focus:border-gray-500" />
                </div>
                {/* Dynamic fields for interests */}
                <div className="md:col-span-2">
                  <label className="block mb-1 text-gray-700 text-sm font-medium">Interests</label>
                  {(localFormData.interests || []).map((interest, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input type="text" value={interest} onChange={(e) => handleArrayChange(e, 'interests', index)}
                        className="flex-grow border border-gray-300 p-2 rounded-md text-sm focus:ring-gray-500 focus:border-gray-500" />
                      <button type="button" onClick={() => handleRemoveArrayItem('interests', index)}
                        className="ml-2 text-red-500 hover:text-red-700 p-1 rounded-full"><X size={16} /></button>
                    </div>
                  ))}
                  <button type="button" onClick={() => handleAddArrayItem('interests')}
                    className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-xs">Add Interest</button>
                </div>
                {/* Dynamic fields for followUpNotes */}
                <div className="md:col-span-2">
                  <label className="block mb-1 text-gray-700 text-sm font-medium">Follow-up Notes</label>
                  {(localFormData.followUpNotes || []).map((note, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <textarea rows="2" value={note} onChange={(e) => handleArrayChange(e, 'followUpNotes', index)}
                        className="flex-grow border border-gray-300 p-2 rounded-md text-sm focus:ring-gray-500 focus:border-gray-500 resize-y" />
                      <button type="button" onClick={() => handleRemoveArrayItem('followUpNotes', index)}
                        className="ml-2 text-red-500 hover:text-red-700 p-1 rounded-full"><X size={16} /></button>
                    </div>
                  ))}
                  <button type="button" onClick={() => handleAddArrayItem('followUpNotes')}
                    className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-xs">Add Note</button>
                </div>
              </>
            )}
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 mt-6">
            <button type="button" onClick={onClose}
              className="px-5 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 font-medium text-sm">
              Cancel
            </button>
            <button type="submit"
              className="px-5 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 font-medium text-sm">
              {modalType === 'add' ? `Add ${roleName}` : `Save Changes`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormModal;