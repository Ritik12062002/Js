// Array is a object
// JavaScript arrays are resizable and can contain a mix of different data types. 
// JavaScript arrays are zero-indexed
// JavaScript array-copy operations create shallow copies. 
// A shallow copy of an object is a copy whose properties share the same references 
// A deep copy of an object is a copy whose properties do not share the same references


const myArr = [0,1,2,3,4,5]
const name =["ritik", "keshav", "rohit"]
const myArr2 = new Array(0,1,2,3,4,5)

// console.log(myArr[0]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.includes(4));
// console.log(myArr.indexOf(1));

// const newArr = myArr.join()
// console.log( typeof newArr);
// console.log(myArr);



// slice, splice
//splice manipulate orginial array nut slice doesnt .

console.log("A" , myArr);
const myn1= myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

const myn2 =myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);