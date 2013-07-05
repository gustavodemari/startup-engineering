#!/usr/bin/env node
var fs = require('fs');
var outfile = "primos.txt";

var numeroPrimo = function(number){

  var divisores = []
  for(i=1;i<number;i++){
    if(number%i==0){
      divisores.push(i)
    }
  }
  if(divisores.length>1){
    return false
  }
  else {
    return true
  }
}

var arr = []

for (i=2; arr.length<100;i++){
  if(numeroPrimo(i)){
    arr.push(i)
  }
}

fs.writeFileSync(outfile, arr);  
console.log("Script: " + __filename + "\nWrote: " + arr + "To: " + outfile);
