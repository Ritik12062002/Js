
// {}  it is a scope when it comes with function and conditional statement
// two scopes - block scope and global scope
//difference
//Variables with global scope are available from all other scopes within the JavaScript code. Variables with local scope are available only within a specific local context and are created by keywords, such as var , let , and const .
// browser environment scope is different and code environment global scope is different




// var c=30

let a =10

if(true){
    let a=100;
    const b=200
//   console.log("Inner :" , a);
}
// console.log(a);
// console.log(b);
// console.log(c);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// A closure is a function having access to the parent scope, even after the parent function has closed.
//nested scope

function one() {
    // const username ="ritik"

    function two(){
        // const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if(true){
    const username="ritik"
    if(username==="ritik"){
        const website =" youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num+1
}

addTwo(5)
const addTwo = function(num){
    return num+1
}
