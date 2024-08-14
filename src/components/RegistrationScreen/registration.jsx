import React, { useState } from 'react';
import './registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add the logic to submit the registration form data to the server.
        console.log(formData);
    };

    return (
        <div className='body'>
            <div className='wrapper'>
                <div className='form_container'>
                    <div className='title'>
                        <h1>Registration</h1>
                    </div>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='input_field'>
                            <label>First Name</label>
                            <input
                                type='text'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='input_field'>
                            <label>Last Name</label>
                            <input
                                type='text'
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='input_field'>
                            <label>Email</label>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='input_field'>
                            <label>Password</label>
                            <input
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type='submit' className='submit_button'>
                            Register
                        </button>
                        <button className="submit_button" >
                            cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
