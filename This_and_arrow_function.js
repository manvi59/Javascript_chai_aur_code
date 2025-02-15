const obj = {
  username: "manvi",
  price: 99999,
  wrlcomeMessage: function () {
    // this will refer to the current context
    console.log(`welcome to , ${this.username}`);
    console.log("hey i ma this ", this);
    // {
    //     username: 'same',
    //     price: 99999,
    //     wrlcomeMessage: [Function: wrlcomeMessage]
    //   }  this will print obj
  },
};

console.log(obj.wrlcomeMessage()); // welcome to , manvi
console.log(obj.wrlcomeMessage); // [Function: wrlcomeMessage]

obj.username = "same";
console.log(obj.wrlcomeMessage()); // welcome to , same

console.log(this); // {}  now this will refer to global scope which is empty obj .
//  while in inspect (browser) this will refer to the window  object

function chai() {
  const name = "hitesh";
  console.log(this); // multiple value are printing within object
  console.log(this.name); // will print undefined  (can't use this within function will work only with objects)
}

chai();

//-----------------------------arrow function----------------------

// anonymous function --  without name
const mood = function () {
  console.log("good mood");
  console.log(this); // will print multiple value in the object
};

mood(); // good mood

const happyArrow = () => {
  console.log("I am a happy arrow function ");
  console.log(this); // {} will print the empty object
};

happyArrow();

// inplict return in arrow function when there is one liner function one need to put return and {} braces

// explict return --> when there is return with {}

const heyarrow = () => console.log("hey i am one liner arrow function");
heyarrow();

// return an object in function then there is need of arrow function

const objreturn = () => {
  return { user: "manvi", value: "person" };
};
console.log(objreturn()); // { user: 'manvi' }
