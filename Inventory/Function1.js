import { inventory } from "./cars.js";

export function get_car_33()
{
    // let usr={};
    let usr = inventory.filter(car_id => car_id.id === 33);
    // console.log(usr);
    return usr
}
// get_car_33();