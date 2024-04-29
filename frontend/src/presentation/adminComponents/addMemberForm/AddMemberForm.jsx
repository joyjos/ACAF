import { useState } from "react";
import { useDataContext } from "../../../middleware/context/DataContext";
import SaveMemberButton from "../saveMemberButton/SaveMemberButton";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "./AddMemberForm.css";

export default function AddMemberForm() {
  const { postMember } = useDataContext();
  const [open, setOpen] = useState(false);

  const initialFormData = {
    name: "",
    cuantity: "",
    category: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleClick = () => {
    setOpen(true);
  };

  const handleMember = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.cuantity || !formData.category) {
      alert("Por favor, rellena todos los campos");
      return;
    }
    postMember(formData);
    setFormData(initialFormData);
    handleClick();
    window.location.reload();
  };


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
         El socio se ha añadido correctamente!
        </Alert>
      </Snackbar>

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
            required
          />
          <label htmlFor="cuantity">APORTACIÓN</label>
          <input
            type="number"
            name="cuantity"
            value={formData.cuantity}
            placeholder="Ejemplo: 100 euros"
            onChange={handleChange}
            required
          />
          <label htmlFor="category">CATEGORÍA</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            placeholder="Ejemplo: restaurante"
            onChange={handleChange}
            required
          />
        </form>
        <SaveMemberButton
          handleMember={handleMember}
        />
      </main>
    </>
  );
}
