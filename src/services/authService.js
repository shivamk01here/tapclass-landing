  import { API_ENDPOINTS } from '../config/api';

  export const registerInstitution = async (formData) => {
    const payload = {
      institution_name: formData.institution_name,
      owner_name: formData.owner_name,
      owner_surname: formData.surname,
      email: formData.email,
      password: formData.password,
    };

    const response = await fetch(API_ENDPOINTS.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registration failed');
    }

    return await response.json();
  };

  export const loginInstitution = async ({ email, password }) => {
    const payload = { email, password };

    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    return await response.json();
  };
