import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../presentation/pages/Home/Home";
import AboutUs from "../../presentation/pages/AboutUs/AboutUs";
import Events from "../../presentation/pages/Events/Events";
import AdminRouter from "./AdminRouter";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <AdminRouter/>
    </BrowserRouter>
  );
};

export default AppRouter;
