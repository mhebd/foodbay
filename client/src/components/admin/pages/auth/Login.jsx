import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../reusable/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../../actions/userActions";

function Login() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const [wrongPass, setWrongPass] = useState("");

  const onChangeHdl = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmitHdl = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setWrongPass("Password is too short");
    } else {
      dispatch(loginUser(user));
      setWrongPass("");
    }
  };

  if (userState.token) {
    localStorage.setItem("TOKEN", userState.token);
  }
  return (
    <>
      <div className='card col-md-7 p-4 mb-0'>
        <div className='card-body'>
          <h1>Login</h1>
          <p className='text-medium-emphasis'>Sign In to your account</p>
          <form method='post' onSubmit={onSubmitHdl} className='form'>
            <div className='input-group mb-3'>
              <span className='input-group-text'>
                <svg className='icon'>
                  <i className='far fa-envelope'></i>
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
            <div className='input-group mb-4'>
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
            {wrongPass && (
              <div className='mb-3'>
                <p className='alert alert-danger'>{wrongPass}</p>
              </div>
            )}
            <div className='row'>
              <div className='col-6'>
                <button className='btn btn-primary px-4' type='submit'>
                  Login
                </button>
              </div>
              <div className='col-6 text-end'>
                <button className='btn btn-link px-0' type='button'>
                  Forgot password?
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='card col-md-5 text-white bg-primary py-5'>
        <div className='card-body text-center'>
          <div>
            <h2>Sign up</h2>
            <p>Not have an account? Then let's create a new account.</p>
            <Link
              to='/auth/register'
              className='btn btn-lg btn-outline-light mt-3'
              type='button'>
              Register Now!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
