import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './categories.css';
import swal from 'sweetalert';


const ProductCategory = () => {
    const [categoryForm, setCategoryForm] = useState({
        categoryName: "",
        categoryType: "",
        products: [{ name: "", quantity: "" }]
    });
    const [error, setError] = useState(null);

    const [productTypes, setProductTypes] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch product types from the API
        axios.get('http://192.228.1.20:8081/api/users/producttypes')
            .then(response => {
                setProductTypes(response.data);
            })
            .catch(error => {
                console.error('Error fetching product types:', error);
            });

        // Fetch categories from the API
        axios.get('http://192.228.1.20:8081/api/users/catagories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []); // Run this effect only once on component mount

    const handleCategoryChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCategoryForm({ ...categoryForm, [name]: value });
    };

    const handleProductChange = (index, e) => {
        const updatedProducts = [...categoryForm.products];
        updatedProducts[index][e.target.name] = e.target.value;
        setCategoryForm({ ...categoryForm, products: updatedProducts });
    };

    const addProduct = () => {
        setCategoryForm({
            ...categoryForm,
            products: [...categoryForm.products, { name: "", quantity: "" }]
        });
    };

    const removeProduct = (index) => {
        const updatedProducts = [...categoryForm.products];
        updatedProducts.splice(index, 1);
        setCategoryForm({ ...categoryForm, products: updatedProducts });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.post("http://192.228.1.20:8081/api/users/newproduct", categoryForm)
            .then(res => {
                swal("Successful", "Product added!");
                console.log(res);
            })
            .catch(error => {
                swal("Error", "Failed to add Product!");
                console.error(error);
            });
    };
    
    

    return (
        <div>
            <motion.div
                transition={{ duration: 0.3, ease: 'easeOut' }}
                animate={{ z: 100, scale: 1 }}
                initial={{ scale: 0 }}
                className="product-category-body"
            >
                <div className="product-category-wrapper">
                    <div className="product-category-title">
                        <h1>Product Category Details</h1>
                    </div>
                    <form className="product-category-form-container" onSubmit={handleSubmit}>
                        <div className="product-category-form">
                            <div className="product-category-form input-field">
                                <label>Category Name</label>
                                <select
                                    name="categoryName"
                                    value={categoryForm.categoryName}
                                    onChange={handleCategoryChange}
                                >
                                    <option value="">Select Category</option>
                                    {categories.map((category) => (
                                        <option key={category.catagory_id} value={category.catagory_id}>
                                            {category.catagoryname}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="product-category-form input-field">
                                <label>Category Type</label>
                                <select
                                    name="categoryType"
                                    value={categoryForm.categoryType}
                                    onChange={handleCategoryChange}
                                >
                                    <option value="">Select Category Type</option>
                                    {productTypes.map((type) => (
                                        <option key={type.product_id} value={type.product_id}>
                                            {type.producttype}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {categoryForm.products.map((product, index) => (
                                <div key={index} className="product-category-form input-field">
                                    <label>Product Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={product.name}
                                        onChange={(e) => handleProductChange(index, e)}
                                    />

                                    <label>Quantity</label>
                                    <input
                                        type="text"
                                        name="quantity"
                                        value={product.quantity}
                                        onChange={(e) => handleProductChange(index, e)}
                                    />

                                    {index > 0 && (
                                        <button
                                            type="button"
                                            className="remove-product-button"
                                            onClick={() => removeProduct(index)}
                                        >
                                            Remove Product
                                        </button>
                                    )}
                                </div>
                            ))}

                            <button
                                type="button"
                                className="add-product-button"
                                onClick={addProduct}
                            >
                                Add Product
                            </button>
                        </div>

                        <div className="product-category-buttons-container">
                            <button type="submit" className="product-category-submit-button">
                                Submit
                            </button>
                            <button type="reset" className="product-category-cancel-button">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductCategory;
