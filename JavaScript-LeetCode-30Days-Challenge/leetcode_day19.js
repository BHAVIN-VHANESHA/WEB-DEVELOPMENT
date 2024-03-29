// Write a function that converts an array of objects arr into a matrix m.

// arr is an array of objects or arrays. Each item in the array can be deeply nested with child arrays and child objects. It can also contain numbers, strings, booleans, and null values.

// The first row m should be the column names. If there is no nesting, the column names are the unique keys within the objects. If there is nesting, the column names are the respective paths in the object separated by ".".

// Each of the remaining rows corresponds to an object in arr. Each value in the matrix corresponds to a value in an object. If a given object doesn't contain a value for a given column, the cell should contain an empty string "".

// The colums in the matrix should be in lexographically ascending order.



/**
 * @param {Array} arr - Array of objects
 * @return {Matrix} - Matrix representation of the input array
 */
function jsonToMatrix(arr) {
    // Function to flatten an object recursively
    const flattenObject = (obj, prefix = "") => {
      let result = {};
  
      // Iterate over object properties
      for (let key in obj) {
        let value = obj[key];
  
        // If value is an object, recursively flatten it
        if (typeof value === "object" && value !== null) {
          let flattened = flattenObject(value, prefix + key + ".");
          result = { ...result, ...flattened }; // Merge flattened object into the result
        }
        // Otherwise, add the value to the result object with the prefixed key
        else {
          result[prefix + key] = value;
        }
      }
  
      return result;
    };
  
    // Flatten each object in the input array
    let flattenedArr = arr.map(obj => flattenObject(obj));
  
    // Collect all unique keys/columns from the flattened objects
    let columnSet = new Set();
    flattenedArr.forEach(obj => {
      Object.keys(obj).forEach(key => columnSet.add(key));
    });
  
    // Sort the columns in lexographically ascending order
    let columns = Array.from(columnSet).sort();
  
    // Initialize the matrix with the column names as the first row
    let matrix = [columns];
  
    // Populate the matrix with values from the flattened objects
    flattenedArr.forEach(obj => {
      // Create a row by mapping the columns and retrieving the corresponding value from the object
      let row = columns.map(key => (obj[key] !== undefined ? obj[key] : ""));
  
      // Add the row to the matrix
      matrix.push(row);
    });
  
    return matrix; // Return the resulting matrix
  }