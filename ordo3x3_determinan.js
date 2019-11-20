console.log("2.)  Determinan Matriks Ordo 3x3.\n");
console.log("         |1 2 3|        |4 5 6|");
console.log("     A = |3 2 1|    B = |6 5 4|");
console.log("         |2 1 3|        |5 4 6|\n");
console.log("     Hasil :\n");

var a = [[1, 2, 3], [3, 2, 1], [2, 1, 3]];
var b = [[4, 5, 6], [6, 5, 4], [5, 4, 6]];

var det_a0 = (a[0][0] * a[1][1] * a[2][2]) + (a[0][1] * a[1][2] * a[2][0]) + (a[0][2] * a[1][0] * a[2][1]);
var det_a1 = (a[0][2] * a[1][1] * a[2][0]) - (a[0][0] * a[1][2] * a[2][1]) - (a[0][1] * a[1][0] * a[2][2]);
var det_a = det_a0 - det_a1;

var det_b0 = (b[0][0] * b[1][1] * b[2][2]) + (b[0][1] * b[1][2] * b[2][0]) + (b[0][2] * b[1][0] * b[2][1]);
var det_b1 = (b[0][2] * b[1][1] * b[2][0]) - (b[0][0] * b[1][2] * b[2][1]) - (b[0][1] * b[1][0] * b[2][2]);
var det_b = det_b0 - det_b1;

console.log("     |A| =",det_a,"\n");
console.log("     |B| =",det_b,"\n");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Aulia Ilham Zukri - 20190801368");