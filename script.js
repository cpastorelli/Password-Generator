// Assignment Code
var generateBtn = document.querySelector("#generate");

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

  //Prompt asking if uppercase letters are needed
  var addUppercase = withUpper();
  console.log("Am I adding Uppercases? " + addUppercase); //Take me out in the end

  //Prompt asking if numbers are needed
  var addNum = withNumbers();
  console.log("Am I adding numbers? " + addNum); //Take me out in the end

  var addSpecial = withSpecial();
  console.log("Am I adding special characters? " + addSpecial);


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
  
  return lengthSelect;
}

//Prompt 2: Uppercase
function withUpper() {

  do {

    var withUppercase = prompt("Will you need any uppercase letters? \n Type yes or no");

    withUppercase = withUppercase.toLowerCase();

    //validate Yes no response
  } while(withUppercase !== "no"  && withUppercase !== "yes");

  return withUppercase;
}

//Prompt 3: Numeric
function withNumbers() {

  do{

    var  addNumeric = prompt("Do you want numbers in your password? \n Type yes or no");

    addNumeric = addNumeric.toLowerCase();

    //validate yes no respones
  }while(addNumeric !== "no"  && addNumeric !== "yes");

  return addNumeric;
}

//prompt 4: Special Characters
function withSpecial(){

  do{

    var addSpecial = prompt("Do you want special characters in your password? \n type yes or no");

    addSpecial = addSpecial.toLowerCase();

    //validate yes no response
  }while(addSpecial !== "no"  && addSpecial !== "yes");

  return addSpecial;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


