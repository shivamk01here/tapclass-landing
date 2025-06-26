// src/services/subjectService.js
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

const institutionId = 2;

/**
 * Fetches the list of all subjects.
 * @returns {Promise<Array>} A promise that resolves to an array of subject objects.
 * @throws {Error} If the API call fails or returns an unsuccessful response.
 */
export const fetchSubjects = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(API_ENDPOINTS.SUBJECT_LIST, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        institution_id: institutionId, // 👈 Include institution_id here
      },
    });
    return res.data?.data || [];
  } catch (err) {
    console.error('Error fetching subjects:', err);
    throw new Error(err.response?.data?.message || 'Failed to fetch subjects');
  }
};

/**
 * Adds a new subject to the database.
 */
export const addSubject = async (subjectData) => {
  try {
    const token = localStorage.getItem('token');
    const payload = {
      ...subjectData,
      institution_id: institutionId,
    };

    const res = await axios.post(API_ENDPOINTS.SUBJECT_ADD, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return res.data;
  } catch (err) {
    console.error('Error adding subject:', err);
    throw new Error(err.response?.data?.message || 'Failed to add subject');
  }
};

/**
 * Fetches the list of all packages.
 */
export const fetchPackages = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(API_ENDPOINTS.PACKAGE_LIST, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        institution_id: institutionId, // 👈 Include institution_id here
      },
    });
    return res.data?.data || [];
  } catch (err) {
    console.error('Error fetching packages:', err);
    throw new Error(err.response?.data?.message || 'Failed to fetch packages');
  }
};

/**
 * Adds a new package to the database.
 */
export const addPackage = async (packageData) => {
  try {
    const token = localStorage.getItem('token');
    const payload = {
      ...packageData,
      institution_id: institutionId,
    };

    const res = await axios.post(API_ENDPOINTS.PACKAGE_ADD, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return res.data;
  } catch (err) {
    console.error('Error adding package:', err);
    throw new Error(err.response?.data?.message || 'Failed to add package');
  }
};
