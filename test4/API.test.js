const axios = require('axios');

// Function to make an API request
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        return response.data;
    } catch (error) {
        throw error;
    }
}

// Test cases
describe('API Tests', () => {
    test('Fetch data from an API', async () => {
        const data = await fetchData();
        expect(data.userId).toBe(1); // Replace with your expected result
    });
});