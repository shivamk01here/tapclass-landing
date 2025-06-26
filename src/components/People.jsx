// src/components/PeopleTab.jsx
import React, { useEffect, useState } from 'react';
import { fetchUsersByRole, fetchUserDetail, addUser  } from '../services/peopleService';
import { useNavigate } from 'react-router-dom';

const PeopleTab = () => {
  const [activeRole, setActiveRole] = useState('3'); // default: Student
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', roleID: '3' });
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await fetchUsersByRole(activeRole);
        setUsers(data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };
    fetchUsers();
  }, [activeRole]);

  const handleUserClick = async (id) => {
    try {
      const user = await fetchUserDetail(id);
      setSelectedUser(user);
    } catch (err) {
      console.error('Error fetching user detail:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        surname: '-', // temp placeholder if not used
        email: formData.email,
        password: '12345678', // default or auto gen password
        role_id: parseInt(formData.roleID),
        institution_id: 2, // TODO: fetch dynamically if needed
      };
  
      await addUser(payload);
      setMessage('User added successfully.');
  
      // Refresh user list
      const updatedUsers = await fetchUsersByRole(activeRole);
      setUsers(updatedUsers);
  
      setShowForm(false);
      setFormData({ name: '', email: '', mobile: '', roleID: activeRole });
    } catch (err) {
      console.error('Add user error:', err);
      setMessage('Failed to add user.');
    }
  };
  

  return (
    <div className="flex">
      {/* Sidebar Tabs */}
      <div className="w-32 p-4 border-r border-gray-300 text-sm">
        <div className="space-y-2">
          <button onClick={() => setActiveRole('3')} className={`block w-full text-left ${activeRole === '3' ? 'font-semibold text-blue-600' : ''}`}>Students</button>
          <button onClick={() => setActiveRole('2')} className={`block w-full text-left ${activeRole === '2' ? 'font-semibold text-blue-600' : ''}`}>Staff</button>
          <button onClick={() => setActiveRole('5')} className={`block w-full text-left ${activeRole === '5' ? 'font-semibold text-blue-600' : ''}`}>Leads</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 text-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-medium">{activeRole === '3' ? 'Students' : activeRole === '2' ? 'Staff' : 'Leads'} List</h2>
          <button onClick={() => setShowForm(true)} className="px-3 py-1 bg-blue-600 text-white rounded-sm text-xs">+ Add</button>
        </div>

        <ul className="border border-gray-200 rounded divide-y">
        {Array.isArray(users) && users.length > 0 ? (
         users.map(user => (
            <li key={user.id} onClick={() => handleUserClick(user.id)} className="p-2 hover:bg-gray-100 cursor-pointer">
              <div className="font-medium text-sm">{user.name}</div>
              <div className="text-gray-500 text-xs">{user.email}</div>
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500 text-sm">No users found.</li>
        )}
        </ul>

        {/* User Detail View */}
        {selectedUser && (
          <div className="mt-4 p-4 border rounded-sm bg-gray-50 text-xs">
            <h3 className="font-semibold mb-2">User Detail</h3>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Mobile:</strong> {selectedUser.mobile}</p>
          </div>
        )}
      </div>

      {/* Slide-in Form */}
      {showForm && (
        <div className="fixed right-0 top-0 h-full w-72 bg-white border-l border-gray-300 p-4 shadow-md overflow-y-auto text-sm">
          <button className="text-right text-xl mb-4" onClick={() => setShowForm(false)}>&times;</button>
          <h2 className="text-base font-semibold mb-4">Add User</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-2 border rounded-sm" required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-2 border rounded-sm" required />
            <input type="tel" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="w-full p-2 border rounded-sm" required />
            <select name="roleID" value={formData.roleID} onChange={(e) => setFormData({ ...formData, roleID: e.target.value })} className="w-full p-2 border rounded-sm">
              <option value="">Select Role</option>
              <option value="2">Staff</option>
              <option value="3">Student</option>
              <option value="5">Lead</option>
            </select>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-sm text-xs">Submit</button>
          </form>
          {message && <p className="text-xs text-center mt-2 text-green-600">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default PeopleTab;
