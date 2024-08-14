import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios'; // Import axios for making API calls
import { motion } from 'framer-motion';
import './product_type.css';

const Employee_Details = () => {
    const [formsubmition, setformsubmition] = useState({
        product_type: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setformsubmition({ ...formsubmition, [name]: value });
        console.log(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming your API endpoint is correct and you want to use axios
        // Make sure to handle the API endpoint appropriately
        axios.post("http://192.228.1.20:8081/api/users/producttype", formsubmition)
            .then(res => {
                swal("Successful", "Your data is saved!");
                console.log(res);
            })
            .catch(error => {
                swal("Error", "Your data is not saved!");
                console.error(error);
            });
    };

    return (
        <div>
            <motion.div
                transition={{ duration: 0.3, ease: 'easeOut' }}
                animate={{ z: 100, scale: 1 }}
                initial={{ scale: 0 }}
                className="Product-details-body"
            >
                <div className="Product-details-wrapper">
                    <div className="Product-details-title">
                        <h1>Product Registration</h1>
                    </div>
                    <form className="Product-details-form-container" onSubmit={handleSubmit}>
                        <div className="Product-details-form">
                            <div className="Product-details-form input-field">
                                <label>Product Type</label>
                                <input
                                    type="text"
                                    name="product_type"
                                    value={formsubmition.product_type}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>

                        <div className="Product-details-buttons-container">
                            <button type="submit" className="Product-details-submit-button">
                                Submit
                            </button>
                            <button type="reset" className="Product-details-cancel-button">
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




/*---------------------------------------------------------------*/



