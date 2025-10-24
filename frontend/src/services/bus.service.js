import api from '../utils/axiosConfig';

class BusService {
  getAllBuses() {
    return api.get('/buses');
  }

  getBus(id) {
    return api.get(`/buses/${id}`);
  }

  createBus(bus) {
    return api.post('/buses', bus);
  }

  updateBus(id, bus) {
    return api.put(`/buses/${id}`, bus);
  }

  deleteBus(id) {
    return api.delete(`/buses/${id}`);
  }
}

export default new BusService();