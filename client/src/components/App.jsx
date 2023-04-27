import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./admin/pages/auth/Register";
import AuthLayout from "./admin/pages/auth/AuthLayout";
import Login from "./admin/pages/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "../actions/userActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardRoutes from "./DashboardRoutes";

function App() {
  const dispatch = useDispatch();
  const errMsg = useSelector((state) => state.error.message);

  if (errMsg) toast.error(errMsg);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <>
      <DashboardRoutes />
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path='/auth/register' element={<Register />} />
            <Route path='/auth/login' element={<Login />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
