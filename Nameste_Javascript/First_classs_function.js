// A first-class function in JavaScript means that functions are treated like any other variable. This allows functions to be:

// Assigned to variables
// Passed as arguments to other functions
// Returned from functions to a function
// Stored in data structures like arrays or objects

function nimi() {
  console.log("hryyyyyyyy");
}

const vary = (nimi) => {
  nimi();
  return function () {
    console.log("heyy i am inner function");
  };
};

ans = vary(nimi); // hryyyyyyyy function treat as a veriable
console.log(ans); // [Function (anonymous)]

ans(); // heyy i am inner function
