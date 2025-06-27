// File: pages/BookingPage/InstituteHome.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import subjectsData from './data/subjects.json';

const sampleStats = {
  math: {
    icon: '📐',
    difficulty: 'Intermediate',
    duration: '10 months',
    totalClasses: 80,
    features: ['Live Doubt Solving', 'Weekly Tests', 'PDF Notes']
  },
  phy: {
    icon: '⚛️',
    difficulty: 'Advanced',
    duration: '12 months',
    totalClasses: 100,
    features: ['Concept Videos', 'Problem Sheets', 'Doubt Mentors']
  }
};

const InstituteHome = () => {
  const { instituteName } = useParams();
  const subjects = subjectsData[instituteName] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white text-gray-900">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => {
          const extra = sampleStats[subject.id] || {};
          return (
            <Link
              key={subject.id}
              to={`/in/${instituteName}/subject/${subject.id}`}
              className="group bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{extra.icon || '📘'}</div>
                <div>
                  <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {subject.name}
                  </h2>
                  <p className="text-sm text-gray-500">{extra.difficulty || 'Beginner'} • {extra.duration || '6 months'}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">
                {subject.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {extra.totalClasses || 60} Classes
                </span>
                {(extra.features || []).map((f, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {f}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default InstituteHome;
