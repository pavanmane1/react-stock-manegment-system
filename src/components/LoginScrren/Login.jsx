import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import swal from 'sweetalert';
import { motion } from 'framer-motion';

const LoginScreen = () => {
    const navigate = useNavigate();
    const [formSubmission, setFormSubmission] = useState({
        Username: '',
        Password: '',
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormSubmission({ ...formSubmission, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your logic for handling form submission goes here

        // For example, show a success message and navigate to the next screen
        swal('Success', 'Login successful!', 'success').then(() => {
            // Navigate to the next screen using the correct route path
            navigate('/registration'); // Replace '/registration' with the actual path you want to navigate to
        });
    };

    return (
        <div>
            <motion.div
                transition={{ duration: 0.3, ease: 'easeOut' }}
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
                                    name='Username'
                                    value={formSubmission.Username}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className='input_field'>
                                <label>Password</label>
                                <input
                                    type='password'
                                    name='Password'
                                    value={formSubmission.Password}
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
                                navigate('/registration'); // Replace '/registration' with the actual path for the registration screen
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
