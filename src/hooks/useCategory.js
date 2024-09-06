import { useState, useEffect } from 'react';
import { getCategories, createCategory, removeCategory } from '../controllers/categoryController/categoryController';

const useCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((res) => setCategories(res.data))
            .catch((err) => console.error(err));
    }, []);

    const handleAddCategory = async (data) => {
        await createCategory(data);
        getCategories()
            .then((res) => setCategories(res.data))
            .catch((err) => console.error(err));
    };

    const handleDeleteCategory = async (id) => {
        await removeCategory(id);
        getCategories()
            .then((res) => setCategories(res.data))
            .catch((err) => console.error(err));
    };

    return { categories, handleAddCategory, handleDeleteCategory };
};

export default useCategory;
