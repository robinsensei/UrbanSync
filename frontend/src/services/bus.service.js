import axiosInstance from '../utils/axiosConfig';
import authHeader from './auth-header';

class BusService {
  getAllBuses() {
    return axiosInstance.get('/api/buses', { headers: authHeader() });
  }

  getBus(id) {
    return axiosInstance.get(`/api/buses/${id}`, { headers: authHeader() });
  }

  createBus(bus) {
    return axiosInstance.post('/api/buses', bus, { headers: authHeader() });
  }

  updateBus(id, bus) {
    return axiosInstance.put(`/api/buses/${id}`, bus, { headers: authHeader() });
  }

  deleteBus(id) {
    return axiosInstance.delete(`/api/buses/${id}`, { headers: authHeader() });
  }
}

export default new BusService();