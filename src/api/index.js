import axios from 'axios'

function fetchBooks() {
  return axios.get('http://127.0.0.1:8080/api/books')
    .then(resp => resp.data)
}

function fetchBook(id) {
  return axios.get(`http://127.0.0.1:8080/api/books/${id}`)
    .then(resp => resp.data)
}

export default {
  fetchBooks,
  fetchBook
}
