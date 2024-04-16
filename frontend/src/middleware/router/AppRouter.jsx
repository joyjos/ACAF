import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../presentation/pages/Home/Home";
import AboutUs from "../../presentation/pages/AboutUs/AboutUs";
import Events from "../../presentation/pages/Events/Events";
import AdminRouter from "./AdminRouter";
import { DataProvider } from "../context/DataContext";
import PartnersList from "../../presentation/pages/PartnersList/PartnersList";
import { Login } from "../../presentation/adminComponents/login/Login";
import Activities from "../../presentation/pages/Activities/Activities";

const AppRouter = () => {
  return (
    <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="homeAdmin/partners" element={<PartnersList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
      <AdminRouter/>
    </BrowserRouter>
  
    </DataProvider>
  );
};

export default AppRouter;
