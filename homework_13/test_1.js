const axios = require('axios');

async function sendInvalidUrl() {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/invalid-url');
  } catch (error) {
    return error.response ? error.response.status : error.message;
  }
}

module.exports = {sendInvalidUrl};