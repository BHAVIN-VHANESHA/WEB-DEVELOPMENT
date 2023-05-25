// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.


/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    if (!Array.isArray(arr)) {
   throw new Error('Input is not an array');
 }

 if (size <= 0) {
   throw new Error('Chunk size should be greater than zero');
 }

 const chunkedArray = [];
 let index = 0;

 while (index < arr.length) {
   chunkedArray.push(arr.slice(index, index + size));
   index += size;
 }

 return chunkedArray;
};