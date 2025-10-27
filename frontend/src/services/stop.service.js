import axiosInstance from '../utils/axiosConfig';
import authHeader from './auth-header';

class StopService {
  getAllStops() {
    return axiosInstance.get('/api/stops', { headers: authHeader() });
  }

  getStop(id) {
    return axiosInstance.get(`/api/stops/${id}`, { headers: authHeader() });
  }

  createStop(stop) {
    return axios.post(`${API_URL}/stops`, stop, { headers: authHeader() });
  }

  updateStop(id, stop) {
    return axios.put(`${API_URL}/stops/${id}`, stop, { headers: authHeader() });
  }

  deleteStop(id) {
    return axios.delete(`${API_URL}/stops/${id}`, { headers: authHeader() });
  }
}

export default new StopService();