//control flow
//if


// <, >, <=, >=, ==, !=, ===, !==

// const isUserLoggedIn =true
// const temp =42

// if(temp===40){
//     console.log("less than 50");
// }else{
//     console.log("greater than 50");
// }



// const score=200

// if(score>100){
//     const power ="fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`)



// const balance =1000

// if(balance>500) console.log("test"), console.log("test1");
//dont do this 

// if (balance < 500) {
//         console.log("less than 500");
//     } else if (balance < 750) {
//         console.log("less than 750");
        
//     } else if (balance < 900) {
//         console.log("less than 900");
        
//     } else {
//         console.log("less than 1200");

//     }

const UserLoggedIn =true
const debitCard =true
const loggedFromEmail =true
const loggedFromGoogle =false


if(UserLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedFromEmail ||loggedFromGoogle){
    console.log("User logged in");
}