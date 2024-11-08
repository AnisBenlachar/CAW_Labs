const mean = require('./notation');

describe('mean function', () => {
    test('returns the correct mean of a non-empty array', () => {
        expect(mean([1, 2, 3, 4, 5])).toBe(3);
        expect(mean([10, 20, 30])).toBe(20);
    });

    test('returns 0 for an empty array', () => {
        expect(mean([])).toBe(0);
    });

    test('handles an array with one element', () => {
        expect(mean([5])).toBe(5);
    });
});