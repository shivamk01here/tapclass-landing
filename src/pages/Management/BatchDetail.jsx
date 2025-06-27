// pages/Management/BatchDetail.jsx
import React, { useState } from 'react';
import { ArrowLeft, Edit3, Trash2, Plus, Eye } from 'react-feather';

const BatchDetail = ({ batch, onBack, getStatusColor }) => {
  const [selectedBatchTab, setSelectedBatchTab] = useState('overview');

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span className="font-semibold">Back to Batches</span>
        </button>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
            <Edit3 size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">{batch.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600">Instructor:</p>
            <p className="font-medium text-gray-700">{batch.instructor}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Students:</p>
            <p className="font-medium text-gray-700">{batch.students}/{batch.maxCapacity}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Status:</p>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(batch.status)}`}>
              {batch.status}
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-600">Schedule:</p>
            <p className="font-medium text-gray-700">{batch.schedule}</p>
          </div>
        </div>

        {/* Sub-tab Navigation for Batch Details */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => setSelectedBatchTab('overview')}
              className={`py-3 px-2 border-b-2 text-sm font-medium ${
                selectedBatchTab === 'overview' ? 'border-gray-700 text-gray-700' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setSelectedBatchTab('schedule')}
              className={`py-3 px-2 border-b-2 text-sm font-medium ${
                selectedBatchTab === 'schedule' ? 'border-gray-700 text-gray-700' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Schedule
            </button>
            <button
              onClick={() => setSelectedBatchTab('performance')}
              className={`py-3 px-2 border-b-2 text-sm font-medium ${
                selectedBatchTab === 'performance' ? 'border-gray-700 text-gray-700' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Performance
            </button>
            <button
              onClick={() => setSelectedBatchTab('assignments')}
              className={`py-3 px-2 border-b-2 text-sm font-medium ${
                selectedBatchTab === 'assignments' ? 'border-gray-700 text-gray-700' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Assignments
            </button>
          </nav>
        </div>

        {/* Conditional rendering for batch sub-tabs */}
        {selectedBatchTab === 'overview' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Batch Overview</h3>
            <p className="text-gray-700">This is a detailed overview of {batch.name}. It includes general information about the batch, its goals, and any relevant notes.</p>
            {/* Add more overview content as needed */}
          </div>
        )}

        {selectedBatchTab === 'schedule' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-700">Batch Schedule</h3>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 flex items-center space-x-2">
                <Plus size={16} />
                <span>Add Session</span>
              </button>
            </div>
            {batch.scheduleDetails && batch.scheduleDetails.length > 0 ? (
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {batch.scheduleDetails.map(session => (
                      <tr key={session.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{session.topic}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{session.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{session.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{session.instructor}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="text-gray-500 hover:text-gray-700">
                              <Edit3 size={18} />
                            </button>
                            <button className="text-red-500 hover:text-red-700">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center text-gray-500 py-8">No schedule available for this batch yet.</p>
            )}
          </div>
        )}

        {selectedBatchTab === 'performance' && (
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-6">Batch Performance Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
                <h4 className="text-md font-semibold text-gray-700 mb-3">Overall Progress Distribution</h4>
                {/* Placeholder for a chart or visual representation */}
                <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
                  Bar Chart of Student Progress
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
                <h4 className="text-md font-semibold text-gray-700 mb-3">Attendance Trends</h4>
                {/* Placeholder for a chart or visual representation */}
                <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
                  Line Chart of Attendance
                </div>
              </div>
              <div className="md:col-span-2 bg-white rounded-lg shadow p-4 border border-gray-200">
                <h4 className="text-md font-semibold text-gray-700 mb-3">Key Performance Indicators</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gray-600 text-sm">Average Score</p>
                    <p className="text-xl font-bold text-blue-600">82.5%</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">On-time Completion</p>
                    <p className="text-xl font-bold text-green-600">90%</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Engagement Rate</p>
                    <p className="text-xl font-bold text-purple-600">88%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedBatchTab === 'assignments' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-700">Assignments</h3>
              <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 flex items-center space-x-2">
                <Plus size={16} />
                <span>Add Assignment</span>
              </button>
            </div>
            {batch.assignments && batch.assignments.length > 0 ? (
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Score</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {batch.assignments.map(assignment => (
                      <tr key={assignment.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{assignment.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{assignment.dueDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                            {assignment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {assignment.averageScore ? `${assignment.averageScore}%` : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button className="text-gray-500 hover:text-gray-700">
                              <Eye size={18} />
                            </button>
                            <button className="text-gray-500 hover:text-gray-700">
                              <Edit3 size={18} />
                            </button>
                            <button className="text-red-500 hover:text-red-700">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center text-gray-500 py-8">No assignments created for this batch yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BatchDetail;