import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableRowForm from "../../reusable/TableRowForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategory,
  fetchCategories,
} from "../../../actions/categoryActions";
import Button from "../../reusable/Button";
import TableWrapperLayout from "./layouts/TableWrapperLayout";

function Categories() {
  const categories = useSelector((state) => state.category.categories);
  console.log(useSelector((state) => state.category));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <TableWrapperLayout name='All Categories' link='category/create-category'>
      <table className='table table-bordered table-striped table-hover'>
        <thead className='table-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Category</th>
            <th scope='col' colSpan='2'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((category) => (
              <tr key={Math.random()}>
                <th scope='row'>{category.id}</th>
                <td>{category.name}</td>
                <td>
                  <Link
                    className='btn-success btn'
                    to='/dashboard/category/create-category'>
                    Edit
                  </Link>
                </td>
                <td>
                  <Button
                    type='button'
                    className='btn-danger'
                    onClick={() => dispatch(deleteCategory(category.id))}>
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableWrapperLayout>
  );
}

export default Categories;
