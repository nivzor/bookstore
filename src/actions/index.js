import axios from "axios";

export const FETCH_BOOKS = "fetch_books";
export const FETCH_BOOK = "fetch_book";
export const CREATE_BOOK = "create_book";
export const DELETE_BOOK = "delete_book";
export const UPDATE_BOOK = "update_book";

const ROOT_URL = "https://niv-bookstore-api.herokuapp.com";
// const API_KEY = "?key=PAPERCLIP1234";

export function fetchBooks() {
  const request = axios.get(`${ROOT_URL}/books`);

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export function createBook(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/books`, values)
    .then(() => callback());

  return {
    type: CREATE_BOOK,
    payload: request
  };
}

export function fetchBook(id) {
  const request = axios.get(`${ROOT_URL}/books/${id}`);

  return {
    type: FETCH_BOOK,
    payload: request
  };
}

export function deleteBook(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/books/${id}`)
    .then(() => callback());

  return {
    type: DELETE_BOOK,
    payload: id
  };
}

export function updateBook(id, values, callback) {
  const request = axios
    .put(`${ROOT_URL}/books/${id}`, values)
    .then(() => callback());

  return {
    type: UPDATE_BOOK,
    payload: request
  };
}