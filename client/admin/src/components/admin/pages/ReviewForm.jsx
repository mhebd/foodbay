import React, { useEffect, useState } from "react";
import Input from "../../reusable/Input";
import Button from "../../reusable/Button";
import { useDispatch, useSelector } from "react-redux";
import FormWrapperLayout from "./layouts/FormWrapperLayout";
import InputWrapper from "../../reusable/InputWrapper";
import { createReview } from "../../../actions/reviewActions";
import { toast } from "react-toastify";

function ReviewForm() {
  const [review, setReview] = useState({
    name: "",
    opinion: "",
  });
  const { name, opinion } = review;
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const message = useSelector((state) => state.review.message);

  if (message != "") {
    toast.success(message);
  }

  const handleChange = (e) =>
    setReview({ ...review, [e.target.name]: e.target.value });
  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("opinion", opinion);
    data.append("image", image);
    dispatch(createReview(data));

    setReview({
      name: "",
      opinion: "",
    });
  };

  return (
    <FormWrapperLayout heading='Create Category'>
      <form onSubmit={submitHandler} className='form'>
        <InputWrapper label='Reviewer Name'>
          <Input
            className='form-control'
            type='text'
            onChange={handleChange}
            value={name}
            name='name'
            placeholder='Reviewer name'
            required
          />
        </InputWrapper>
        <InputWrapper label='Reviewer opinion'>
          <textarea
            name='opinion'
            cols='30'
            value={opinion}
            onChange={handleChange}
            rows='5'
            placeholder='Reviewer Opinion'>
            {/* {opinion} */}
          </textarea>
        </InputWrapper>
        <InputWrapper label='Reviewer image'>
          <Input
            className='form-control'
            type='file'
            onChange={(e) => setImage(e.target.files[0])}
            name={"image"}
            required
          />
        </InputWrapper>

        <div className='mb-3'>
          <Button className='btn-primary' type='submit'>
            Create Review
          </Button>
        </div>
      </form>
    </FormWrapperLayout>
  );
}

export default ReviewForm;
