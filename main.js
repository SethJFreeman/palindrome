function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, ''); // Removes Non-word Characters And Underscores
  var reverseStr = lowRegStr.split('').reverse().join(''); // Reverses string
  $("#output").val(reverseStr === lowRegStr); // Checks if normal string, and reversed string are the same
}

$("#submit").on("click", function() { // Calls palindrome function when user clicks submit button
  palindrome($("#input").val()); // Gets the input value
});
