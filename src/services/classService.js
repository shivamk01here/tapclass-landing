import { API_ENDPOINTS } from '../config/api';
import staticData from './mockClasses.json';

export const fetchClasses = async () => {
  // Replace this with actual API call later
  return staticData.map(cls => ({
    id: cls.id,
    title: cls.title,
    start: cls.from,
    end: cls.to,
    extendedProps: {
      fullData: cls
    }
  }));
};

export const createClass = async (classData) => {
  // Later replace with fetch to API_ENDPOINTS.CREATE_CLASS
  console.log('Creating class:', classData);
  return Promise.resolve({ status: 'success' });
};