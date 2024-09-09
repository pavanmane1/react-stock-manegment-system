import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { motion } from 'framer-motion';
import axios from 'axios';
import config from '../../config/config';

const LoginScreen = ({ onLogin, handleAddCategory }) => {
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
        handleAddCategory(formSubmission)
            .then(() => {
                swal('Success', 'Login');
                setIsPopupOpen(false);
            })
            .catch((err) => swal('Error', 'Failed to add category ' + err));
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
