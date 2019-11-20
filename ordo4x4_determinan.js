console.log("2.) Determinan Matriks Ordo 4x4.\n");
console.log("         |1 2 3 4|");
console.log("     A = |3 2 1 5|");
console.log("         |2 1 3 6|");
console.log("         |6 3 1 2|\n")
console.log("     Hasil (Metode Sarrus) :\n");

var a = [[1, 2, 3, 4], [3, 2, 1, 5], [2, 1, 3, 6], [6, 3, 1, 2]];

var deta1a = a[0][0] * a[1][1] * a[2][2] * a[3][3];     var deta2a = a[0][0] * a[1][3] * a[2][2] * a[3][1];
var deta1b = a[0][1] * a[1][2] * a[2][3] * a[3][0];     var deta2b = a[0][1] * a[1][0] * a[2][3] * a[3][2];
var deta1c = a[0][2] * a[1][3] * a[2][0] * a[3][1];     var deta2c = a[0][2] * a[1][1] * a[2][0] * a[3][3];
var deta1d = a[0][3] * a[1][0] * a[2][1] * a[3][2];     var deta2d = a[0][3] * a[1][2] * a[2][1] * a[3][0];

var det1 = deta1a - deta1b + deta1c - deta1d - deta2a + deta2b - deta2c + deta2d;

var detb1a = a[0][0] * a[1][1] * a[2][3] * a[3][2];     var detb2a = a[0][0] * a[1][3] * a[2][1] * a[3][2];
var detb1b = a[0][1] * a[1][2] * a[2][0] * a[3][3];     var detb2b = a[0][1] * a[1][0] * a[2][2] * a[3][3];
var detb1c = a[0][2] * a[1][3] * a[2][1] * a[3][0];     var detb2c = a[0][2] * a[1][1] * a[2][3] * a[3][0];
var detb1d = a[0][3] * a[1][0] * a[2][2] * a[3][1];     var detb2d = a[0][3] * a[1][2] * a[2][0] * a[3][1];

var det2 = -detb1a + detb1b - detb1c + detb1d + detb2a - detb2b + detb2c - detb2d;

var detc1a = a[0][0] * a[1][2] * a[2][3] * a[3][1];     var detc2a = a[0][0] * a[1][2] * a[2][1] * a[3][3];
var detc1b = a[0][1] * a[1][3] * a[2][0] * a[3][2];     var detc2b = a[0][1] * a[1][3] * a[2][2] * a[3][0];
var detc1c = a[0][2] * a[1][0] * a[2][1] * a[3][3];     var detc2c = a[0][2] * a[1][0] * a[2][3] * a[3][1];
var detc1d = a[0][3] * a[1][1] * a[2][2] * a[3][0];     var detc2d = a[0][3] * a[1][1] * a[2][0] * a[3][2];

var det3 = detc1a - detc1b + detc1c - detc1d - detc2a + detc2b - detc2c + detc2d;

var det_a = det1 + det2 + det3;

console.log("     A1 =", det1);
console.log("     A2 =", det2);
console.log("     A3 =", det3);
console.log("    |A| =", det_a,"\n");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Aulia Ilham Zukri - 20190801368");