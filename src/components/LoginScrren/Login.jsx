import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { motion } from 'framer-motion';
import axios from 'axios';

const LoginScreen = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formSubmission, setFormSubmission] = useState({
    username: '',
    password: '',
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormSubmission({ ...formSubmission, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Handling form submission...');

    try {
      const response = await axios.post('http://192.168.1.45:8081/api/auth/userlogin', formSubmission);
      console.log(response.data);

      if (response.data.loginstatus) {
        // Store the token in localStorage or a cookie
        localStorage.setItem('token', response.data.token);
        // localStorage.setItem('username', formSubmission.username);
        // localStorage.setItem('password', formSubmission.password);
        // Call the onLogin callback
        onLogin();

        // Navigate to the dashboard
        navigate('/dashboard');
      } else {

        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login.' + error);
    }
  };

  return (
    <div>
      <motion.div
        transition={{ duration: 0.2, ease: 'easeOut' }}
        animate={{ z: 100, scale: 1 }}
        initial={{ scale: 0 }}
        className='body'
      >
        <div className='wrapper'>
          <div className='title'>
            <h1>Log in</h1>
          </div>
          <form className='form_container' onSubmit={handleSubmit}>
            <div className='form'>
              <div className='input_field'>
                <label>Username</label>
                <input
                  type='text'
                  name='username'
                  value={formSubmission.username}
                  onChange={handleInput}
                />
              </div>
              <div className='input_field'>
                <label>Password</label>
                <input
                  type='password'
                  name='password'
                  value={formSubmission.password}
                  onChange={handleInput}
                />
              </div>
            </div>

            <button type='submit' className='submit_button'>
              Login
            </button>
            <button
              className='submit_button'
              onClick={() => {
                // Handle registration button click
                navigate('/registration');
              }}
            >
              Register
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginScreen;
