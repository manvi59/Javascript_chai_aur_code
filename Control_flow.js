if (2 == "2") {
  console.log("hey executed");
} // executed

// explict scope --without curly braches and multiple lines

if (true) console.log("hii"), console.log("hello");
// hii
// hello

// if(true){

// }else if(true){

// } else{

// }

// falsy values ------->

// false , 0 , -0 , BigInt , 0n ,"" , null , undefined , NaN

// truety values-------->
// "0" ,"false" ,"" ,[] ,{} , function(){}  empty function , array , object is truty values

const obj = {};
const arr = [];
if (obj && arr) {
  console.log("obj is empty and arr is also empty both are truty values "); // will print this line
}

console.log(false == 0); // true
console.log(false == ""); // true
console.log(0 == ""); // true

// nullish coalescing operator (??) : null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1); // 5

val1 = null ?? 500;
console.log(val1); // 500)

console.log(undefined ?? "hhhhhhhh"); // hhhhhhhh

value = null ?? 200 ?? 300;

console.log(value); // 200 will assign only the first value

// ternary operator

// condition ? true: false

30 > 20 ? console.log("30 is greater than 30 ") : console.log("less than ");  // 30 is greater than 20
