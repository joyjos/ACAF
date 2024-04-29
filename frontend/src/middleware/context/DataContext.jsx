/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import AdminService from "../../services/AdminService";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [member, setMember] = useState("");
  const [memberList, setMemberList] = useState([]);
  const { updateMemberState, setUpdateMemberState } = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("");
  const adminService = new AdminService();
 
  const [reload, setReload] = useState(true);

  const postMember = async (formData) => {
    try {
      const memberData = await adminService.createMember(formData);
      setMember(memberData);
      setAlertMessage(
        `Enhorabuena, el socio/a se ha registrado correctamente`
      );
      setAlertSeverity("success");
      console.log(memberData);
    } catch (error) {
      console.error("Error fetching member:", error);
    }
  };

  useEffect(() => {
    if (reload) {
      const viewMembers = async () => {
        try {
          const memberList = await adminService.viewMembers();
          setMemberList(memberList);
          setReload(false);
          console.log(memberList);
        } catch (error) {
          console.error("Error fetching member:", error);
        }
      };
      viewMembers();
    }
  }, [reload]);

  const deleteMember = async (id) => {
    try {
      const memberDelete = await adminService.deleteMember(id);
      setReload(true);
      console.log(memberDelete);
    } catch (error) {
      console.error("Error delete member:", error);
    }
  };

  const updateMember = async (id) => {
    try {
      const updatedMember = await adminService.updateMember(id);
      console.log(updatedMember);
    } catch (error) {
      console.error("Error al actualizar el socio", error);
    }
  };

  const value = {
    postMember,
    member,
    memberList,
    deleteMember,
    setMemberList,
    updateMember,
    updateMemberState,
    alertSeverity,
    alertMessage,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
