import { useState, useEffect } from 'react';
import { getDataController, addDataController, removeDataController, updateDataController } from '../controllers/dynamicController';

const useData = (fetchApiEndpoint, insertApiEndpoint, updateApiEndpoint, deleteApiEndpoint) => {
    const [fetchedData, setFetchedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data when the component is mounted
    useEffect(() => {
        refreshData();
    }, []);

    // Function to refresh data from the API
    const refreshData = async () => {
        try {
            const response = await getDataController(fetchApiEndpoint);
            setFetchedData(response.data);
            setLoading(false);
        } catch (err) {
            const errorMessage = err.response && err.response.data && err.response.data.error
                ? err.response.data.error
                : 'Failed to fetch data'; // Default error message

            setError(errorMessage);
            setLoading(false);
        }
    };


    // Function to add new data
    const handleAddData = async (data) => {
        try {
            await addDataController(insertApiEndpoint, data);
            refreshData(); // Refresh data after adding
        } catch (err) {
            setError('Failed to add data: ' + err.message);
        }
    };

    // Function to update data
    const handleUpdate = async (id, updatedData) => {
        try {
            await updateDataController(updateApiEndpoint, id, updatedData);
            refreshData(); // Refresh data after updating
        } catch (err) {
            setError('Failed to update data: ' + err.message);
        }
    };

    // Function to delete data
    const handleDelete = async (id) => {
        try {
            await removeDataController(deleteApiEndpoint, id);
            refreshData(); // Refresh data after deleting
        } catch (err) {
            setError('Failed to delete data: ' + err.message);
        }
    };

    return { data: fetchedData, loading, error, handleAddData, handleUpdate, handleDelete };
};

export default useData;
