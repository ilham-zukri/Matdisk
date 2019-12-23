var jwb = "Jadi jumlah minuman jenis XYZ yang harus diproduksi sebanyak "
var pmtbnyk = 4500
var psdgdg = 700
var pnk = 6000
var ptrn = 500
var gdgbnyk = 800
var gdgsdkt = 200
var pdksmax = 9000
var pdksmin = 3000
let x = pnk - ptrn
let y = gdgbnyk - gdgsdkt
let z = pdksmax - pdksmin
var xtrn = (pnk - pmtbnyk) / x
var xnk = (pmtbnyk - ptrn) / x
var ydkt = (gdgbnyk - psdgdg) / y
var ybnyk = (psdgdg - gdgsdkt) / y
var p1 = 0.0
if (xtrn <= ybnyk) {
    p1 = parseFloat(Number(xtrn).toFixed(2))
} else {
    p1 =  parseFloat(Number(ybnyk).toFixed(2))
}
var z1 = pdksmax - (p1 * z)
var p2 = 0.0
if (xtrn <= ydkt) {
    p2 = parseFloat(Number(xtrn).toFixed(2))
} else {
    p2 = parseFloat(Number(ydkt).toFixed(2))
}
var z2 = pdksmax - (p2 * z)
var p3 = 0.0
if (xnk <= ybnyk) {
    p3 = parseFloat(Number(xnk).toFixed(2))
} else {
    p3 = parseFloat(Number(ybnyk).toFixed(2))
}
var z3 = (p3 * z) + pdksmin
var p4 = 0.0
if (xnk <= ydkt) {
    p4 = parseFloat(Number(xnk).toFixed(2))
} else {
    p4 = parseFloat(Number(ydkt).toFixed(2))
}
var z4 = (p4 * z) + pdksmin
var zAll = parseFloat((p1 + p2 + p3 + p4).toFixed(2))
var a = (z1 * p1) + (z2 * p2) + (z3 * p3) + (z4 * p4)
var hasil = parseFloat((a / zAll).toFixed(1))
console.log(jwb + parseFloat(hasil.toFixed(0)) + " botol");