// myString = "hello world";
// console.log(myString)
// //var myString = "hello world"; //[1,2,3] {key:value, key:value}
// test()
// //console.log(myString)
// //myString = "hello Josh";
// function test(){
//     alert("wtf!?")
// }
// var myString;
var generateBtn = document.querySelector("#generate");
var Choices, PWCharacters, SpecialsConfirm, UpperConfirm, LowerConfirm, NumbersConfirm
// var userChoices = [
//   PWCharacters,
//   UpperConfirm,
//   LowerConfirm,
//   SpecialsConfirm,
//   NumbersConfirm,
// ];
var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lower = "abcdefghijklmnopqrstuvwxyz";
var Numbers = "123456789";
var Specials = "!@#$%^&*=+?";
var charPool = "";
function writePassword() {
    PWCharacters = parseInt(
      prompt(
        "How many characters would you like to be in your new password? Please choose between 8 and 128."
      )
    );

    while(PWCharacters > 128 || PWCharacters < 8 || !PWCharacters){
        alert("Invalid entry. Your password must be between 8 and 128 characters");
        PWCharacters = parseInt(
          prompt(
            "How many characters would you like to be in your new password? Please choose between 8 and 128."
          )
        );
   };

    SpecialsConfirm = confirm(
      "Would you like special characters in your password?"
    );
    NumbersConfirm = confirm("Would you like numbers in your password?");
    UpperConfirm = confirm(
      "Would you like uppercase letters in your password?"
    );
    LowerConfirm = confirm(
      "Would you like lowercase letters in your password?"
    );
    if(UpperConfirm){
        charPool += Upper;
    }
    if(LowerConfirm){
        charPool += Lower;
    }
    if(SpecialsConfirm){
        charPool += Specials;
    }
    if(NumbersConfirm){
        charPool += Numbers;
    }

    console.log("your characters - ", charPool)
  if (!SpecialsConfirm && !NumbersConfirm && !UpperConfirm && !LowerConfirm){
      alert("You gotta at least choose one type of character homie!")
      return writePassword()
  };
  var password = "";
  for (var i = 0; i < PWCharacters; i++) {
      //how to get randomIndex between 0 and length of charPool-1
      var randomIndex = Math.floor(Math.random()*charPool.length);
      password += charPool[randomIndex];
    }
    console.log(password);
    document.querySelector("#password").textContent = password;
}

generateBtn.addEventListener("click", writePassword);

// console.log("PWCharacters - ", PWCharacters);
// console.log("Specials - ", SpecialsConfirm);
// console.log("Numbers - ", NumbersConfirm);
// console.log("AlphabetUpper - ", UpperConfirm);
// console.log("AlphabetLower - ", LowerConfirm);
// console.log("Choices - ", Choices);