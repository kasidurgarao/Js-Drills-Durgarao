import { cacheFunction } from "./cacheFunction.js"
function add(a,b){
    return a+b
}


let get_result = cacheFunction(add)

console.log(get_result(1,2))
console.log(get_result(1,3))
console.log(get_result(1,2))