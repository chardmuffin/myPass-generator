// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// my code
var alphaLowercase = "abcdefghijklmnopqrstuvwxyz";
var alphaUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890"
var specialChars = "~!@#$%^&*()[]{};:<>?,./-=_+"

// generate and return a password
var generatePassword = function() {

  //get input from user
  var pwLength = getLength();
  //lowerPrompt();
  //upperPrompt();
  //numericPrompt();
  //specialPrompt();

  // generate pass based on user input

  var generatedPass = '';

  for (i = 0; i < pwLength; i++) {

  }

  return generatedPass;
}

// prompt user for pw length and returns their entry if it is a number
var getLength = function() {

  //get input in number form
  var length = Number(window.prompt("Enter a length for the password (please choose a value from 8-128):"));

  // if user entered a number 8-128, return the number
  if (!Number.isNaN(length) && length >= 8 && length <= 128) {

    console.log("user entered a valid number: ", length)
    return length;
  }

  //user entered an invalid number
  console.log("user entered an invalid number: ", length)
  window.alert("You did not provide a valid number. Please try again.");
  return getLength();
}