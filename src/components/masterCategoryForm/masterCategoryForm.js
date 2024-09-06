import React, { useState } from 'react';
import swal from 'sweetalert';
import { motion } from 'framer-motion';
import '../../styles/categoryPageStyle/categoryFormStyle.css';

const MasterCtegoryForm = ({ handleAddCategory }) => {
    const [formSubmission, setFormSubmission] = useState({
        category: '',
        description: '',
        status: '',
    });
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormSubmission({ ...formSubmission, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddCategory(formSubmission)
            .then(() => {
                swal('Success', 'Category added!');
                setIsPopupOpen(false);
            })
            .catch(() => swal('Error', 'Failed to add category'));
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
                        <h1>Manage Brand</h1>
                    </div>
                    <div className="category-form-buttons-container">
                        <button type="submit" className="category-form-submit-button" onClick={() => setIsPopupOpen(true)}>
                            Add Brand
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
                        <h2>Add New Brand</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="category">Brand Name:</label>
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
                                <label htmlFor="description">Brand Description:</label>
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
                                <button type="button" onClick={() => setIsPopupOpen(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MasterCtegoryForm;
