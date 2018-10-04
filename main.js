function palindrome(str) {

  var re = /[\W_]/g; var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); $("#output").val(reverseStr === lowRegStr);

}

$("#submit").on("click", function() {

  palindrome($("#input").val());
});
