// flatmap in javascript

const hiro = ["spider", "iron", "army", "camando"];
const dc = ["superman", "flash", "batman"];

hiro.push(dc);

console.log(hiro);
//  [
//     'spider',
//     'iron',
//     'army',
//     'camando',
//     [ 'superman', 'flash', 'batman' ]
//   ]

// array inside the array pushed

console.log(hiro[4][1]); // flash

let a = ["a", "b", "c"];
let b = ["p", "q", "r"];

ans = a.concat(b); // concat returen the new combined array
console.log(a); // [ 'a', 'b', 'c' ]  does not effect in original array .
console.log(ans); // [ 'a', 'b', 'c', 'p', 'q', 'r' ]

// spread operatore // glass of water the we drop then it will be spread

const aa = [1, 2, 3];
const bb = [11, 22, 23];
const newArr = [...aa, ...bb];
console.group("heyyyyyyyyyyyyy", newArr); // [ 1, 2, 3, 11, 22, 23 ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // it will go into the depth and will flat all ele  into the single array

console.log(real_another_array);

// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

console.log(Array.isArray("hitesh")); //false
console.log(Array.from("hitesh")); // [ 'h', 'i', 't', 'e', 's', 'h' ] convert into the array

console.log(Array.from({ name: "manvi" })); //  []  empty array if not bale to convert  =-----------make array using keys
 
// ------------convert into arary

let score1 = 1000;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 1000, 200, 300 ]
