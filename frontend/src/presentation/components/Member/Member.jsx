import "./Member.css";
import PropTypes from "prop-types";

function Member({ memberList }) {
  return (
    <div className="memberContainer">
      <section className="titlePartner">
        <h2>Id</h2>
        <h2>Nombre</h2>
        <h2>Categoría</h2>
        <h2>Aportación</h2>
      </section>
      <div>
        {memberList.map((member) => (
          <div key={member.id} className="member">
            <p>{member.id}</p>
            <p>{member.name}</p>
            <p>{member.category}</p>
            <p className="bold">{member.cuantity}€</p>
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
