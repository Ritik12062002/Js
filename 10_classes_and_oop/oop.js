//object literal
// this is used for current context

const user={
    username:"Ritik",
    loginCount:8,
    signedIn:true,

    gotUserDetails: function(){
        // console.log("Got user details from DB");
        console.log(`Username :${this.username}`);
        console.log(this);
    }
}

// console.log(user.loginCount);
// console.log(user.gotUserDetails());
// console.log(this);




function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    }

    // return this impilicity defined
}

const userOne =  new User("Ritik",12,true)
const userTwo =  new User("Learing JS",11,false)
console.log(userOne.constructor);
// console.log(userTwo);