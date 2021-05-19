const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: 'Тестовая книга',
  author: 'Нина',
  genres: ['JS'],
  rating: 10,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

// addBook(newBook).then(rernderBook);

// function rernderBook(book) {
//   console.log('пришел ответ от бека');
//   console.log(book);
// }
