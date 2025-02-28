//  function can  take the function as a argumnet and return the function ..

// code returdency  helfull
// support functional programming
//  eg --------map , filter , reduce

// A Higher-Order Function (HOF) is a function that either:

// Takes another function as an argument (callback function).
// Returns a function.
// These functions make JavaScript more powerful and support functional programming.

const arr = [1, 2, 3, 4];

const area = (r) => {
  return Math.PI * r * r;
};

const coercomference = (r) => {
  return 2 * Math.PI * r;
};

function calculation(funnRef) {
  var a = [];
  for (let i = 0; i < arr.length; i++) {
    a.push(funnRef(arr[i]));
  }
  return a;
}

const ans1 = calculation(area);

console.log(ans1);

//  [
//   3.141592653589793,
//   12.566370614359172,
//   28.274333882308138,
//   50.26548245743669
// ]

const ans2 = calculation(coercomference);
console.log(ans2);
// [
//     6.283185307179586,
//     12.566370614359172,
//     18.84955592153876,
//     25.132741228718345
//   ]

// ----------------------------------above simple high oredr function example  as map ---------------

// const ans=arr.map(()=>{

// })

const anny = arr.map(area);
// [
//     6.283185307179586,
//     12.566370614359172,
//     18.84955592153876,
//     25.132741228718345
//   ]

const cercom = arr.map(coercomference);
console.log(cercom);
