import RoutePath from "./types/routes";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from './pages/Login/Login';
const Router = () => {
  return (
    <Routes>

      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.LOGIN} element={<Login />} />
    </Routes>
  );
};

export default Router;
