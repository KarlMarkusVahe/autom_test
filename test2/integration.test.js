const moduleA = require('./moduleA');
const moduleB = require('./moduleB');

// Mock moduleB to control its behavior during the test
jest.mock('./moduleB', () => ({
    getData: jest.fn(() => 'Mocked data from moduleB'),
}));

describe('Integration Tests', () => {
    it('should integrate moduleA and moduleB correctly', () => {
        const result = moduleA.doSomethingWithModuleB();

        // Verify that moduleB.getData() was called
        expect(moduleB.getData).toHaveBeenCalled();

        // Assert the result based on the mocked behavior
        expect(result).toEqual('Mocked data from moduleB');
    });
});