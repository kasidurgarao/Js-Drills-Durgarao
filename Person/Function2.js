import { arrayOfObjects } from "./persons.js";

export function personhobbies (){
    return arrayOfObjects .filter(person => person.age === 30).map(person => person.hobbies);
}
// personhobbies();