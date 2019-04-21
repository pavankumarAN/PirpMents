//Example of var
// var is the keyword which holds the variable scope at function level 
//which means you are not allowed to use the variable outside of the function 
(function address() {
    var name = "Mark";
    console.log(`${name} inside the function. `);
})();

//address();
console.log(`${name} outside the function`);


//Example of let 
// let is the keyword which holds the variable scope at block level
//which means you are not allowed to use the variable outside the curly brace if it is declared inside it.
function jobDesignation() {
    if(1>0) {
        let position = "CEO";
        console.log(position);
    }
    console.log(position);
    
}
jobDesignation();

//Example of const
// const is the keyword which is used to declare the variable constant to whole program
//which means you are not allowed to change it anywhere at any condition.
const name = "Pavan";
console.log(name);
name = "Kumar";

