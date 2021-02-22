import React from 'react';
import {Link} from 'react-router-dom'
import validate from './validateRegisteredInfo'
import useRegisteredForm from './useRegisteredForm';
import './FormSignup.css';

const RegisteredUser = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useRegisteredForm(
    submitForm,
    validate
  );

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Welcome to Team A Black History Month Hackathon!
          Create an account with us by filling
        out the form below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign in
        </button>
        <span>Dont have a login? Sign up <Link to='/'>here</Link></span>

      </form>
    </div>
  );
};

export default RegisteredUser;
