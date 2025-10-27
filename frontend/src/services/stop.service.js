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
    return axiosInstance.post('/api/stops', stop, { headers: authHeader() });
  }

  updateStop(id, stop) {
    return axiosInstance.put(`/api/stops/${id}`, stop, { headers: authHeader() });
  }

  deleteStop(id) {
    return axiosInstance.delete(`/api/stops/${id}`, { headers: authHeader() });
  }
}

export default new StopService();