// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword (){
  var text; 
  var passwordLength = prompt("Please choose a length of at least 8 characters and no more than 128 characters");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);