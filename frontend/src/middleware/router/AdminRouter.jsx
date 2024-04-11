import { Routes, Route } from "react-router-dom";
// import Home from "../../presentation/pages/Home/Home";
import AddMember from "../../presentation/adminPages/addMember/AddMember";
import { AdminHome } from "../../presentation/adminPages/AdminHome/AdminHome";

export default function AdminRouter() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route path="/addMember" element={<AddMember />}/>
      <Route path="/homeAdmin" element={<AdminHome />}/>
    </Routes>
  );
}
