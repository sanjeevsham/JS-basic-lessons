export function myFunction() {
    var currency = document.getElementById('amount');
    var result = Math.floor(currency);
    document.getElementById('result').innerHTML = result;
  }