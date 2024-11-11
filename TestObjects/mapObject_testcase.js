// import { testObject } from "./objects.js";

import { mapobject } from "./mapObject.js";


const items = {lenovo:200,hp:250,dell:100}

function mapping(obj)
{
    for(let key in obj){
        obj[key]+=5;
    }
    return obj;
    
}

console.log(mapobject(items,mapping));