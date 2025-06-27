// pages/Management/index.jsx
import React, { useState } from 'react';
import { Users, BookOpen, Package, Search, Filter, Plus } from 'react-feather';
import ItemList from './ItemList';
import BatchDetail from './BatchDetail';
import SubjectDetail from './SubjectDetail';
import PackageDetail from './PackageDetail';
// import AddEditModal from './AddEditModal'; // Uncomment if you implement modals

// Utility function (can be moved to a separate utils file if needed)
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'text-green-600 bg-green-100';
    case 'upcoming':
      return 'text-blue-600 bg-blue-100';
    case 'completed':
      return 'text-purple-600 bg-purple-100';
    case 'pending':
      return 'text-yellow-600 bg-yellow-100';
    case 'graded':
      return 'text-indigo-600 bg-indigo-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

// Dummy Data (replace with your actual data fetching)
const initialBatches = [
  {
    id: 1,
    name: 'Batch Alpha 2024',
    instructor: 'Dr. Smith',
    students: 45,
    maxCapacity: 50,
    status: 'active',
    schedule: 'Mon, Wed, Fri - 10:00 AM',
    duration: '6 months', // Added duration
    subjects: [{ id: 1, name: 'Web Development' }, { id: 2, name: 'UI/UX Design' }], // Added subjects
    scheduleDetails: [
      { id: 1, topic: 'Introduction to React', date: '2025-07-01', time: '10:00 AM', instructor: 'Dr. Smith' },
      { id: 2, topic: 'Component Lifecycle', date: '2025-07-03', time: '10:00 AM', instructor: 'Dr. Smith' },
    ],
    assignments: [
      { id: 1, name: 'React Basics Quiz', dueDate: '2025-07-05', status: 'Pending', averageScore: null },
      { id: 2, name: 'First Component Project', dueDate: '2025-07-10', status: 'Graded', averageScore: 85 },
    ],
    progress: 75, // Dummy data for progress/attendance/completion
    attendance: 80,
    completion: 70,
    recentActivity: [
      { id: 1, type: 'assignment', desc: 'Assignment submitted', details: 'John Doe - 2 hours ago' },
      { id: 2, type: 'lesson', desc: 'New lesson uploaded', details: 'Chapter 5: Advanced Topics' },
    ],
  },
  {
    id: 2,
    name: 'Batch Beta 2024',
    instructor: 'Prof. Johnson',
    students: 38,
    maxCapacity: 45,
    status: 'upcoming',
    schedule: 'Tue, Thu, Sat - 2:00 PM',
    duration: '4 months',
    subjects: [{ id: 3, name: 'Data Science' }],
    scheduleDetails: [],
    assignments: [],
    progress: 0,
    attendance: 0,
    completion: 0,
    recentActivity: [],
  },
  {
    id: 3,
    name: 'Batch Gamma 2024',
    instructor: 'Mr. Lee',
    students: 30,
    maxCapacity: 30,
    status: 'completed',
    schedule: 'Mon, Wed, Fri - 09:00 AM',
    duration: '5 months',
    subjects: [{ id: 4, name: 'Cyber Security' }],
    scheduleDetails: [],
    assignments: [],
    progress: 100,
    attendance: 95,
    completion: 100,
    recentActivity: [],
  },
];

const initialSubjects = [
  { id: 1, name: 'Mathematics', description: 'Advanced calculus and linear algebra.', duration: '12 weeks', difficulty: 'Hard', instructor: 'Prof. Sharma', enrolled: 150, status: 1 },
  { id: 2, name: 'Physics', description: 'Classical mechanics and electromagnetism.', duration: '10 weeks', difficulty: 'Medium', instructor: 'Dr. Khan', enrolled: 120, status: 1 },
  { id: 3, name: 'Chemistry', description: 'Organic and inorganic chemistry.', duration: '8 weeks', difficulty: 'Medium', instructor: 'Ms. Gupta', enrolled: 90, status: 0 },
];

const initialPackages = [
  { id: 1, name: 'Science Explorer', description: 'Includes Physics and Chemistry.', price: 299, discount: 10, enrolled: 50, rating: 4.5, subjects: [{ id: 2, name: 'Physics' }, { id: 3, name: 'Chemistry' }] },
  { id: 2, name: 'Math Master', description: 'Deep dive into Mathematics.', price: 199, discount: 0, enrolled: 75, rating: 4.8, subjects: [{ id: 1, name: 'Mathematics' }] },
];

const ManagementPage = () => {
  const [activeTab, setActiveTab] = useState('batches');
  const [selectedItem, setSelectedItem] = useState(null); // This will hold the item object when a detail view is active
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false); // For add/edit modals
  const [modalType, setModalType] = useState('');

  const batches = initialBatches;
  const subjects = initialSubjects;
  const packages = initialPackages;

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackToList = () => {
    setSelectedItem(null); // Clear selected item to show the list again
  };

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
  };

  const filteredItems = () => {
    if (activeTab === 'batches') {
      return batches.filter(batch => {
        const matchesSearch = batch.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || batch.status.toLowerCase() === filterStatus;
        return matchesSearch && matchesStatus;
      });
    } else if (activeTab === 'subjects') {
      return subjects.filter(subject => {
        const matchesSearch = subject.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || (filterStatus === 'active' && subject.status === 1) || (filterStatus === 'inactive' && subject.status === 0);
        return matchesSearch && matchesStatus;
      });
    } else if (activeTab === 'packages') {
      return packages.filter(pkg => {
        const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
      });
    }
    return [];
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-10 w-full">
      <div className="mx-auto w-full">

        {/* Tab Navigation - Only visible when no item is selected */}
        {!selectedItem && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => { setActiveTab('batches'); setSearchTerm(''); setFilterStatus('all'); }}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === 'batches'
                      ? 'border-gray-700 text-gray-700'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Users className="inline-block mr-2" size={16} /> Batches
                </button>
                <button
                  onClick={() => { setActiveTab('subjects'); setSearchTerm(''); setFilterStatus('all'); }}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === 'subjects'
                      ? 'border-gray-700 text-gray-700'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <BookOpen className="inline-block mr-2" size={16} /> Subjects
                </button>
                <button
                  onClick={() => { setActiveTab('packages'); setSearchTerm(''); setFilterStatus('all'); }}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === 'packages'
                      ? 'border-gray-700 text-gray-700'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Package className="inline-block mr-2" size={16} /> Packages
                </button>
              </nav>
            </div>
          </div>
        )}

        {/* Conditional Rendering: List View or Detail View */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {selectedItem ? (
            // Detail View (fills the whole space)
            <>
              {activeTab === 'batches' && <BatchDetail batch={selectedItem} onBack={handleBackToList} getStatusColor={getStatusColor} />}
              {activeTab === 'subjects' && <SubjectDetail subject={selectedItem} onBack={handleBackToList} />}
              {activeTab === 'packages' && <PackageDetail pkg={selectedItem} onBack={handleBackToList} />}
            </>
          ) : (
            // List View (initially displayed)
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-700">
                  {activeTab === 'batches' && 'Batches'}
                  {activeTab === 'subjects' && 'Subjects'}
                  {activeTab === 'packages' && 'Packages'}
                </h2>
                <button
                  onClick={() => openModal(`add-${activeTab.slice(0, -1)}`)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 flex items-center space-x-2"
                >
                  <Plus size={16} />
                  <span>Add New</span>
                </button>
              </div>

              {/* Search and Filter */}
              <div className="mb-6 flex space-x-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder={`Search ${activeTab}...`}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                {activeTab !== 'packages' && (
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                    >
                      <option value="all">All Statuses</option>
                      {activeTab === 'batches' && (
                        <>
                          <option value="active">Active</option>
                          <option value="upcoming">Upcoming</option>
                          <option value="completed">Completed</option>
                        </>
                      )}
                      {activeTab === 'subjects' && (
                        <>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </>
                      )}
                    </select>
                  </div>
                )}
              </div>

              {/* Item List */}
              <ItemList
                items={filteredItems()}
                activeTab={activeTab}
                onItemClick={handleItemClick}
                getStatusColor={getStatusColor}
              />
            </>
          )}
        </div>
      </div>
      {/* {isModalOpen && <AddEditModal type={modalType} onClose={closeModal} />} */}
    </div>
  );
};

export default ManagementPage;