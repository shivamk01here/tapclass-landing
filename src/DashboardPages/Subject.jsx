// src/components/ManagementPage.jsx
import React, { useState, useEffect } from 'react';
import {
  fetchSubjects,
  addSubject,
  fetchPackages,
  addPackage,
} from '../services/subjectService.js'; // Import the service functions and explicitly add .js extension

const ManagementPage = () => {
  const [activeTab, setActiveTab] = useState('subjects'); // 'subjects' or 'packages'
  const [subjects, setSubjects] = useState([]);
  const [packages, setPackages] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const [subjectForm, setSubjectForm] = useState({ name: '', status: '1' });
  const [packageForm, setPackageForm] = useState({ name: '', subject_ids: [] });

  const [showForm, setShowForm] = useState(false); // Controls the slide-in form visibility
  const [formType, setFormType] = useState('add-subject'); // 'add-subject' or 'add-package'
  const [loading, setLoading] = useState(false); // For submission loading state
  const [message, setMessage] = useState(''); // For success/error messages

  // Effect to fetch subjects or packages when the activeTab changes
  useEffect(() => {
    const loadData = async () => {
      setMessage(''); // Clear previous messages
      if (activeTab === 'subjects') {
        try {
          const data = await fetchSubjects();
          setSubjects(data);
          setSelectedSubject(null); // Clear selected subject when tab changes
        } catch (error) {
          console.error('Failed to load subjects:', error);
          setMessage('Failed to load subjects.');
        }
      } else { // activeTab === 'packages'
        try {
          const data = await fetchPackages();
          setPackages(data);
          setSelectedPackage(null); // Clear selected package when tab changes
        } catch (error) {
          console.error('Failed to load packages:', error);
          setMessage('Failed to load packages.');
        }
      }
    };
    loadData();
  }, [activeTab]); // Dependency array: re-run when activeTab changes

  // Handler for selecting a subject or package from the list
  const handleItemClick = (item, type) => {
    if (type === 'subject') {
      setSelectedSubject(item);
      setSelectedPackage(null); // Ensure only one is selected at a time
    } else {
      setSelectedPackage(item);
      setSelectedSubject(null); // Ensure only one is selected at a time
    }
  };

  // Generic handler for form input changes
  const handleFormChange = (e, formSetter) => {
    formSetter(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handler for multi-select dropdown for package subjects
  const handleMultiSelect = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setPackageForm(prev => ({ ...prev, subject_ids: selected }));
  };

  // Handles form submission for both subjects and packages
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (formType === 'add-subject') {
        await addSubject(subjectForm);
        setMessage('Subject added successfully!');
        // Refresh subjects list
        const updatedSubjects = await fetchSubjects();
        setSubjects(updatedSubjects);
      } else { // formType === 'add-package'
        await addPackage(packageForm);
        setMessage('Package added successfully!');
        // Refresh packages list
        const updatedPackages = await fetchPackages();
        setPackages(updatedPackages);
      }

      // Reset form, hide form, clear selection
      setShowForm(false);
      setSubjectForm({ name: '', status: '1' ,});
      setPackageForm({ name: '', subject_ids: [] });
      setSelectedSubject(null);
      setSelectedPackage(null);
    } catch (error) {
      console.error('Submission error:', error);
      setMessage(`Failed to add ${formType === 'add-subject' ? 'subject' : 'package'}.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-[Inter]">
      {/* Sidebar - Tabs and Lists */}
      <div className="w-1/3 p-6 border-r bg-white rounded-lg shadow-md">
        {/* Tab Buttons (vertical layout) */}
        <div className="flex flex-col mb-4 space-y-2">
          <button
            onClick={() => setActiveTab('subjects')}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              activeTab === 'subjects' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Subjects
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              activeTab === 'packages' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Packages
          </button>
        </div>

        {/* List of Subjects or Packages */}
        {activeTab === 'subjects' ? (
          <ul className="space-y-2 mt-4">
            {subjects.length > 0 ? (
              subjects.map(sub => (
                <li
                  key={sub.id}
                  className={`cursor-pointer p-3 rounded-md transition-colors duration-200 ${
                    selectedSubject?.id === sub.id ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => handleItemClick(sub, 'subject')}
                >
                  {sub.name}
                </li>
              ))
            ) : (
              <li className="p-4 text-gray-500 text-center">No subjects found.</li>
            )}
          </ul>
        ) : (
          <ul className="space-y-2 mt-4">
            {packages.length > 0 ? (
              packages.map(pkg => (
                <li
                  key={pkg.id}
                  className={`cursor-pointer p-3 rounded-md transition-colors duration-200 ${
                    selectedPackage?.id === pkg.id ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => handleItemClick(pkg, 'package')}
                >
                  {pkg.name}
                </li>
              ))
            ) : (
              <li className="p-4 text-gray-500 text-center">No packages found.</li>
            )}
          </ul>
        )}
      </div>

      {/* Right Pane - Details and Add Button */}
      <div className="w-2/3 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {activeTab === 'subjects' ? 'Subject Details' : 'Package Details'}
          </h2>
          <button
            onClick={() => {
              setShowForm(true);
              setFormType(activeTab === 'subjects' ? 'add-subject' : 'add-package');
              setMessage(''); // Clear message when opening form
              setSubjectForm({ name: '', status: '1' }); // Reset form state
              setPackageForm({ name: '', subject_ids: [] });
            }}
            className="bg-blue-600 text-white px-5 py-2 rounded-md shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            + Add {activeTab === 'subjects' ? 'Subject' : 'Package'}
          </button>
        </div>

        {/* Details Display Area */}
        <div className="bg-white rounded-lg p-6 shadow-xl border border-gray-100 min-h-[150px] flex items-center justify-center">
          {activeTab === 'subjects' && selectedSubject ? (
            <div className="w-full">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{selectedSubject.name}</h3>
              <p className="text-md text-gray-600">
                Status: <span className={`font-medium ${selectedSubject.status == 1 ? 'text-green-600' : 'text-red-600'}`}>
                  {selectedSubject.status == 1 ? 'Active' : 'Inactive'}
                </span>
              </p>
            </div>
          ) : activeTab === 'packages' && selectedPackage ? (
            <div className="w-full">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{selectedPackage.name}</h3>
              <p className="text-md text-gray-600 mb-2">Subjects Included:</p>
              <ul className="list-disc pl-6 text-md text-gray-700 space-y-1">
                {selectedPackage.subjects && selectedPackage.subjects.length > 0 ? (
                  selectedPackage.subjects.map(s => (
                    <li key={s.id}>{s.name}</li>
                  ))
                ) : (
                  <li>No subjects linked.</li>
                )}
              </ul>
            </div>
          ) : (
            <p className="text-gray-500 text-lg">
              Select a {activeTab === 'subjects' ? 'subject' : 'package'} from the left to view details.
            </p>
          )}
        </div>
        {message && (
          <div className={`mt-4 p-3 rounded-md text-center text-sm ${message.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}
      </div>

      {/* Slide-in Form for Add Subject/Package */}
      {showForm && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white border-l border-gray-200 p-6 shadow-2xl z-20 overflow-y-auto transform transition-transform duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {formType === 'add-subject' ? 'Add New Subject' : 'Add New Package'}
            </h2>
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-gray-800 text-2xl font-bold transition-colors duration-200"
            >
              &times;
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formType === 'add-subject' ? subjectForm.name : packageForm.name}
                onChange={(e) =>
                  formType === 'add-subject'
                    ? handleFormChange(e, setSubjectForm)
                    : handleFormChange(e, setPackageForm)
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                placeholder="Enter name"
                required
              />
            </div>

            {/* Conditional Fields based on formType */}
            {formType === 'add-subject' ? (
              <div className="relative">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  id="status"
                  name="status"
                  value={subjectForm.status}
                  onChange={(e) => handleFormChange(e, setSubjectForm)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
            ) : (
              <div className="relative">
                <label htmlFor="subjects-select" className="block text-sm font-medium text-gray-700 mb-1">Select Subjects</label>
                <select
                  id="subjects-select"
                  multiple
                  value={packageForm.subject_ids}
                  onChange={handleMultiSelect}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm h-40 resize-y" // Increased height
                >
                  {subjects.length > 0 ? (
                    subjects.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))
                  ) : (
                    <option disabled>No subjects available</option>
                  )}
                </select>
                <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple.</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManagementPage;