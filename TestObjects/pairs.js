
export function pairs(testObject){
    let array = [];
    for(let key in testObject){
        array.push([key,testObject[key]]);
    }
    return array;
}
// console.log(pairs());