const sum = require('./unit');

// Describe the test suite
describe('sum function', () => {
    // Test case 1: Check if 1 + 2 equals 3
    it('should add 1 + 2 and return 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    // Test case 2: Check if -1 + 1 equals 0
    it('should add -1 + 1 and return 0', () => {
        expect(sum(-1, 1)).toBe(0);
    });

    // Test case 3: Check if 0 + 0 equals 0
    it('should add 0 + 0 and return 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    // Test case 4: Check if it handles negative numbers correctly
    it('should handle negative numbers correctly', () => {
        expect(sum(-5, -3)).toBe(-8);
    });
});