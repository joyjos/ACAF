import { Routes, Route } from "react-router-dom";
// import Home from "../../presentation/pages/Home/Home";
import AddMember from "../../presentation/adminPages/addMember/AddMember";

export default function AdminRouter() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route path="" element={<AddMember />}/>
    </Routes>
  );
}
