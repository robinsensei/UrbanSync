import axiosInstance from '../utils/axiosConfig';
import authHeader from './auth-header';

class RouteService {
  getAllRoutes() {
    return axiosInstance.get('/api/routes', { headers: authHeader() });
  }

  getRoute(id) {
    return axiosInstance.get(`/api/routes/${id}`, { headers: authHeader() });
  }

  createRoute(route) {
    return axios.post(`${API_URL}/routes`, route, { headers: authHeader() });
  }

  updateRoute(id, route) {
    return axios.put(`${API_URL}/routes/${id}`, route, { headers: authHeader() });
  }

  deleteRoute(id) {
    return axios.delete(`${API_URL}/routes/${id}`, { headers: authHeader() });
  }
}

export default new RouteService();