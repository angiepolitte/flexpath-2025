const { toUpperCase, toLowerCase } = require("./stringUtils.cjs");

const upper = toUpperCase("hello");
const lower = toLowerCase("WORLD");

console.log(upper); // Output: HELLO
console.log(lower); // Output: world
