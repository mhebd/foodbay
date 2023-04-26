import React, { useEffect, useState } from "react";
import Input from "../../reusable/Input";
import Button from "../../reusable/Button";
import { useDispatch } from "react-redux";
import { createCategory } from "../../../actions/categoryActions";
import FormWrapperLayout from "./layouts/FormWrapperLayout";

function CategoryForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setName(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createCategory({ name }));
  };

  return (
    <FormWrapperLayout heading='Create Category'>
      <form onSubmit={submitHandler} className='form'>
        <div className='mb-3'>
          <label className='form-label' htmlFor=''>
            Write your category name
          </label>
          <Input
            className='form-control'
            type='text'
            onChange={handleChange}
            value={name}
            placeholder='Write a category name'
            required
          />
        </div>

        <div className='mb-3'>
          <Button className='btn-primary' type='submit'>
            Create Category
          </Button>
        </div>
      </form>
    </FormWrapperLayout>
  );
}

export default CategoryForm;
