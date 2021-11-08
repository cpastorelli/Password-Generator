// Variables
const passwordBase = "abcdefghijklmnopqrstuvwxyz";
const upper_case = passwordBase.toUpperCase();
const num_required = "0123456789";
const sym_required = "!@#$%^&*()";

const question1 = "Will you need any uppercase letters?";
const question2 = "Do you want numbers in your password? ";
const question3 = "Do you want special characters in your password?";
const promptEnd = "\n type yes or no";

//onclick event to call start password generation. 
document.getElementById("generate").onclick = beginCriteria;

//click button to make password criteria prompts
function beginCriteria() {
  //Prompt asking for password length
  let passLength = getPassLength();
  //Prompt asking if uppercase letters are needed
  let addUpper = setPreferences(question1, promptEnd);
  //Prompt asking if numbers are needed
  let addNum = setPreferences(question2, promptEnd);
  //Prompt asking is special characters are needed
  let addSym = setPreferences(question3, promptEnd);
  //Turning the string into an array and randomizing characters
  let thePasswordString = createPasswordString(addUpper, addNum, addSym, passLength);
  //cutting the string down to the length required
  let thePassword = thePasswordString.substring(0, passLength);
  //save value of thePassword to the id = password value
  document.getElementById("password").value = thePassword;
  return;
}

//Prompt 1: Length: min 8 characters, max 128 characters
function getPassLength() {
  do{

    var lengthOfPassword = prompt("How long of a password do you need?");
    //validate correct numbers and parameters
  } while (isNaN(lengthOfPassword) || lengthOfPassword < 8 || lengthOfPassword > 128);
  
  //turn string input into number
  lengthOfPassword = Number(lengthOfPassword);
  // return number
  return lengthOfPassword;
}

//all prompts: only thing that changes is the prompt.....
function setPreferences(question, yesNo){
  do{

    var addCriteria = prompt(question + yesNo);
    addCriteria = addCriteria.toLowerCase();
    //validate yes no response
  }while(addCriteria !== "no"  && addCriteria !== "yes");

  //return yes no string value
  return addCriteria;
}

//random number generator
function createPasswordString(addUppercase, addNumber, addSymbol, pLength){

  //Create basic password string using only lowercase characters
 let potentialPassword = passwordBase;
 
 //if user typed yes, concat uppercase characters to potentialPassword
 if (addUppercase === "yes") potentialPassword += upper_case;
 //if user typed yes, concat number characters to potentialPassword
 if (addNumber === "yes")  potentialPassword += num_required;
 //if user typed yes, concat symbol characters to potentialPassword
 if (addSymbol === "yes")  potentialPassword += sym_required;

  // check if the length required for the password is at least 128 characters long
  // if not, add potential password to itself until length max has been achieved
 while (potentialPassword.length < 128 ) {
    potentialPassword += potentialPassword;
  }

 //Turn password string into an array
 let ArrayOfPassword = Array.from(potentialPassword);

 //randomize the array
 for(let i =0; i < ArrayOfPassword.length; i++) {
   //create a random number via number generator
   let rand = Math.floor(Math.random()* ArrayOfPassword.length - 1);
   //create a temporary value placeholder
   let temp = ArrayOfPassword[i];

   // save value from random number index in array, and save to index i of array
   ArrayOfPassword[i] = ArrayOfPassword[rand];
   //have value in random number index now be temporary value placeholder
   ArrayOfPassword[rand] = temp;
  }

 //Turn array back into a string using join
 potentialPassword = ArrayOfPassword.join("");
 //return string value
 return potentialPassword;
}