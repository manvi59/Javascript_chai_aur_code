// prototype Behavior-- if nothing is there in the function . then it will go to parent , and grand parent this is prototype behaviour and Inheritence

// ------------------Array ---------------Object ------------null
// ----------------string ----------------object ------------null
// ----------------function ----------------object ------------null

// object's propert is available in the array of string also .. this is called inherientence

function one(name) {
  console.log("i am a fucntion");
  this.value = 1;
  this.name = name;
}

console.log(one.prototype); // {}
console.log(one.power); // undefined  ---- we can  can use function as a obj (can access like a dot)

// function has a property of the obj .. it is prototy inheritence

//  --------------create a new property of the fucntion

one.prototype.creatingProp = function () {
  console.log(`hey my name is  ${this.name}`);
};

const construct = new one("manvi"); // will craete the new instance

construct.creatingProp(); // after calling the prototype property (creatingProp) uaisng constructor --------this will print (hey my name is  manvi)

// here we have created own property and functionality of an function which is behaving like a obj...

// this is the concept of inheritence ----------
