// pages/people/UserList.jsx
import React from 'react';
import { ChevronRight } from 'react-feather';

const UserList = ({ users, activeRole, onUserClick, getRoleName }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <li
              key={user.id}
              onClick={() => onUserClick(user.id)}
              className="p-3 hover:bg-gray-50 cursor-pointer transition duration-150 ease-in-out flex items-center justify-between text-sm" // Smaller padding/text
            >
              <div>
                <div className="font-medium text-gray-800">{user.name}</div>
                <div className="text-gray-500 text-xs">{user.email}</div> {/* Smaller text */}
              </div>
              <ChevronRight size={16} className="text-gray-400" /> {/* Smaller icon */}
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500 text-center text-sm">No {getRoleName(activeRole).toLowerCase()} found.</li> 
        )}
      </ul>
    </div>
  );
};

export default UserList;