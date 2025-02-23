// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }

//   funny() {
//     console.log(`hey ${this.name} ,are you a funny guy ..............!`);
//   }
// }

// const obj = new User("manvi", "anc@gmail.com", "234");

// obj.funny(); // hey manvi ,are you a funny guy ..............!

// Classes concetp comes after the ES6 .. before that we create prototye below this

const User = function (name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
};

User.prototype.Chai = function () {
  console.log(`${this.name} loves chai very much !!`);
};

const obj = new User("manvi", "abc@gmail.com", "123");
obj.Chai(); // manvi loves chai very much !!
