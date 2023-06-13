import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./user/pages/Home";
import BaseLayouts from "./user/pages/layouts/BaseLayouts";
import Contact from "./user/pages/Contact";
import CategoryProducts from "./user/pages/CategoryProducts";
import AuthLayout from "./user/pages/auth/AuthLayout";
import Register from "./user/pages/auth/Register";
import Login from "./user/pages/auth/Login";

function UserRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayouts />}>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/category/:catId' element={<CategoryProducts />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default UserRoutes;
