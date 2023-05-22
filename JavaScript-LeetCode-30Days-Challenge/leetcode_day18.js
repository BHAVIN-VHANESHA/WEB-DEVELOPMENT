// Given an object, return a valid JSON string of that object. 
//You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. 
//The order of keys should be the same as the order returned by Object.keys().

// Please solve it without using the built-in JSON.stringify method.



/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    if (object === null) {
    return 'null';
  }

  if (typeof object === 'boolean' || typeof object === 'number') {
    return object.toString();
  }

  if (typeof object === 'string') {
    return '"' + object.replace(/"/g, '\\"') + '"';
  }

  if (Array.isArray(object)) {
    const elements = object.map(jsonStringify);
    return '[' + elements.join(',') + ']';
  }

  if (typeof object === 'object') {
    const keys = Object.keys(object);
    const pairs = keys.map(function(key) {
      const value = jsonStringify(object[key]);
      return '"' + key + '":' + value;
    });
    return '{' + pairs.join(',') + '}';
  }

  return '';
};