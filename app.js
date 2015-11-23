var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');


document.getElementById('form_event').addEventListener("submit", function(e) {
  e.preventDefault();
  var result = 0;
  var operator = document.getElementById('operator').value;
  switch(operator){
    case '+':
    result = (parseInt(num1.value) + parseInt(num2.value));
    break;
    case '-':
    result = (parseInt(num1.value) - parseInt(num2.value));
    break;
    case '*':
    result = (parseInt(num1.value) * parseInt(num2.value));
    break;
    case '/':
    result = (parseInt(num1.value) / parseInt(num2.value));
    break;
    case '**':
    result = Math.pow(parseInt(num1.value), parseInt(num2.value));
    break;
    case 'sqrt':
    result = Math.sqrt(parseInt(num1.value));
    break;
    case '%':
    result = (parseInt(num1.value) % parseInt(num2.value));
    break;
    case 'log':
    result = Math.log(num1.value);
    break;
  }
  alert(result);
});


var digits = document.getElementById('digits');
document.getElementById('form_event2').addEventListener("submit", function(e) {
  e.preventDefault();
  var largest = 0

  function reverse(s) {
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
  }

  function isPalindrome(num) {
    var stringNum = num + '';
    var reversedNum = reverse(stringNum);
    return stringNum === reversedNum;
  }

  function calcHighestPalindrome(low, high) {
    var result = 0
    for (var i=low; i<high; i++) {
      for (var j=low; j<high; j++) {
        var product = i*j;
        if ( (product > result) && isPalindrome(product) ) {
          result = product;
        };
      };
    };
    return result;
  }

  var result = 0
  switch(parseInt(digits.value)){
    case 1:
    result = calcHighestPalindrome(1, 10);
    break;
    case 2:
    result = calcHighestPalindrome(10, 100);
    break;
    case 3:
    result = calcHighestPalindrome(100, 1000);
    break;
    case 4:
    result = calcHighestPalindrome(1000, 10000);
    break;
    case 5:
    result = calcHighestPalindrome(10000, 100000);
    break;
    case 6:
    result = calcHighestPalindrome(100000, 1000000);
    break;
    case 7:
    result = calcHighestPalindrome(1000000, 10000000);
    break;
    case 8:
    result = calcHighestPalindrome(10000000, 100000000);
    break;
    case 9:
    result = calcHighestPalindrome(100000000, 1000000000);
    break;
  }

  alert(result);
});


var limit = document.getElementById("limit");
var factor1 = document.getElementById("factor1");
var factor2 = document.getElementById("factor2");

document.getElementById('form_event3').addEventListener("submit", function(e) {
  e.preventDefault();
  var multiples = []
  for (var i=1; i<parseInt(limit.value); i++) {
    if ((i % parseInt(factor1.value) === 0) || (i % parseInt(factor2.value) === 0)) {
      multiples.push(i);
    };
  };

  alert(eval(multiples.join("+")));
});


var fibLimit = document.getElementById("fib-limit");

document.getElementById('form_event4').addEventListener("submit", function(e) {
  e.preventDefault();



  alert(result);
});



