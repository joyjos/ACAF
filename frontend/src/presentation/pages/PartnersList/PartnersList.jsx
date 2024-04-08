import "./PartnersList.css"
import Searcher from "../../components/Searcher/Searcher";
import AdminHeader from "../../adminComponents/header/AdminHeader";
import ContainerList from "../../components/ContainerList/ContainerList";

const PartnersList = () => {
  return (
     <>
     <AdminHeader />
    <div className="containerPartnerList">
      
      <h1>LISTADO DE SOCIOS</h1>
      <Searcher />
      <ContainerList />
    </div>
    </>
  )
}
export default PartnersList;