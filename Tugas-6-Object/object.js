function arrayToObject(arr) {
	var now = new Date()
	var thisYear = now.getFullYear()
  var panggilpeople = {}
	var panggilpeople2 = {}
	console.log('\n- People :')
  // Driver Code
	var people = [
		["Bruce", "Banner", "male", 1975],
		["Natasha", "Romanoff", "female"]
	]
  arrayToObject.people

	var people2 = [
		["Tony", "Stark", "male", 1980],
		["Pepper", "Pots", "female", 2023]
	]
	arrayToObject.people2

	for (var b = 0; b < 2; b++) {
		panggilpeople.firstName = people[b][0]
		panggilpeople.lastName = people[b][1]
		panggilpeople.gender = people[b][2]
		panggilpeople.age = thisYear - people[b][3]
		if (panggilpeople.age = thisYear - people[b][3]) {
			console.log(b + 1 + '.' + ' ' + panggilpeople.firstName + ' ' + panggilpeople.lastName + ': ' + '{ ' + '\nfirstName: ' + '"' + panggilpeople.firstName + '"' + ',\n' + 'lastName: ' + '"' + panggilpeople.lastName + '"' + ',\n' + 'gender: ' + '"' + panggilpeople.gender + '"' + ',\n' + 'age: ' + panggilpeople.age + '\n}');
		} else {
			console.log(b + 1 + '.' + ' ' + panggilpeople.firstName + ' ' + panggilpeople.lastName + ': ' + '{ ' + '\nfirstName: ' + '"' + panggilpeople.firstName + '"' + ',\n' + 'lastName: ' + '"' + panggilpeople.lastName + '"' + ',\n' + 'gender: ' + '"' + panggilpeople.gender + '"' + ',\n' + 'age: ' + '"Invalid Birth Year"' + '}');
		}
	}
	console.log('\n- People2 :')
	for (var c = 0; c < 2; c++) {
		panggilpeople2.firstName = people2[c][0]
		panggilpeople2.lastName = people2[c][1]
		panggilpeople2.gender = people2[c][2]
		if (panggilpeople2.age = thisYear < people2[c][3]) {
			console.log(c + 1 + '.' + ' ' + panggilpeople2.firstName + ' ' + panggilpeople2.lastName + ': ' + '{ ' + '\nfirstName: ' + '"' + panggilpeople2.firstName + '"' + ',\n' + 'lastName: ' + '"' + panggilpeople2.lastName + '"' + ',\n' + 'gender: ' + '"' + panggilpeople2.gender + '"' + ',\n' + 'age: ' + '"Invalid Birth Year"' + '}');
		} else {
			panggilpeople2.age = thisYear - people2[c][3]
			console.log(c + 1 + '.' + ' ' + panggilpeople2.firstName + ' ' + panggilpeople2.lastName + ': ' + '{ ' + '\nfirstName: ' + '"' + panggilpeople2.firstName + '"' + ',\n' + 'lastName: ' + '"' + panggilpeople2.lastName + '"' + ',\n' + 'gender: ' + '"' + panggilpeople2.gender + '"' + ',\n' + 'age: ' + panggilpeople2.age + '}');
		}
	}
	return arrayToObject;
}
arrayToObject([]);

// Soal 2
function shoppingTime(memberId, money) {
	var shopping = {}
	var barang = [
		['Sepatu Brand Stacattu', 1500000],
		['Baju Brand Zoro', 500000],
		['Baju Brand H&N', 250000],
		['Sweater Brand Uniklooh', 175000],
		['Casing Brand Handphone', 50000]
	]

	if (memberId === undefined && money === undefined) {
		return 'Mohon maaf, toko X hanya berlaku untuk member saja'
	}

	if (memberId === '') {
		return "Mohon maaf, toko X hanya berlaku untuk member saja"
	} else {
		shopping.memberId = memberId
	}

	if (money <= 50000) {
		return 'Mohon maaf, uang anda tidak cukup'
	} else {
		shopping.money = money
	}

	var jumlahHargaBarang = 0
	shopping.listPurchased = []
	for (i = 0; i < barang.length; i++) {

		if (money > barang[i][1]) {
			shopping.listPurchased.push(barang[i][0])
			jumlahHargaBarang += barang[i][1]
		}
		shopping.changeMoney = money - jumlahHargaBarang
	}
	return shopping
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());

// Soal 3
function naikAngkot(arrPenumpang) {
	var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
	var angkot = [{}, {}];
	var i = 0;
	var asal = '';
	var tujuan = '';
	for (i; i < arrPenumpang.length; i++) {
		var j = 0;
		for (j; j < arrPenumpang[i].length; j++) {
			switch (j) {
				case 0: {
					angkot[i].penumpang = arrPenumpang[i][j];
					break;
				} case 1: {
					angkot[i].naikDari = arrPenumpang[i][j];
					angkot[i].tujuan = arrPenumpang[i][j + 1];
					break;
				} case 2: {
					asal = arrPenumpang[i][j - 1];
					tujuan = arrPenumpang[i][j];
					var jarak = 0;
					for (var k = 0; k < rute.length; k++) {
						if (rute[k] === asal) {
							for (var l = k + 1; l < rute.length; l++) {
								jarak += 1;
								if (rute[l] === tujuan) {
									var bayar = jarak * 2000;
									angkot[i].bayar = bayar;
								}
							}
						}
					}
				}
			}
		}
	}
	return angkot;
}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));