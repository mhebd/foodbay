import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../reusable/Button";
import { deleteReview, fetchReviews } from "../../../actions/reviewActions";
import TableWrapperLayout from "./layouts/TableWrapperLayout";
import { toast } from "react-toastify";

function Reviews() {
  const { reviews, message } = useSelector((state) => state.review);
  const dispatch = useDispatch();

  if (message != "") {
    toast.warn(message);
  }

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);

  return (
    <TableWrapperLayout
      name='All Reviews'
      link='review/create-review'
      btnText='Create Review'>
      <table className='table table-bordered table-striped table-hover'>
        <thead className='table-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>name</th>
            <th scope='col'>opinion</th>
            <th scope='col' colSpan='2'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews.length > 0 &&
            reviews.map((review) => (
              <tr key={Math.random()}>
                <th scope='row'>{review.id}</th>
                <td>{review.name}</td>
                <td>{review.opinion}</td>
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
                    onClick={() => dispatch(deleteReview(review.id))}>
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

export default Reviews;
