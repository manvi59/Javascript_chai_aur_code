const a = 10;
var p = "jkhwkj";
m = "nnnnnnnn";
var s = "heyyyyyy"; // will not provide error

console.log(a);
console.log(p);
console.log(m);
console.log(s);

console.table([a, p, m, s]); // will print in the form of table

let name = 1000;
let zx = "jhke";

console.log(typeof name); //Number
console.log(typeof zx); // String

console.log(typeof String(name)); // string

console.log(typeof Number("abc89hd")); // number
console.log(Number("abc89hd")); // NAN   (NAN not a number data type is number)

console.log(typeof Number(null)); // number
console.log(Number(null)); // 0

console.log(Number(undefined)); // NAN
console.log(Number("heyyyyyyyystring")); // NAN
console.log(Number(true)); // 1

console.log(Boolean(1)); //true
console.log(Boolean("")); //false
