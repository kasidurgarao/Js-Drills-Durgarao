import { arrayOfObjects } from "./persons.js";

export function person_city_coun(){
    let person_data = []
    for(let i=0;i<arrayOfObjects.length;i++)
    {
        person_data.push([arrayOfObjects[i].city,arrayOfObjects[i].country]);
    }
    return person_data;
}