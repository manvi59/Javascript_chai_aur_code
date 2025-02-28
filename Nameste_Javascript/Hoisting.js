//  hoisting happing becuause of Memory declartaion as a key value pair before exeution of the code in (code excution context)

console.log(a); // undefined
console.log(fun); // [Function: fun]
console.log(hey); // undefined arrow function will treat as a veriable
// console.log(name);  // Cannot access 'name' before initialization
// console.log(k)  //  Cannot access 'k' before initialization

var a = 10;
function fun() {
  console.log("this is a function");
}

// const name = () => {
//   console.log("i am name arrow function");
// };

// let k=10;

//  ----------------------for let and const variable is stored in different block scope script .. before execution that's why we can't access before initlization

var hey = () => {
  console.log("i ma hey arrow function");
};
