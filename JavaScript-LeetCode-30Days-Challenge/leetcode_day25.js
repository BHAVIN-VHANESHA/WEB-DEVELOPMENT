// Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.




/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    // Check for null, undefined, or invalid classFunction
    if (obj === null || obj === undefined || typeof classFunction !== "function") {
      return false;
    }
  
    let inputObj = obj;
    // If obj is not an object, wrap it in an object using Object() constructor
    if (typeof obj !== "object") {
      inputObj = Object(obj); // Make sure it's an object so instanceof has direct access to the constructor function
    }
    return inputObj instanceof classFunction;
  };
  
  
  /**
   * checkIfInstanceOf(new Date(), Date); // true
   */