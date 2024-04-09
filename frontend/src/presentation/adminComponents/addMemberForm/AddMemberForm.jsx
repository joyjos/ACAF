import { useState } from "react";
import { useDataContext } from "../../../middleware/context/DataContext";
import SaveMemberButton from "../saveMemberButton/SaveMemberButton";
import "./AddMemberForm.css";

export default function AddMemberForm() {
  const { postMember } = useDataContext();

  const [formData, setFormData] = useState({
    name: "",
    cuantity: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleMember = (e) => {
    e.preventDefault();
    postMember(formData);
  };

  return (
    <>
      <main className="formContainerAdmin">
        <h1>AÑADE UN SOCIO</h1>
        <form>
          <label htmlFor="name">NOMBRE</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Ejemplo: Lucas Perez"
            onChange={handleChange}
          />
          <label htmlFor="cuantity">APORTACIÓN</label>
          <input
            type="text"
            name="cuantity"
            value={formData.cuantity}
            placeholder="Ejemplo: 100 euros"
            onChange={handleChange}
          />
          <label htmlFor="category">CATEGORÍA</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            placeholder="Ejemplo: restaurante"
            onChange={handleChange}
          />
        </form>
        <SaveMemberButton handleMember={handleMember} />
      </main>
    </>
  );
}
