var generateBtn = document.querySelector("#generate");

var Choices = userChoices;

var PWCharacters = PWCharacters;
var SpecialsConfirm = SpecialsConfirm;
var NumbersConfirm = NumbersConfirm;
var UpperConfirm = UpperConfirm;
var LowerConfirm = LowerConfirm;

var userChoices = [
  PWCharacters,
  UpperConfirm,
  LowerConfirm,
  SpecialsConfirm,
  NumbersConfirm,
];

var Upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var Lower = ["abcdefghijklmnopqrstuvwxyz"];
var Numbers = ["123456789"];
var Specials = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "+", "?"];

function writePassword() {
  PWCharacters = parseInt(
    prompt(
      "How many characters would you like to be in your new password? Please choose between 8 and 128."
    )
  );
  if (PWCharacters > 128 || PWCharacters < 8 || !PWCharacters) {
    alert("Invalid entry. Your password must be between 8 and 128 characters");
    PWCharacters = parseInt(
      prompt(
        "How many characters should be in your new password? Please choose between 8 and 128."
      )
    );
  } else {
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
  }
  if (!SpecialsConfirm && !NumbersConfirm && !UpperConfirm && !LowerConfirm)
  return [userChoices];
  for (let i = 0; i < userChoices.PWCharacters; i++) {
      const element = array[i];
    }
}

generateBtn.addEventListener("click", writePassword);

console.log("PWCharacters - ", PWCharacters);
console.log("Specials - ", SpecialsConfirm);
console.log("Numbers - ", NumbersConfirm);
console.log("AlphabetUpper - ", UpperConfirm);
console.log("AlphabetLower - ", LowerConfirm);
console.log("Choices - ", Choices);