// IIFE --> immediately invocked function expression

// named iffi
(function chai() {
  console.log("DB connected");
})(); //semi colon nedded

// immediately invocked a function through the parenthises to stop pulution from the global scope that's why we write the IIFE

// ()()
// defination , execution call

// chai();

// un named IFfi
((name) => console.log(`hii i am arraow functiom inside eifi  ${name}`))(
  "manvi"
); // hii i am arraow functiom inside eifi  manvi
