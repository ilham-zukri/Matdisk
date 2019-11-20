console.log("3.) Menghitung n! dengan menggunakan looping for.\n");

var r = require('readline-sync');
var faktorial = 1 ;
var val = parseInt(r.question("    Masukan Nilai = "));

for (var loopindex = 1 ; loopindex <= val; loopindex++) {
    faktorial = loopindex * faktorial;
}

console.log("\n    Jawaban ->\n");
console.log("    Nilai dari", val+"!","adalah",faktorial);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Aulia Ilham Zukri - 20190801368");