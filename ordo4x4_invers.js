console.log("2.) Invers Matriks Ordo 4x4.\n");
console.log("         |1 2 3 4|");
console.log("     A = |3 2 1 5|");
console.log("         |2 1 3 6|");
console.log("         |6 3 1 2|\n")
console.log("     Hasil :\n");

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

console.log("   # Determinan matriks A :\n");
console.log("     ~Metode Sarrus~\n")
console.log("     A1 =", det1);
console.log("     A2 =", det2);
console.log("     A3 =", det3);
console.log("    |A| =", det_a,"\n");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
console.log("   # Minor matriks A : ");

var min1 = [[2, 1, 5], [1, 3, 6], [3,1,2]];

var min1a = min1[0][0] * min1[1][1] * min1[2][2];       var min1d = min1[2][0] * min1[1][1] * min1[0][2];
var min1b = min1[0][1] * min1[1][2] * min1[2][0];       var min1e = min1[2][1] * min1[1][2] * min1[0][0];
var min1c = min1[0][2] * min1[1][0] * min1[2][1];       var min1f = min1[2][2] * min1[1][0] * min1[0][1];

var min1_0 = min1a + min1b + min1c;
var min1_1 = min1d + min1e + min1f;

var m11 = min1_0 - min1_1;

var min2 = [[3, 1, 5], [2, 3, 6], [6, 1, 2]];

var min2a = min2[0][0] * min2[1][1] * min2[2][2];       var min2d = min2[2][0] * min2[1][1] * min2[0][2];
var min2b = min2[0][1] * min2[1][2] * min2[2][0];       var min2e = min2[2][1] * min2[1][2] * min2[0][0];
var min2c = min2[0][2] * min2[1][0] * min2[2][1];       var min2f = min2[2][2] * min2[1][0] * min2[0][1];

var min2_0 = min2a + min2b + min2c;
var min2_1 = min2d + min2e + min2f;

var m12 = min2_0 - min2_1;

var min3 = [[3, 2, 5], [2, 1, 6], [6, 3, 2]];

var min3a = min3[0][0] * min3[1][1] * min3[2][2];       var min3d = min3[2][0] * min3[1][1] * min3[0][2];
var min3b = min3[0][1] * min3[1][2] * min3[2][0];       var min3e = min3[2][1] * min3[1][2] * min3[0][0];
var min3c = min3[0][2] * min3[1][0] * min3[2][1];       var min3f = min3[2][2] * min3[1][0] * min3[0][1];

var min3_0 = min3a + min3b + min3c;
var min3_1 = min3d + min3e + min3f;

var m13 = min3_0 - min3_1;

var min4 = [[3, 2, 1], [2, 1, 3], [6, 3, 1]];

var min4a = min4[0][0] * min4[1][1] * min4[2][2];       var min4d = min4[2][0] * min4[1][1] * min4[0][2];
var min4b = min4[0][1] * min4[1][2] * min4[2][0];       var min4e = min4[2][1] * min4[1][2] * min4[0][0];
var min4c = min4[0][2] * min4[1][0] * min4[2][1];       var min4f = min4[2][2] * min4[1][0] * min4[0][1];

var min4_0 = min4a + min4b + min4c;
var min4_1 = min4d + min4e + min4f;

var m14 = min4_0 - min4_1;

var min5 = [[2, 3, 4], [1, 3, 6], [3, 1, 2]];

var min5a = min5[0][0] * min5[1][1] * min5[2][2];       var min5d = min5[2][0] * min5[1][1] * min5[0][2];
var min5b = min5[0][1] * min5[1][2] * min5[2][0];       var min5e = min5[2][1] * min5[1][2] * min5[0][0];
var min5c = min5[0][2] * min5[1][0] * min5[2][1];       var min5f = min5[2][2] * min5[1][0] * min5[0][1];

var min5_0 = min5a + min5b + min5c;
var min5_1 = min5d + min5e + min5f;

var m21 = min5_0 - min5_1;

var min6 = [[1, 3, 4], [2, 3, 6], [6, 1, 2]];

var min6a = min6[0][0] * min6[1][1] * min6[2][2];       var min6d = min6[2][0] * min6[1][1] * min6[0][2];
var min6b = min6[0][1] * min6[1][2] * min6[2][0];       var min6e = min6[2][1] * min6[1][2] * min6[0][0];
var min6c = min6[0][2] * min6[1][0] * min6[2][1];       var min6f = min6[2][2] * min6[1][0] * min6[0][1];

var min6_0 = min6a + min6b + min6c;
var min6_1 = min6d + min6e + min6d;

var m22 = min6_0 - min6_1;

var min7 = [[1, 2, 4], [2, 1, 6], [6 , 3, 2]];

var min7a = min7[0][0] * min7[1][1] * min7[2][2];       var min7d = min7[2][0] * min7[1][1] * min7[0][2];
var min7b = min7[0][1] * min7[1][2] * min7[2][0];       var min7e = min7[2][1] * min7[1][2] * min7[0][0];
var min7c = min7[0][2] * min7[1][0] * min7[2][1];       var min7f = min7[2][2] * min7[1][0] * min7[0][1];

var min7_0 = min7a + min7b + min7c;
var min7_1 = min7d + min7e + min7f;

var m23 = min7_0 - min7_1;

var min8 = [[1, 2, 3], [2, 1, 3], [6, 3, 1]];

var min8a = min8[0][0] * min8[1][1] * min8[2][2];       var min8d = min8[2][0] * min8[1][1] * min8[0][2];
var min8b = min8[0][1] * min8[1][2] * min8[2][0];       var min8e = min8[2][1] * min8[1][2] * min8[0][0];
var min8c = min8[0][2] * min8[1][0] * min8[2][1];       var min8f = min8[2][2] * min8[1][0] * min8[0][1];

var min8_0 = min8a + min8b + min8c;
var min8_1 = min8d + min8e + min8f;

var m24 = min8_0 - min8_1;

var min9 = [[2, 3, 4], [2, 1, 5],[3, 1, 2]];

var min9a = min9[0][0] * min9[1][1] * min9[2][2];       var min9d = min9[2][0] * min9[1][1] * min9[0][2];
var min9b = min9[0][1] * min9[1][2] * min9[2][0];       var min9e = min9[2][1] * min9[1][2] * min9[0][0];
var min9c = min9[0][2] * min9[1][0] * min9[2][1];       var min9f = min9[2][2] * min9[1][0] * min9[0][1];

var min9_0 = min9a + min9b + min9c;
var min9_1 = min9d + min9e + min9f;

var m31 = min9_0 - min9_1;

var min10 = [[1, 3, 4], [3, 1, 5], [6, 1, 2]];

var min10a = min10[0][0] * min10[1][1] * min10[2][2];   var min10d = min10[2][0] * min10[1][1] * min10[0][2];
var min10b = min10[0][1] * min10[1][2] * min10[2][0];   var min10e = min10[2][1] * min10[1][2] * min10[0][0];
var min10c = min10[0][2] * min10[1][0] * min10[2][1];   var min10f = min10[2][2] * min10[1][0] * min10[0][1];

var min10_0 = min10a + min10b + min10c;
var min10_1 = min10d + min10e + min10f;

var m32 = min10_0 - min10_1;
 
var min11 = [[1, 2, 4], [3, 2, 5], [6, 3, 2]];

var min11a = min11[0][0] * min11[1][1] * min11[2][2];      var min11d = min11[2][0] * min11[1][1] * min11[0][2];
var min11b = min11[0][1] * min11[1][2] * min11[2][0];      var min11e = min11[2][1] * min11[1][2] * min11[0][0];
var min11c = min11[0][2] * min11[1][0] * min11[2][1];      var min11f = min11[2][2] * min11[1][0] * min11[0][1];

var min11_0 = min11a + min11b + min11c;
var min11_1 = min11d + min11e + min11f;

var m33 = min11_0 - min11_1;

var min12 = [[1, 2, 3], [3, 2, 1], [6, 3, 1]];

var min12a = min12[0][0] * min12[1][1] * min12[2][2];    var min12d = min12[2][0] * min12[1][1] * min12[0][2];
var min12b = min12[0][1] * min12[1][2] * min12[2][0];    var min12e = min12[2][1] * min12[1][2] * min12[0][0];
var min12c = min12[0][2] * min12[1][0] * min12[2][1];    var min12f = min12[2][2] * min12[1][0] * min12[0][1];

var min12_0 = min12a + min12b + min12c;
var min12_1 = min12d + min12e + min12f;

var m34 = min12_0 - min12_1;

var min13 = [[2, 3, 4], [2, 1, 5], [1, 3, 6]];

var min13a = min13[0][0] * min13[1][1] * min13[2][2];     var min13d = min13[2][0] * min13[1][1] * min13[0][2];
var min13b = min13[0][1] * min13[1][2] * min13[2][0];     var min13e = min13[2][1] * min13[1][2] * min13[0][0];
var min13c = min13[0][2] * min13[1][0] * min13[2][1];     var min13f = min13[2][2] * min13[1][0] * min13[0][1];

var min13_0 = min13a + min13b + min13c;
var min13_1 = min13d + min13e + min13f;

var m41 = min13_0 - min13_1;

var min14 = [[1, 3, 4], [3, 1, 5], [2, 3, 6]];

var min14a = min14[0][0] * min14[1][1] * min14[2][2];     var min14d = min14[2][0] * min14[1][1] * min14[0][2];
var min14b = min14[0][1] * min14[1][2] * min14[2][0];     var min14e = min14[2][1] * min14[1][2] * min14[0][0];
var min14c = min14[0][2] * min14[1][0] * min14[2][1];     var min14f = min14[2][2] * min14[1][0] * min14[0][1];

var min14_0 = min14a + min14b + min14c;
var min14_1 = min14d + min14e + min14f;

var m42 = min14_0 - min14_1;

var min15 = [[1, 2, 4], [3, 2, 5], [2, 1, 6]];

var min15a = min15[0][0] * min15[1][1] * min15[2][2];     var min15d = min15[2][0] * min15[1][1] * min15[0][2];
var min15b = min15[0][1] * min15[1][2] * min15[2][0];     var min15e = min15[2][1] * min15[1][2] * min15[0][0];
var min15c = min15[0][2] * min15[1][0] * min15[2][1];     var min15f = min15[2][2] * min15[1][0] * min15[0][1];

var min15_0 = min15a + min15b + min15c;
var min15_1 = min15d + min15e + min15f;

var m43 = min15_0 - min15_1;

var min16 = [[1, 2, 3], [3, 2, 1], [2, 1, 3]];

var min16a = min16[0][0] * min16[1][1] * min16[2][2];     var min16d = min16[2][0] * min16[1][1] * min16[0][2];
var min16b = min16[0][1] * min16[1][2] * min16[2][0];     var min16e = min16[2][1] * min16[1][2] * min16[0][0];
var min16c = min16[0][2] * min16[1][0] * min16[2][1];     var min16f = min16[2][2] * min16[1][0] * min16[0][1];

var min16_0 = min16a + min16b + min16c;
var min16_1 = min16d + min16e + min16f;

var m44 = min16_0 - min16_1;

console.log("               |",m11,m12,m13,m14,"  |");
console.log("     Minor A = |",m21,m22,m23,m24,"  |");
console.log("               |",m31,m32,m33,m34,"   |");
console.log("               |",m41,m42,m43,m44,"|\n")

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

console.log("   # Kofaktor Matriks A  : \n");

var kof11 = m11;            var kof31 = m31;
var kof12 = (m12*-1);       var kof32 = (m32*-1);
var kof13 = m13;            var kof33 = m33;
var kof14 = (m14*-1);       var kof34 = (m34*-1);
var kof21 = (m21*-1);       var kof41 = (m41*-1);
var kof22 = m22;            var kof42 = m42;
var kof23 = (m23*-1);       var kof43 = (m43*-1);
var kof24 = m24;            var kof44 = m44;

console.log("                  |",kof11,kof12,kof13,kof14,"  |");
console.log("     Kofaktor A = |",kof21,kof22,kof23,kof24,"|");
console.log("                  |",kof31,kof32,kof33,kof34,"   |");
console.log("                  |",kof41,kof42,kof43,kof44,"  |\n")

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

console.log("   # Adjoin Matriks A  : \n");

var adj11 = kof11;      var adj21 = kof12;      var adj31 = kof13;      var adj41 = kof14;
var adj12 = kof21;      var adj22 = kof22;      var adj32 = kof23;      var adj42 = kof24;
var adj13 = kof31;      var adj23 = kof32;      var adj33 = kof33;      var adj43 = kof34;
var adj14 = kof41;      var adj24 = kof42;      var adj34 = kof43;      var adj44 = kof44;

console.log("                |",adj11,adj12,adj13,adj14,"|");
console.log("     Adjoin A = |",adj21,adj22,adj23,adj24,"|");
console.log("                |",adj31,adj32,adj33,adj34," |");
console.log("                |",adj41,adj42,adj43,adj44,"  |\n")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

console.log("   # Invers Matriks A  : \n");

console.log("                |",adj11+"/"+det_a,adj12+"/"+det_a,adj13+"/"+det_a,adj14+"/"+det_a,"|");
console.log("     Invers A = |",adj21+"/"+det_a,adj22+"/"+det_a,adj23+"/"+det_a,adj24+"/"+det_a,"|");
console.log("                |",adj31+"/"+det_a,adj32+"/"+det_a,adj33+"/"+det_a,adj34+"/"+det_a," |");
console.log("                |",adj41+"/"+det_a,adj42+"/"+det_a,adj43+"/"+det_a,adj44+"/"+det_a,"  |\n")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
console.log("Aulia Ilham Zukri - 20190801368");