var inp = require('readline-sync');
var ukuran = parseInt(inp.question("Masukan ukuran yang dicari : "))
var adil = "Adil";
var tata = "Tata";
var ilham = "Ilham";
var saman = "Saman";
var retyan = "Retyan";
var ghozy = "Ghozy";
var irfan = "Irfan";
var dhila = "Dhila";
var dimas = "Dimas";
var gilang = "Gilang";
var angga = "Angga";
var hapiz = "Hapiz";
var maulana = "Maulana";
var elfa = "Elfa";
var setianing = "Setianing";
var biru = "biru";
var hitam = "hitam";
var cokelat = "cokelat";
var putih = "putih";


var mhs = [
    [adil, 38, biru], [tata, 40, hitam], [saman, 42, putih], [retyan, 42, biru], [ghozy, 43, biru],
    [irfan, 42, biru], [dhila, 36, hitam], [dimas, 43, biru], [gilang, 42, hitam], [angga, 41, cokelat],
    [hapiz, 40, hitam], [maulana, 42, hitam], [elfa, 39, putih], [setianing, 39, hitam], [ilham, 41, hitam]
];

for (i = 0; i <= 14; i++) {
    if (ukuran == mhs[i][1]) {
        console.log(mhs[i][0]+" dengan warna "+mhs[i][2])
    }
}
