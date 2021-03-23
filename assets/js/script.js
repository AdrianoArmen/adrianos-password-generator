//Assignment Code 
// questionare promp if button is clicked
document.querySelector("#generate").addEventListener("click", writePassword);


// variables created containing allowed characters for each character category
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// character category variables declaration
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;


// character number confirmation - prompt
function generatePassword() {
  var confirmLength = (prompt("Enter the number of characters required for your password"));


  // if number of characters it's outside criteria (8 to 128 characters) - loop
  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters. Re-enter value");
    // ask character number again
    var confirmLength = (prompt("Enter the number of characters required for your password"));
  }


  // accepted character number confirmation - alert 
  alert(`New password will contain ${confirmLength} characters`);


  // character type questionare - confirm
  var confirmSpecialCharacter = confirm("Include special characters in new password?");
  var confirmNumericCharacter = confirm("Include numeric characters in new password?");
  var confirmLowerCase = confirm("Include lowercase characters in new password?");
  var confirmUpperCase = confirm("Include uppercase characters in new password?");
  // if character type criteria is not met (at least one character type) - loop
  while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    // ask character type questionare again
    var confirmSpecialCharacter = confirm("Include special characters in new password?");
    var confirmNumericCharacter = confirm("Include numeric characters in new password?");
    var confirmLowerCase = confirm("Include lowercase characters in new password?");
    var confirmUpperCase = confirm("Include uppercase characters in new password?");
  }

  // if character type is previously confirmed - will find available characters on array and concat
  var passwordCharacters = []

  if (confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialChar)
  }

  if (confirmNumericCharacter) {
    passwordCharacters = passwordCharacters.concat(number)
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  console.log(passwordCharacters)

  // emplty string to return random values from specific array variables
  var randomPassword = ""

  // for loop generating random values on confirmed character type
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  // return password on text box
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}