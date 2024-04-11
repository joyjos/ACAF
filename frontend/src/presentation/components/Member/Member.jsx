import "./Member.css";
import PropTypes from "prop-types";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

function Member({ memberList }) {
  return (
    <div className="memberContainer">
      <section className="titlePartner">
        <h2>Id</h2>
        <h2>Nombre</h2>
        <h2>Categoría</h2>
        <h2>Aportación</h2>
        <EditOutlinedIcon style={{ fontSize: 30, opacity: 0 }} />
        <DeleteForeverOutlinedIcon style={{ fontSize: 30, opacity: 0 }} />
      </section>
      <div>
        {memberList.sort((a, b) => a.id - b.id).map((member) => (
          <div className="memberMapContainer" key={member.id}>
            <div className="member">
              <p>{member.id}</p>
              <p>{member.name}</p>
              <p>{member.category}</p>
              <p className="bold">{member.cuantity}€</p>
            </div>
            <div>
              <EditOutlinedIcon style={{ fontSize: 30, cursor: "pointer" }} />
              <DeleteForeverOutlinedIcon
                style={{ fontSize: 30, cursor: "pointer" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Member.propTypes = {
  memberList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      cuantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Member;
