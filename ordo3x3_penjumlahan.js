console.log("2.) Penjumlahan Matriks Ordo 3x3.\n");
console.log("         |1 2 3|        |4 5 6|");
console.log("     A = |3 2 1|    B = |6 5 4|");
console.log("         |2 1 3|        |5 4 6|\n");
console.log("     Hasil :\n");

var a = [[1, 2, 3], [3, 2, 1], [2, 1, 3]];
var b = [[4, 5, 6], [6, 5, 4], [5, 4, 6]];

var res1 = a[0][0] + b[0][0];
var res2 = a[0][1] + b[0][1];
var res3 = a[0][2] + b[0][2];
var res4 = a[1][0] + b[1][0];
var res5 = a[1][1] + b[1][1];
var res6 = a[1][2] + b[1][2];
var res7 = a[2][0] + b[2][0];
var res8 = a[2][1] + b[2][1];
var res9 = a[2][2] + b[2][2];

console.log("                               |",res1, res2, res3,"|");
console.log("     Matriks A + Matriks B =   |",res4, res5, res6,"|");
console.log("                               |",res7, res8, res9,"|\n");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Aulia Ilham Zukri - 20190801368");