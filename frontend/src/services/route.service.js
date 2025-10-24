import api from '../utils/axiosConfig';

class RouteService {
  getAllRoutes() {
    return api.get('/routes');
  }

  getRoute(id) {
    return api.get(`/routes/${id}`);
  }

  createRoute(route) {
    return api.post('/routes', route);
  }

  updateRoute(id, route) {
    return api.put(`/routes/${id}`, route);
  }

  deleteRoute(id) {
    return api.delete(`/routes/${id}`);
  }
}

export default new RouteService();