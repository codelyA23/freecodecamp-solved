/**
 * Filters an array of objects and returns a new array containing
 * only the objects that match all key–value pairs in the source object.
 * If no objects fully match, an empty array is returned.
 */

// source: ⬇️
// https://www.freecodecamp.org/learn/javascript-v9/lab-matching-object-filter/implement-a-matching-object-filter


function whatIsInAName(objects, source){
  const keys = Object.keys(source)
  return objects.filter(obj => keys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]))
}

// tests
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })) // [ { apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 } ]
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}))  // []
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })) //  [{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}]