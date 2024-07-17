let myDate = new Date()             
// date is a object. in js month start with 0
// console.log(myDate.toString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let createdDate =new Date(2022,1,23,5,3)
// console.log(createdDate);
// console.log(createdDate.toDateString());
// console.log(createdDate.toLocaleString());

//mm-dd-yy
let createdDate =new Date("01-14-2023")
// console.log(createdDate.toLocaleString());


let myTimeStamp =Date.now()
// console.log(myTimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDate());


// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday:'long'
}))