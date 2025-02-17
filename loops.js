// for
for (let i = 0; i < 5; i++) {
  console.log(i);
} // 0 to 4

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(j);
  }
} // 0 to 4 two times

console.log("hhhhhhhhhhhhhhhhhhhhhh");
arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  if (i == 3) {
    break;
  }
  console.log(arr[i]);
} // 1 2 3

console.log("ccccccccccccccc");
arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  if (i == 3) {
    continue;
  }
  console.log(arr[i]);
} // 1 2 3 5

//------------------------while ------------------
let k = 0;
while (k < 3) {
  console.log(k);
  k++;
} // 0 1 2

console.log("------------------------do while ----------------");

let s = 10;
do {
  console.log(s); // 10 11 12  first print then check
  s++;
} while (s < 13);
