// MDN Article

const string = "The revoultion will not be televised";
console.log(string);
const badString = string;
console.log(badString);
const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth)


// W3 article on string methods
let text;

text = "abcdefghijklmnopqrstuvwxyz";
console.log(text.length)

text = "Hello world";
text1 = ", ok bye!"
text2 = "5"
text3 = "Hello world world WORLD world";

console.log(text.slice(0,5));
console.log(text.charAt(0));
console.log(text.charCodeAt(0));
console.log(text.at(0));
console.log(text[0]);
console.log(text.slice(-5));
console.log(text.substring(-1,5));
console.log(text.substr(0,5));
console.log(text.concat(text1));
console.log(text2.padEnd(4, 0));
console.log(text2.repeat(4));
console.log(text.replace("Hello", "Bye"));
console.log(text3.replace(/WORLD/ig, "lol"));
console.log(text.split(" "));

// js.info article on logical operators
let age = 91;

if (age >= 14 && age <= 90) {
    console.log("Hello");
}

if (age < 14 || age > 90) {
    console.log("Hello");
}

if (!(age >= 14 && age <= 90)) {
    console.log("Hello");
}

// let username = prompt("Enter username");

// if (username === "Admin") {
//     let password = prompt("Enter password");
//     if (password === "TheMaster") {
//         alert("Welcome")
//     } else if (password === null || password.trim() === "") {
//         alert("Canceled");
//     } else {
//         alert("Wrong password")
//     }
// } else if (username === null ||username.trim() === "" ) {
//     alert("Canceled");
// } else {
//     alert("I don't know you");
// }


// let answer = prompt("What is the official name of js?");

// if (answer.includes("ECMAScript")) {
//     alert("Right");
// } else {
//     alert("You don't know? ECMAScript!");
// }

let result;

result = (a + b < 4) ? "Below" : "Over";

let message = (login === 'Employee') ? "Hello" :
    (login === "Director") ? "Greetings" :
    (login == '') ? "No Login" : " "

