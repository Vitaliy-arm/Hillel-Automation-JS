const {sendInvalidUrl} = require('./test_1.js');

test('Return 404 error for invalid URL', async () => {
    const status = await sendInvalidUrl();
    expect(status).toBe(404);
  });