const form = document.querySelector(".book-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const bookInfo = new FormData(form);

  const title = bookInfo.get("book_title");
  const author = bookInfo.get("book_author");
  const pages = bookInfo.get("book_pages");
  const image = bookInfo.get("image");
  const status = bookInfo.get("read_status") !== null;

  addBookToLibrary(title, author, pages, image, status);
});

const myLibrary = [];

function Book(title, author, pages, image, status) {
  this.id = Math.random().toString(36).slice(2);
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.image = image;
  this.status = status;
}

function addBookToLibrary(title, author, pages, image, status) {
  const book = new Book(title, author, pages, image, status);
  myLibrary.push(book);
}
