


export function defaults(testObject,def_argument){
    for(let def_key in def_argument){
        if(testObject[def_key] === undefined){
            testObject[def_key]=def_argument[def_key]
        }
    }
    return testObject;
}

// console.log()