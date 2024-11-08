// exo2.test.js
const { first, last, joinStrings, chunk } = require('./exo2'); // Import your functions from exo2.js

describe('Array and String manipulation functions', () => {
    
    // Test for 'first' function
    test('first() should return the first n elements of an array', () => {
        expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
        expect(first([10, 20, 30], 2)).toEqual([10, 20]);
        expect(first([1, 2, 3], 0)).toEqual([]);
        expect(first([1, 2, 3], -1)).toEqual([]);
        expect(first([1, 2, 3])).toBe(1);  // When n is not provided, return the first element
    });

    // Test for 'last' function
    test('last() should return the last n elements of an array', () => {
        expect(last([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
        expect(last([10, 20, 30], 1)).toEqual([30]);
        expect(last([1, 2, 3], 0)).toEqual([]);
        expect(last([1, 2, 3])).toBe(3);  // When n is not provided, return the last element
    });

    // Test for 'joinStrings' function
    test('joinStrings() should concatenate all elements of an array into a string', () => {
        const myColor = ["Red", "Green", "White", "Black"];
        expect(joinStrings(myColor)).toBe('RedGreenWhiteBlack');
    });

    // Test for 'chunk' function
    test('chunk() should divide an array into sub-arrays of predefined size', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
        expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
        expect(chunk([1, 2, 3, 4], 4)).toEqual([[1, 2, 3, 4]]);
        expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
    });
});
