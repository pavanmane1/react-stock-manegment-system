import axios from 'axios';

const API_URL = 'http://192.168.1.45:8081/api/product/';

export const fetchCategories = () => axios.get(`${API_URL}category`);
export const addCategory = (data) => axios.post(`${API_URL}newcategory`, data);
export const deleteCategory = (id) => axios.delete(`${API_URL}category/${id}`);
