// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {

// Var definition & Creating an empty array for our characters to be chosen from.
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var userOptionalChars = [lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters];
}

// ======= functions definition ======
function getUserOptions() {
   // get user options and store in vars. 
   var promptLength = parseInt(prompt("Choose a password length between 8 and 128"));
   var confirmLower = confirm("Do you want lowercase letters?");
   var confirmUpper = confirm("Do you want uppercase letters?");
   var confirmNumeric = confirm ("Do you want numeric?");
   var confirmspecialCharacter = confirm ("Do you want special characters?");
    // check for length (it should be longer than 8 and shorter than 128)
    // check if lower
    // check if upper
    // check if special
    // check if numeric
    // check that at least one is true
    // else - alert user
    if (promptLength) {
        alert ("Choose a password lenght between 8 and 128.")
    }
    if (confirmLower) {
        alert ("Add lowercase letters.")
    }
    if (confirmUpper) {
        alert ("Add uppercase letters.")
    }
    if (confirmNumeric) {
        alert ("Add numbers.")
    }
    else {
        alert ("Please pick at least one character type.")
    }
    // if (confirmLower || confirmUpper || confirmSpecial || confirmNumeric) {
    //alert ("Pick at least one character type")}
}
        
function generatePassword(userOptions) {
   var password = [];

   for (var i = 0; i < userOptionalChars.length; i++) {
    var num = Math.floor(Math.random() * 119) + 1;

   if (confirmLower) {
    Array.prototype.push.apply (userOptionalChars, lowerCasedCharacters);
   };

   // if lower
     // push a random lower char to password
     // add lowerCharsArray to userOptionalChars
   // if upper
     // push a random upper char to password
     // add upperCharsArray to userOptionalChars
   // if special
     // push a random special char to password
     // add specialCharsArray to userOptionalChars
   // if numeric
     // push a random numeric char to password
     // add numericCharsArray to userOptionalChars
   // for loop between start number of elemnts in password to the requested number of charactars
   // mutate the array to a string
   // return password string
 
// ======= functions calls (start) ======

// getUserOptions();

// generatePassword(userOption)


// Prompt the length of password
}
    

// Add event listener to generate button
// ----generateBtn.addEventListener("click", writePassword);
// var expectSpecialChars = false;
// var expectNumericChars = false;
// var expectUppercaseChars = false;
// var expectLowercaseChars = false;

// var userOptions = { 
//   expectSpecialChars: false,
//   expectNumericChars: false,
//   expectUppercaseChars: false,
//   expectLowercaseChars: false, 
//}
