function palindrome(text) { 
  var choice = prompt("do you want to check if a word or phrase is a palindrome? (yes/no)").toLowerCase(); 
  if (choice === "yes") {
    checkPalindrome();
  }
  else {
    document.write("<div>Palindrome checker exited.</div>");
  }
}
function checkPalindrome() {

  
  
  var promptText = "Enter a word or phrase to check if it's a palindrome:";
  var input = prompt(promptText + " (ignore spaces and punctuation)").toLowerCase().replace(/[^a-z0-9]/g, '');  

  var reversedInput = input.split('').reverse().join('');

  if (input === reversedInput) {
    document.write("<div>" + text + " is a palindrome </div>");
  } 
  else {
    document.write("<div>" + text + " is not a palindrome </div>");
  }
}