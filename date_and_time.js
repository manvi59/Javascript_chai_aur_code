/// date is temporal API ad a global object like an Math

let myDate = new Date();

console.log(myDate); // 2025-02-13T05:11:34.468Z

console.log(myDate.toString()); //Thu Feb 13 2025 10:42:40 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); // Thu Feb 13 2025
console.log(myDate.toLocaleString()); // 13/2/2025, 11:17:59 am

console.log(typeof myDate); // object

let myCreateDate = new Date(2023, 0, 23);
console.log(myCreateDate); // 2023-01-22T18:30:00.000Z
console.log(myCreateDate.toDateString()); // Mon Jan 23 2023

const newDate = new Date(2024, 2, 34, 8, 9);
console.log(newDate.toDateString()); // Wed Apr 03 2024

console.log(newDate.toLocaleString()); // 3/4/2024, 8:09:00 am

// -------------------format MM-DD-YY
const a = new Date("2024-08-10"); // YY-MM-DD   10/8/2024, 5:30:00 am

console.log(a.toLocaleString());

const b = new Date("10-03-2002"); // MM-DD-YY
console.log(b.toLocaleString()); //3/10/2002, 12:00:00 am

// timestemp --->poal fastent winner then we use timeStamp in  milliseconds

let mytimeStamp = Date.now();

console.log(mytimeStamp); // 1739431091099 miiliseconde from 1 jan 1970
console.log(b.getTime()); // 1674412200000  date se ab tak ki value in milli second

console.log(Date.now() / 1000); // convert millisecond into second

const app = new Date();

console.log(" day is ", app.getDay()); // 4
console.log("time is ", app.getTime()); //  1739438621623
console.log("year is ", app.getFullYear()); //  2025

// custumize toLocal string

console.log(
  app.toLocaleString("default", {
    weekday: "long",
    timeZone:""
  })
); // Thursday
