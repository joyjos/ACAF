import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../presentation/pages/Home/Home";
import AboutUs from "../../presentation/pages/AboutUs/AboutUs";
import Events from "../../presentation/pages/Events/Events";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
