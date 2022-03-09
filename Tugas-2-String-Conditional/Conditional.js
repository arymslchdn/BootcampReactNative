//  Soal 1
var nama = " " ;
var peran = " " ;

if (nama == " " && peran == " ") {
  console.log("Nama harus diisi!");
} else if (nama == "John" && peran == " ") {
  console.log("Halo John, Pilih peranmu untuk memulai game!")
}

// Soal 2
var nama = "Jenita" ;
var peran = "Guard" ;

if (nama == "Jane" && peran == "Penyihir") {
  console.log("Selamat datang di Dunia Werewolf, Jane");
  console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!");
} else if (nama == "Jenita" && peran == "Guard") {
  console.log("Selamat datang di Dunia Werewolf, Jenita");
  console.log("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.")
}

// Soal 3
var nama = "Junaedi" ;
var peran = "Werewolf" ;
if (nama == "Junaedi" && peran == "Werewolf") {
  console.log("Selamat datang di Dunia Werewolf, Junaedi");
  console.log("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!");
}

// Soal 4
var hari = 21; 
var bulan = 1; 
var tahun = 1945;

switch(bulan) {
  case 1: {console.log('21 January 1945'); break; }
  case 2: {console.log('21 February 1945'); break; }
  case 3: {console.log('21 March 1945'); break; }
  case 4: {console.log('21 May 1945'); break; }
}
