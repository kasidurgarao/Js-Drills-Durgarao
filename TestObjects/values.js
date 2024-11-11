
export function values(testObject) {
    let object_keys=[];
    for(let usr in testObject)
    {
        object_keys.push(testObject[usr]);
    }
    // console.log(keys);
    return object_keys;
  }
//   keys(testObject);