import { useState } from "react";
import PropTypes from "prop-types";
import "./Searcher.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

const Searcher = ({ memberList, setFilteredMembers }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filteredMembers = memberList.filter(
      (member) =>
        member.name.toLowerCase().includes(query.toLowerCase()) ||
        member.category.toLowerCase().includes(query.toLowerCase())|| 
        member.id.toString().includes(query)

    );
    setFilteredMembers(filteredMembers);
  };

  return (
    <section className="userSearchContainer">
      <div className="userSearchContainer__Field">
        <div className="userButton">
          <PersonIcon className="userIcon" />
        </div>
        <input
          type="search"
          className="userSearchContainer__Field-Input"
          placeholder="Buscar socio por nombre, apellido, nº de socio"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="userSearchContainer__Field-Button">
          <SearchIcon style={{ color: "#6BC8E6", fontSize: 30 }} />
        </button>
      </div>
    </section>
  );
};

Searcher.propTypes = {
  memberList: PropTypes.array.isRequired,
  setFilteredMembers: PropTypes.func.isRequired,
};

export default Searcher;
