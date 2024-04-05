import SaveMemberButton from "../saveMemberButton/SaveMemberButton";
import "./AddMemberForm.css";

export default function AddMemberForm() {
  return (
    <>
      <main className="formContainerAdmin">
        <h1>AÑADE UN SOCIO</h1>
        <form action="">
          <label htmlFor="name">NOMBRE</label>
          <input type="text" name="name" placeholder="Ejemplo: Lucas Perez "/>
          <label htmlFor="cuantity">APORTACIÓN</label>
          <input type="text" name="cuantity" placeholder="Ejemplo: 100 euros"/>
          <label htmlFor="category">CATEGORÍA</label>
          <input type="text" name="category" placeholder="Ejemplo: restaurante"/>
        </form>
        <SaveMemberButton />
      </main>
    </>
  );
}
