import { arrayOfObjects } from "./persons.js";
//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

export function personemail(){
    return arrayOfObjects.map(person => person.email);
};
