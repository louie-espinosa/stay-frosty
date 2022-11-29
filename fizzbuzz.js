"use strict"
let output = "";
//write a function that logs 1 to 100
for (let x = 1; x < 100; x++) {
// Create conditions that console log, or output fizz, buzz, or fizzbuzz when the condition is met.
   //TODO Must use modulus, lest the number is printed along with fizz, buzz, or fizzbuzz.
    if (x % 15 == 0) {
        output += "fizzbuzz" + "<br>";
    } else if (x % 5 == 0) {
        output += "buzz"  + "<br>";
    } else if (x % 3 == 0) {
        output += "fizz"  + "<br>";

    } else {
        output += x + "<br>";
    }

}
document.querySelector(".fizzbuzz-demo").innerHTML = output