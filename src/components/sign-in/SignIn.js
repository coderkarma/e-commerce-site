import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import {signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span> Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />

          <CustomButton type='submit'>SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
