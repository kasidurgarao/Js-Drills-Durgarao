


export function invert(testObject){

    let new_object = {}
    for(let key in testObject){
        new_object[testObject[key]]=JSON.stringify(key);
    }
    return new_object;
}