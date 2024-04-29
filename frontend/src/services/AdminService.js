import axios from "axios";

const devMode = false;

const API_URL = devMode ?
  "http://localhost:8080/api/members" :
  "https://acaf-production.up.railway.app/api/members";

class AdminService {
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
  async deleteMember(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("No se pueden eliminar el socio", error.response);
      throw error;
    }
  }
  async updateMember(updatedMemberData) {
    try {
      const response = await axios.put(`${API_URL}/${updatedMemberData.id}`, updatedMemberData);
      return response.data;
    } catch (error) {
      console.error("Error al actualizar el socio", error.response);
      throw error;
    }
  }
}



export default AdminService;
