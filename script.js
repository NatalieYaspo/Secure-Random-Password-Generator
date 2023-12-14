// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
var UPPERCASE = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
var numeric = [...Array(10)].map((_, i) => String.fromCharCode(i + 48));
var special = [...Array(15)].map((_, i) => String.fromCharCode(i + 33));
console.log(lowercase);
console.log(UPPERCASE);
console.log(numeric);
console.log(special);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (removed writePassword and replaced with e =>)
generateBtn.addEventListener("click", e => {
  var passwordLength = prompt("How long should this password be?", "8-128 characters");
  var isLowercase = confirm("Should password include lowercase letters? (Ok = Yes, Cancel = No)");
  var isUppercase = confirm("Should password include UPPERCASE letters? (Ok = Yes, Cancel = No)");
  var isNumeric = confirm("Should password include any numbers? (Ok = Yes, Cancel = No)");
  var isSpecial = confirm("Should password include any special characters? (Ok = Yes, Cancel = No)");
});


// console.log(passwordLength);
// console.log(isLowercase);