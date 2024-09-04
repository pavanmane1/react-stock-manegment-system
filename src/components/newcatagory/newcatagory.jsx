import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons from react-icons
import './newcatagory.css'; // Make sure to have appropriate styling

const CategoryForm = () => {
  const [error, setError] = useState(null);
  const [formSubmission, setFormSubmission] = useState({
    category: "",
    description: "",
    status: ""
  });
  const [categories, setCatagories] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormSubmission({ ...formSubmission, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(formSubmission)
    e.preventDefault();
    axios.post("http://192.168.1.45:8081/api/product/newcategory", formSubmission)
      .then(res => {
        swal("Successful", "Category added!");
        console.log(res);
        fetchCategories(); // Refresh the category list after adding a new one
        closePopup(); // Close the popup
      })
      .catch(error => {
        swal("Error", "Failed to add category!");
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://192.168.1.45:8081/api/product/category');
      setCatagories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log("Edit", id);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log("Delete", id);
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
            <h1>Manage Category </h1>
          </div>
          <div className="category-form-buttons-container">
            <button type="submit" className="category-form-submit-button" onClick={openPopup}>
              Add Category
            </button>
            <button type="reset" className="category-form-cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </motion.div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Add New Category</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="category">Category Name:</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={formSubmission.category}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Category Description:</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formSubmission.description}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status:</label>
                <select
                  id="status"
                  name="status"
                  value={formSubmission.status}
                  onChange={handleInput}
                >
                  <option value="">Select</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="form-group-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={closePopup}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <table className="employee-table">
        <thead>
          <tr>
            <th>Category Names</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((category) => (
              <tr key={category.id}>
                <td>{category.category_name}</td>
                <td>{category.category_description}</td>
                <td>
                  <span className={`status-box ${category.status}`}>
                    {category.status.charAt(0).toUpperCase() + category.status.slice(1)}
                  </span>
                </td>
                <td>
                  <button
                    className="action-button edit-button"
                    onClick={() => handleEdit(category.id)}
                    aria-label="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="action-button delete-button"
                    onClick={() => handleDelete(category.id)}
                    aria-label="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">There are No Categories yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryForm;
