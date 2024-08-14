// import React, { useState } from 'react';
// import './registration.css';
// import axios from 'axios';

// const Registration = () => {
//     const [formData, setFormData] = useState({
//         empcode: '',
//         Name: '',
//         contact: '',
//         email: '',
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const  handleSubmit = async(e) => {
//         e.preventDefault();
//         console.log('Handling form submission...');
//         console.log(formData);
//         try {
//             const response = await axios.post('http://192.168.1.37:8081/api/users/save', formData);
//            // setFormData(response.data);
//            console.log(response.status)
//           } catch (error) {
//             console.error('Error making POST request:', error);
//           }  // Here you can add the logic to submit the registration form data to the server.
//     };

//     return (
//         <div className='body'>
//             <div className='wrapper'>
//                 <div className='form_container'>
//                     <div className='title'>
//                         <h1>Registration</h1>
//                     </div>
//                     <form className='form' onSubmit={handleSubmit}>
//                         <div className='input_field'>
//                             <label>Employee code</label>
//                             <input
//                                 type='text'
//                                 name='empcode'
//                                 value={formData.empcode}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className='input_field'>
//                             <label>Name</label>
//                             <input
//                                 type='text'
//                                 name='Name'
//                                 value={formData.Name}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className='input_field'>
//                             <label>Contact</label>
//                             <input
//                                 type='text'
//                                 name='contact'
//                                 value={formData.contact}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <div className='input_field'>
//                             <label>Email</label>
//                             <input
//                                 type='email'
//                                 name='email'
//                                 value={formData.email}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                         <button type='submit' className='submit_button'>
//                             Register
//                         </button>
//                         <button type='button' className='submit_button'>
//                             Cancel
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Registration;

// /*------------------------------------------------------------------------------------------------------------- */

import React, { useState, useEffect } from 'react';
import './registration.css';
import axios from 'axios';

const Registration = () => {
    const [formData, setFormData] = useState({
        empcode: '',
        Name: '',
        contact: '',
        email: '',
    });

    const [generatedEmpCode, setGeneratedEmpCode] = useState('');
    const [contactError, setContactError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    useEffect(() => {
        generateEmployeeCode();
    }, []);

    const generateEmployeeCode = () => {
        // Generate a random 6-digit number
        const randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000);
        const empCode = `E${randomSixDigitNumber}`;
        setGeneratedEmpCode(empCode);
        setFormData({ ...formData, empcode: empCode });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // For Name field, limit input to maximum 30 characters
        if (name === 'Name' && value.length > 30) return;
        // For Contact field, limit input to 10 digits and only numeric
        if (name === 'contact') {
            if (/^\d{0,10}$/.test(value)) {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateContact = () => {
        if (formData.contact.length !== 10) {
            setContactError('Contact number must be 10 digits');
        } else {
            setContactError('');
        }
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Handling form submission...');
        console.log(formData);
        // Validate contact, email, and name before submitting
        validateContact();
        validateEmail();
        if (formData.Name.length > 30) {
            setNameError('Name must be less than 30 characters');
        } else {
            setNameError('');
        }
        if (contactError || emailError || nameError) {
            return;
        }
        try {
            const response = await axios.post('http://192.168.56.1:8081/api/users/save', formData);
            console.log(response.status);
            setShowSuccessPopup(true);
        } catch (error) {
            console.error('Error making POST request:', error);
        }
    };

    const handleClosePopup = () => {
        setShowSuccessPopup(false);
        setTimeout(() => {
            window.location.reload();
        }, 400); // Refresh the page after 0.4 seconds
    };

    return (
        <div className="body">
            <div className="wrapper">
                <div className="form_container">
                    <div className="title">
                        <h1>Registration</h1>
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input_field">
                            <label>Employee code</label>
                            <input
                                type="text"
                                name="empcode"
                                value={formData.empcode || generatedEmpCode}
                                readOnly // Make the input field read-only
                            />
                        </div>
                        <div className="input_field">
                            <label>Name</label>
                            <input
                                type="text"
                                name="Name"
                                value={formData.Name}
                                onChange={handleInputChange}
                            />
                            {nameError && <p className="error_message">{nameError}</p>}
                        </div>
                        <div className="input_field">
                            <label>Contact</label>
                            <input
                                type="text"
                                name="contact"
                                value={formData.contact}
                                onChange={handleInputChange}
                                onBlur={validateContact}
                            />
                            {contactError && <p className="error_message">{contactError}</p>}
                        </div>
                        <div className="input_field">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                onBlur={validateEmail}
                            />
                            {emailError && <p className="error_message">{emailError}</p>}
                        </div>
                        <button type="submit" className="submit_button">
                            Register
                        </button>
                        <button type="button" className="submit_button">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
            {showSuccessPopup && (
                <div className="popup success">
                    <div className="popup-content">
                        <h2>Data saved successfully!</h2>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Registration;
