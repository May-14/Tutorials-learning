//js info article on loops

// for (let i = 2; i < 11; i++){
//     (i % 2 === 0) ? alert(i) : "";
// }

// let i = 0
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
//   }

// Repeat until the input is correct
// while(true) {
//     let number = parseInt(prompt("Enter a number"));
//     if (number < 100) {
//         continue;
//     } else {
//         break;
//     }
// }

//Output prime numbers
let number = parseInt(prompt("Enter a number"));
let primeNumbers = []

outer: for (let i = 1; i < number; i++) {
    let notAPrimeNumber = 0;
    for (let j = 0; j < i; j++) {
        if ((i % j) === 0) {
            notAPrimeNumber++;
        }
        if (notAPrimeNumber > 1 || i < 2) {
            continue outer;
        }
    }
    primeNumbers.push(i)
}
alert(primeNumbers)