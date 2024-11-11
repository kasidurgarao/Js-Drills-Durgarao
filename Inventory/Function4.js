import { inventory } from "./cars.js";

export function car_years(){
    let year = [];
    for(let i=0;i<inventory.length;i++)
    {
        year.push(inventory[i].car_year);
    }
    // console.log(year);
    return year;
}
// car_years();