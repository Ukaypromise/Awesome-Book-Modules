import navigationMenu from './modules/navigation.js';
import BookSet from './modules/BookSet.js';
import getTime from './modules/getTime.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Book Constructor function (representing a book).
const coll = new BookSet();
if (localStorage.getItem('bookItems')) {
  const localBooks = JSON.parse(localStorage.getItem('bookItems'));
  localBooks.bookColl.forEach((item) => {
    coll.add(new Book(item.title, item.author));
  });
}
document.querySelector('.add-btn').addEventListener('click', () => {
  const inputTitle = document.getElementById('title');
  const inputAuthor = document.getElementById('author');
  coll.add(new Book(inputTitle.value, inputAuthor.value));
});

document.addEventListener('DOMContentLoaded', () => {
  navigationMenu();
  getTime();
});
