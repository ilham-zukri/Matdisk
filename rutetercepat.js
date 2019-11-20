console.log("4.) Mencari waktu tempuh dan jarak tempuh tercepat.\n");
console.log("    Jawaban -> \n")

var route_a = [[8, 12], [4, 7], [6, 6]];
var route_b = [[7, 10], [3, 9], [8, 5]];

var route_a_dist = route_a[0][0] + route_a[1][0] + route_a[2][0];
var triptime_route_a = route_a[0][1] + route_a[1][1] + route_a[2][1];
var route_b_dist = route_b[0][0] + route_b[1][0] + route_b[2][0];
var triptime_route_b = route_b[0][1] + route_b[1][1] + route_b[2][1];

if (route_a_dist > route_b_dist){
    console.log("    Rute dengan jarak terdekat adalah Rute B dengan panjang",route_b_dist,"km." );
} else if (route_a_dist < route_b_dist) {
    console.log("    Rute dengan jarak terdekat adalah Rute A dengan panjang",route_a_dist,"km.");    
} else {
    console.log("    Jarak tempuh kedua jalur sama yaitu", route_a_dist,"km.");
}

if (triptime_route_a < triptime_route_b){
    console.log("    Rute dengan waktu tempuh tercepat adalah Rute A dengan waktu tempuh",triptime_route_a,"menit.");
    console.log("    Rute dengan waktu tempuh terlama adalah Rute B dengan waktu tempuh",triptime_route_b,"menit.");
} else {
    console.log("    Rute dengan waktu tempuh tercepat adalah Rute B dengan waktu tempuh",triptime_route_b,"menit.");
    console.log("    Rute dengan waktu tempuh terlama adalah Rute A dengan waktu tempuh",triptime_route_a,"menit.");
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("Aulia Ilham Zukri - 20190801368");