console.log("connected to server")

//Write a JavaScript program that will calculate the price of 30 Phones,
// where the price of one phone is $119.95 and the tax rate is 5%.

let productPrice = 119.95;
let userInput = 30;
let taxRate = 5;
let productsWithoutTax = productPrice * userInput;
console.log(productsWithoutTax);
let taxSum = productPrice * (1+(taxRate/100));
console.log(taxSum);
let fullPrice = taxSum * userInput;
console.log(fullPrice);