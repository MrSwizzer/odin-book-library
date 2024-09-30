const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead(readStatus) {
        this.read = !this.read;
    }
}

/* function Book(title, author, pages, read) {
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
}

Book.prototype.toggleRead = function (readStatus) {
this.read = !this.read;
} */

function addBookToLibrary(title, author, pages, read, array = myLibrary) {
    const book = new Book(title, author, pages, read);
    array.push(book);
    renderCards();
}

function deleteBookFromLibrary(index, array = myLibrary) {
    array.splice(index, 1);
    renderCards();
}

addBookToLibrary('The Fellowship of the Ring', 'J. R. R. Tolkien', 423, false);
addBookToLibrary('The Hobbit', 'J. R. R. Tolkien', 310, false);
addBookToLibrary(
    "Harry Potter and the Philosopher's Stone",
    'J.K. Rowling',
    223,
    true
);
addBookToLibrary('Atomic Habits', 'James Clear', 320, true);
addBookToLibrary('Mastery', 'George Leonard', 176, false);
console.log(myLibrary);
console.log(myLibrary[0].info);

const showFormCheckbox = document.querySelector('#show_form_checkbox');
showFormCheckbox.addEventListener('change', function () {
    if (this.checked) {
        document.querySelector('.user_input').style.display = 'block';
    } else {
        document.querySelector('.user_input').style.display = 'none';
    }
});

const submitForm = document.querySelector('#bookForm');
submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleInput = document.querySelector('#title').value;
    const authorInput = document.querySelector('#author').value;
    const pagesInput = document.querySelector('#pages').value;
    const readInput = document.querySelector('#read').checked;
    if (titleInput != '' && authorInput != '' && pagesInput != '') {
        addBookToLibrary(titleInput, authorInput, pagesInput, readInput);
        renderCards(myLibrary);
        console.log(myLibrary);
    }
});

// other way to get dynamic elements
// outputDiv.addEventListener("click", (event) => {
//     if (event.target.classList.contains("deleteButton")) {
//         console.log(event.target.parentElement.dataset.index);
//         console.log(myLibrary);
//         deleteBookFromLibrary(event.target.parentElement.dataset.index)
//         event.target.parentElement.remove();
//     }
// });

// outputDiv.addEventListener("click", (event) => {
//     if (event.target.classList.contains("readButton")) {
//         console.log("read Button pressed");

//     }
// });

function renderCards() {
    const outputDiv = document.querySelector('.output');
    outputDiv.innerHTML = '';
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('data-index', index);
        card.style.border = 'solid 1px gray';
        card.style.margin = '10px';

        let ul = document.createElement('ul');

        const bookTitle = document.createElement('li');
        bookTitle.textContent = `Title: ${book.title}`;
        ul.appendChild(bookTitle);

        const bookAuthor = document.createElement('li');
        bookAuthor.textContent = `Author: ${book.author}`;
        ul.appendChild(bookAuthor);

        const bookPages = document.createElement('li');
        bookPages.textContent = `Pages: ${book.pages}`;
        ul.appendChild(bookPages);

        const bookReadStatus = document.createElement('li');
        bookReadStatus.textContent = `Read Status: ${book.read ? 'Read' : 'Not read'
            }`;
        ul.appendChild(bookReadStatus);

        card.appendChild(ul);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete Book';
        deleteButton;
        deleteButton.addEventListener('click', (event) => {
            deleteBookFromLibrary(index);
        });

        const readButton = document.createElement('button');
        readButton.textContent = 'Change read status';
        readButton.addEventListener('click', (event) => {
            book.toggleRead();
            renderCards();
        });

        card.appendChild(deleteButton);
        card.appendChild(readButton);
        outputDiv.appendChild(card);
    });
}
