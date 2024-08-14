import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { motion } from 'framer-motion';
import './newcatagory.css'; // Make sure to have appropriate styling

const CategoryForm = () => {
  const [error, setError] = useState(null);
  const [formSubmission, setFormSubmission] = useState({
    category: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormSubmission({ ...formSubmission, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://192.168.223.71:8081/api/users/newcatagory", formSubmission)
      .then(res => {
        swal("Successful", "Category added!");
        console.log(res);
      })
      .catch(error => {
        swal("Error", "Failed to add category!");
        console.error(error);
      });
  };

  return (
    <div>
      <motion.div
        transition={{ duration: 0.3, ease: 'easeOut' }}
        animate={{ z: 100, scale: 1 }}
        initial={{ scale: 0 }}
        className="category-form-body"
      >
        <div className="category-form-wrapper">
          <div className="category-form-title">
            <h1>Category Registration</h1>
          </div>
          <form className="category-form-container" onSubmit={handleSubmit}>
            <div className="category-form">
              <div className="category-form input-field">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={formSubmission.category}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="category-form-buttons-container">
              <button type="submit" className="category-form-submit-button">
                Submit
              </button>
              <button type="reset" className="category-form-cancel-button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default CategoryForm;
