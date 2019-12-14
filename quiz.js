console.log("------------Quiz-------------\n");
console.log("Aulia Ilham Zukri/20190801368\n");

var dateNow = new Date();

var dataMhs = [
    ["Tata", "Tanggal lahir : 10-09-1999", 3.0, parseInt(dateNow.getYear() - new Date('1999-10-09').getYear())], 
    ["Gilang", "Tanggal lahir : 24-01-2001", 2.5, parseInt(dateNow.getYear() - new Date('2001-01-24').getYear())], 
    ["Setianing", "Tanggal lahir : 02-07-2000", 2.0, parseInt(dateNow.getYear() - new Date('2000-07-02').getYear())], 
    ["Dimas", "Tanggal lahir : 19-10-1999", 3.5, parseInt(dateNow.getYear() - new Date('1999-10-19').getYear())], 
    ["Maulana", "Tanggal lahir : 12-07-1998", 2.7, parseInt(dateNow.getYear() - new Date('1998-07-12').getYear())],
    ["Asep", "Tanggal lahir : 22-01-1998", 2.0, parseInt(dateNow.getYear() - new Date('1998-01-22').getYear())], 
    ["Retyan", "Tanggal lahir : 03-03-1999", 1.0, parseInt(dateNow.getYear() - new Date('1999-03-03').getYear())], 
    ["Elfa", "Tanggal lahir : 20-06-2000", 2.5, parseInt(dateNow.getYear() - new Date('2000-06-20').getYear())],
    ["Hapiz", "Tanggal lahir : 21-03-1998", 1.5, parseInt(dateNow.getYear() - new Date('1998-03-21').getYear())], 
    ["Irfan", "Tanggal lahir : 10-07-2001", 1.5, parseInt(dateNow.getYear() - new Date('2001-07-10').getYear())], 
    ["Saman", "Tanggal lahir : 08-08-1995", 2.5, parseInt(dateNow.getYear() - new Date('1995-08-08').getYear())], 
    ["Dhila", "Tanggal lahir : 12-09-1997", 3.5, parseInt(dateNow.getYear() - new Date('1997-09-12').getYear())],
    ["Angga", "Tanggal lahir : 19-11-2000", 3.5, parseInt(dateNow.getYear() - new Date('2000-11-19').getYear())], 
    ["Adil", "Tanggal lahir : 10-01-1997", 2.0, parseInt(dateNow.getYear() - new Date('1997-01-10').getYear())], 
    ["Ghozi", "Tanggal lahir : 10-02-1998", 2.0, parseInt(dateNow.getYear() - new Date('1998-02-10').getYear())],
];

dataMhs.sort((a, b) => {
    if(a[3] > b[3]) return 1;
    if(b[3] > a[3]) return -1;
    return 0;
});

for(i = 0 ; i < 14; i ++){
    if(dataMhs[i][2] > 2){
        grade = "Lulus"
    } else {
        grade = "Tidak Lulus"
    }

    console.log("Nama : ",dataMhs[i][0]+"; ", dataMhs[i][1]+"; ","IPK : ",dataMhs[i][2]+"; ","Umur :",dataMhs[i][3]+"; ", grade)
}