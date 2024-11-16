import { items } from "./arrays.js";

import { each } from "./each.js";
// import { cb } from "./each.js";

let callback = (value,index) =>(
    console.log(value,index));

each(items,(value,index) =>(
    console.log(value,index)));