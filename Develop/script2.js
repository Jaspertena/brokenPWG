var generateBtn = document.getElementById("generate");
var textarea = document.getElementById("password");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = "!@#$%^&*()".split("");

function generatePassword() {
    var passwordLength = prompt("How many characters 8 - 128?");
    var allCharacters = []
    while (passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid password length 8 - 128.");
        passwordLength = prompt("How many characters 8 - 128?");
        console.log(passwordLength);
     }

     var uppercaseconfirm = (prompt("Would you like to include uppercase characters?"));
     if (uppercaseconfirm === "yes" || uppercaseconfirm === "y" || uppercaseconfirm === "YES" || uppercaseconfirm === "Y") {
         allCharacters = allCharacters.concat(uppercase);
         console.log(allCharacters);
     }else {
         var Areyousure = (prompt("Are you sure you don't want to include uppercase characters?"));
         if (Areyousure === "yes" || Areyousure === "y" || Areyousure === "YES"|| uppercaseconfirm === "Y"){
             alert("That's ok")
         }else{
            uppercaseconfirm = (prompt("Would you like to include uppercase characters?"))
         }
    
     var lowercaseconfirm = (prompt("Would you like to include lowercase characters?"));
     if (lowercaseconfirm === "yes" || lowercaseconfirm === "y" || lowercaseconfirm === "YES" || uppercaseconfirm === "Y") {
         allCharacters = allCharacters.concat(lowercase);
         console.log(allCharacters)
     }else {
        if (Areyousure === "yes" || Areyousure === "y" || Areyousure === "YES"|| lowercaseconfirm === "Y"){
            alert("That's ok")
        }else{
           lowercaseconfirm = (prompt("Would you like to include lowercase characters?"))
        }

     var numberconfirm = (prompt("Would you like to include numbers characters?"));
     if (numberconfirm === "yes" || numberconfirm === "y" || numberconfirm === "YES" || uppercaseconfirm === "Y") {
         allCharacters = allCharacters.concat(number);
         console.log(allCharacters)
     }else {
        var Areyousure = (prompt("Are you sure you don't want to include numbers characters?"));
        if (Areyousure === "yes" || Areyousure === "y" || Areyousure === "YES"|| numberconfirm === "Y"){
            alert("That's ok")
        }else{
           numberconfirm = (prompt("Would you like to include numbers characters?"))
        }

     var specialconfirm = (prompt("Would you like to include special characters?"));
     if (specialconfirm === "yes" || specialconfirm === "y" || specialconfirm === "YES" || uppercaseconfirm === "Y") {
         allCharacters = allCharacters.concat(special);
         console.log(allCharacters)
     }else {
        if (Areyousure === "yes" || Areyousure === "y" || Areyousure === "YES"|| specialconfirm === "Y"){
            alert("That's ok")
        }else{
           specialconfirm = (prompt("Would you like to include special characters?"))
        }

     var finalpassword=""

     for(var i = 0; i < passwordLength; i++) {
         finalpassword+= allCharacters[Math.floor(Math.random()*allCharacters.length)]
     }
    // alert(finalpassword)
    //  var numberconfirm = (prompt("Would you like to include uppercase characters?"));
    textarea.innerHTML = finalpassword;
}

generateBtn.addEventListener('click',generatePassword)