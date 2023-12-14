// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
var uppercase = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
var numeric = [...Array(10)].map((_, i) => String.fromCharCode(i + 48));
var special = [...Array(15)].map((_, i) => String.fromCharCode(i + 33));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (removed writePassword and replaced with e =>)
generateBtn.addEventListener("click", e => {
  let passwordLength = prompt("How long should this password be?", "8-128 characters");
  let isLowercase = confirm("Should password include lowercase letters? (Ok = Yes, Cancel = No)");
  let isUppercase = confirm("Should password include UPPERCASE letters? (Ok = Yes, Cancel = No)");
  let isNumeric = confirm("Should password include any numbers? (Ok = Yes, Cancel = No)");
  let isSpecial = confirm("Should password include any special characters? (Ok = Yes, Cancel = No)");
});


//Randomizers
function randomLowercase(lowercase) {
  return lowercase[Math.floor(Math.random()*lowercase.length)];
}

function randomUppercase(uppercase) {
  return uppercase[Math.floor(Math.random()*uppercase.length)];
}

function randomNumeric(numeric) {
  return numeric[Math.floor(Math.random()*numeric.length)];
}

function randomSpecial(special) {
  return special[Math.floor(Math.random()*special.length)];
}


// if (isLowercase: true) {
//   console.log(randomLowercase(lowercase));
// }

