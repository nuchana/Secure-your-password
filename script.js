// Assignment Code and define var
var generateBtn = document.querySelector("#generate");
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var selectedCharacters = [];

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
   var promptLength = parseInt(prompt("Choose a password length between 8 and 128"));
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
        selectedCharacters.concat (lowerCasedCharacters);
    }
    if (confirmUpper) {
        alert ("Add uppercase letters.");
        selectedCharacters.concat (upperCasedCharacters);

    }
    if (confirmNumeric) {
        alert ("Add numbers.");
        selectedCharacters.concat (numericCharacters);
    }

    if (confirmspecialCharacter) {
        alert ("Add special characters.");
        selectedCharacters.concat (specialCharacters);
    }

    if (confirmLower === false && !confirmUpper && !confirmNumeric && !confirmspecialCharacter) {
        alert ("Please pick at least one character type.");
        getUserOptions();
        return
    }
    writePassword();
}
        
function generatePassword() {
   var password = "";

   for (var i = 0; i < promptLength; i++) {
       var char = Math.floor(Math.random()* selectedCharacters.length+1);
       pass += selectedCharacters.charAt(char)
    
    // var num = Get a random number between 0 and selectedCharacters.length
    // password += selectedCharacters[num]
   }
   return password;
}
 

function generateP() { 
    var pass = ''; 
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
            'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
      
    for (i = 1; i <= 8; i++) { 
        var char = Math.floor(Math.random() 
                    * str.length + 1); 
          
        pass += str.charAt(char) 
    } 
      
    return pass; 
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


