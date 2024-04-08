import Member from "../Member/Member";
import "./ContainerList.css"


function ContainerList() {
  return (
    <div>
    <section className="titlePartner">
        <h1>Id</h1>
        <h1>Nombre</h1>
        <h1>Categoria</h1>
        <h1>Aportación</h1>
    </section>
    <Member />
    </div>
    

  )
}

export default ContainerList;