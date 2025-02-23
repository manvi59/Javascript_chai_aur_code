console.log(Math.PI); // 3.141592653589793
Math.PI = 2344;
console.log(Math.PI); // 3.141592653589793 can't change the Math object

const descripter = Object.getOwnPropertyDescriptor(Math, "PI"); //gives teh description
console.log(descripter);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// in the Math object there is hard code in javascrpt we can't change the PI value ..because writable is false ..

// ------------------ crate an own object

const user = {
  name: "manvi",
  interest: "software development",
};

console.log(typeof user); // object
const userDesc = Object.getOwnPropertyDescriptor(user, "name");

console.log(userDesc);
// {
//     value: 'manvi',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

// -----------we can change the access property of name in userObj

Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false, // can't iterate the object
});

const userDesc22 = Object.getOwnPropertyDescriptor(user, "name");

console.log(userDesc22);
// {
//     value: 'manvi',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

console.log(user); // { interest: 'software development' } name is not priting because we have change the name property enumarable as false
