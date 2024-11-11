// import { nestedArray } from "./flatten.js";
import { flatten } from "./flatten.js";

export const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

console.log(flatten(nestedArray))