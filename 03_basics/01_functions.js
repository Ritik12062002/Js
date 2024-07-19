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
console.log(loginUserMessage("ritik"));