import axiosInstance from '../utils/axiosConfig';
import authHeader from './auth-header';

class EmployeeService {
  getAllEmployees() {
    return axiosInstance.get('/api/employees', { headers: authHeader() });
  }

  getEmployee(id) {
    return axiosInstance.get(`/api/employees/${id}`, { headers: authHeader() });
  }

  createEmployee(employee) {
    return axiosInstance.post('/api/employees', employee, { headers: authHeader() });
  }

  updateEmployee(id, employee) {
    return axiosInstance.put(`/api/employees/${id}`, employee, { headers: authHeader() });
  }

  deleteEmployee(id) {
    return axiosInstance.delete(`/api/employees/${id}`, { headers: authHeader() });
  }
}

export default new EmployeeService();