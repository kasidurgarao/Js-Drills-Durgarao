
export function limitcount(cb,n){
    let counter = 0;
    return  function invoke_callback()
    {
        
        if(counter<n){
            counter++;
            return cb();
            // return counter;
        }
        else{
            return 'null';
        }
    }
    // invoke_callback();
}



