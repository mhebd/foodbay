import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./user/pages/Home";
import BaseLayouts from "./user/pages/layouts/BaseLayouts";

function UserRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayouts />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default UserRoutes;
