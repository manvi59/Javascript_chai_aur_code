// 1. Closures
// A closure is a function that "remembers" the variables from its outer scope even after the outer function has executed.


// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
//     };
// }

// const closureExample = outerFunction("Hello");
// closureExample("World");  // Output: Outer: Hello, Inner: World


// 2. Callbacks
// A callback function is a function that is passed as an argument to another function and executed later.

// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data received");
//     }, 1000);
// }

// fetchData((message) => console.log(message));  // Output after 1 sec: Data received



// 3. Higher-Order Functions
// A higher-order function (HOF) is a function that takes another function as an argument OR returns a function.

// function multiplyBy(factor) {
//     return function (number) {
//         return number * factor;
//     };
// }

// const double = multiplyBy(2);
// console.log(double(5));


// Key Differences:
// Concept	Definition	Example
// Closure	Function that retains access to its outer scope even after the function has executed.	Function inside another function.
// Callback	Function passed as an argument and executed later.	setTimeout, event listeners, async operations.
// Higher-Order Function	Function that takes or returns another function.	map(), filter(), reduce().
