// pages/Management/ItemList.jsx
import React from 'react';
import { Clock, Star } from 'react-feather';

const ItemList = ({ items, activeTab, onItemClick, getStatusColor }) => {
  return (
    <div className="flex-grow overflow-y-auto space-y-4 pr-2 -mr-2">
      {items.length > 0 ? (
        items.map(item => (
          <div
            key={item.id}
            className={`p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${item.id === items[0]?.id ? 'border-gray-700 bg-gray-50' : 'border-gray-200'}`}
            onClick={() => onItemClick(item)}
          >
            <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
            {activeTab === 'batches' && (
              <>
                <p className="text-sm text-gray-600 mb-2">{item.instructor} | {item.students}/{item.maxCapacity} students</p>
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2 py-0.5 rounded-full ${getStatusColor(item.status)}`}>{item.status}</span>
                  <span className="text-gray-500 flex items-center"><Clock size={12} className="mr-1" />{item.schedule}</span>
                </div>
              </>
            )}
            {activeTab === 'subjects' && (
              <>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className={`px-2 py-0.5 rounded-full ${item.status === 1 ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`}>
                    {item.status === 1 ? 'Active' : 'Inactive'}
                  </span>
                  <span className="text-gray-500">Enrolled: {item.enrolled}</span>
                </div>
              </>
            )}
            {activeTab === 'packages' && (
              <>
                <p className="text-sm text-gray-600 mb-2">Price: ${item.price} (Discount: {item.discount}%)</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Enrolled: {item.enrolled}</span>
                  <span className="text-yellow-500 flex items-center"><Star size={12} className="mr-1" />{item.rating}</span>
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-8">No {activeTab} found.</p>
      )}
    </div>
  );
};

export default ItemList;