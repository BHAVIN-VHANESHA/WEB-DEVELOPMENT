//Given an integer n, return a counter function. 
//This counter function initially returns n and then 
//returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).



//solution
function makeCounter(n) {
    let count = n;
    return function() {
      const result = count;
      count += 1;
      return result;
    };
  } 