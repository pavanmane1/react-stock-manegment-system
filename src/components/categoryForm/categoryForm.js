import React, { useState } from 'react';
import swal from 'sweetalert';
import { motion } from 'framer-motion';
import '../../styles/categoryPageStyle/categoryFormStyle.css';

const CategoryForm = ({ masterCategoryData, handleAddCategory }) => {
    const [formSubmission, setFormSubmission] = useState({
        category: '',
        description: '',
        status: '',
        masterid: '', // Track master category ID in the state
    });
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleInput = (e) => {
        console.log(masterCategoryData)
        const { name, value } = e.target;
        setFormSubmission(prevState => {
            const newState = { ...prevState, [name]: value };
            // Log the masterid value when it changes
            if (name === 'masterid') {
                console.log('Selected masterid:', value);
            }
            return newState;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddCategory(formSubmission)
            .then(() => {
                swal('Success', 'Category added!');
                setIsPopupOpen(false);
                // Clear the form after successful submission
                setFormSubmission({
                    category: '',
                    description: '',
                    status: '',
                    masterid: '',
                });
            })
            .catch((err) => swal('Error', 'Failed to add category ' + err));
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
                        <h1>Manage Category</h1>
                    </div>
                    <div className="category-form-buttons-container">
                        <button
                            type="button"
                            className="category-form-submit-button"
                            onClick={() => setIsPopupOpen(true)}
                        >
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
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="masterid">Brand:</label>
                                <select
                                    id="masterid"
                                    name="masterid"
                                    value={formSubmission.masterid}
                                    onChange={handleInput}
                                    required
                                >
                                    <option value="">Select</option>
                                    {masterCategoryData.map((data) => (
                                        <option key={data.master_category_id} value={data.master_category_id}>
                                            {data.master_category_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group-buttons">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={() => setIsPopupOpen(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryForm;
