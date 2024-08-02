// let myName ="Ritik       "
// let myChannel ="rrrrrr     "

// // console.log(myName.trueLength);

let myHeros=[ "thor","spiderman"]

let heroPower ={
    thor: "hammer",
    spiderman:"sling",

    getSpiderpowe:function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.ritik=function(){
    console.log("ritik is present in all objects");
    
}

Array.prototype.heyRitik=function(){
    console.log(`Ritik say hello`);
    
}

// heroPower.ritik()
// myHeros.ritik()
// myHeros.heyRitik()
// heroPower.heyRitik()

//inheritance

const User ={
    name:"ritik",
    email:"ritik@google.com"
}

const Teacher ={
    makeVideo:true
}

const teachingSupport ={
    isAvailabe :false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:teachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(teachingSupport,Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
   
    console.log(` True Length is  ${this.trim().length}`);
    
}

// anotherUsername.trueLength()
"ritik".trueLength();
"proteinShake".trueLength()