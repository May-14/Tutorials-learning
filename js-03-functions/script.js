//Odin Tasks

function add7(number) {
    return number + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(string) {
    array = string.split("");
    array[0] = array[0].toUpperCase();
    return array.join("");
}

let lastLetter = string => string.slice(-1)

let string = prompt("Enter a word");
// alert(lastLetter(string));

//js info article on functions

// age = prompt("Enter your age")

// function checkAge(age) {
//     return age > 18 ? true : confirm("Did your parent allow you?");
// }

// checkAge(age)

// num1 = prompt("Enter a number")
// num2 = prompt("Enter another number")

// checkSmallerNumber = (num1, num2) => (num1 < num2) ? `${num1} is smaller` : `${num2} is smaller`;

// alert(checkSmallerNumber(num1, num2))


//js article on arrow functions

// let ask = (question, yes, no) => {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }

// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution")
// );



