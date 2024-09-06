import axios from 'axios';

const API_URL = 'http://192.168.1.45:8081/api/product/';

export const fetchMasterCategories = () => axios.get(`${API_URL}mastercategory`);
export const addMasterCategory = (data) => axios.post(`${API_URL}newmastercategory`, data);
export const deleteMasterCategory = (id) => axios.delete(`${API_URL}mastercategory/${id}`);
