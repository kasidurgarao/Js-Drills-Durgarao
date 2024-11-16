// import { items } from "./arrays.js";


// export function cb(Element,index){
//     console.log(Element,index);
//     // return Element,index;
// }
export function each(items, cb) {
    // Do NOT use forEach to com,plete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each
    console.log(items)
    for(let i=0;i<items.length;i++){
        
        cb(items[i],i);

    }
  }
//   each(items,cb);