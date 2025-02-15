console.log("h");
console.log("i");
console.log("p");

// problem in rewriting the code

const sayMyName = (latter) => {
  console.log(latter);
};

sayMyName("m"); //m

console.log(sayMyName); // refernec of the function

const addNum = (num1, num2) => {
  // parameters passed using argument
  //   console.log(num1, num2);
  return num1 + num2;
  // when there is no written it will writeen nothing will print undeined
};

console.log(addNum(10, 20)); // argument

console.log(addNum(3, "4")); // 34
console.log(addNum(3, "a")); // 3a

console.log(addNum(3, null)); //3
console.log(addNum()); // undfined + undefind ==> NAN

// -------------------------falsy value --("" empty string ) , undefinded , null

//-----------default value

const funName = (name = "God shree Krishna") => {
  console.log(`name is : ${name}`);
};

funName(); // name is : God shree Krishna
console.log(funName()); // name is : God shree Krishna
//  undefined
// first call the function  then will return the undefined because there is no return

//------------------------------------------Rest operator -----------------

// nornal function
const fun = (num) => {
  return num;
};

console.log(fun(1)); // 1
console.log(fun(1, 2, 3)); // 1

// function with rest operator

const restFun = (...num) => {
  return num;
};

console.log(restFun(10, 20, 30)); // [ 10, 20, 30 ] rest operator will add the number into the single array

const restFun2 = (num1, num2, ...num) => {
  console.log("num1 is ", num1); // num1 is  11
  console.log("num2 is ", num2); // num2 is  12
  console.log("numbers  is ", num); // numbers  is  [ 13, 14, 15 ]
};
restFun2(11, 12, 13, 14, 15);

const user = {
  name: "maaaaaaanvi",
  price: "1000000000000",
};

const handleObject = (anayObj) => {
  console.log(`username is ${anayObj.name} , price is ${anayObj.price}`);
  //   username is maaaaaaanvi , price is 1000000000000
};

handleObject(user);

const myNewArray = [100, 200, 300, 400];

const funny = (arr) => {
  return arr[1];
};
console.log(funny(myNewArray)); // 200
