function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  return x.length; // This will throw an error if x is not an array or string
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(null));      // Output: 0
console.log(foo(undefined)); // Throws TypeError: Cannot read properties of undefined (reading 'length')
console.log(foo(5));         // Throws TypeError: Cannot read properties of 5 (reading 'length')