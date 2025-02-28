//   inner functiion can access outer function and outer function can access the  veriable with global enviromnet ... this chain is called scope chaining and lexcical enviromnet

var a = 10;

function outer() {
  var b = 20;
  console.log("outer function is  : ", a);

  function inner() {
    console.log(" inner function is  : ", a, b);
  }

  inner();
}

outer();

// output : -------------

// outer function is  :  10
//  inner function is  :  10 20
