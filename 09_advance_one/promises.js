// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000);
// }).then(function(){
//     console.log("Async task resovled");
// })



// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//     resolve({username:"ritik", email:"ritik@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         let error= false
//         if(!error){
//             resolve({username:"ritik", password:"1234"})
//         }else{
//             reject("ERROR : Something went wrong")
//         }
//     },1000)
// })

// promiseFour.then((user) =>{
//     console.log(user);
//     return user.username
// }).then((username) =>{
//     console.log(username);
// }).catch((error) =>{
//     console.log(error);
// }).finally(()=> console.log('The promise is either resloved or rejejcted'))


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumepromiseFive(){
//     try{
//     const res = await promiseFive
//     console.log(res);
//     } catch(e){
//         console.log(e);
//     }
// }

// consumepromiseFive()

// async function getAllUsers(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
     
//     const data =  await res.json()
//     console.log(data);
//     } catch (e) {
//         console.log("E:" , e);
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))