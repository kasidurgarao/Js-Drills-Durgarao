import { items } from "./arrays.js";

import { find } from "./find.js";

let callback=(item,val) => {
    if(item === val){
        return true;
    }
    else{
        return false;
    }
};

console.log(find(items,callback,3));


