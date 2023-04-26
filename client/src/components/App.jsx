import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./admin/pages/auth/Register";
import AuthLayout from "./admin/pages/auth/AuthLayout";
import Login from "./admin/pages/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "../actions/userActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardRoutes from "./DashboardRoutes";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <BrowserRouter>
      <DashboardRoutes />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/login' element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
