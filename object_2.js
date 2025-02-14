// how to do singlton in object and how to create object using singleton

const tinder = new Object(); // singleton object

const a = {}; // non singleton object

console.log(tinder); // {} empty object
console.log(a); // {}

tinder.id = 123;
tinder.name = "sam";
tinder.isLogin = false;

console.log(tinder); // { id: 123, name: 'sam', isLogin: false }

const regularUSer = {
  email: "same@gmail.com",
  fullName: {
    userFullname: {
      firstName: "manvi",
      lastName: "yogi",
    },
  },
};

console.log(regularUSer?.fullName?.userFullname?.firstName); //manvi

// question mark if the value is available

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};

const obj3 = { obj1, obj2 };
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }  obj inside the obj

const obj4 = Object.assign(obj1, obj2);

console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  work as a flating an obje

const obj5 = Object.assign({}, obj1, obj2);
// Object.assign(target , source)
console.log(obj5); // will print simmilar value like obj4 .
// in this case obj1 and obj2 will assign in single {} obj
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// obj3 ---------> spread operator

const obj6 = { ...obj1, ...obj2 };
console.log(obj6); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// from the ApI data comes

const users = [
  {
    id: 1,
    email: "one@gmail.com",
  },
  {
    id: 2,
    email: "one@gmail.com",
  },
  {
    id: 3,
    email: "one@gmail.com",
  },
];

console.log(users[1].email); // one@gmail.com

// I want keys of tider object

console.log(Object.keys(tinder)); // [ 'id', 'name', 'isLogin' ]  will provide all the keys in array format

console.log(Object.values(tinder)); // [ 123, 'sam', false ]

console.log(Object.entries(tinder)); // [ [ 'id', 123 ], [ 'name', 'sam' ], [ 'isLogin', false ] ]
// every key and value is in the format of array

// console.log(tinder.keys()); // wrong syntex

console.log(tinder.hasOwnProperty("isLogin")); // true
