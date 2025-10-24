import api from '../utils/axiosConfig';

class EmployeeService {
  getAllEmployees() {
    return api.get('/employees');
  }

  getEmployee(id) {
    return api.get(`/employees/${id}`);
  }

  createEmployee(employee) {
    return api.post('/employees', employee);
  }

  updateEmployee(id, employee) {
    return api.put(`/employees/${id}`, employee);
  }

  deleteEmployee(id) {
    return api.delete(`/employees/${id}`);
  }
}

export default new EmployeeService();