import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import { useState } from "react";
import "./Member.css";
import PropTypes from "prop-types";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useDataContext } from "../../../middleware/context/DataContext";
import AdminService from "../../../services/AdminService";
import Swal from 'sweetalert2';

function Member({ members }) {
  const { deleteMember, memberList } = useDataContext();
  const [editingMemberId, setEditingMemberId] = useState(null);
  const [editedMemberData, setEditedMemberData] = useState({});
  const adminService = new AdminService();

  const handleEdit = (member) => {
    setEditingMemberId(member.id);
    setEditedMemberData({
      ...member,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMemberData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await adminService.updateMember(editedMemberData);
      window.location.reload();
      setEditingMemberId(null);
      setEditedMemberData({});
    } catch (error) {
      console.error("Error al guardar los cambios del socio", error);
      // Manejar el error de alguna manera
    }
  };

  const handleDeleteMember = async (id, name) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar este socio/a?",
      html: '<span>'+ name +'</span>',
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMember(id);
        Swal.fire(
          "Eliminado/a",
          "El socio/a ha sido eliminado/a",
          "success"
        );
      }
    });
  };
  

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
        {members.map((member) => (
          <div className="memberMapContainer" key={member.id}>
            <div className="member">
              <p>{member.id}</p>
              {editingMemberId === member.id ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={editedMemberData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="category"
                    value={editedMemberData.category}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="cuantity"
                    value={editedMemberData.cuantity}
                    onChange={handleChange}
                  />
                </>
              ) : (
                <>
                  <p>{member.name}</p>
                  <p>{member.category}</p>
                  <p className="bold">{member.cuantity}€</p>
                </>
              )}
            </div>
            <div>
              {editingMemberId === member.id ? (
                <SaveAltOutlinedIcon
                  onClick={handleSave}
                  style={{ fontSize: 30, cursor: "pointer" }}
                />
              ) : (
                <EditOutlinedIcon
                  style={{ fontSize: 30, cursor: "pointer" }}
                  onClick={() => handleEdit(member)}
                />
              )}
              <DeleteForeverOutlinedIcon
                style={{ fontSize: 30, cursor: "pointer" }}
                onClick={() => handleDeleteMember(member.id, member.name)}
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
