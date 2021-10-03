// Assignment Code
var generateBtn = document.querySelector("#generate");

//create potential password values, separated by user requirements
const lower_case = "abcdefghijklmnopqrstuvwxyz";
const upper_case = lower_case.toUpperCase();
const num_required = "0123456789";
const sym_required = "!@#$%^&*()";

//click button to make password criteria prompts
function beginCriteria() {
  
  //Prompt asking for password length
  var passLength = getPassLength();
  
  //Prompt asking if uppercase letters are needed
  var addUpper = withUpper();
  
  //Prompt asking if numbers are needed
  var addNum = withNumbers();
  
  //Prompt asking is special characters are needed
  var addSym = withSpecial();
  
  //Turning the string into an array and randomizing characters
  var thePasswordString = createPasswordString(addUpper, addNum, addSym);
  
  //cutting the string down to the length required
  var thePassword = thePasswordString.substring(0, passLength);

  //save value of thePassword to the id = password value
  document.getElementById("password").value = thePassword;
  return;
}

//Prompt 1: Length
function getPassLength() {
 
  //lengthSelect must be:
  // 1. a number 
  //2. is at least 8 characters long 
  //3. no more than 128 characters long
  do{

    var lengthSelect = prompt("How long of a password do you need?");
    
    //validate correct numbers and parameters
  } while (isNaN(lengthSelect) || lengthSelect < 8 || lengthSelect > 128);
  
  //turn string input into number
  lengthSelect = Number(lengthSelect);

  // return number
  return lengthSelect;
}

//Prompt 2: Uppercase
function withUpper() {

  do {

    var withUppercase = prompt("Will you need any uppercase letters? \n Type yes or no");

    withUppercase = withUppercase.toLowerCase();

    //validate Yes no response
  } while(withUppercase !== "no"  && withUppercase !== "yes");

  //return yes no string value
  return withUppercase;
}

//Prompt 3: Numeric
function withNumbers() {

  do{

    var  addNumeric = prompt("Do you want numbers in your password? \n Type yes or no");

    addNumeric = addNumeric.toLowerCase();

    //validate yes no respones
  }while(addNumeric !== "no"  && addNumeric !== "yes");

  //return yes no string value
  return addNumeric;
}

//prompt 4: Special Characters
function withSpecial(){

  do{

    var addSymb = prompt("Do you want special characters in your password? \n type yes or no");
    
    addSymb = addSymb.toLowerCase();

    //validate yes no response
  }while(addSymb !== "no"  && addSymb !== "yes");

  //return yes no string value
  return addSymb;
}

//random number generator
function createPasswordString(upper, num, sym){

  //Create basic password string using only lowercase characters
 let basicPass = lower_case;
 
 //if user typed yes, concat uppercase characters to basicPass
 if (upper === "yes") basicPass += upper_case;
 
 //if user typed yes, concat number characters to basicPass
 if (num === "yes")  basicPass += num_required;
 
 //if user typed yes, concat symbol characters to basicPass
 if (sym === "yes")  basicPass += sym_required;

 //Turn password string into an array
 var ArrayPass = Array.from(basicPass);


for(var i =0; i < ArrayPass.length; i++) {

  //create a random number via number generator
  var rand = Math.floor(Math.random()* ArrayPass.length - 1);

  //create a temporary value placeholder
  var temp = ArrayPass[i];

  // save value from random number index in array, and save to index i of array
  ArrayPass[i] = ArrayPass[rand];

  //have value in random number index now be temporary value placeholder
  ArrayPass[rand] = temp;
}

//Turn array back into a string using join
 basicPass = ArrayPass.join ("");
 
 //return string value
 return basicPass;
}


