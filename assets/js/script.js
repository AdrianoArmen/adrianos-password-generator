// Password generator with prompted messages to specify generation criteria


// Assignment Code
// Questionaire prompted when button is clicked - Event Listener
document.querySelector("#generate").addEventListener("click", writePassword);


// Created variable arrays with possible characters for each category
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Allowed characters variable declaration
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;


// number of characters - prompt
function generatePassword() {
  var confirmLength = (prompt("Type the number of characters for your new password"));

  // while loop if character number its outside criteria (8 to 128 characters)
  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters. Re-enter number");
    var confirmLength = (prompt("Type the number of characters for your new password"));
  }

  // number of character confirmation - alert
  alert("Your password will have ${confirmLength} characters");


  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
}
