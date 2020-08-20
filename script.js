// Assignment Code and define var
var generateBtn = document.querySelector("#generate");
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var selectedCharacters = [];
var promptLength
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// ======= functions definition ======
function getUserOptions() {
   // get user options and store in vars. 
   // check for length (should be 8-128 characters)
   promptLength = parseInt(prompt("Choose a password length between 8 and 128"));
   if (promptLength <= 7 || promptLength >= 129) {
    alert ("Choose a password lenght between 8 and 128.");
    getUserOptions();
    return;
    
}
    // check if lower, upper, special, numberic and at least one is true. Else alert user
   var confirmLower = confirm("Do you want lowercase letters?");
   var confirmUpper = confirm("Do you want uppercase letters?");
   var confirmNumeric = confirm ("Do you want numeric?");
   var confirmspecialCharacter = confirm ("Do you want special characters?");
  
    if (confirmLower) {
        alert ("Add lowercase letters.");
        selectedCharacters = selectedCharacters.concat (lowerCasedCharacters);
    }
    if (confirmUpper) {
        alert ("Add uppercase letters.");
        selectedCharacters = selectedCharacters.concat (upperCasedCharacters);

    }
    if (confirmNumeric) {
        alert ("Add numbers.");
        selectCharacters = selectedCharacters.concat (numericCharacters);
    }

    if (confirmspecialCharacter) {
        alert ("Add special characters.");
        selectCharacters = selectedCharacters.concat (specialCharacters);
    }

    if (confirmLower === false && !confirmUpper && !confirmNumeric && !confirmspecialCharacter) {
        alert ("Please pick at least one character type.");
        getUserOptions();
        return
    }
    writePassword();
}
        
function generatePassword() {
   console.log (selectedCharacters)
    var password = "";

    var char = []
   

   for (var i = 0; i < promptLength; i++) {
    // var char = Math.floor(Math.random()* selectedCharacters.length+1);
    // password += selectedCharacters.charAt(char)
    
    // var num = Get a random number between 0 and selectedCharacters.length
    // password += selectedCharacters[num] 

    char. push (selectedCharacters [Math.floor (Math.random () * selectedCharacters.length)])
    }
    console.log (char)
   
    console.log (passwordText)

    passwordText.textContent = char.join(",")
    console.log (char.join(","))
   
}

// Add event listener to generate button
generateBtn.addEventListener("click", getUserOptions);
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
// document.getElementById("myBtn").addEventListener("click", function(){
// document.getElementById("demo").innerHTML = "Hello World";
//});

