// let a = 10;
// const b = 20;
// var c = 30; // does not work linke scope

// {} carly braces with function , program , if , else  ---> scope

var d = 200; // global scope
let k = 8000;
if (true) {
  // block scope
  let a = 10;
  const b = 20;
  var c = 30;
  var d = 7000;

  let k = 90;
  console.log("k is ", k); // 90
}

// console.log(a); // a is not defined
// console.log(b);  // b is not dfined
console.log(c); // 30
console.log(d); //70000 problem with v

console.log(k); // 8000 will use scoping criteria

// note -------------- inspect scoping (browser) is different  then node js server
