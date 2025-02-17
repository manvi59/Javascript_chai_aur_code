const arr = [1, 2, 3, 4];
const ans = arr.forEach((item) => {
  console.log(item); // 1 2 3 4
  return item;
});

console.log(ans); // for each method return nothing

// ------------------filters------------------

const filterAns = arr.filter((item) => {
  return item % 2 == 0;
});

console.log(filterAns); // [2,4]  return as a array

const myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const add = myNumbs.map((item) => item + 10); // add 10 each and evrey ele return the value

console.log(add);
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

//-------------------------chaining (two and three method are togethere one by one)----------------

const newNums = myNumbs
  .map((item) => item * 10)
  .map((item) => item + 3)
  .filter((item) => item % 3 == 0);
console.log(newNums); //[ 33, 63, 93 ]

// ----------------------reduce function----------------

const array = [1, 2, 3];

const total = array.reduce((acc, current_val) => {
  console.log(`acc: ${acc} , current value : ${current_val}`);
  return acc + current_val;
}, 0);
// acc: 0 , current value : 1
// acc: 1 , current value : 2
// acc: 3 , current value : 3
console.log(total); // 6
