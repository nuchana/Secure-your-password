// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword () {
// Creating an empty array for our characters to be chosen from.
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
  

// Prompt the length of password
function promptLength(i) { 
    document.write("choose a length of at least 8 characters and no more than 128 characters"); 

// function to generate combination of password. 
for (var i = 1; 8 <= i <= 128; i++){
    var characters = Math.floor(Math.random()*lowerCasedCharacters.length + 1); 
    password += lowerCasedCharacters.charAt(characters)


return password
}

function gfg_Run() { 
    el_down.innerHTML = generateP(); 
} 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);