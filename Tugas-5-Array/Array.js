// Soal 1
function range(startNum, finishNum) {
  var result = [];
  if (startNum && finishNum) {
      if (startNum <= finishNum ) {
          for (var i = startNum; i <= finishNum; i++) {
              result.push(i)
          }
      }
      else {
          for (var i = startNum; i >= finishNum; i--) {
              result.push(i)
          }
      }
  } else {
      result = -1
  }
  return result;
};

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1

// Soal 2
function rangeWithStep(startNum, finishNum, step) {
  var result = [];
  if ((typeof startNum == 'undefined') || (typeof finishNum == 'undefined')) {
  result = -1;
  }
      else if (startNum <= finishNum ){
          for (var i = startNum; i <= finishNum; i+=step) {
              result.push(i); 
          }
      }
      else if (startNum > finishNum ){
          for (var i = startNum; i >= finishNum; i-=step) {
              result.push(i); 
          }
      }
  return result;
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]

// Soal 3
function sum (startNum = 0, finishNum = 0, step = 1){
  var rangeArray = [];
  //tukar posisi
  var larger = Math.max(startNum, finishNum);
  var smaller = Math.min(startNum, finishNum);
  if (step < 0) {
    for (var i = larger; i >= smaller; i+=step){
      rangeArray.push(i);
    }
  } else {
    for (var i = smaller; i <= larger; i+=step){
      rangeArray.push(i);
    }
  }
  return rangeArray.length > 1 ? rangeArray.reduce((a, b) => a + b) : rangeArray[0]
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0  

// Soal 4
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling (input) {
  for (var i = 0; i < input.length; i++) {
    console.log('Nomor ID: ', input[i][0]);
    console.log('Nama Lengkap: ', input[i][1]);
    console.log('TTL: ', input[i][2], input[i][3]);
    console.log('Hobby: ', input[i][4]);
    console.log(' ');
  }
}
dataHandling(input);

// Soal 5
function balikKata(str){  
  var balik = "";      
   for (var i = str.length - 1; i >= 0; i--){         
     balik += str[i];  
   }     
  return balik;
}
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I

// Soal 6
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
 function dataHandling2(input) {
   input.splice(1, 1, "Roman Alamsyah Elsharawy");
   input.splice(2, 1, "Provinsi Bandar Lampung");
   input.splice(4, 1, "Pria");
   input.splice(5, 0, "SMA Internasional Metro");
   console.log(input);
 
   input.slice()
   var tanggal = input[3].split('/');
   var angkaHari = tanggal;
   var angkaBulan = tanggal;
   var angkaTahun = tanggal;
   var namaBulan;
   switch (angkaBulan[1]) {
     case '01':
       namaBulan = 'Januari';
       break;
     case '02':
       namaBulan = 'Februari';
       break;
     case '03':
       namaBulan = 'Maret';
       break;
     case '04':
       namaBulan = 'April';
       break;
     case '05':
       namaBulan = 'Mei';
       break;
     case '06':
       namaBulan = 'Juni';
       break;
     case '07':
       namaBulan = 'Juli';
       break;
     case '08':
       namaBulan = 'Agustus';
       break;
     case '09':
       namaBulan = 'September';
       break;
     case '10':
       namaBulan = 'Oktober';
       break;
     case '11':
       namaBulan = 'November';
       break;
     case '12':
       namaBulan = 'Desember';
       break;
     default:
   }
   console.log(namaBulan);
   angkaBulan.sort(function(value1, value2) { return value1 < value2});
   console.log(angkaBulan.sort(function(a, b){return b-a}));
   var tanggal = angkaBulan.sort().join("-");
   //console.log(tanggal);
   console.log(angkaHari[2]+"-"+angkaBulan[0]+"-"+angkaTahun[1]);
   var nama = [...input[1]].slice(0, 14)
   nama = nama.join("");
   console.log(nama);
 }
 dataHandling2(input);