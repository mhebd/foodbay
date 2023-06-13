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
      <ToastContainer />
    </>
  );
}

export default App;
