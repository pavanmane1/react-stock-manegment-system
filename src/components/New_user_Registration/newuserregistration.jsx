// // Registration.js
// import React, { useState } from 'react';
// import './newuserregistration.css';
// import axios from 'axios';

// const NewRegistration = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//         userCategory: 'author', // Default value for the dropdown
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log('Handling form submission...');
//         console.log(formData);

//         try {
//             const response = await axios.post('http://192.228.1.20:8081/api/users/Register', formData);
//             console.log(response.status);
//         } catch (error) {
//             console.error('Error making POST request:', error);
//         }
//     };

//     return (
//         <div className='body'>
//             <div className='wrapper'>
//                 <div className='form_container'>
//                     <div className='title'>
//                         <h1>User Registration</h1>
//                     </div>
//                     <form className='form' onSubmit={handleSubmit}>
//                         <div className='input_field'>
//                             <label>Username</label>
//                             <input
//                                 type='text'
//                                 name='username'
//                                 value={formData.username}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className='input_field'>
//                             <label>Password</label>
//                             <input
//                                 type='password'
//                                 name='password'
//                                 value={formData.password}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className='input_field'>
//                             <label>User Category</label>
//                             <select
//                                 name='userCategory'
//                                 value={formData.userCategory}
//                                 onChange={handleInputChange}
//                             >
//                                 <option value='author'>Author</option>
//                                 <option value='employee'>Employee</option>
//                             </select>
//                         </div>
//                         <button type='submit' className='submit_button'>
//                             Register
//                         </button>
//                         <button type='button' className='cancel_button'>
//                             Cancel
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default NewRegistration;
/*----------------------------------------------*/

import React, { useState } from 'react';
import './newuserregistration.css';
import axios from 'axios';

const NewRegistration = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        userCategory: 'author', // Default value for the dropdown
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Validate input based on the name attribute
        if (name === 'username') {
            // Ensure only alphabetic characters and maximum length of 30
            const validatedValue = value.replace(/[^a-zA-Z]/g, '').slice(0, 30);
            setFormData({ ...formData, [name]: validatedValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Handling form submission...');
        console.log(formData);

        try {
            const response = await axios.post('http://192.228.1.20:8081/api/users/Register', formData);
            console.log(response.status);
        } catch (error) {
            console.error('Error making POST request:', error);
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
                                value={formData.username}
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
                        <div className='input_field'>
                            <label>User Category</label>
                            <select
                                name='userCategory'
                                value={formData.userCategory}
                                onChange={handleInputChange}
                            >
                                <option value='author'>Author</option>
                                <option value='employee'>Employee</option>
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
