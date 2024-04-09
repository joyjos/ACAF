import { useState } from "react";
import { useDataContext } from "../../../middleware/context/DataContext";
import SaveMemberButton from "../saveMemberButton/SaveMemberButton";
import "./AddMemberForm.css";

export default function AddMemberForm() {
  const { postMember } = useDataContext();

  const [newMember, setNewMember] = useState({
    name: "",
    cuantity: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMember((newMember) => ({
      ...newMember,
      [name]: value,
    }));
  };
   
  const handleMember = () => {
    postMember();
    setNewMember({name: "", cuantity: "", category: ""})
  }


  return (
    <>
      <main className="formContainerAdmin">
        <h1>AÑADE UN SOCIO</h1>
        <form >
          <label htmlFor="name">NOMBRE</label>
          <input type="text" name="name"  value={newMember.name} placeholder="Ejemplo: Lucas Perez" onChange={handleChange} />
          <label htmlFor="cuantity">APORTACIÓN</label>
          <input type="text" name="cuantity" value={newMember.cuantity} placeholder="Ejemplo: 100 euros" onChange={handleChange}/>
          <label htmlFor="category">CATEGORÍA</label>
          <input
            type="text"
            name="category"
            value={newMember.category}
            placeholder="Ejemplo: restaurante"
            onChange={handleChange}
          />
        </form >
        <SaveMemberButton handleMember={handleMember} />
      </main>
    </>
  );
}
