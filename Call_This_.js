const CreateName = function (username) {
  this.username = username;
  console.log("hii");
};

const User = function (username, email, password) {
  CreateName.call(this, username); // this is holding the reference of this function before context execution

  (this.email = email), (this.password = password);
};

const construct = new User("manvi", "abc@gmail.com", "123");
console.log(construct); // User { email: 'abc@gmail.com', password: '123' }   here username is not printing becuse username ref is not provided to Createname function .. creating it's own obj

console.log(construct); // User { username: 'manvi', email: 'abc@gmail.com', password: '123' }  username is printing after using call and this which hold the reference
