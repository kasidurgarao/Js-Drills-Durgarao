import { users } from "./users.js";

export function master_degree(degree){
    // let master_deg = {};
    let master_deg = []
    for ( const usr in users){
        if ( users[usr].qualification && users[usr].qualification === degree){
            master_deg.push(users[usr]);
            // master_deg.name = usr;
        }
    }
    return master_deg;
}