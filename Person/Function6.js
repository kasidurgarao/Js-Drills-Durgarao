import { arrayOfObjects } from "./persons.js";

export function person_fir_hobbie(){
    return arrayOfObjects.map(person => person.hobbies[0]);
}