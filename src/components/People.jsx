// pages/people/index.jsx
import React, { useEffect, useState } from 'react';
import { Users, UserPlus, TrendingUp, TrendingDown } from 'react-feather'; // Using react-feather for icons
import UserList from '../pages/people/UserList';
import UserDetail from '../pages/people/UserDetail';
import UserFormModal from '../pages/people/UserFormModal';
import DeleteConfirmationModal from '../pages/people/DeleteConfirmationModal';
const PeopleService = (() => {
  let dummyUsers = {
    '3': [ // Students
      { id: 1, name: 'Alice Smith', email: 'alice.s@example.com', mobile: '1112223330', status: 1, department: 'Computer Science', batch: 'Batch Alpha 2024', courses: ['React Basics', 'Advanced JS'], attendance: { '2024-06-20': 'Present', '2024-06-22': 'Absent' } },
      { id: 2, name: 'Bob Johnson', email: 'bob.j@example.com', mobile: '1112223331', status: 1, department: 'Mathematics', batch: 'Batch Alpha 2024', courses: ['Linear Algebra', 'Calculus I'], attendance: { '2024-06-20': 'Present', '2024-06-22': 'Present' } },
      { id: 3, name: 'Charlie Brown', email: 'charlie.b@example.com', mobile: '1112223332', status: 0, department: 'Physics', batch: 'Batch Beta 2024', courses: ['Thermodynamics'], attendance: {} },
    ],
    '2': [ // Staff
      { id: 101, name: 'Dr. Emily Davis', email: 'emily.d@example.com', mobile: '2223334440', status: 1, department: 'Computer Science', position: 'Professor', expertise: ['React', 'Node.js'], officeHours: 'M-W-F 10-12' },
      { id: 102, name: 'Prof. Frank Green', email: 'frank.g@example.com', mobile: '2223334441', status: 1, department: 'Mathematics', position: 'Associate Professor', expertise: ['Algebra', 'Geometry'], officeHours: 'T-Th 1-3' },
    ],
    '5': [ // Leads (dummy data)
      { id: 201, name: 'Marketing Lead 1', email: 'lead1@example.com', mobile: '9876543210', status: 'Active', source: 'Website', date: '2024-06-20', interests: ['Web Development', 'Data Science'], followUpNotes: ['Initial contact made', 'Sent brochure'] },
      { id: 202, name: 'Sales Lead A', email: 'leadA@example.com', mobile: '9876543211', status: 'Inactive', source: 'Referral', date: '2024-06-18', interests: ['AI', 'Machine Learning'], followUpNotes: [] },
      { id: 203, name: 'Marketing Lead 2', email: 'lead2@example.com', mobile: '9876543212', status: 'Active', source: 'Campaign', date: '2024-06-22', interests: ['Cybersecurity'], followUpNotes: ['Scheduled demo'] },
      { id: 204, name: 'Partnership Lead', email: 'leadP@example.com', mobile: '9876543213', status: 'Active', source: 'Event', date: '2024-06-25', interests: ['Partnerships'], followUpNotes: [] },
      { id: 205, name: 'Sales Lead B', email: 'leadB@example.com', mobile: '9876543214', status: 'Inactive', source: 'Website', date: '2024-06-15', interests: ['Cloud Computing'], followUpNotes: [] },
    ],
  };

  const fetchUsersByRole = async (roleID) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(JSON.parse(JSON.stringify(dummyUsers[roleID] || []))); // Deep copy to avoid direct state mutation
      }, 300);
    });
  };

  const fetchUserDetail = async (id, roleID) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const user = dummyUsers[roleID]?.find(user => user.id === id);
        resolve(user ? JSON.parse(JSON.stringify(user)) : null); // Deep copy
      }, 300);
    });
  };

  const addUser = async (userData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const roleID = userData.role_id.toString();
        const currentUsers = dummyUsers[roleID] || [];
        const newId = currentUsers.length ? Math.max(...currentUsers.map(u => u.id)) + 1 : 1;
        const newUser = { id: newId, ...userData };

        if (roleID === '3' || roleID === '2') {
          newUser.status = 1; // Default active for students/staff
        } else if (roleID === '5') {
          newUser.status = 'Active';
          newUser.source = newUser.source || 'Manual Add';
          newUser.date = newUser.date || new Date().toISOString().split('T')[0];
          newUser.interests = newUser.interests || [];
          newUser.followUpNotes = newUser.followUpNotes || [];
        }

        dummyUsers[roleID].push(newUser);
        resolve(JSON.parse(JSON.stringify(newUser)));
      }, 300);
    });
  };

  const updateUser = async (roleID, id, updatedData) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const roleUsers = dummyUsers[roleID];
        const index = roleUsers.findIndex(u => u.id === id);
        if (index !== -1) {
          roleUsers[index] = { ...roleUsers[index], ...updatedData };
          resolve(JSON.parse(JSON.stringify(roleUsers[index])));
        }
        resolve(null);
      }, 300);
    });
  };

  const deleteUser = async (roleID, id) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const roleUsers = dummyUsers[roleID];
        dummyUsers[roleID] = roleUsers.filter(user => user.id !== id);
        resolve(true);
      }, 300);
    });
  };

  return { fetchUsersByRole, fetchUserDetail, addUser, updateUser, deleteUser };
})();


const PeopleTab = () => {
  const [activeRole, setActiveRole] = useState('3'); // default: Student
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // Holds the user object for detail view
  const [showFormModal, setShowFormModal] = useState(false); // Controls add/edit form modal visibility
  const [formModalType, setFormModalType] = useState('add'); // 'add' or 'edit'
  const [userToDelete, setUserToDelete] = useState(null); // Holds user object for delete confirmation

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await PeopleService.fetchUsersByRole(activeRole);
        setUsers(data);
      } catch (err) {
        console.error('Error fetching users:', err);
        setUsers([]);
      }
    };
    getUsers();
    setSelectedUser(null); // Reset selected user when role changes
    setShowFormModal(false); // Close form modal
    setUserToDelete(null); // Close delete confirmation
  }, [activeRole]);

  const handleUserClick = async (id) => {
    try {
      const user = await PeopleService.fetchUserDetail(id, activeRole);
      setSelectedUser(user);
    } catch (err) {
      console.error('Error fetching user detail:', err);
      setSelectedUser(null);
    }
  };

  const handleBackToList = () => {
    setSelectedUser(null); // Clear selected user to return to list view
  };

  const handleOpenAddForm = () => {
    setFormModalType('add');
    setShowFormModal(true);
  };

  const handleOpenEditForm = (user) => {
    setFormModalType('edit');
    setSelectedUser(user); // Keep the user selected for editing in detail view
    setShowFormModal(true);
  };

  const handleFormSubmit = async (data) => {
    try {
      if (formModalType === 'add') {
        const payload = {
          ...data,
          role_id: parseInt(activeRole), // Ensure correct role_id is sent based on active tab
          institution_id: 2, // Assuming a default institution_id
          password: '123', // Default password for new users
        };
        await PeopleService.addUser(payload);
      } else { // 'edit'
        await PeopleService.updateUser(activeRole, data.id, data);
      }
      // Re-fetch users to update the list and potentially the detail view if it's open
      const updatedUsers = await PeopleService.fetchUsersByRole(activeRole);
      setUsers(updatedUsers);
      setShowFormModal(false); // Close the modal
      // If we were editing, update the selected user's data
      if (formModalType === 'edit' && selectedUser) {
        setSelectedUser(updatedUsers.find(u => u.id === selectedUser.id));
      }
    } catch (err) {
      console.error(`${formModalType === 'add' ? 'Add' : 'Edit'} user error:`, err);
      // Optionally show an error message to the user
    }
  };

  const handleConfirmDelete = (user) => {
    setUserToDelete(user);
  };

  const handleDeleteUser = async () => {
    if (!userToDelete) return;
    try {
      await PeopleService.deleteUser(activeRole, userToDelete.id);
      const updatedUsers = await PeopleService.fetchUsersByRole(activeRole);
      setUsers(updatedUsers);
      setSelectedUser(null); // Clear selected user if it was the one deleted
      setUserToDelete(null); // Close confirmation modal
    } catch (err) {
      console.error('Delete user error:', err);
      // Optionally show an error message
    }
  };

  const getRoleName = (roleId, singular = false) => {
    switch (roleId) {
      case '3': return singular ? 'Student' : 'Students';
      case '2': return singular ? 'Staff' : 'Staff';
      case '5': return singular ? 'Lead' : 'Leads';
      default: return singular ? 'User' : 'Users';
    }
  };

  const getStatusColor = (status) => {
    // Handle both number (0, 1) and string ('Active', 'Inactive') statuses
    if (status === 1 || status === 'Active') return 'text-green-600 bg-green-100';
    if (status === 0 || status === 'Inactive') return 'text-red-600 bg-red-100'; // Using red for inactive
    if (status === 'Upcoming') return 'text-blue-600 bg-blue-100'; // Example for other statuses if needed
    if (status === 'Pending') return 'text-yellow-600 bg-yellow-100';
    if (status === 'Graded') return 'text-indigo-600 bg-indigo-100';
    return 'text-gray-600 bg-gray-100';
  };

  const renderStatsCards = () => {
    const totalCount = users.length;
    let activeCount = 0;
    let inactiveCount = 0;

    activeCount = users.filter(user => user.status === 1 || user.status === 'Active').length;
    inactiveCount = users.filter(user => user.status === 0 || user.status === 'Inactive').length;

    // Determine card colors based on status type
    const totalCardColor = 'bg-blue-50';
    const activeCardColor = 'bg-green-50';
    const inactiveCardColor = 'bg-red-50'; // Using red for inactive stats

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Total Users Card */}
        <div className={`p-4 rounded-lg shadow-sm flex items-center justify-between ${totalCardColor}`}>
          <div>
            <p className="text-xs text-gray-600 font-medium">Total {getRoleName(activeRole)}</p>
            <p className="text-3xl font-bold text-gray-900">{totalCount}</p>
          </div>
          <Users size={32} className="text-gray-600" />
        </div>

        {/* Active/Available Users Card */}
        <div className={`p-4 rounded-lg shadow-sm flex items-center justify-between ${activeCardColor}`}>
          <div>
            <p className="text-xs text-gray-600 font-medium">Active {getRoleName(activeRole)}</p>
            <p className="text-3xl font-bold text-gray-900">{activeCount}</p>
          </div>
          <TrendingUp size={32} className="text-green-600" /> {/* Green for active */}
        </div>

        {/* Inactive/Unavailable Users Card */}
        <div className={`p-4 rounded-lg shadow-sm flex items-center justify-between ${inactiveCardColor}`}>
          <div>
            <p className="text-xs text-gray-600 font-medium">Inactive {getRoleName(activeRole)}</p>
            <p className="text-3xl font-bold text-gray-900">{inactiveCount}</p>
          </div>
          <TrendingDown size={32} className="text-red-600" /> {/* Red for inactive */}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 pb-4 pt-10"> {/* Added flex-col and pb-4 */}
      <div className="mx-0 w-full flex flex-grow bg-white rounded-lg shadow-lg overflow-hidden"> {/* Added flex-grow */}
        {/* Sidebar Tabs - Always visible */}
        <div className="w-40 p-4 border-r border-gray-200 bg-gray-50 flex-shrink-0">
          <h3 className="text-base font-semibold text-gray-900 mb-4">User Roles</h3>
          <div className="space-y-2">
            {['3', '2', '5'].map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`block w-full text-left px-3 py-2 rounded-md transition duration-200 ease-in-out text-sm ${
                  activeRole === role
                    ? 'bg-gray-900 text-white font-semibold shadow-sm'
                    : 'hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                }`}
              >
                {getRoleName(role)}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 flex flex-col"> {/* Added flex flex-col */}
          {selectedUser ? (
            // User Detail View (Fills main content area)
            <UserDetail
              user={selectedUser}
              activeRole={activeRole}
              onBack={handleBackToList}
              onEdit={handleOpenEditForm}
              onDelete={handleConfirmDelete}
              getRoleName={getRoleName}
              getStatusColor={getStatusColor} // Pass getStatusColor to UserDetail
            />
          ) : (
            // User List View (Initially displayed)
            <>
              {renderStatsCards()}

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {getRoleName(activeRole)} List
                </h2>
                <button
                  onClick={handleOpenAddForm}
                  className="px-4 py-2 bg-gray-900 text-white rounded-md shadow-sm hover:bg-gray-700 transition duration-200 ease-in-out flex items-center text-sm"
                >
                  <UserPlus size={16} className="mr-2" /> Add {getRoleName(activeRole, true)}
                </button>
              </div>

              {/* User List Component - Make it flexible to fill space */}
              <div className="flex-grow overflow-y-auto"> {/* Added flex-grow and overflow */}
                <UserList
                  users={users}
                  activeRole={activeRole}
                  onUserClick={handleUserClick}
                  getRoleName={getRoleName}
                />
              </div>
            </>
          )}
        </div>

        {/* Modals */}
        {showFormModal && (
          <UserFormModal
            isOpen={showFormModal}
            onClose={() => setShowFormModal(false)}
            onSubmit={handleFormSubmit}
            modalType={formModalType}
            roleName={getRoleName(activeRole, true)} // Pass singular role name
            activeRoleID={activeRole}
            initialData={formModalType === 'edit' ? selectedUser : null} // Pass initial data for edit mode
          />
        )}
        {userToDelete && (
          <DeleteConfirmationModal
            isOpen={!!userToDelete}
            onClose={() => setUserToDelete(null)}
            onConfirm={handleDeleteUser}
            userName={userToDelete.name}
          />
        )}
      </div>
    </div>
  );
};

export default PeopleTab;