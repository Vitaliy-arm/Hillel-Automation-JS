
const {fetchDataWithHeaders} = require('./test_2.js');

test(`Get user with ID = 2`, async () => {
    const params = {id: 2};
    const headers = {'Custom-Header': 'TestValue'};

    const response = await fetchDataWithHeaders(params, headers);

    expect(response.status).toBe(200);

    const user = response.data[0]; //Берем первый объект из массива

    expect(user.id).toBeDefined();
    expect(user.name).toBeDefined();
    expect(user.email).toBeDefined();

    console.log('Response headers:', response.config.headers);
});