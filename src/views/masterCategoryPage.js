import React from 'react';
import useData from '../hooks/dynamicCrud';
import MasterCategoryForm from '../components/masterCategoryForm/masterCategoryForm';
import Table from '../components/Table/Table';

const MasterCategoryPage = () => {
    const { data: fetchedData, loading, error, handleAddData, handleUpdate, handleDelete } = useData(
        'product/mastercategory',         // Fetch categories
        'product/newmastercategory',      // Add new category
        'product/updatecategory',   // Update category
        'product/deletecategory'    // Delete category
    );

    const headings = ['Category Name', 'Description', 'Status'];

    // Format the fetched data for displaying in the table
    const formattedData = fetchedData.map(category => ({
        id: category.id,
        'Category Name': category.master_category_name,
        Description: category.master_category_description,
        Status: category.status.charAt(0).toUpperCase() + category.status.slice(1),
    }));

    if (loading) return <div>Loading...</div>;
    // if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="category-page">
            <MasterCategoryForm handleAddCategory={handleAddData} />
            <Table
                headings={headings}
                data={formattedData}
                onEdit={(id) => console.log('Edit functionality not implemented for ID:', id)}
                onDelete={handleDelete}
            />
            {error && (<div className="error-message">{error}</div>)}
        </div>
    );
};

export default MasterCategoryPage;
