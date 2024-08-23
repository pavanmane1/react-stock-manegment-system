import React, { useState, useEffect } from 'react';
import './registration.css';
import axios from 'axios';
import fieldConfigs from './fieldsconfig'; // Adjust the path as needed

const Registration = () => {
    const [formData, setFormData] = useState({
        employee_id: '',
        section_code: '',
        designation: '',
        honorific_code: 'Mr',
        namelast: '',
        namefirst: '',
        namemiddle: '',
        education: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        pin: '',
        phonenumber: '',
        permanentaddress1: '',
        permanentaddress2: '',
        permanentcity: '',
        permanentstate: '',
        dateofleaving: '',
        dateofjoining: '',
        initials: '',
        employeetype_code: '',
        paytype_code: '',
        epf_number: '',
        ppf_number: '',
        pan_number: '',
        email_id: '',
        pl: 0,
        cl: 0,
        ml: 0,
        isclosed: 0,
        isdeleted: 0,
        pettycashaccount_id: '',
    });

    const [generatedEmpCode, setGeneratedEmpCode] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        generateEmployeeCode();
    }, []);

    const generateEmployeeCode = () => {
        const randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000);
        const empCode = `E${randomSixDigitNumber}`;
        setGeneratedEmpCode(empCode);
        setFormData(prevFormData => ({ ...prevFormData, employee_id: empCode }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    };

    const validateField = (name, value) => {
        let errorMessage = '';
        if (name === 'phonenumber' && value.length !== 10) {
            errorMessage = 'Contact number must be 10 digits';
        } else if (name === 'email_id' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errorMessage = 'Invalid email format';
        }
        return errorMessage;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        fieldConfigs.forEach(({ name }) => {
            const error = validateField(name, formData[name]);
            if (error) newErrors[name] = error;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        try {
            const response = await axios.post('http://192.168.56.1:8081/api/users/save', formData);
            console.log(response.status);
        } catch (error) {
            console.error('Error making POST request:', error);
        }
    };

    return (
        <div className="userregistration_body">
            <div className="registration_wrapper">
                <div className="registraion_form_container">
                    <div className="title">
                        <h1>Employe Registration</h1>
                    </div>
                    <form className="emp_reg_form" onSubmit={handleSubmit}>
                        {fieldConfigs.map(({ name, type, placeholder }) => (
                            <div className="emp_reg_input_field" key={name}>
                                <label htmlFor={name}>{placeholder}</label>
                                <input
                                    id={name}
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    value={formData[name] || ''}
                                    onChange={handleInputChange}
                                />
                                {errors[name] && <p className="error_message">{errors[name]}</p>}
                            </div>
                        ))}
                        <div>
                            <button type="submit" className="submit_button">
                                Register
                            </button>
                            <button type="button" className="submit_button">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
