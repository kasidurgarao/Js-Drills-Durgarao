import { users } from "./users.js";

export function user_videogames(){
    let games = []
    for(let usr in users){
        if(users[usr].interests && users[usr].interests.includes('Video Games')){
            games.push(usr);
        }
    }
    return games;
}
    