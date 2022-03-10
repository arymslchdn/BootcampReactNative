// Soal 1 Looping While
// Looping Pertama
var flag = 2;
while(flag < 22) {
  console.log("I love coding", flag);
  flag += 2;
}

// Looping Kedua
var flag = 20;
while(flag > 0) {
  console.log("I will become a mobile developer", flag);
  flag -= 2;
}

// Soal 2 Looping For
for(var i = 1; i < 21; i++) {
  if(i % 2 == 0){
    console.log(i + " " + 'Berkualitas');
    }
    else if (i % 3 == 0){
      console.log(i + " " + 'I Love Coding');
    }
    else {
      console.log(i + " " + 'Santai');
    }
}

// Looping Persegi Panjang
var panjang = 8,
	lebar = 4;
for(var i=1;i<=lebar;i++){
	console.log("#".repeat(panjang));
}

// Looping Tangga
var tinggi = 7;
for(var i=1;i<=tinggi;i++){
	console.log("#".repeat(i));
}

// Looping Papan Catur
var ukuran = 8;
for(var i=0;i<ukuran;i++){
    console.log(" # # # # # # # # # #".substr(i%2, ukuran) );
}