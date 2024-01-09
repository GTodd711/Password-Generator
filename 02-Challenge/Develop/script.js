// Assignment Code
var generateBtn = document.querySelector("#generate");

// password generator 
function writePassword(){
  var minLength = 8;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  function generatePassword( ) {
    var maxLength = parseInt(prompt("Enter the desired length of the password (between 8 and 128):"));

  // critea for for password
  if (isNaN(maxLength) || maxLength < minLength || maxLength > 128) {
    alert("Invalid input. Please enter a number between 8 and 128.");
    return;
  }
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var special = ["/","+","-","*","&","^","%","$","#","@","!"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  //user confirm
  var password = '';
  var includeLowerCase = confirm("Do you want to include lowercase characters?");
  var includeNumbers = confirm("Do you want to include numbers?");
  var includeSpecial = confirm("Do you want to include special characters?");
  var includeUpperCase = confirm("Do you want to include uppercase characters?");

  var categories = [];
  if (includeLowerCase) {
    categories.push(lowerCase);
  }
  if (includeNumbers) {
    categories.push(numbers);
  }
  if (includeSpecial) {
    categories.push(special);
  }
  if (includeUpperCase) {
    categories.push(upperCase);
  }

  if (categories.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  while (password.length < maxLength) {
    var randomCategory = categories[Math.floor(Math.random() * categories.length)];
    var randomChar = randomCategory[Math.floor(Math.random() * randomCategory.length)];
    password += randomChar;
  }

  password = password.slice(0, maxLength);
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
 
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
