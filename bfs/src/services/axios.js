import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const loginUser = async (credentials) => {
  try {
    const response = await api.post('/api/user/login', credentials);
    return response.data;
  } catch (error) {
    console.log(error)
  }
};

const signupUser = async (userData) => {
    try {
      const response = await api.post('/api/user/register', userData);
      return response.data;
    } catch (error) {
      console.log(error)
    }
  };

  export {loginUser, signupUser }