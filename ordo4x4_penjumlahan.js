console.log("2.) Penjumlahan Matriks Ordo 4x4.\n");
console.log("         |1 2 3 4|        |4 5 6 1|");
console.log("     A = |3 2 1 5|    B = |6 5 4 2|");
console.log("         |2 1 3 6|        |5 4 6 3|");
console.log("         |6 3 1 2|        |3 6 4 5|\n")
console.log("     Hasil :\n");

var a = [[1, 2, 3, 4], [3, 2, 1, 5], [2, 1, 3, 6], [6, 3, 1, 2]];
var b = [[4, 5, 6, 1], [6, 5, 4, 2], [5, 4, 6, 3], [3, 6, 4, 5]];

var res1 = a[0][0] + b[0][0]; 
var res2 = a[0][1] + b[0][1];
var res3 = a[0][2] + b[0][2];
var res4 = a[0][3] + b[0][3];
var res5 = a[1][0] + b[1][0];
var res6 = a[1][1] + b[1][1];
var res7 = a[1][2] + b[1][2];
var res8 = a[1][3] + b[1][3];
var res9 = a[2][0] + b[2][0];
var res10 = a[2][1] + b[2][1];
var res11 = a[2][2] + b[2][2];
var res12 = a[2][3] + b[2][3];
var res13 = a[3][0] + b[3][0];
var res14 = a[3][1] + b[3][1];
var res15 = a[3][2] + b[3][2];
var res16 = a[3][3] + b[3][3];

console.log("                             |", res1, res2, res3, res4,"|");
console.log("     Matriks A + Matriks B = |", res5, res6, res7, res8,"|");
console.log("                             |", res9, res10, res11, res12,"|");
console.log("                             |", res13, res14, res15, res16,"|\n");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Aulia Ilham Zukri - 20190801368");