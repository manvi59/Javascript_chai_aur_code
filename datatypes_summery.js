// how data is stored in memory there are two data types

// 1. primiitive -->
//    string
//    number
//    boolean
//    null
//    undefined
//    symbole--unique
//    BigInt

// 2. non prmimitive /reference type
//     arrays
//     Objects
//     functions

// is javscript dynamically type or static type

// javascript is dynamically type no need to difined the data types

// const scrore =100  //number
// const numm=89.900  //number
// const islogin=false //bool
// const temp=null; //null
// const new; //undefined

// symbole defiend unqually

const id = Symbol("123");
const anotherID = Symbol("123");

console.log(id === anotherID); //false
console.log(id == anotherID); //false

console.log(Symbol("123")); //Symbol(123)
console.log(typeof Symbol("123")); //symbole

const BigInt = 1111111111111111111111111111111111n; //we put n at the last
console.log(typeof BigInt); //bigint

const arr = ["1", 2, "manvi", "n", 1.23];
const obj = {
  name: "manvi",
  love: "nature",
  id: 1,
};

console.log(arr);
console.log(obj);

const funVar = () => {
  console.log("hey I am also reference datatype");
};

console.log(typeof arr); //obj
console.log(typeof obj); //obj
console.log(typeof funVar); //function
