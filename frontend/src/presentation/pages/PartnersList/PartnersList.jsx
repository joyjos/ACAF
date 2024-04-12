import { useState } from "react";
import Searcher from "../../components/Searcher/Searcher";
import AdminHeader from "../../adminComponents/header/AdminHeader";
import Member from "../../components/Member/Member";
import { useDataContext } from "../../../middleware/context/DataContext";
import "./PartnersList.css"

const PartnersList = () => {
  const { memberList } = useDataContext();
  const [filteredMembers, setFilteredMembers] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredMembers(null);
    } else {
      const filteredMembers = memberList.filter(
        (member) =>
          member.name.toLowerCase().includes(query.toLowerCase()) ||
          member.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMembers(filteredMembers);
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="containerPartnerList">
        <h1>LISTADO DE SOCIOS</h1>
        <Searcher
          memberList={memberList}
          setFilteredMembers={setFilteredMembers}
          handleInputChange={handleInputChange}
          searchQuery={searchQuery}
        />
        <Member memberList={filteredMembers || memberList} />
      </div>
    </>
  );
};

export default PartnersList;
