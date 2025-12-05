import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL

// Only create axios instance if API URL is provided
const api = apiUrl ? axios.create({
  baseURL: apiUrl,
  headers: { 
    'Content-Type': 'application/json', 
  }, 
}) : null

export default api