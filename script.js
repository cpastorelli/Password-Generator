// Assignment Code
var generateBtn = document.querySelector("#generate");

//var addNumeric;
//var addSpecial;


var upperElem = "ABCDEFGHIJKLMNOPQURSTVWXYZ";
var lowerElem = "abcdefghijklmnopqrstuvwxyz";
var numericElem ="0123456789";
var specialElem = "!@#$%^&**()";

//click button to make a password
function beginCriteria() {

  //Prompt asking for password length
  var passLength = getPassLength();
  console.log("Password length: " + passLength); //take me out in the end
  //I have a number variable here. So I need to make sure something happens where I can make an array?
  //That way I can add it all together in the end

  var addUppercase = withUpper();
  console.log("Am I adding Uppercases? " + addUppercase); //Take me out in the end

}

//Prompt 1: Length (8-128 characters)
function getPassLength() {
 
  //lengthSelect must be:
  // 1. a number 
  //2. is at least 8 characters long 
  //3. no more than 128 characters long
  do{

    var lengthSelect = prompt("How long of a password do you need?");
    
    //validate correct numbers and parameters
  } while (isNaN(lengthSelect) || lengthSelect < 8 || lengthSelect > 128);
  
  console.log(isNaN(lengthSelect)); //Take me out in the end

  return lengthSelect;
}

//Prompt 2: Uppercase
function withUpper() {
  do {
    var withUppercase = prompt("Will you need any uppercase letters? \n Type yes or no");
    withUppercase = withUppercase.toLowerCase();

    console.log(withUppercase); //Take me out in the end
    //validate Yes no response
  } while(withUppercase !== "no"  && withUppercase !== "yes");

  return withUppercase;
}



//validate yes no respones
//prompt 4: Special Characters

function addSpecial
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


