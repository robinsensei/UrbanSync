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
    return axiosInstance.post('/api/routes', route, { headers: authHeader() });
  }

  updateRoute(id, route) {
    return axiosInstance.put(`/api/routes/${id}`, route, { headers: authHeader() });
  }

  deleteRoute(id) {
    return axiosInstance.delete(`/api/routes/${id}`, { headers: authHeader() });
  }
}

export default new RouteService();