const BASE_URL = 'http://ec2-3-110-51-98.ap-south-1.compute.amazonaws.com:5000/api';

export const API_ENDPOINTS = {
  REGISTER: `${BASE_URL}/auth/register`,
  LOGIN: `${BASE_URL}/auth/login`,
  USERS_GET: `${BASE_URL}/users/get`,
  USER_DETAIL: `${BASE_URL}/users/detail`,
  ADD_USER: `${BASE_URL}/users/add`,


  SUBJECT_LIST: `${BASE_URL}/subject/list`,
  SUBJECT_ADD: `${BASE_URL}/subject/add`,

  // Package Endpoints
  PACKAGE_LIST: `${BASE_URL}/package/list`,
  PACKAGE_ADD: `${BASE_URL}/package/add`,
};

export default BASE_URL;
