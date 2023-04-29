import React, { useEffect, useState } from "react";
import Input from "../../reusable/Input";
import Button from "../../reusable/Button";
import { useDispatch, useSelector } from "react-redux";
import FormWrapperLayout from "./layouts/FormWrapperLayout";
import InputWrapper from "../../reusable/InputWrapper";
import { createSlider } from "../../../actions/sliderActions";
import { toast } from "react-toastify";

function SliderForm() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const message = useSelector((state) => state.slider.message);

  if (message != "") {
    toast.success(message);
  }

  const captionHandler = (e) => setCaption(e.target.value);
  const imageHandler = (e) => setImage(e.target.files[0]);
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", image);
    dispatch(createSlider(formData));

    setCaption("");
    setImage("");
  };

  return (
    <FormWrapperLayout heading='Create Category'>
      <form
        onSubmit={submitHandler}
        className='form'
        encType='multipart/form-data'>
        <InputWrapper label='Slider caption'>
          <Input
            className='form-control'
            type='text'
            onChange={captionHandler}
            value={caption}
            name='caption'
            placeholder='Slider caption'
            required
          />
        </InputWrapper>
        <InputWrapper label='Slider Image'>
          <Input
            className='form-control'
            type='file'
            onChange={imageHandler}
            name='image'
            required
          />
        </InputWrapper>

        <div className='mb-3'>
          <Button className='btn-primary' type='submit'>
            Create Slide
          </Button>
        </div>
      </form>
    </FormWrapperLayout>
  );
}

export default SliderForm;
