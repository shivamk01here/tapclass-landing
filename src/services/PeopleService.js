// src/services/peopleService.js
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

export const fetchUsersByRole = async (roleID) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(`${API_ENDPOINTS.USERS_GET}?role_id=${roleID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data?.data || [];
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to fetch users');
  }
};

export const fetchUserDetail = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(`${API_ENDPOINTS.USER_DETAIL}/?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to fetch user detail');
  }
};

export const addUser = async (formData) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(API_ENDPOINTS.ADD_USER, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || 'Failed to add user');
  }
};

