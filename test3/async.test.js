const fetchData = require('./script');

test('fetchData resolves to "Data from API"', async () => {
    const result = await fetchData();
    expect(result).toBe('Data from API');
});