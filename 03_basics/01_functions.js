function sayMyname() {
    console.log("r");
    console.log("i");
    console.log("t");
    console.log("i"); 
    console.log("k");
}
// sayMyname it is function reference
// sayMyname()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumber(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
}

//  const result=addTwoNumber(2,3)
//  console.log("Result:",result);

function loginUserMessage(username= "rit"){
    if(!username){
        console.log("Please enter a username");
    }else{
        return `${username} just logged in.`
}
}
// console.log(loginUserMessage("ritik"));

// ++++++++++++++++++++++++++++++++++++++++

function calculatorCartPrice(val1, val2,...n1){
    return n1
}
// console.log(calculatorCartPrice(200,300,405,2000));

// function with object


const user ={
    username:"ritik",
    price:200
}

function handleObject(anyObject){
    return `Username is ${anyObject.username} and price is ${anyObject.price}`
}

// console.log(handleObject(user));
console.log(handleObject({
    username:"sik",
    price:399
}));

const myNewArr =[100,200,300]


//function with array

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100,200,300,4000]));