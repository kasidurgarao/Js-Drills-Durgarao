import { arrayOfObjects } from "./persons.js";

export function personname(){
    return arrayOfObjects.filter(person => ((person.country === 'Australia') && (person.isStudent)) === true);
}