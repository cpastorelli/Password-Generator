// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var addUppercase;
var addNumeric;
var addSpecial;


var upperElem = "ABCDEFGHIJKLMNOPQURSTVWXYZ";
var lowerElem = "abcdefghijklmnopqrstuvwxyz";
var numericElem ="0123456789";
var specialElem = "!@#$%^&**()";

//click button to make a password
//Now I get prompts
//Prompt 1: Length (8-128 characters)
//validate correct numbers and parameters
passLength = getPassLength();




function getPassLength() {
  var passLength = document.getElementById("passLength").value;
  if (isNaN(passLength) || passLength < 8 || passLength > 128)
  {
    text = "Input not valid";
  } else {

    text = "Alright! You entered the number NUMBERVALUE HERE. Next question..."
  }

  return passLength;
}









//Prompt 2: Uppercase
//validate Yes no response
//Prompt 3: Numeric
//validate yes no respones
//prompt 4: Special Characters
//validate yes no response
//All Prompts answered- password is generated to match criteria
//display the password written on page or as alert



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


