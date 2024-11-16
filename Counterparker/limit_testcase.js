import { limitcount } from "./limitfunctioncallcount.js";

let result = limitcount((cb)=>{
    return "banglore";
},5);

console.log(result);
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());