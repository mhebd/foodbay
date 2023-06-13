import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../reusable/Button";
import { deleteSlider, fetchSliders } from "../../../actions/sliderActions";
import TableWrapperLayout from "./layouts/TableWrapperLayout";
import { toast } from "react-toastify";

function Sliders() {
  const { slides, message } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  if (message != "") {
    toast.warn(message);
  }

  useEffect(() => {
    dispatch(fetchSliders());
  }, []);

  return (
    <TableWrapperLayout
      name={"All slides"}
      link={"slider/create-slider"}
      btnText={"Create Slide"}>
      <table className='table table-bordered table-striped table-hover'>
        <thead className='table-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Caption</th>
            <th scope='col' colSpan='2'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {slides.length > 0 &&
            slides.map((slide) => (
              <tr key={Math.random()}>
                <th scope='row'>{slide.id}</th>
                <th scope='row'>{slide.caption}</th>
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
                    onClick={() => dispatch(deleteSlider(slide.id))}>
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

export default Sliders;
