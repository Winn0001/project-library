const form = document.querySelector(".book-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const bookInfo = new FormData(form);

  const title = bookInfo.get("book_title");
  const author = bookInfo.get("book_author");
  const pages = bookInfo.get("book_pages");
  const readStatus = bookInfo.get("read_status") !== null;
});

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
