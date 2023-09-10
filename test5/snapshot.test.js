const add = require('./myFunction');

test('adds two numbers correctly', () => {
    const result = add(6, 1);

    // Use toMatchSnapshot to create or update a snapshot
    expect(result).toMatchSnapshot();
});