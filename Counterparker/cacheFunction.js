export function cacheFunction(cb){
    let cache_obj ={}
    return function invoke(...args){
        const key = JSON.stringify(args)
        console.log(key)
        if(cache_obj[key] !== undefined){
            console.log("get cached one")
            return cache_obj[key]
        }
        let result= cb(...args)
        cache_obj[key] = result; 
        return cache_obj
    }
}