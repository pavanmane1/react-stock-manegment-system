import { fetchdataService, addDataService, deleteDataService, updateDataService } from '../services/dynamicServices';

export const getDataController = async (endpoint) => {
   
    return await fetchdataService(endpoint);

};

export const addDataController = async (endpoint, data) => {
    return await addDataService(endpoint, data);
};

export const removeDataController = async (endpoint, id) => {
    return await deleteDataService(endpoint, id);
};
export const updateDataController = async (endpoint, id) => {
    return await updateDataService(endpoint, id);
};