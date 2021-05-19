const BASE_URL = 'http://localhost:3000';

const upBook = {
  title: 'Мое новое название',
};

function updateBookById(update, id) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${id}`, options).then(res => res.json());
}

// updateBookById(upBook, 2);
