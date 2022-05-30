import book from "./Modules/html.js";
import { contact, addNewBook, showMyBooks } from "./Modules/SPA.js";
import displayHour from "./Modules/date.js";

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const form = document.querySelector('#senddata');
const ullibrary = document.querySelector('.ullibrary');
const getmylibrary = JSON.parse(localStorage.getItem('mylibrary'));
const clock = document.querySelector('.date');

class Book {
  constructor() {
    this.bookList = [];
  }

  addbooks() {
    const mybook = {
      title: title.value,
      author: author.value,
      index: Date.now(),
    };

    this.bookList.push(mybook);

    title.value = '';
    author.value = '';
  }

  remove() {
    const removebook = document.querySelectorAll('.removebook');

    removebook.forEach((elem) => {
      elem.addEventListener('click', () => {
        elem.parentNode.remove();

        this.bookList = this.bookList.filter(
          (book) => book.index !== Number(elem.parentNode.id),
        );

        localStorage.setItem('mylibrary', JSON.stringify(this.bookList));
      });
    });
  }

  addhtml() {
    ullibrary.innerHTML = '';
    this.bookList.forEach((element) => ullibrary.insertAdjacentHTML('beforeend', book(element)));

    localStorage.setItem('mylibrary', JSON.stringify(this.bookList));
  }
}

const myBooks = new Book();

const listSelector = document.getElementById('list');
const addBooksSelector = document.getElementById('Add-New');
const contactSelector = document.getElementById('Contact');

listSelector.addEventListener('click', showMyBooks);
addBooksSelector.addEventListener('click', addNewBook);
contactSelector.addEventListener('click', contact);

displayHour(clock)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  myBooks.addbooks();
  myBooks.addhtml();
  myBooks.remove();
});


if (getmylibrary.length > 0) {
  myBooks.bookList = getmylibrary;
  myBooks.addhtml();
  myBooks.remove();
}
