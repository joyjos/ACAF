import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../presentation/pages/Home/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
