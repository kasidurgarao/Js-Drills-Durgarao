import { inventory } from "./cars.js";

export function OnlyBMWAUDI(){
    let car_bm_au = [];

    for(let usr in inventory){
        console.log(usr);
        if (inventory[usr].car_make.includes("BMW") || inventory[usr].car_make.includes("Audi"))
        {
            car_bm_au.push(inventory[usr].car_make)
        }
    }
    // console.log(JSON.stringify(car_bm_au));
    return car_bm_au;
}

// OnlyBMWAUDI();