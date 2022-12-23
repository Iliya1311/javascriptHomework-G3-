// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

function atm() {
    const accountBalance = 5500;
    if (requestedAmount > accountBalance) {
      return "Not enough money";
    }
    let amount = prompt("Enter the amount you want to withdraw:");
    accountBalance -= requestedAmount;
    
    return `You have withdrawn ${requestedAmount} and your balance is now ${accountBalance}`;
  }
  
  function prompt(message) {
    return new Promise((resolve, reject) => {
      console.log(message);
      prompt.get([{
        name:'response',
        message: message,
        type: 'list',
        choices: ['Yes', 'No']

  let result = atm(amount);
  alert(result);
  
  console.log(atm());

  resolve(result);
    });
  }
  
  function main() {
    return atm();
  }
  
  main();

  //create an ATM with function
  function atm(amount) {
    return `You have withdrawn ${amount} and your balance is now ${accountBalance}`;
  }

  main();

 