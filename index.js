var itemPrice = 25.0;
var amountOfMoneyInWallet = 75.0;
var numberOfFriends = 13;
var ageInYears = 26;
var firstName = "Lexie";
var lastName = "Voges";
var middleInitial = "M.";

var newAmountAfterSpending = amountOfMoneyInWallet - itemPrice;
var friendsMadePerYear = numberOfFriends / ageInYears;
var fullName = firstName + middleInitial + lastName;

console.log("The item price is " + itemPrice + " dollars.");
console.log("I have " + amountOfMoneyInWallet + " dollars in my wallet.");
console.log("I have " + numberOfFriends + " friends.");
console.log("I am " + ageInYears + " years old.");
console.log("My first name is " + firstName + ".");
console.log("My last name is " + lastName + ".");
console.log("My middle initial is " + middleInitial + ".");

console.log(
  "The new amount of money in my wallet after spending is " +
    newAmountAfterSpending +
    " dollars."
);
console.log(
  "I have made " + friendsMadePerYear + " friends for each year I've lived."
);
console.log("My full name is " + firstName + middleInitial + lastName + ".");
