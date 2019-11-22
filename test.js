var i = require('readline-sync'); var a = parseInt(i.question("Masukan Nilai A = ")); var b = parseInt(i.question("Masukan Nilai B ="));
var c = a * b;

if (c < 100) {
  console.log(+c+" Lebih Kecil dari 100");
} else {
  console.log(+c+" Lebih Besar dari 100");
}
