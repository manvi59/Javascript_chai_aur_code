// sigleton --> when we make object like constructor then become sigleton
// Object.create()---> constructor methos  -->s makes singleton

// object literals --> way of declaring object

const sym = Symbol("123");

const obj = {
  name: "manvi",
  age: 22,
  location: "jaipur",
  email: "www.google.com",
  islogin: "yes",
  lastlogindays: ["monday", "saturday"],
  "full name": "load krishna",
  //   wanna use symbole as key and refereing previous symbole then we use symbole
  [sym]: "i am symbole",
};

console.log(obj.lastlogindays); // [ 'monday', 'saturday' ]
console.log(obj["lastlogindays"]); // [ 'monday', 'saturday' ]

// console.log(obj.full name)   can't access using dots
console.log(obj["full name"]);

console.log(obj[sym]); // i am symbole we have to use  this on the square brackets

console.log(obj.sym); // undefined

// update the value

obj.email = "iam@google.com";

console.log(obj.email); // iam@google.com

// lock the value then we use freez

Object.freeze(obj);

obj.email = "pppppppppppp@google.com"; // after freezing the obj can't change the obj key's value
console.log(obj);

// {
//     name: 'manvi',
//     age: 22,
//     location: 'jaipur',
//     email: 'iam@google.com',
//     islogin: 'yes',
//     lastlogindays: [ 'monday', 'saturday' ],
//     'full name': 'load krishna',
//     [Symbol(123)]: 'i am symbole'
//   }

// adding greeting function in obj

const ans = { name: "manviiiii" };
ans.greeting = function () {
  console.log("i am greeting function");
};
console.log(ans); // { greeting: [Function (anonymous)] }
console.log(ans.greeting); // [Function (anonymous)]
console.log(ans.greeting()); // i am greeting function
// undefined

// --------------------this --> used to reference the same obj

ans.fun = () => {
  console.log(`hey i am arrow function and using this operator ${this.name}`);
};

console.log(ans.fun()); // [Function (anonymous)] hey i am arrow function and using this operator undefined
// undefined;
