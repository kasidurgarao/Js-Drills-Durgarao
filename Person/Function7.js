import { arrayOfObjects } from "./persons.js";

export function person_name_email(){
    // return arrayOfObjects.filter(person => person.age === 25).map(person => ({ name: person.name, email: person.email }))

    return arrayOfObjects.filter(person => person.age === 25).map(person => [person.name,person.email])


}