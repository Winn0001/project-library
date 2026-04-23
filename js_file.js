const form = document.querySelector(".book-form");
const bookFormModal = document.getElementById("book-form-modal");
const booksContainer = document.getElementById("books-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const bookInfo = new FormData(form);

  const title = bookInfo.get("book_title");
  const author = bookInfo.get("book_author");
  const pages = bookInfo.get("book_pages");
  const image = bookInfo.get("image");
  const status = bookInfo.get("book_status") !== null;

  addBookToLibrary(title, author, pages, image, status);
  displayBook(myLibrary[myLibrary.length - 1]);
  bookFormModal.close();
});

booksContainer.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");

  if (deleteBtn) {
    const bookCard = deleteBtn.closest(".book-card");
    const id = bookCard.dataset.id;
    deleteBook(id);
    bookCard.remove();
  }
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

function displayBook(book) {
  const bookCard = document.getElementById("book-card-template").content;
  const bookCardClone = document.importNode(bookCard, true);

  bookCardClone.querySelector(".img-container > img").src = URL.createObjectURL(
    book.image,
  );
  bookCardClone.querySelector(".book-title").textContent = book.title;
  bookCardClone.querySelector(".author-name").textContent = book.author;
  bookCardClone.querySelector(".number-of-pages").textContent = book.pages;
  bookCardClone.querySelector(".status-toggle-btn").textContent = book.status
    ? "Read"
    : "Unread";
  bookCardClone.querySelector(".book-card").dataset.id = book.id;

  booksContainer.appendChild(bookCardClone);
}

function deleteBook(id) {
  const bookIndex = myLibrary.findIndex((book) => book.id === id);
  myLibrary.splice(bookIndex, 1);
}
