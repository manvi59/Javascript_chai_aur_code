// 1. Closures
// A closure is a function that "remembers" the variables from its outer scope even after the outer function has executed.

function outer() {
  const c = 90; // this is closures
  function inner() {
    console.log("i ma inner function : ", c);
  }

  return inner;
}

const refy = outer();

console.log(refy); // inner function fererence

refy(); // i ma inner function :  90

// Clausure application ---------> data Encaplusion ( wraaping the inner function )

// clasure disadvantages ------> extra memory consume of veribale ( garbage collectore does not work and does not reasure the clausere variable memory after ended of function execution context )

// ------------------------------Garbage collector

// in the low level language we have to release unused memory using garbage collector
// javascript is a high level language . memory is automatically released after the code execution .
