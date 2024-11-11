import { items } from "./arrays.js";

export function cb(elements,start)
{
    for(let i=1;i<elements.length;i++){
        start+=elements[i];
    }
    return start
}

export function reduce(elements, cb, startingValue) {
    // Do NOT use .reduce to complete this function.
    // How reduce works: A reduce function combines all elements into a single value going from left to right.
    // Elements will be passed one by one into `cb` along with the `startingValue`.
    // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
    // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
    if (typeof startingValue === 'undefined'){
        startingValue=elements[0];
    }
    let sum;
    sum = cb(elements,startingValue);
    // console.log(sum);
    return sum;
  }

//   reduce(items,cb,0);