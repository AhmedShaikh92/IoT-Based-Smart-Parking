import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auto-logout on 401 (expired / invalid token)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Redirect to login without importing useNavigate (works outside React)
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// Auth
export const signup = (data) => api.post('/auth/signup', data);
export const login = (data) => api.post('/auth/login', data);

// Slots (user)
export const getSlots = () => api.get('/slots');
export const getFreeSlots = () => api.get('/slots/free');
export const bookSlot = (slotId, durationMinutes) => api.post('/slots/book', { slotId, durationMinutes });
export const unbookSlot = (slotId) => api.post('/slots/unbook', { slotId });
export const getMyBooking = () => api.get('/slots/my-booking');
export const expireBookings = () => api.post("/slots/expire-check");
export const extendSlot = (slotId, additionalMinutes) => api.patch("/slots/extend", { slotId, additionalMinutes });

// Admin - slots
export const createSlot = (slotNumber) => api.post('/admin/slot', { slotNumber });
export const updateSlot = (id, data) => api.patch(`/admin/slot/${id}`, data);
export const deleteSlot = (id) => api.delete(`/admin/slot/${id}`);

// Admin - data
export const getAllBookings = () => api.get('/admin/bookings');
export const getStats = () => api.get('/admin/stats');
export const getAllUsers = () => api.get('/admin/users');
export const promoteUser = (email) => api.post('/admin/promote-user', { email });

export default api;