// Assignment Code. var
var upperCase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var lowerCase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var numbers = ("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
var symbols = "~ ! @ # $ % ^ & * ( ) _ + { } : < > ? - = [ ] ; ' , . /";
var userInput = []
  
var generateBtn = document.querySelector("#generate");
  
  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  
  
  var generateBtn = document.querySelector("#generate");

// Write password to the #password input. function
function generatePassword() {
  //alerts if minimum or maximum numbers have been exceeded.
  var characterLength = 0
  while ((characterLength < 8 || characterLength > 128) || Number.isInteger(characterLength)=== false){
    characterLength = parseInt(prompt("Please choose a password length from 8 to 128."))
  }
    var specialCharacters = false
    var numericCharacters = false
    var uppercaseCharacters = false
    var lowercaseCharacters = false

    while (!specialCharacters && !numericCharacters && !uppercaseCharacters && !lowercaseCharacters) {
    //pop-up confirms start here
    var uppercaseCharacters = confirm("Would you like to use Upper Case letters?")
    if (upperCase === true) {
      password = []
    }

    var lowercaseCharacters = confirm("Would you like to use Lower Case letters?")
    if (lowerCase === true) {
      password = []
    }
    
    var numericCharacters = confirm("Would you like to use numbers?")
    if (numbers === true) {
      password = []
    }
    
    var specialCharacters = confirm("Would you like to use symbols? (~!@#$%^&*()_+{}:<>?-=[];',./)")
    if (symbols === true) {
      password = []
    }
  }

  if (specialCharacters) {
    userCharacters += specials;
  }

  if (numericCharacters) {
    userCharacters += numbers;
  }

  if (lowercaseCharacters) {
    userCharacters += lowercaseLetters;
  }

  if (uppercaseCharacters) {
    userCharacters += uppercaseLetters;
  }
  
  var password = ""
  for (var i = 1; i <= characterLength; i++) {
    var index = Math.floor(Math.random() * userCharacters.length)
    password = password + userCharacters[index]
  }
  return generatePassword

}


// Add event listener to generate button. listener
generateBtn.addEventListener("click", writePassword);