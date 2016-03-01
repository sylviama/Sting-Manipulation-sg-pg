// Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.



//Reverse
document.getElementById("enter").addEventListener("click", function(){
  var testString = document.getElementById("input").value;
  reversal(testString);
});


function reversal(a) {
  var reverse = a.split("").reverse().join("");
  document.getElementById("reverse").innerHTML = reverse;
  return reverse;
}

//Alphabits
document.getElementById("enter").addEventListener("click", function(){
  var testString = document.getElementById("input").value;
  alphabits(testString);
});

function alphabits(a){
  var alp = a.split("").sort().join("");
  document.getElementById("alphabit").innerHTML = alp;
}

//Palindrome
document.getElementById("enter").addEventListener("click", function(){
  var testString = document.getElementById("input").value;
  palindrome(testString);
});


function palindrome(a) {
  if(reversal(a)=== a){
    document.getElementById("palindrome").innerHTML = "Your string is a palidrome";
  }
  else {
    document.getElementById("palindrome").innerHTML = "Nope";
  }
}







