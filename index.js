function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(data => renderBooks(data))
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


// fetch('https://anapioficeandfire.com/api/books')
// .then(resp => resp.json())
// .then(data => console.log(data));

// // Gets the total pages of the series, 
// // the total pov characters in the series,
// // and the 60th pov character (in array)
// fetch('https://anapioficeandfire.com/api/books')
// .then(resp => resp.json())
// .then(data => {
//   console.log(data);
//   let pagesTotal = 0;
//   let charTotal = 0;
//   let sixtiethCharFound = false;

//   for (let book of data) {
//     const pagesPerBook = book.numberOfPages
//     pagesTotal += pagesPerBook
//   }
//   console.log('pages: ', pagesTotal)

//   for (let book of data) {
//     const charPerBook = book.povCharacters.length;
//     charTotal += charPerBook;
//     if (charTotal === 60) console.log(book.povCharacters.slice(-1));
//     if (charTotal > 60 && sixtiethCharFound === false) {
//       const sliceValue = 60 - charTotal;
//       console.log('sliceValue: ', sliceValue, 'charTotal: ', charTotal)
//       console.log(book.povCharacters.slice(sliceValue, sliceValue + 1))
//       sixtiethCharFound = true
//     }
//   }
//   console.log('Chars: ', charTotal);
// });
