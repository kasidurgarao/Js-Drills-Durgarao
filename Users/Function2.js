import { users } from "./users.js";

export function person_germany(){
    let county = [];
    for(let usr in users){
        if( users[usr].nationality && users[usr].nationality === 'Germany'){
            county.push(users[usr]);
        }
    }
    return county;
}