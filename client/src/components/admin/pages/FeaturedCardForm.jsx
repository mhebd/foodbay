import React, { useEffect, useState } from "react";
import Input from "../../reusable/Input";
import Button from "../../reusable/Button";
import { useDispatch, useSelector } from "react-redux";
import FormWrapperLayout from "./layouts/FormWrapperLayout";
import { createFeaturedCard } from "../../../actions/featuredActions";
import { toast } from "react-toastify";
import InputWrapper from "../../reusable/InputWrapper";

function FeaturedCardForm() {
  const [data, setData] = useState({
    title: "",
    icon: "",
    caption: "",
  });
  const { title, icon, caption } = data;
  const message = useSelector((state) => state.featured.message);
  console.log(message);
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createFeaturedCard(data));
    setData({
      title: "",
      icon: "",
      caption: "",
    });
  };

  if (message) toast(message);

  return (
    <FormWrapperLayout heading='Create Featured Card'>
      <form onSubmit={submitHandler} className='form'>
        <InputWrapper label='Write your card title'>
          <Input
            className='form-control'
            name='title'
            type='text'
            onChange={handleChange}
            value={title}
            placeholder='Write a card title'
            required
          />
        </InputWrapper>

        <InputWrapper label=' Write your icon name'>
          <Input
            className='form-control'
            type='text'
            name='icon'
            onChange={handleChange}
            value={icon}
            placeholder='Write a icon name'
            required
          />
        </InputWrapper>

        <InputWrapper label='Write your card caption'>
          <Input
            className='form-control'
            type='text'
            name='caption'
            onChange={handleChange}
            value={caption}
            placeholder='Write a card caption'
            required
          />
        </InputWrapper>

        <div className='mb-3'>
          <Button className='btn-primary' type='submit'>
            Create Category
          </Button>
        </div>
      </form>
    </FormWrapperLayout>
  );
}

export default FeaturedCardForm;
