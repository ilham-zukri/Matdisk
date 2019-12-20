var val = require('readline-sync');
var i = parseInt(val.question("Masukan usia : "));

if (i <= 45 && i >= 25) {
    var res = 0.1 * 0.5 * (i-25)
    console.log((1-res)*100+"%"+" Muda "+res*100+"% Separuh baya")
}else if (i <= 65 && i >= 45 ) {
    var res = 0.1 * 0.5 *(i-45)
    console.log((1-res)*100+" Separuh Baya "+res*100+"% Tua")
}

