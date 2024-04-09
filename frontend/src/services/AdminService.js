import axios from "axios";

const API_URL = "http://localhost:8080/api/members";

class AdminService  {
  async createMember(formData) {
    try {
      const response = await axios.post(`${API_URL}`, formData);
      return response.data;
    } catch (error) {
      console.error("Error creando miembro", error.response.data);
      throw error;
    }
  }
}

export default AdminService;
