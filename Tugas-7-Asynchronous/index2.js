var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

// Lanjutkan code untuk menjalankan function readBooksPromise
const book1 = () => { return readBooksPromise(10000, books[0]); };
const book2 = () => { return readBooksPromise(7000, books[1]); };
const book3 = () => { return readBooksPromise(5000, books[2]); };
const book4 = () => { return readBooksPromise(1000, books[3]); };

book1()
  .then(book2)
  .then(book3)
  .then(book4)
  .catch((error) => {
    console.log(error);
  });