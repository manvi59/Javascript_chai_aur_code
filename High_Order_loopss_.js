// -------------------------------for of loops-----------------------

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
  console.log(i); // 1 2 3 4 5
}

console.log("\n");
const str = "greetings";

for (const k of str) {
  console.log(k);
}

// g
// r
// e
// e
// t
// i
// n
// g
// s

// ========================Maps --object contains key value pair
// MAps --------contains only unique value

const map = new Map();
map.set("IN", "India");
map.set("USA", "united state of America");
map.set("IN", "India");
console.log(map);
// Map(2) { 'IN' => 'India', 'USA' => 'united state of America' }

for (const m of map) {
  console.log(m);
}
// [ 'IN', 'India' ]
// [ 'USA', 'united state of America' ]

for (const [key, value] of map) {
  console.log(key, " ---", value);
}
// IN  --- India
// USA  --- united state of America

// -------------------------- for of with obj

const obj = {
  name: "manvi",
  class: 1,
};

// for (let [key, value] of obj) {
//   console.log(key, "    ", value);
// }
//  this obj is not iteratable using for of loop

for (const key in obj) {
  console.log(key, "       ", obj[key]);
}
// name         manvi
// class         1

const programming = ["js", "reactjs", "nextjs", "plsss"];

for (const key in programming) {
  console.log(key, programming[key]);
}
// 0 js
// 1 reactjs
// 2 nextjs
// 3 plsss

//-----------------------DIFFERENCE BETWEEN FOR IN OR FOR OF LOOP IS THAT FOR IN LOOP PROVIDES KEY AS A INDEX AND OBJ[KEY]  AS VALUE WHILE
//  FOR OF LOOP PROVIDES ONLY VALUE WITHOUT INDEX AND KEY

//------------------FOREACH  LOOP-- high oredr function ask callback function means (function inside the function)

const k = ["a", "b ", "c", "d"];

k.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// a 0 [ 'a', 'b ', 'c', 'd' ]
// b  1 [ 'a', 'b ', 'c', 'd' ]
// c 2 [ 'a', 'b ', 'c', 'd' ]
// d 3 [ 'a', 'b ', 'c', 'd' ]

const myCoding = [
  {
    name: "javascript",
    file: "js",
  },
  {
    name: "reactjs",
    file: "jsx",
  },
  {
    name: "python",
    file: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.name);
});

// javascript
// reactjs
// python
