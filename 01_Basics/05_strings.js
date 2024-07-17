const name ="ritik"
const repoCount =50

// console.log(name + repoCount +"value");
// console.log(`My name is ${name} and repocount is ${repoCount}`);

let gameName = new String('ritik-k-k')
// console.log(gameName[0])
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));


const newString =gameName.substring(0,2)
// console.log(newString);

const anotherString =gameName.slice(-4,3)
// console.log(anotherString);


const newStringOne = "    ritik  " 
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://ritik.com/ritik%20sharma"
console.log(url.replace('%20','-'));
console.log(url.includes('ritik'));
console.log(gameName.split('-'));

