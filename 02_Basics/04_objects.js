const googleUser = new Object()   
//it is a singleton object
// const googleUser ={}   
//it is not a singleton object  

googleUser.id="123abs"
googleUser.name="ritik"
googleUser.isLoggedIn = false
// console.log(googleUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        username: {
            firstName:"ritik",
            lastName:"sharma"
        }
    }
}
// console.log(regularUser.fullname.username.firstName);

const obj1 ={ 1:'a', 2:'b'}
const obj2 ={ 3:'a', 4:'b'}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}
// console.log(obj3);


const users=[
    {
        id:1,
        email:"r2gmail.com"
    },
    {
        id:1,
        email:"r2gmail.com"
    },
    {
        id:1,
        email:"r2gmail.com"
    },
]

// console.log(users[1].email);
// console.log(googleUser);
// console.log(Object.keys(googleUser));
// console.log(Object.values(googleUser));
// console.log(Object.entries(googleUser));   //every key and value make it in array

// console.log(googleUser.hasOwnProperty('isLogged'));


// +++++++++++++++++++++++++++++++++++++++++++++++++++
//destructure

const course ={
    courseName: "JS",
    price: "999",
    courseInst : "ritik"
}

// course.courseInst
const {courseInst :r} =course
// console.log(courseInst);
console.log(r);

//API
// JSON stands for JavaScript Object Notation. 
// {
//     "name": "ritik",
//     "coursename": "js",
//     "price": "free"
// }

// we also got in array format as well as in object format
// [
//     {},
//     {},
//     {}
// ]