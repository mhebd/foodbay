import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./admin/pages/layouts/DashboardLayout";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Products from "./admin/pages/Products";
import Categories from "./admin/pages/Categories";
import CategoryForm from "./admin/pages/CategoryForm";
import FeaturedCardForm from "./admin/pages/FeaturedCardForm";
import FeaturedCards from "./admin/pages/FeaturedCards";
import Sliders from "./admin/pages/Sliders";
import Reviews from "./admin/pages/Reviews";
import SliderForm from "./admin/pages/SliderForm";
import ReviewForm from "./admin/pages/ReviewForm";
import ProductForm from "./admin/pages/ProductForm";

function DashboardRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/users' element={<Users />} />
        <Route path='/dashboard/products' element={<Products />} />
        <Route path='/dashboard/categories' element={<Categories />} />
        <Route path='/dashboard/sliders' element={<Sliders />} />
        <Route path='/dashboard/reviews' element={<Reviews />} />
        <Route path='/dashboard/featured-cards' element={<FeaturedCards />} />

        <Route
          path='/dashboard/category/create-category'
          element={<CategoryForm />}
        />
        <Route
          path='/dashboard/product/create-product'
          element={<ProductForm />}
        />
        <Route
          path='/dashboard/slider/create-slider'
          element={<SliderForm />}
        />
        <Route
          path='/dashboard/review/create-review'
          element={<ReviewForm />}
        />
        <Route
          path='/dashboard/featured-card/create-featured-card'
          element={<FeaturedCardForm />}
        />
      </Route>
    </Routes>
  );
}

export default DashboardRoutes;
