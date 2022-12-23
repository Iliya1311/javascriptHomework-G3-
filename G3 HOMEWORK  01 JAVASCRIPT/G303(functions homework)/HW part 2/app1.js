// HOMEWORK PART 2
// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer
// Bonus: Make the same function work for converting dog to human years as well


function dogAge() {
    let userInput = prompt("Enter your age: ", " ");
    let humanAge = parseInt(userInput);
    let resultAge = humanAge * 7;
    return resultAge;
}

 console.log(dogAge());  