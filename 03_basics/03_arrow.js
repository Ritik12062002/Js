//this = used for current context reference

const user ={
    username:"ritik",
    price:999,

    welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sik"
// user.welcomeMessage()
// console.log(this);


//this is not used in function 
//used in object

// function code(){
//     let user ="ritik"
//     console.log(this.user);
// }
// code()

// const chai = function () {
//     let username = "ritik"
//     console.log(this.username);
// }

// arrow function
//syntax  () =>{}

// const chai =  () => {
//         let username = "ritik"
//         console.log(this);
//     }
// chai()


// const addTwo = (n1,n2)=>{
// return n1+n2
// }

// if use this{} return statement required but if u use ()  no return statement
// if use

//implicit return 
// const addTwo = (n1,n2)=> n1+n2

// const addTwo = (n1,n2)=> (n1+n2)


// for object we have use {} for return 
const addTwo = (n1,n2)=> ({user:"ritik"})

console.log(addTwo(2,54));