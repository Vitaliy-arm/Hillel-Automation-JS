const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';


test('Get list all users', async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  expect(response.status).toBe(200);
  console.log(response.status);
  for(let i = 0; i < response.data.length; i++){
    expect(response.data[i].id).toBeDefined();
    expect(response.data[i].name).toBeDefined();
    expect(response.data[i].email).toBeDefined();
    expect(response.data[i].address).toBeDefined();
    expect(response.data[i].phone).toBeDefined();
    expect(response.data[i].website).toBeDefined();
    expect(response.data[i].company).toBeDefined();
    console.log(`Get users - ${response.status},
      ${JSON.stringify(response.data[i], null, 2)}`);
  }
});

test('Get user with ID = 1', async () => {
    const response = await axios.get(`${BASE_URL}/users/1`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBeDefined();
    expect(response.data.name).toBeDefined();
    expect(response.data.email).toBeDefined();
    expect(response.data.address).toBeDefined();
    expect(response.data.phone).toBeDefined();
    expect(response.data.website).toBeDefined();
    expect(response.data.company).toBeDefined();
    console.log(`Get user with ID = 1' - ${response.status},
      ${JSON.stringify(response.data, null, 2)}`);
  });

  test('Get post with ID = 1', async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);
    expect(response.status).toBe(200);
    expect(response.data.id).toBeDefined();
    expect(response.data.userId).toBeDefined();
    expect(response.data.title).toBeDefined();
    expect(response.data.body).toBeDefined();
    console.log(`Get post with ID = 1 - ${response.status},
      ${JSON.stringify(response.data, null, 2)}`);
  });

    test('Create new post', async () => {
    const response = await axios.post(`${BASE_URL}/posts`,
      {
          title: 'Test_post',
          body: 'some body',
          userId: 4354
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    );
    expect(response.status).toBe(201);
    expect(response.data.id).toBeDefined();
    expect(response.data.userId).toBeDefined();
    expect(response.data.title).toBeDefined();
    expect(response.data.body).toBeDefined();
    console.log(`Create new post - ${response.status},
      ${JSON.stringify(response.data, null, 2)}`
    );
  });

  test('Create new user', async () => {
    const response = await axios.post(`${BASE_URL}/users`,
      {
        name: 'Yana Graham',
        username: 'red_fox',
        email: 'redfox@test.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'New York',
          zipcode: '92998-3874',
          geo: { lat: '-37.3159', lng: '81.1496' }
        },
        phone: '1-770-736-8031 x56442',
        website: 'somewebsite.org',
        company: {
          name: 'Sweet Fox',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
    );
    expect(response.status).toBe(201);
    expect(response.data.id).toBeDefined();
    expect(response.data.name).toBeDefined();
    expect(response.data.username).toBeDefined();
    expect(response.data.email).toBeDefined();
    expect(response.data.address).toBeDefined();
    expect(response.data.phone).toBeDefined();
    expect(response.data.website).toBeDefined();
    expect(response.data.company).toBeDefined();
    console.log(`Create new user - ${response.status},
      ${JSON.stringify(response.data, null, 2)}`
    );
  });