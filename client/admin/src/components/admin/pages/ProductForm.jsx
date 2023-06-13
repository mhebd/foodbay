import React, { useEffect, useState } from "react";
import Input from "../../reusable/Input";
import Button from "../../reusable/Button";
import { useDispatch, useSelector } from "react-redux";
import FormWrapperLayout from "./layouts/FormWrapperLayout";
import InputWrapper from "../../reusable/InputWrapper";
import { createProduct } from "../../../actions/productActions";
import { fetchCategories } from "../../../actions/categoryActions";

function ProductForm() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    discount: "",
    featured: false,
    special: false,
    category: 0,
  });
  const { name, price, discount, featured, special, category } = product;
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    if (e.target.type === "checkbox") {
      setProduct({
        ...product,
        [e.target.name]: e.target.checked,
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("discount", discount);
    data.append("featured", featured);
    data.append("special", special);
    data.append("category", category);
    data.append("image", image);
    dispatch(createProduct(data));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <FormWrapperLayout heading='Create Category'>
      <form onSubmit={submitHandler} className='form'>
        <InputWrapper label='Product Name'>
          <Input
            className='form-control'
            type='text'
            onChange={handleChange}
            value={name}
            name='name'
            placeholder='Product name'
            required
          />
        </InputWrapper>

        <InputWrapper label='Product price'>
          <Input
            className='form-control'
            type='number'
            onChange={handleChange}
            value={price}
            name={"price"}
            placeholder='Product Price'
            required
          />
        </InputWrapper>

        <InputWrapper label='Product discount'>
          <Input
            className='form-control'
            type='number'
            onChange={handleChange}
            value={discount}
            name={"discount"}
            placeholder='Product discount'
            required
          />
        </InputWrapper>

        <InputWrapper label='Product category'>
          <select
            name='category'
            className='form-control'
            value={category}
            onChange={handleChange}>
            {categories.length > 0 &&
              categories.map((c) => (
                <option key={Math.random()} value={c.id}>
                  {c.name}
                </option>
              ))}
          </select>
        </InputWrapper>

        <InputWrapper label='Product image'>
          <Input
            className='form-control'
            type='file'
            onChange={(e) => setImage(e.target.files[0])}
            name={"image"}
            required
          />
        </InputWrapper>

        <InputWrapper label='Featured product'>
          <Input type='checkbox' onChange={handleChange} name={"featured"} />
        </InputWrapper>

        <InputWrapper label='Special product'>
          <Input type='checkbox' onChange={handleChange} name={"special"} />
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

export default ProductForm;
