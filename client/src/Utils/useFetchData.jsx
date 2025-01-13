import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetchData = (endpoint, { method = 'GET', data = null, ...options } = {}) => {
    const [loading, setLoading] = useState(true);
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(false);

    const baseURL = 'http://localhost:5000/api';

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios({
                    url: `${baseURL}${endpoint}`,
                    method,
                    data,
                    withCredentials: true,
                    ...options,
                });
                setResponseData(response.data);
                setError(false);
            } catch (err) {
                console.error('API Error:', err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, method, data, options]);

    return [loading, responseData, error];
};

export default useFetchData;
