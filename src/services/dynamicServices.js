import axios from 'axios';

import config from '../config/config';

export const fetchdataService = (endpoint) => axios.get(`${config.baseURL}${endpoint}`);
export const addDataService = (endpoint, data) => axios.post(`${config.baseURL}${endpoint}`, data);
export const updateDataService = (endpoint, data) => axios.put(`${config.baseURL}${endpoint}`, data);
export const deleteDataService = (endpoint, id) => axios.delete(`${config.baseURL}${endpoint}+/${id}`);