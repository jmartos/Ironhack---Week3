
function caesarCipher(messageOriginal, shift) {
  var message = messageOriginal.split("")
  var solution = ""
  var shift = shift
  
   message.forEach(function(letter){
    if (letter >= "A" && letter <= "Z" || letter >= "a" && letter <= "z"){
    code = letter.charCodeAt(0);
      if (code+shift >= "65" && code+shift <= "90" || code+shift >= "97" && code+shift <= "122"){
        code = code
      }
      else if (code+shift>90 || code+shift>122){
        code = code-26
      }
      else if (code+shift<65 || code+shift<97){
        code = code+26
      }
    solution += String.fromCharCode(code+shift);
  }
    else {
      solution += letter
    }
  });
   return solution
}

var encrypted = caesarCipher("brutus", -3);
console.log(encrypted);
//=> "_orqrp"

var encrypted2 = caesarCipher("Et tu, brute?", 6);
console.log(encrypted2);
//=> "Kz z{, hx{zk?"



