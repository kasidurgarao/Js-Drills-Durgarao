import { inventory } from "./cars.js";

export function car_years(){
    let year = [];
    for(let i=0;i<inventory.length;i++)
    {
        if (inventory[i].car_year < 2000){
        year.push(inventory[i].car_year);
        }
    }
    // console.log(year);
    return year;
}
// car_years();