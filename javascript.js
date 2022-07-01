console.log("Hello, World!");

let message = 'Hello';
let user = "John";
let age = 25;

//alert(message);

const MY_BIRTHDAY = "1987.07.13";

//alert(MY_BIRTHDAY);

function showMessage(){
    let message = 'goodbye';
    alert(message);
}

//showMessage();
//alert(message);

//fizzbuzz

//user input
const INPUT = parseInt(prompt("Please enter a number"));

//loop through numbers
for (let i = 0; i < INPUT; i += 1){
    if (i % 3 === 0 && i % 5 === 0){console.log("Fizzbuzz");}
    else if (i % 3 === 0){console.log("Fizz");}
    else if (i % 5 === 0){console.log("Buzz");}
    else {console.log(i);}
}