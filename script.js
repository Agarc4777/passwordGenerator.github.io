// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
function generatePassword (){
  var question = prompt("what is the desired password length?")
  console.log('question:', question)
  var lowCaps = confirm("lowerCase?")
  console.log('lowCaps:', lowCaps)
  var Caps = confirm("upperCase?")
  console.log('Caps:', Caps)
  var numbers = confirm("Numbers?")
  console.log('numbers:', numbers)
  var symbols = confirm("Symbols?")
  console.log('symbols:', symbols)
 }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  

// User clicks generate button

// Display set of questions to the user 
//     - Prompt for password length
//     - Ask four types of chars  - confirms

// Generate password
//     - Need all the char types
//     - Determine what chars to pick from
//     - Loop thru how many times for the password length and pick a random char
//         - Build a password
//     - Return password

//     - 

