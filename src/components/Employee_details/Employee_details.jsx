import React, { useState } from 'react';
import swal from 'sweetalert';
import { motion } from 'framer-motion';
import './employee_details.css';

const Employee_Details = () => {
    const [error, setError] = useState(null);
    const [selected, setSelected] = useState('true');
    const [Ttypecode, setTtypecode] = useState([])
    const [formsubmition, setformsubmition] = useState({
        Employee_Namae: "",
        Employee_Code: "",
        Employee_Type: "",
        Employee_location: "",
        Salary: "",
        Date_of_joining: "true",
        Department: "",
        Status: ""

    })

    // *-----Input fields----*

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setformsubmition({ ...formsubmition, [name]: value })
        console.log(name, value)
    }

    // *-----Api post call ----*

    const handleSubmit = (e) => {
        e.preventDefault();
        /*  axios.post("igstonexport/", formsubmition)
             .then(res => {
                 swal("Successfull", "Your data is saved!");
                 //window.location.reload(false);
                 console.log(res)
             }).catch(eror => {
                 swal("Error", "Your data is not saved!");
                 //console.log(eror);
             }) */

    }

    // *-----Radio button validation----*

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setSelected(value);
        setformsubmition({ ...formsubmition, [name]: value })
        console.log(value);
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
                        <h1>Employee Registration</h1>
                    </div>
                    <form className="employee-details-form-container" >
                        <div className="employee-details-form">
                            <div className="employee-details-form input-field">
                                <label>Employee Name</label>
                                <input
                                    type="text"
                                    name="Employee_Namae"
                                    value={formsubmition.Employee_Namae}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="employee-details-form input-field">
                                <label>Employee type</label>
                                <input
                                    type="text"
                                    name="Employee_Type"
                                    value={formsubmition.Employee_Type}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="employee-details-form input-field">
                                <label>Employee Code</label>
                                <input type="text"
                                    name="Employee_Code"
                                    value={formsubmition.Employee_Code}
                                    onChange={handleChange} />
                            </div>
                            {/* ... (other input fields) */}
                            <div className="employee-details-form input-field">
                                <label>Location</label>
                                <input type="text"
                                    name="Employee_location"
                                    value={formsubmition.Employee_location}
                                    onChange={handleChange} />
                            </div>
                            <div className="employee-details-form input-field inline">
                                <label>Salary</label>
                                <input
                                    type="text"
                                    name="salary"
                                    value={formsubmition.Salary}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="employee-details-form input-field inline">
                                <label>Date of Joining</label>
                                <input
                                    type="text"
                                    name="Date_of_joining"
                                    value={formsubmition.Date_of_joining}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="employee-details-form input-field inline">
                                <label>Department</label>
                                <input
                                    type="text"
                                    name="Department"
                                    value={formsubmition.Department}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="employee-details-form input-field inline">
                                <label>Status</label>
                                <input
                                    type="text"
                                    name="Status"
                                    value={formsubmition.Status}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        <div className="employee-details-buttons-container">
                            <button type="submit" onSubmit={handleInput} className="employee-details-submit-button">
                                Submit
                            </button>
                            <button type="reset" className="employee-details-cancel-button">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Employee_Details;
