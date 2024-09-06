import { fetchCategories, addCategory, deleteCategory } from '../../services/categoryService';

export const getCategories = async () => {
    return await fetchCategories();
};

export const createCategory = async (data) => {
    return await addCategory(data);
};

export const removeCategory = async (id) => {
    return await deleteCategory(id);
};
