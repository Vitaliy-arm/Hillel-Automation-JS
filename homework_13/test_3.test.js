const axios = require('axios');
jest.mock('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

  test('Get with change data', async () => {

    const newData = {data: 'New'};
    axios.get.mockResolvedValue(newData);

    const response = await axios.get(`${BASE_URL}/posts/1`);
    expect(response.data).toBe(newData.data);
    console.log(response.data);
  });

  test('Get with status 404', async () => {

    const newStatus = {status: 404};
    axios.get.mockResolvedValue(newStatus);

    const response = await axios.get(`${BASE_URL}/posts/1`);
    expect(response.status).toBe(newStatus.status);
    console.log(response.status);
  });