// import "./Member.css";
// import PropTypes from "prop-types";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
// import { useDataContext } from "../../../middleware/context/DataContext";

// function Member({ memberList }) {
//   const [editingMemberId, setEditingMemberId] = useState(null);
//   const [editedMemberData, setEditedMemberData] = useState({});

//   const handleEdit = (member) => {
//     setEditingMemberId(member.id);
//     setEditedMemberData({
//       ...member,
//     });
//   };
//   const { deleteMember } = useDataContext();


  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedMemberData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSave = async () => {
//     try {
//       // Aquí deberías llamar a tu función de servicio para enviar los datos editados al servidor
//       // Supondré que tienes una función llamada 'updateMember' en tu servicio AdminService
//       await updateMember(editedMemberData);
//       // Limpiar los estados de edición después de guardar
//       setEditingMemberId(null);
//       setEditedMemberData({});
//     } catch (error) {
//       console.error("Error al guardar los cambios del socio", error);
//       // Manejar el error de alguna manera
//     }
//   };

//   return (
//     <div className="memberContainer">
//       <section className="titlePartner">
//         <h2>Id</h2>
//         <h2>Nombre</h2>
//         <h2>Categoría</h2>
//         <h2>Aportación</h2>
//         <EditOutlinedIcon style={{ fontSize: 30, opacity: 0 }} />
//         <DeleteForeverOutlinedIcon style={{ fontSize: 30, opacity: 0 }} />
//       </section>
//       <div>
//         {memberList
//           .sort((a, b) => a.id - b.id)
//           .map((member) => (
//             <div className="memberMapContainer" key={member.id}>
//               <div className="member">
//                 <p>{member.id}</p>
//                 <p>{member.name}</p>
//                 <p>{member.category}</p>
//                 <p className="bold">{member.cuantity}€</p>
//               </div>
//               <div>
//                 <EditOutlinedIcon
//                   style={{ fontSize: 30, cursor: "pointer" }}
//                   onClick={() => handleClickEdit(member, member.id)}
//                 />
//                 <DeleteForeverOutlinedIcon
//                   style={{ fontSize: 30, cursor: "pointer" }}
//                   onClick={() => deleteMember(member.id)}
//                 />
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// Member.propTypes = {
//   memberList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//       cuantity: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// export default Member;
import { useState } from "react";
import "./Member.css";
import PropTypes from "prop-types";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useDataContext } from "../../../middleware/context/DataContext";
import AdminService from "../../../services/AdminService";

function Member({ memberList }) {
  const { deleteMember } = useDataContext();
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
      await adminService.updateMember(editedMemberData); // Llama a updateMember desde la instancia de AdminService
      setEditingMemberId(null);
      setEditedMemberData({});
    } catch (error) {
      console.error("Error al guardar los cambios del socio", error);
      // Manejar el error de alguna manera
    }
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
        {memberList.map((member) => (
          <div className="memberMapContainer" key={member.id}>
            <div className="member">
              <p>{member.id}</p>
              {editingMemberId === member.id ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={member.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="category"
                    value={member.category}
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    name="cuantity"
                    value={member.cuantity}
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
                <button onClick={handleSave}>Guardar</button>
              ) : (
                <EditOutlinedIcon
                  style={{ fontSize: 30, cursor: "pointer" }}
                  onClick={() => handleEdit(member)}
                />
              )}
              <DeleteForeverOutlinedIcon
                style={{ fontSize: 30, cursor: "pointer" }}
                onClick={() => deleteMember(member.id)}
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

