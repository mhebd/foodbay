import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../reusable/Input";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../../actions/userActions";

function Register() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;

  const [wrongPass, setWrongPass] = useState("");

  const onChangeHdl = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmitHdl = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setWrongPass("Password and retype password did not match!");
    } else {
      dispatch(createUser(user));
      setWrongPass("");
    }
  };
  return (
    <>
      <div className='card col-md-7 p-4 mb-0'>
        <div className='card-body p-4'>
          <h1>Register</h1>
          <p className='text-medium-emphasis'>Create your account</p>
          <form method='post' onSubmit={onSubmitHdl} className='form'>
            <div className='input-group mb-3'>
              <span className='input-group-text'>
                <svg className='icon'>
                  <i className='far fa-user'></i>
                </svg>
              </span>
              <Input
                className='form-control'
                type='text'
                placeholder='Your name'
                name='name'
                onChange={(e) => onChangeHdl(e)}
                value={name}
                required={true}
              />
            </div>
            <div className='input-group mb-3'>
              <span className='input-group-text'>
                <svg className='icon'>
                  <i className='far fa-envelope-open'></i>
                </svg>
              </span>
              <Input
                className='form-control'
                type='email'
                placeholder='Your Email'
                name='email'
                onChange={(e) => onChangeHdl(e)}
                value={email}
                required={true}
              />
            </div>
            <div className='input-group mb-3'>
              <span className='input-group-text'>
                <svg className='icon'>
                  <i className='fas fa-lock'></i>
                </svg>
              </span>
              <Input
                className='form-control'
                type='password'
                placeholder='Password'
                name='password'
                onChange={(e) => onChangeHdl(e)}
                value={password}
                required={true}
              />
            </div>
            <div className='input-group mb-4'>
              <span className='input-group-text'>
                <svg className='icon'>
                  <i className='fas fa-lock'></i>
                </svg>
              </span>
              <Input
                className='form-control'
                type='password'
                placeholder='Repeat password'
                name='password2'
                onChange={(e) => onChangeHdl(e)}
                value={password2}
                required={true}
              />
            </div>
            {wrongPass && (
              <div className='mb-3'>
                <p className='alert alert-danger'>{wrongPass}</p>
              </div>
            )}
            <button className='btn btn-block btn-primary' type='submit'>
              Create Account
            </button>
          </form>
        </div>
      </div>
      <div className='card col-md-5 text-white bg-primary py-5'>
        <div className='card-body text-center d-flex align-items-center'>
          <div>
            <h2>Login</h2>
            <p>Already have an account? Then let's login now.</p>
            <Link
              to='/auth/login'
              className='btn btn-lg btn-outline-light mt-3'
              type='button'>
              Login Now!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
