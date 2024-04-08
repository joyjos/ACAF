/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import AdminService from "../../services/AdminService";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [member, setMember] = useState("");
  //   const [needsReload, setNeedsReload] = useState(true);
  const adminService = new AdminService();
  const API_URL = "http://localhost:8080/api/members";

  const postMember = async () => {
    try {
      const memberData = await adminService.createMember();
      setMember(memberData);
      console.log(memberData);
    } catch (error) {
      console.error("Error fetching member:", error);
    }
  };

  const value = {
    postMember,
    member,
    API_URL
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  return useContext(DataContext);
};
