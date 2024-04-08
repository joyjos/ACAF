import Member from "../Member/Member";
import "./ContainerList.css"


function ContainerList() {
  return (
    <div>
    <section className="titlePartner">
        <h2>Id</h2>
        <h2>Nombre</h2>
        <h2>Categoria</h2>
        <h2>Aportación</h2>
    </section>
    <Member />
    </div>
    

  )
}

export default ContainerList;