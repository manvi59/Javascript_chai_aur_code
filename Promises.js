//  promise is used when there is callback hell of asyncronyze call
//--------when theer is cllback hell
// means multiple asyncronyze operation is happing ..

// then we want multiple async operation is sequence order then we use promise

// three state of promise------->real promise type like childern (said by parents will purchase bike for you after passing I'st division)

// pending ---initial state  , neither fullfield or nither faild
// fullfilled--commpleted successfully
// rejected -- faild

//----------handling an promise

// .then() --> used to handle fullfillment success

// .catch()--> used to handle rejection

// .finally()-->this will run every time

// const one = new Promise((resolve, reject) => {
//   // async all
//   setTimeout(() => {
//     console.log("heii resolved ");
//     resolve({ name: "manvi", class: "ok" });
//   }, 1000);
// });

// one.then((obj) => {
//   console.log("hii promise !", obj);

// });

const two = new Promise((resolve, reject) => {
  const flag = false;
  setTimeout(() => {
    if (flag) {
      resolve({ name: "manvi", nature: "hmm" });
    } else {
      reject("error");
    }
  }, 1000);
});

two
  .then((e) => {
    console.log(e);
  })
  .catch((error) => {
    console.log(error); //  // error
  })
  .finally("will every time");

// async await ---------> it is a asyncronyze operation will wait untill the Api call

const three = new Promise((resolve, reject) => {
  const flag = true;
  setTimeout(() => {
    if (flag) {
      resolve({ name: "manvi", nature: "hmm" });
    } else {
      reject("error");
    }
  }, 1000);
});

const ans = async () => {
  try {
    const response = await three;
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("hey i am ok will run every time");
  }
};

ans();
// { name: 'manvi', nature: 'hmm' }
// hey i am ok will run every time

// fetch API ---------------> it is used in network call ... and it consumned the promise basically return the promise....

fetch("https://www.google.com")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally("finally it's completed!");
