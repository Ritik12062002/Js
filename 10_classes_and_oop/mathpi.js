// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);
// const des = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(des);

const chai = {
    name: "chai",
    price :250,
    isAvailable:true,

    orderChai: function(){
        console.log("chai ordered");
        
    }
}
console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false,
    
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value!== 'function')
    console.log(`${key}: ${value}`);
    
}


