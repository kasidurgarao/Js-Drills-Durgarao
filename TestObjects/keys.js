
export function keys(testObject) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
    let object_keys=[];
    for(let usr in testObject)
    {
        object_keys.push(usr);
    }
    // console.log(keys);
    return object_keys;
  }
//   keys(testObject);