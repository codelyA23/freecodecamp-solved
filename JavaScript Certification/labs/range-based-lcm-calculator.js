/*
 * Takes an array of two numbers and calculates the least common multiple (LCM)
 * of those numbers and every integer within the range between them.
 * The function works even if the numbers are given out of order.
 */

function gdc(a, b){
  while (b !== 0){
    const temp = b
    b = a % b
    a = temp
  }
  return a  
}

function lcm(a, b){
  return (a * b) / gdc(a, b)
}


function smallestCommons(nums){
  nums.sort((a, b) => a -b)
  const completeArray = []
  for(let i = nums[0]; i <= nums[1]; i++){
    completeArray.push(i)
  }
  let result = nums[0]
  for(let i =nums[0]+1; i<=nums[1]; i++){
    result = lcm(result, i)
  }
  return result
}

console.log(smallestCommons([23, 18]))
console.log(smallestCommons([1, 13]))  // 360360
console.log(smallestCommons([2, 10]))  // 2520