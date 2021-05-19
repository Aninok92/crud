const BASE_URL = 'http://localhost:3000';
function fetchBooks() {
  fetch(`${BASE_URL}/books`)
    .then(res => res.json())
    .then(console.log);
}

fetchBooks();
