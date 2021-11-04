// Assignment Code
//create potential password values, separated by user requirements
const lower_case = "abcdefghijklmnopqrstuvwxyz";
const upper_case = lower_case.toUpperCase();
const num_required = "0123456789";
const sym_required = "!@#$%^&*()";
const prompt1 = "Will you need any uppercase letters?";
const prompt2 = "Do you want numbers in your password? ";
const prompt3 = "Do you want special characters in your password?";
const promptEnd = "\n type yes or no";

//click button to make password criteria prompts
function beginCriteria() {
  //Prompt asking for password length
  let passLength = getPassLength();
  //Prompt asking if uppercase letters are needed
  let addUpper = setPreferences(prompt1, promptEnd);
  //Prompt asking if numbers are needed
  let addNum = setPreferences(prompt2, promptEnd);
  //Prompt asking is special characters are needed
  let addSym = setPreferences(prompt3, promptEnd);
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

    var lengthSelect = prompt("How long of a password do you need?");
    //validate correct numbers and parameters
  } while (isNaN(lengthSelect) || lengthSelect < 8 || lengthSelect > 128);
  
  //turn string input into number
  lengthSelect = Number(lengthSelect);
  // return number
  return lengthSelect;
}

//all prompts: only thing that changes is the prompt.....
function setPreferences(phrase1, phrase2){
  do{

    var addSymb = prompt(phrase1 + phrase2);
    addSymb = addSymb.toLowerCase();
    //validate yes no response
  }while(addSymb !== "no"  && addSymb !== "yes");

  //return yes no string value
  return addSymb;
}

//random number generator
function createPasswordString(upper, num, sym, pLength){

  //Create basic password string using only lowercase characters
 let basicPass = lower_case;
 
 //if user typed yes, concat uppercase characters to basicPass
 if (upper === "yes") basicPass += upper_case;
 //if user typed yes, concat number characters to basicPass
 if (num === "yes")  basicPass += num_required;
 //if user typed yes, concat symbol characters to basicPass
 if (sym === "yes")  basicPass += sym_required;

  // check if the length required for the password is at least 128 characters long
  // if not, add potential password to itself until length max has been achieved
 while (basicPass.length < 128 ) {
    basicPass += basicPass;
  }

 //Turn password string into an array
 let ArrayPass = Array.from(basicPass);
 
 for(let i =0; i < ArrayPass.length; i++) {
   //create a random number via number generator
   let rand = Math.floor(Math.random()* ArrayPass.length - 1);
   //create a temporary value placeholder
   let temp = ArrayPass[i];

   // save value from random number index in array, and save to index i of array
   ArrayPass[i] = ArrayPass[rand];
   //have value in random number index now be temporary value placeholder
   ArrayPass[rand] = temp;
  }

 //Turn array back into a string using join
 basicPass = ArrayPass.join("");
 //return string value
 return basicPass;
}

//onclick event to call start password generation. 
document.getElementById("generate").onclick = beginCriteria;