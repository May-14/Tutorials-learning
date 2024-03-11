//Get ten numbers and put them in array
let numbers = [];
for (let i = 1; i < 11; i++) {
    let number = Math.floor(Math.random() * 50);
    numbers.push(number)
}
//Alert all ten numbers
alert(numbers)
//Alert third highest number
    //order numbers from greatest to least
    let compareNumbers = (a, b) => b - a;  numbers.sort(compareNumbers)
    //alert third highest number
    alert(numbers[2])