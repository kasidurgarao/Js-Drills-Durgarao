import { items } from "./arrays.js";

import { filter } from "./filter.js";

let callback=(item)=>{
    if(item%2 === 0){
        return true;
    }
    else return false;
}

console.log(filter(items,callback));