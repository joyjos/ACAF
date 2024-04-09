import axios from "axios";

const API_URL = "http://localhost:8080/api/members";

class AdminService  {
  async createMember(formData) {
    try {
      const response = await axios.post(`${API_URL}`, formData);
      return response.data;
    } catch (error) {
      console.error("Error creando miembro", error.response);
      throw error;
    }
  }
  async viewMembers() {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("No se pueden cargar la lista de socios", error.response);
      throw error;
    }
  }
}

export default AdminService;
