// di index.js
const readBooks = require('./callback.js')
 
const books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

const baca = (time, books, i) => {
  if (i < books.length ) {
    readBooks(time, books[i], function(sisaWaktu) {
      if (sisaWaktu > 0 ) {
        i += 1 
        baca(sisaWaktu, books, i)
      }
    })
  }
}
baca(10000, books, 0)