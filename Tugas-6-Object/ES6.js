// Soal 1 (arrow)
const golden = ()=>{
  console.log("this is golden!!");
}

golden();

// Soal 2 (Object literal)
const newFunction = function literal(firstName, lastName){
  return {
    firstName,
    lastName,
    fullName: ()=>{
      console.log(`${firstName} ${lastName}`);
      return 
    }
  }
}

//Driver Code 
newFunction("William", "Imoh").fullName()

// Soal 3 (Destructuring)
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation, spell} = newObject;
// Driver code
console.log(firstName, lastName, destination, occupation)

// Soal 4 (Array Spreading)
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
//Driver Code
console.log(combined);

// Soal 5 (Template literal)
const planet = "earth"
const view = "glass"
var before = `Lorem ${planet} dolor sit amet, consectetur adipiscing elit, ${view} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`  

// Driver Code 
console.log(before);
