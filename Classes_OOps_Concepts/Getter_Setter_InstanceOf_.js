class User {
  constructor(name) {
    this.name = name;
  }

  changing() {
    console.log(`${this.name}`);
  }
}

const obj = new User("manvi");
// console.log(obj.name); // manvi

obj.name = "jai shree krsihna";
console.log(obj.name); // jai shree krishna
obj.changing(); // // jai shree krishna

// You're right that you can directly modify the name property of an object, as shown in your example. However, getters and setters in JavaScript offer some distinct advantages in certain situations. Here's why they are useful:

// Encapsulation: Getters and setters help encapsulate the internal logic for modifying or accessing an object's properties. This way, you can control how a property is set or retrieved without directly exposing the property. For example, you could perform validation or transformation within the getter or setter.

class User1 {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase(); // we use underscore when we are accesesing the property to reduce unnessary call stack .. and same property name is using in function also
  }
  set name(newName) {
    this._name = newName;
  }
}

const objj = new User1("manvi");
console.log(objj.name); // MANVI
objj.name = "heyyyyyyy hapyyyyyyyy";
console.log(objj.name); // HEYYYYYYY HAPYYYYYYYY

// ----------------------------------instanceOf ,, obej is part of class . it will work ininheritence also..

console.log(objj instanceof User1); // true
