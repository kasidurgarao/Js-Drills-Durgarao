// import { items } from "./arrays.js";


export function cb(num){
    return num*2;
}
export function map(elements, cb) {
    // Do NOT use .map, to complete this function.
    // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
    // Return the new array.
    let mul_two = [];
    for (let i=0;i<elements.length;i++){
            mul_two.push(cb(elements[i]));
    }
    return mul_two;
  }
// console.log(map(items,cb));