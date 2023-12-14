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

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword) {
  // var passwordLength = prompt("How long should this password be?", "8-128 characters");
  // var isLowercase = prompt("Should password include lowercase letters? (Ok = yes, Cancel = No");
  // var isUppercase = prompt("Should password include UPPERCASE letters? (Ok = yes, Cancel = No");
  // var isNumeric = prompt("Should password include any numbers? (Ok = yes, Cancel = No");
  // var isSpecial = prompt("Should password include any special characters? (Ok = yes, Cancel = No");



// console.log(passwordLength);
// console.log(isLowercase);