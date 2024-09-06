import React, { useState, useEffect } from 'react';
import CategoryForm from '../components/categoryForm/categoryForm';
import Table from '../components/Table/Table';
import useCategory from '../hooks/useCategory';
// import '../styles/categoryPageStyle/CategoryPage.css'; // Ensure to add relevant styles
import useData from '../hooks/dynamicCrud';

const CategoryPage = () => {
    const { data: fetchedData, loading, error, handleAddData, handleUpdate, handleDelete } = useData(
        'product/category',         // Fetch categories
        'product/newcategory',      // Add new category
        'product/updatecategory',   // Update category
        'product/deletecategory'    // Delete category
    );
    const { data: fetchedDatamaster } = useData(
        'product/mastercategory',         // Fetch categories
        'product/newcategory',      // Add new category
        'product/updatecategory',   // Update category
        'product/deletecategory'    // Delete category
    );

    const headings = ['Category Name', 'Description', 'Brand', 'Status'];

    // Pass the `fetchedData` as master category data to the form
    const masterCategoryData = fetchedDatamaster.map(category => ({

        master_category_id: category.id,
        master_category_name: category.master_category_name,
    }));

    // Format the fetched data for displaying in the table
    const formattedData = fetchedData.map(category => ({
        id: category.id,
        'Category Name': category.category_name,
        Description: category.category_description,
        Brand: category.master_category_name,
        Status: category.status.charAt(0).toUpperCase() + category.status.slice(1),
    }));

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="category-page">
            <CategoryForm masterCategoryData={masterCategoryData} handleAddCategory={handleAddData} />
            <Table
                headings={headings}
                data={formattedData}
                onEdit={(id) => console.log('Edit functionality not implemented for ID:', id)}
                onDelete={handleDelete}
            />
        </div>
    );
};


export default CategoryPage;
