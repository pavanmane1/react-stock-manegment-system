import React, { useState, useEffect } from 'react';
import './newuserregistration.css';
import axios from 'axios';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

const NewRegistration = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        mobile: '',
        roleid: '',
    });

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [userroledata, setUserroledata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Handling form submission...');
        console.log(formData);

        try {
            const response = await axios.post('http://192.168.1.45:8081/api/users/createuser', formData);
            if (response.status === 201) {
                alert('User successfully added!');
                setFormData({
                    username: '',
                    password: '',
                    mobile: '',
                    roleid: '',
                });
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error making POST request:', error);
            alert('Error creating user. Please check the input and try again.');
        }
    };

    useEffect(() => {
        const getUserRoles = async () => {
            try {
                const response = await axios.get('http://192.168.1.45:8081/api/users/getuserrole');
                console.log(response.status);
                setUserroledata(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user roles:', error);
                setError('Failed to load user roles.');
                setLoading(false);
            }
        };
        getUserRoles();
    }, []);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password');
        }
    };

    return (
        <div className='body'>
            <div className='wrapper'>
                <div className='form_container'>
                    <div className='title'>
                        <h1>User Registration</h1>
                    </div>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='input_field'>
                            <label>Username</label>
                            <input
                                type='text'
                                name='username'
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='input_field password_field'>
                            <label>Password</label>
                            <div className='password_container'>
                                <input
                                    type={type}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    autoComplete="current-password"
                                />

                                <button
                                    type='button'
                                    className='show_password_button'
                                    onClick={handleToggle}
                                >
                                    <Icon icon={icon} size={20} />
                                </button>
                            </div>
                        </div>
                        <div className='input_field'>
                            <label>Mobile</label>
                            <input
                                type='text'
                                name='mobile'
                                placeholder="Mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='input_field'>
                            <label>Role</label>
                            <select
                                name='roleid'
                                value={formData.roleid}
                                onChange={handleInputChange}
                            >
                                <option value=''>Select</option>
                                {userroledata.map((role) => (
                                    <option key={role.id} value={role.id}>{role.caption}</option>
                                ))}
                            </select>
                        </div>
                        <button type='submit' className='submit_button'>
                            Register
                        </button>
                        <button type='button' className='cancel_button'>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewRegistration;
