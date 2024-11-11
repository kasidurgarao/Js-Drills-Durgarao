import { arrayOfObjects } from "./persons.js";

export function person_name_city(index_no){
    let person = arrayOfObjects[index_no];
    return `city : ${person.city} name : ${person.name}`;
}