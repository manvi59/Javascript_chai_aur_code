// stack last in last out -->LIFO makes copy of the veriable

// Heap--> First in first out --> makes referenc of the veriable ...non primitive type --> object , array , function

var a = 10;
b = a;

console.log(a, "    ", b); // 10 10
b = 20;
console.log(a, "    ", b); // 10  20

obj1 = {
  name: "manvi",
  love: "krishna",
};

obj2 = obj1;
console.log(obj1, "\n", obj2);
// { name: 'manvi', love: 'krishna' }

obj2.love = "God_Krishna";

console.log(obj1, "\n", obj2);

// { name: 'manvi', love: 'God_Krishna' }
