import { items } from "./arrays.js";

// function cb(element,val){
//     if (element === val){
//         return true;
//     }
//     else return false;
// }

export function find(elements, cb,val) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.

    // let val = 10;
    for(let i=0;i<elements.length;i++){
        if(cb(elements[i],val))
        {
            return elements[i]
        }
    }
    return "undefined";
  }

//   console.log(find(items,cb,5));