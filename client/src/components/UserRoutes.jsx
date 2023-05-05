import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./user/pages/Home";
import BaseLayouts from "./user/pages/layouts/BaseLayouts";
import Contact from "./user/pages/Contact";
import CategoryProducts from "./user/pages/CategoryProducts";

function UserRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayouts />}>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/category/:catId' element={<CategoryProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default UserRoutes;
