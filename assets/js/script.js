
// prompts user for pw length and returns their entry if it is a number
var setLength = function() {

  //get input in number form
  var length = Number(window.prompt("Enter a length for the password (please choose a value from 8-128):"));

  // if user entered a number 8-128, return the number
  if (!Number.isNaN(length) && length >= 8 && length <= 128) {

    console.log("user entered a valid length: ", length)
    return length;
  }

  //user canceled or entered an invalid number
  console.log("user entered an invalid length: ", length)
  window.alert("You did not provide a valid number. Please try again.");
  return setLength();
}

// generates the String of characters to use in the password generation
var generateCharBank = function(hasLowerChars, hasUpperChars, hasNumericChars, hasSpecialChars) {

  var characterString = '';

  //build a string of the chars the password should contain
  if (hasLowerChars) {
    characterString += "abcdefghijklmnopqrstuvwxyz";
  }
  if (hasUpperChars) {
    characterString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (hasNumericChars) {
    characterString += "1234567890";
  }
  if (hasSpecialChars) {
    characterString += "!@#$%^&*?";
  }

  console.log("Building a password from the string: ", characterString)
  return characterString;
}

// function to generate and return the password based on user input
var generatePassword = function() {

  //get input from user
  var pwLength = setLength();
  var hasLower = confirm("Should your password include lowercase letters?\n(Ok = Yes, Cancel = No)");
  var hasUpper = confirm("Should your password include uppercase letters?\n(Ok = Yes, Cancel = No)");
  var hasNumeric = confirm("Should your password include numbers?\n(Ok = Yes, Cancel = No)");
  var hasSpecial = confirm("Should your password include any special characters?\n(Ok = Yes, Cancel = No)");

  // if user cancels all prompts, all has****** vars are false
  // give them a random password
  if (!hasLower && !hasUpper && !hasNumeric && !hasSpecial) {
    alert("You selected no criteria. Generating a random password");

    // choose random boolean values for password criteria until at least one is true
    while(!hasLower && !hasUpper && !hasNumeric && !hasSpecial) {
      if (Math.floor(Math.random() * 2) == 0) {
        hasLower = true;
      }
      if (Math.floor(Math.random() * 2) == 0) {
        hasUpper = true;
      }
      if (Math.floor(Math.random() * 2) == 0) {
        hasNumeric = true;
      }
      if (Math.floor(Math.random() * 2) == 0) {
        hasSpecial = true;
      }
    }
  }

  // log password criteria to console
  console.log("Password will include lowercase letters:", hasLower);
  console.log("Password will include uppercase letters:", hasUpper);
  console.log("Password will include numbers:", hasNumeric);
  console.log("Password will include special characters:", hasSpecial);

  //generate the string of chars to be used in password
  var charBank = generateCharBank(hasLower, hasUpper, hasNumeric, hasSpecial);

  //generate the password
  var password = "";
  for (i = 0; i < pwLength; i++) {
    password += charBank.charAt(Math.floor(Math.random() * charBank.length));
  }

  return password;
}

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