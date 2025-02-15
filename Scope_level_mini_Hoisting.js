function one() {
  const username = "manvi";

  function two() {
    const website = "https:www.google.com";

    console.log(username);
  }
  //   console.log(website); // website is not defined

  // small children can ask icecream to bigger . viseversa bigger can'not ask icecream from children
  two();
}

one(); // manvi

//-----------------------------------------------

if (true) {
  const name = "krishna";
  if (true) {
    const website = "youtube";
    console.log(`${name} ${website}`); // krishna youtube
  }
  //   console.log(website); // website not defined
}
// console.log(name); // name not defined

//---------------------------------------interesting---------------------
console.log(num(7)); // 8 this is example of hoisting we can declare function before initalization

function num(number) {
  return number + 1;
}

console.log(add1(5)); //  Cannot access 'add1' before initialization

// function as a expression , like an veriable ----> hoisting does not work will provide an errror
const add1 = (num) => {
  return num + 1;
};
