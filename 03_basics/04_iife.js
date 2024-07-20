// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.
//syntax

(function code(){
    //named iife
    console.log(`DB CONNECTED`);
})();

( (name) =>{
    console.log(`DB CONNECTED TO ${name}`);
})("ritik");