// destructring of object

const course = {
  name: "javascript",
  price: "999",
  instructor: "manvi",
};

console.log(course.instructor); // manvi

const { instructor } = course;

// de-structure an object
console.log(instructor); //manvi

// change the name while d-structuring an object

const { instructor: i } = course;
console.log(i); // manvi

// props in react destructure concept
const fun = ({ company }) => {};

fun((company = "name"));

// -----------------------------API concepts (Menu card, google authentication , intermidator ) -------------------

// values comes in json format

// this is example of an JSON object which key is an string and value is also an string  and number comes direct , and booean comes direct
// {
//   "name":"hitesh"
//   "courseName":"js in hindi"
//   "price":"free",
//   "id":123
//   "ans":true

// }

// api in array's format

// [
//   {},
//   {}
// ]
