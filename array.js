const arr = [1, 2, 3, 4, 5];
// squer brackest contain multiple and different ele

console.log(arr[0]); //1
// shallow copy --> share  smae reference point

// deep copy --> donot share the same reference point

const arr2 = ["i", "am", "in", "love", 100];

console.log(arr2);

const arr3 = new Array(10, 20, 30);
console.log(arr3); // [ 10, 20, 30 ]  will add square brackets automatically

//---------- methods in array

const myarr = [11, 22, 33];
console.log(myarr); // [11,22,33]
myarr.push(6);
// this is the non primitive type change in the array itsself
console.log(myarr); // [ 11, 22, 33, 6 ]

myarr.pop(); // remove the last value

console.log(myarr); //[ 11, 22, 33]

myarr.unshift(100000); // add value in starting  //moving right each and every ele
console.log(myarr);

myarr.shift(); // remove the first ele in starting

console.log(myarr);

console.log(myarr.includes(200)); // false

console.log(myarr.indexOf(78)); // -1 does not exist

console.log(myarr.indexOf(22)); // 1 is the index of 22 ele

//join---------- add all the ele in the array into a string

const ans = myarr.join("heeyyyyyyyy");

console.log(myarr); // [ 11, 22, 33 ]
console.log(ans); //11heeyyyyyyyy22heeyyyyyyyy33
console.log(typeof ans); // string

// slice and splice

const aim = [10, 20, 30, 40];

// slice ==> return a copy / section of array
pp = aim.slice(1, 3); // last index is excluding
console.log(aim); // [ 10, 20, 30, 40 ]
console.log(pp); // [20,30]

pp2 = aim.splice(1, 3);

console.log(pp2); // [ 20, 30, 40 ]  last index is inclding
console.log(aim); // [10]  original array after splice

// splice manupuliate the original array and including the last index
// whatevere we have selected it remove that part in the original  Array
// while slice does not effect the original array
