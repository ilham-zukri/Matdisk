console.log("2.)  Invers Matriks Ordo 3x3.\n");
console.log("         |1 2 3|");
console.log("     A = |3 2 1|");
console.log("         |2 1 3|\n");
console.log("     Hasil :\n");

var a = [[1, 2, 3], [3, 2, 1], [2, 1, 3]];

var det_a0 = (a[0][0] * a[1][1] * a[2][2]) + (a[0][1] * a[1][2] * a[2][0]) + (a[0][2] * a[1][0] * a[2][1]);
var det_a1 = (a[0][2] * a[1][1] * a[2][0]) - (a[0][0] * a[1][2] * a[2][1]) - (a[0][1] * a[1][0] * a[2][2]);
var det_a = det_a0 - det_a1;

console.log("     |A| =",det_a);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

console.log("   # Minor matriks A : ");
var min11 = (a[1][1] * a[2][2]) - (a[2][1] * a[1][2]);      var min23 = (a[0][0] * a[2][1]) - (a[2][0] * a[0][1]);
var min12 = (a[1][0] * a[2][2]) - (a[2][0] * a[1][2]);      var min31 = (a[0][1] * a[1][2]) - (a[1][1] * a[0][2]);
var min13 = (a[1][0] * a[2][1]) - (a[2][0] * a[1][1]);      var min32 = (a[0][0] * a[1][2]) - (a[1][0] * a[0][2]);
var min21 = (a[0][1] * a[2][2]) - (a[2][1] * a[0][2]);      var min33 = (a[0][0] * a[1][1]) - (a[1][0] * a[0][1]);
var min22 = (a[0][0] * a[2][2]) - (a[2][0] * a[0][2]);    

console.log("                       |",min11,min12,min13,"  |");
console.log("     Minor Matriks A = |",min21,min22,min23," |");
console.log("                       |",min31,min32,min33,"|\n");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
console.log("   # Kofaktor matriks A : \n");

var kof11 = min11;              var kof23 = (min23 * -1);
var kof12 = (min12 * -1);       var kof31 = min31;
var kof13 = min13;              var kof32 = (min32 * -1);
var kof21 = (min21 * -1);       var kof33 = min33;
var kof22 = min22;

console.log("                          |",kof11,kof12,kof13,"|");
console.log("     Kofaktor Matriks A = |",kof21,kof22,kof23,"|");
console.log("                          |",kof31,kof32,kof33,"|\n");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
console.log("   # Adjoin matriks A : \n");

var adj11 = kof11;      var adj23 = kof32;
var adj12 = kof21;      var adj31 = kof13;
var adj13 = kof31;      var adj32 = kof23;
var adj21 = kof12;      var adj33 = kof33;
var adj22 = kof22;

console.log("              |",adj11,adj12,adj13,"|");
console.log("     Adj(A) = |",adj21,adj22,adj23,"|");
console.log("              |",adj31,adj32,adj33,"|\n");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

console.log("   # Invers matriks A : \n");
var inv11 = adj11 / det_a;      var inv23 = adj23 / det_a;
var inv12 = adj12 / det_a;      var inv31 = adj31 / det_a;
var inv13 = adj13 / det_a;      var inv32 = adj32 / det_a;
var inv21 = adj21 / det_a;      var inv33 = adj33 / det_a;
var inv22 = adj22 / det_a;

console.log("                        |",adj11+"/"+det_a, adj12+"/"+det_a, adj13+"/"+det_a,"|");
console.log("     Invers Matriks A = |",adj21+"/"+det_a, adj22+"/"+det_a, adj23+"/"+det_a,"|");
console.log("                        |",adj31+"/"+det_a, adj32+"/"+det_a, adj33+"/"+det_a,"|\n");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Aulia Ilham Zukri - 20190801368");