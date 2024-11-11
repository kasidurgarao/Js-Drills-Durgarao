import { inventory } from "./cars.js";

export function Get_last_car(){
    let len = inventory.length;
    let last=inventory.at(len-1);
    // console.log(last);
    return last;
}
// Get_last_car();