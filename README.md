# JavaScript TypeError: Cannot read properties of undefined (reading 'length')

This repository demonstrates a common JavaScript error and its solution.  The error occurs when attempting to access the `length` property of a value that is not an array or string (e.g., `undefined`, `null`, or a number).  The provided code shows the error and a robust solution.

## Bug Description
The `foo` function is designed to return the length of an array or string. However, it fails to handle cases where the input is `undefined`, `null`, or a number.  This results in a `TypeError: Cannot read properties of undefined (reading 'length')` or a similar error.

## Solution
The solution adds comprehensive input validation to check for `undefined`, `null`, and other data types before accessing the `length` property.