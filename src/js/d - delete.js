const BASE_URL = 'http://localhost:3000';

function removeBook(bookId) {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

//removeBook(33);
//removeBook(32);
//removeBook(31);
//removeBook(30);
//removeBook(29);
//removeBook(28);
