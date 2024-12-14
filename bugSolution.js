function foo(x) {
  if (x === null || x === undefined || typeof x !== 'object' && typeof x !== 'string') {
    return 0; // Handle null, undefined, and non-objects/strings
  }
  return x.length; 
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(null));      // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(5));         // Output: 0
console.log(foo('hello'));    // Output: 5