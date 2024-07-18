// singleton
// Object.create

// object literals
// object makekey value pairs

const sym = Symbol("key1")
const myUser = {
    name:"ritik",
    "full name":"ritik sharma",
    [sym] :"mykey1",
    age:22,
    email:"ritik@gmail.com",
    location:"Delhi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(myUser.email);
// console.log(myUser["email"]);
// console.log(myUser["full name"]);
// console.log(  typeof myUser[sym]);

myUser.email ="ritik@google.com"
// Object.freeze(myUser)
myUser.email="ritik@ubisoft.com"
// console.log(myUser);
myUser.greetings = function(){
    console.log("Hello Myuser");
}
myUser.greetingsTwo = function(){
    console.log(`Hello Myuser,${this.name}`);
}
console.log(myUser.greetings());
console.log(myUser.greetingsTwo());
