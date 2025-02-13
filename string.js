const name = "manvi";
const repoCount = 50;

console.log(name + repoCount);

//string interpulation
console.log(`${name} is ${repoCount}`);

// declare a string
const game = new String("asdfghjkl");

// game will print like an obj(key value pair) in inspact
// 0
// :
// "a"
// 1
// :
// "s"
// 2
// :
// "d"
// 3
// :
// "f"
// 4
// :
// "g"
// 5
// :
// "h"
// 6
// :
// "j"
// 7
// :
// "k"
// 8
// :
// "l"
// length
// :
// 9

console.log(game); //[String: 'asdfghjkl']   this will print in terminal

console.log(game[1]); //s

console.log(game.__proto__); //{}  obj contains many functions

console.log(game.length); //9

console.log(game.toUpperCase()); //ASDFGHJKL  it will not change the original value
console.log(game); //[String: 'asdfghjkl']

console.log(game.charAt(2)); //d

console.log(game.indexOf("t")); //-1  not available

console.log(game.indexOf("h")); //5

console.log(game.substring(0, 4)); //asdf  excluding 4 index

console.log(game.substring(-8, 4)); //asdf

ans = game.slice(-8, 4);

console.log(ans); //sdf
console.log(game.slice(2, 5)); //dfg  last index excluding

const newstring = "     heyyyyyy        ";

console.log(newstring); //     heyyyyyy
console.log(newstring.trim()); //heyyyyyy  remove the extra space  (workes only white space not in  new lines)
console.log(newstring.trimStart()); // remove the straing white space
console.log(newstring.trimEnd()); // remove the ending white space

url = "https://www.manvi%20.com";
dashing = url.replace("%20", "-");
console.log(url.replace("%20", "-")); //https://www.manvi-.com
console.log(url); // https://www.manvi%20.com  original would not changes because string is stack type (primitive data type)

console.log(url.includes("name")); //false
console.log(url.includes(url)); //true

// we are spliting basis upon the "-" and converted in to the array
console.log(dashing.split("-")); // [ 'https://www.manvi', '.com' ]
