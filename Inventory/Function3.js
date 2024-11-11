import { inventory } from "./cars.js";

export function Alpa_sort()
{
    let asce = inventory.sort(function(a,b){
        let x=a.car_model.toLowerCase();
        let y=b.car_model.toLowerCase();
        if (x<y){
            return -1;
        }
        else if(x>y){
            return 1;
        }
        // return a.car_year-b.car_year;
    });
    // console.log(asce.reverse())
    return asce;
}
// Alpa_sort();