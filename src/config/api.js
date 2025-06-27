const BASE_URL = 'https://locations-comply-hearings-records.trycloudflare.com/api';
// const BASE_URL = 'http://127.0.0.1:8000/api';
// const NODE_URL = 'https://84b3-3-110-51-98.ngrok-free.app/api';

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
