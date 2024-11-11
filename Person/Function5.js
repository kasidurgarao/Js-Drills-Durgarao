import { arrayOfObjects } from "./persons.js";

export function persons_age(){
    let personage = []
    // return arrayOfObjects.map(person => person.age);
    for (let i =0; i<arrayOfObjects.length;i++)
    {
        personage.push(arrayOfObjects[i].age);
    }
    return personage;
}