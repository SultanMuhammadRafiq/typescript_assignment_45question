"use strict";
/*let u = prompt("Where does the Pope live?");
let Answer = "Pakistan";
if (u == correctAnswer ) {
alert("Correct!");
} else if (u=="Pakista") {
alert("Close!");
} else {
alert("Wrong!")*/
// Ticketing system
let country = prompt("Where do you live?");
// Number() function is used to convert the string to number
let age = Number(prompt("What's your age?"));
if (country === "australia") {
    if (age >= 18) {
        console.log("Here is your ticket");
    }
    else {
        console.error("Age restriction");
    }
}
else {
    console.log("Invalid country");
}
