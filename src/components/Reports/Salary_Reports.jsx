import React, { useState } from 'react';
import swal from 'sweetalert';
import { motion } from 'framer-motion';
import './Salary_Reports';

const Employee_Details = () => {
    const [error, setError] = useState(null);
    const [formsubmition, setformsubmition] = useState({
        // ... (existing state properties)
        selectedMonth: '', // Added selectedMonth property for the month dropdown
        dateOfBirth: '', // Added dateOfBirth property for the date picker
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setformsubmition({ ...formsubmition, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // ... (existing form submission logic)
    };

    return (
        <div>
            <motion.div
                transition={{ duration: 0.3, ease: 'easeOut' }}
                animate={{ z: 100, scale: 1 }}
                initial={{ scale: 0 }}
                className="employee-details-body"
            >
                <div className="employee-details-wrapper">
                    <div className="employee-details-title">
                        <h1>Employee Salary Report</h1>
                    </div>
                    <form className="employee-details-form-container" onSubmit={handleSubmit}>
                        <div className="employee-details-form">
                            {/* ... (existing input fields) */}
                            <div className="employee-details-form input-field month-dropdown">
                                <label>Month of Joining</label>
                                <select
                                    name="selectedMonth"
                                    value={formsubmition.selectedMonth}
                                    onChange={handleInput}
                                >
                                    <option value="">Select Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    {/* Add more options for other months */}
                                </select>
                            </div><div className="employee-details-form input-field month-dropdown">
                                <label>Name of employee</label>
                                <select
                                    name="selectedMonth"
                                    value={formsubmition.selectedMonth}
                                    onChange={handleInput}
                                >
                                    <option value="">Select Name</option>
                                    <option value="January">pavan</option>
                                    <option value="February">Samir</option>
                                    <option value="March">tushar</option>
                                    {/* Add more options for other months */}
                                </select>
                            </div>

                        </div>
                        <div className="employee-details-buttons-container">
                            <button type='submit' className='submit_button'>
                                Print
                            </button>
                            <button className="submit_button" >
                                cancel
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Employee_Details;
