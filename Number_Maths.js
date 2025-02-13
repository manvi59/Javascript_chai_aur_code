const score = 400;

console.log(score); //400

// explicitly defined I want number datatype

const balance = new Number(100);
console.log(balance); //[Number: 100]  key value pair  //by thgis we can find out the all the function inside the prototype

console.log(balance.toString()); // 100
console.log(typeof balance.toString()); //  string

console.log(balance.toFixed(2)); // 100.00 print prision upto two points

const otherNumber = 23.8899;
const otherNumber2 = 123.8899;

console.log(otherNumber.toPrecision(3)); //23.9  //pricise value focusing on three value
console.log(otherNumber2.toPrecision(3)); // 124 preise value focusing on three value

console.log(otherNumber2.toPrecision(4)); // 123.9  focusing on four value precise value

const hunderds = 1000000;
console.log(hunderds.toLocaleString()); // 10,00,000 gives value in comma's using US standereds

console.log(hunderds.toLocaleString("en-IN")); // 10,00,000 convert into the inian standereds

// min , max , safe value in integer

console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

//----------------------------------Maths-----------------------------
 