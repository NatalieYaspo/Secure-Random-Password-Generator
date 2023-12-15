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
generateBtn.addEventListener("click", writePassword);
  
function generatePassword() {
  //propmts to get criteria for password.
  var passwordLength = prompt("How long should this password be?", "8-128 characters");
  //I NEED TO ENTER SOMETHING HERE TO ONLY ALLOW USER TO ENTER NUMBERS 8-128 AND KICK BACK AN ERROR FOR OTHER NUMBERS.
  var isLowercase = confirm("Should password include lowercase letters? (Ok = Yes, Cancel = No)");
  var isUppercase = confirm("Should password include UPPERCASE letters? (Ok = Yes, Cancel = No)");
  var isNumeric = confirm("Should password include any numbers? (Ok = Yes, Cancel = No)");
  var isSpecial = confirm("Should password include any special characters? (Ok = Yes, Cancel = No)");
  //newPassword will run everything below to develop the password.
  var newPassword = "";
  //loops will run to fill the length of the password that the user selected.
  for (let i = 0; i < passwordLength; i++) {
    //if and loops to see what the password needs.
     if(isLowercase) {
          var randomLowercase = Math.floor(Math.random()*lowercase.length)
          var lowerOptions = lowercase[randomLowercase];
           newPassword += lowerOptions
      }
      if(isUppercase) {
        var randomUppercase = Math.floor(Math.random()*uppercase.length)
        var upperOptions = uppercase[randomUppercase];
            newPassword += upperOptions;
      }
      if(isNumeric) {
            var randomNumeric = Math.floor(Math.random()*numeric.length)
            var numericOptions = numeric[randomNumeric];
            newPassword += numericOptions;
      }
      if(isSpecial) {
            var randomSpecial = Math.floor(Math.random()*special.length)
            var specialOptions = special[randomSpecial];
          newPassword += specialOptions;
      }
    }

     //This is where my password will actually spit out.   
    return newPassword;
  }
  
  //create a loop
  
//Randomizers
// function randomLowercase(lowercase) {
//   return lowercase[Math.floor(Math.random()*lowercase.length)];
// }

// var randomLowercase = Math.floor(Math.random()*lowercase.length)
// var lowerOptions = lowercase[randomLowercase];

// function randomUppercase(uppercase) {
//   return uppercase[Math.floor(Math.random()*uppercase.length)];
// }

// var randomUppercase = Math.floor(Math.random()*uppercase.length)
// var upperOptions = uppercase[randomUppercase];

// function randomNumeric(numeric) {
//   return numeric[Math.floor(Math.random()*numeric.length)];
// }

// var randomNumeric = Math.floor(Math.random()*numeric.length)
// var numericOptions = numeric[randomNumeric];

// function randomSpecial(special) {
//   return special[Math.floor(Math.random()*special.length)];
// }
// var randomSpecial = Math.floor(Math.random()*special.length)
// var specialOptions = numeric[randomSpecial];