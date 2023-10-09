// apiService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const fetchTopStories = async (section) => {
  const response = await api.get(`api/top-stories/${section}`);
  return response.data;
};
