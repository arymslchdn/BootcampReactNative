// Soal 1
function replaceCharacter(sentence, findCharacter, replaceCharacter) {
  var result = "";

  var substituteCharacter = replaceCharacter;
  if (!replaceCharacter) {
    substituteCharacter = "";
  }

  for (var i = 0; i < sentence.lenght; i++) {
    const character = sentence[i];

    if (character.toLowerCase() === findCharacter.toLowerCase()) {
      result += substituteCharacter;
      continue;
    }

    result += character;
  }
  return result;
}

// // Test Case 1
var sentence = "Pada Hari Minggu ku turut ayah ke kota";

var result = replaceCharacter(sentence, "a", "o");
console.log(result); //Podo Hori Minggu ku turut oyoh ke koto

// Test Case 2
var sentence = "Naik delman istimewa ku duduk di muka";

var result = replaceCharacter(sentence, "a");
console.log(result); //Nik delmn istimew ku duduk di muk

// Soal 2
// Format Data [absen, nama, nilai]
var studentData = [
	[2, "John Duro", 60],
	[4, "Robin Ackerman", 100],
	[1, "Jaeger Marimo", 60],
	[6, "Zoro", 80],
	[5, "Zenitsu", 80],
	[3, "Patrick Zala", 90],
];

function sortGrade(data) {
  data.sort(function(val1, val2){
    var gradeResult = val2[2] - val1[2];

    if (gradeResult === 0) {
      return val1[0] - val2[0];
    }
    return gradeResult;
  });
    return data;
}
var sortedData = sortGrade(studentData);
console.log(sortedData);
//Output
// [
// 	[4, "Robin Ackerman", 100],
// 	[3, "Patrick Zala", 90],
// 	[5, "Zenitsu", 80],
// 	[6, "Zoro", 80],
// 	[1, "Jaeger Marimo", 60],
// 	[2, "John Duro", 60],
// ];