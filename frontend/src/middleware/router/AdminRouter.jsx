import { Routes, Route } from "react-router-dom";
import AddMember from "../../presentation/adminPages/addMember/AddMember";
import { AdminHome } from "../../presentation/adminPages/AdminHome/AdminHome";

export default function AdminRouter() {
  return (
    <Routes>
      <Route path="/addMember" element={<AddMember />}/>
      <Route path="/homeAdmin" element={<AdminHome />}/>
    </Routes>
  );
}
