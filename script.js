
// Assignment code here
function generatePassword() {
  var characterNumbers = window.prompt("How many characters would you like your password to be?");
  window.alert(characterNumbers);
  //storing input value of characterNumbers.
  console.log(characterNumbers);
  var characterNumbers();
  

  

  // ask for password length
  var passwordLength = characterNumbers;

  var count = 0;

  var upperCaseLetters = ["A", "B", "C", "D", "E"]
  //                       0    1     2    3   4


  // upperCaseLetters[0] ----> A
  // upperCaseLetters[3.7] ---> ???

  while(count < passwordLength) {


    // get a random character from the array

    var randomNumber = Math.floor(Math.random() * upperCaseLetters.length)

    myPassword = myPassword + upperCaseLetters[randomNumber]
    count = count + 1;
  }





  return myPassword
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
