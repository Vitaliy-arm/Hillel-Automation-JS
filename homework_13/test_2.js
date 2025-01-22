const axios = require('axios');
const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function fetchDataWithHeaders(params, headers) {
    try {
        const response = await axios.get(`${BASE_URL}/users`, {
            params,
            headers,
        });
        return response;
    } catch (error) {
        console.error('Request failed:', error.message);
        throw error;
    }
}


module.exports = {fetchDataWithHeaders};