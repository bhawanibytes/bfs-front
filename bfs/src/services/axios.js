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

// Modify the signupUser function in your axios.js file.
const signupUser = async (userData) => {
  try {
    const response = await axios.post('/api/user/register', userData);
    return response.data;
  } catch (error) {
    // Check if the error has a response from the server.
    if (error.response) {
      console.error('Server Error:', error.response.status, error.response.data);
      // Handle specific server errors, like 500.
      if (error.response.status === 500) {
        // Handle 500 error, for example, by showing an error message to the user.
        console.log("The server encountered an internal error, please contact the administrator");
      }
    } else if (error.request) {
      // If the request was made but no response was received.
      console.error('Request Error:', error.request);
    } else {
      // If something happened before the request was made.
      console.error('Error:', error.message);
    }
    // Re-throw the error to handle it further up the call stack if needed.
    throw error;
  }
};

//Check if there are any errors in your server code

  export {loginUser, signupUser }