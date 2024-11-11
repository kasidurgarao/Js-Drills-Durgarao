export function flatten(elements) {
    return elements.reduce((flat, item) => 
      Array.isArray(item) ? flat.concat(flatten(item)) : flat.concat(item)
    , []);
  }