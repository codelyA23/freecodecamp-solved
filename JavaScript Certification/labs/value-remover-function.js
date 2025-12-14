/*
 * Takes an array and one or more values, then returns a new array
 * with all elements removed that match any of the given values.
 * The function accepts a variable number of arguments.
 */

// source: ⬇️
// https://www.freecodecamp.org/learn/javascript-v9/lab-value-remover-function/implement-a-value-remover-function

function destroyer(arr, ...elementsToRemove){
  const newArr = arr.filter(current => !elementsToRemove.includes(current)) 
  return newArr
}

// tests
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) // [ 1, 1 ]
console.log(destroyer([2, 3, 2, 3], 2, 3))  // []
console.log(destroyer(["tree", "hamburger", 53], "tree", 53))  // [ 'hamburger' ]