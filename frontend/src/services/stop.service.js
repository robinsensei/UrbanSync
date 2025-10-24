import api from '../utils/axiosConfig';

class StopService {
  getAllStops() {
    // The base URL and auth headers are now handled by the interceptor
    return api.get('/stops');
  }

  getStop(id) {
    return api.get(`/stops/${id}`);
  }

  createStop(stop) {
    return api.post('/stops', stop);
  }

  updateStop(id, stop) {
    return api.put(`/stops/${id}`, stop);
  }

  deleteStop(id) {
    return api.delete(`/stops/${id}`);
  }
}

export default new StopService();