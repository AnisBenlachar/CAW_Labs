// 1. The first n elements of an array
function first(array, n) {
    if (array == null || n <= 0) return [];
    if (n == null) return array[0];
    return array.slice(0, n);
}

// 2. The last n elements of an array
function last(array, n) {
    if (array == null) return [];
    if (n == null) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}

// 3. String = the concatenation of all the elements of an array of Strings
function joinStrings(array) {
    return array.join('');  // Concatenate all elements without spaces
}

// 4. Divide an array into several sub-arrays of predefined size
function chunk(array, size) {
    let chunkedArr = [];
    let index = 0;
    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index += size;
    }
    return chunkedArr;
}
module.exports = { first, last, joinStrings, chunk };