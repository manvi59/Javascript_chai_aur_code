//  javascript ---> prototype language not clases bases

// OOP --> object oriented programing is a paradram to write a code

// why use OOP--> for acheiving manvy feature

// javscript is a prototyped based language not use OOP
// but in ES6 there is feature interduced but in the end it convert into the prototype

// parts of OOP
// --- object literal {}
// -- constructure function
// --Classes
// --Innstances (new , this )

// 4 pillers of javscript
// -- Abstraction : hiding the functionality (Egg... fetach API)
// --Encapsulation : work as a wraper  capusule
// -- Instances :take the property from parents to child
// --Polymorphism : one function have many form , can use many type  Eg.. console.log()

// -------------------object literal (basic unit)

const user = {
  username: "manvi",
  loginCount: 8,
  signedIn: true,
  getUserDetails: () => {
    console.log(`heyyyy ${this.username}`);
    return "got user detail from database";
  }, // here this will not work because arrow function does not have this

  name: function () {
    console.log(`${this.username}`);
  },
};

console.log(user);

console.log(user.getUserDetails()); // got user detail from database
console.log(user.username); // manvi

// on browser this is window obj

console.log(this); // {}

// --------------------constructure function => for the  user 2 making there is agin need of repeting code that's why constructure came

// new --constructure function ----------we can create multiple instance from  one object

function createObjecty(name, like, work) {
  this.name = name;
  this.like = like;
  this.work = work;
  return this;
}

// new keyword is compluseray to craete new instance , otherwise it will override one instance data to one instance data

const one = new createObjecty("manvi", "nature", "softeare Enginner");
console.log("\n", one);

// createObjecty {
//   name: 'manvi',
//   like: 'nature',
//   work: 'softeare Enginner'
// }

{
  /* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  name: 'manvi',
  like: 'nature',
  work: 'softeare Enginner'
} */
}

const two = new createObjecty("god Krishna", "makhan", "run world infinity");
console.log(two);

// createObjecty {
//   name: 'god Krishna',
//   like: 'makhan',
//   work: 'run world infinity'
// }
