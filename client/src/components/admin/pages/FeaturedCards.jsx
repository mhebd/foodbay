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
import {
  deleteFeaturedCard,
  fetchFeatureds,
} from "../../../actions/featuredActions";
import TableWrapperLayout from "./layouts/TableWrapperLayout";

function FeaturedCards() {
  const featuredCards = useSelector((state) => state.featured.featuredCards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeatureds());
  }, []);

  return (
    <TableWrapperLayout
      name={"All featured cards"}
      link={"featured-card/create-featured-card"}
      btnText={"Create Featured Card"}>
      <table className='table table-bordered table-striped table-hover'>
        <thead className='table-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Title</th>
            <th scope='col'>Caption</th>
            <th scope='col'>Icon</th>
            <th scope='col' colSpan='2'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {featuredCards.length > 0 &&
            featuredCards.map((f) => (
              <tr key={Math.random()}>
                <th scope='row'>{f.id}</th>
                <td>{f.title}</td>
                <td>{f.caption}</td>
                <td>{f.icon}</td>
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
                    onClick={() => dispatch(deleteFeaturedCard(f.id))}>
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

export default FeaturedCards;
