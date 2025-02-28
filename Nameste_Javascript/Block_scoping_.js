// {} -- this is the block or area tell the Accessibility of the veriable

var p = 9999;
let iamLet = 67;
{
  let a = 10;
  var b = 200;
  const k = 900;
  console.log(k);
  var p = 5000000;

  let iamLet = 78;
}

// console.log(a); // a is not defined
console.log(b); // 200
// console.log(k); //  k is not defined

console.log(p); // 5000000  p is global varibale which is reffereing to inside declared veribale can able to change it .
console.log(iamLet); // 67 inner let will create another veriable storage will not refer to the same function
