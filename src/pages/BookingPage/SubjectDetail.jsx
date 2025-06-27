import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import subjectsData from './data/subjects.json';
import packagesData from './data/packages.json';

const SubjectDetail = () => {
  const { instituteName, subjectId } = useParams();
  const navigate = useNavigate();

  const subject = (subjectsData[instituteName] || []).find((s) => s.id === subjectId);
  const packages = packagesData[subjectId] || [];

  if (!subject) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center p-10">
        <div>
          <h1 className="text-2xl font-bold mb-2">Subject not found</h1>
          <p className="text-gray-500">Please check the URL or select a subject from the homepage.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Subject Hero Info */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white rounded-2xl p-8 shadow-md mb-10">
        <h1 className="text-3xl font-bold mb-2">{subject.name}</h1>
        <p className="text-white/90 text-lg">{subject.description}</p>
      </div>

      {/* Packages Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Available Packages</h2>

        {packages.length === 0 ? (
          <p className="text-gray-600 text-sm italic">No packages available for this subject yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{pkg.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">₹{pkg.price.toLocaleString()}</p>
                  {pkg.description && (
                    <p className="text-sm text-gray-500 mb-3">{pkg.description}</p>
                  )}
                  {pkg.includes && (
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {pkg.includes.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <button
                  onClick={() => navigate(`/in/${instituteName}/cart?item=${pkg.id}`)}
                  className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
                >
                  Checkout
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectDetail;
