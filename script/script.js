const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
addBookToLibrary("The Hobbit 2", "J.R.R Tolkien", 300, "not read yet");
addBookToLibrary("The Hobbit 3", "J.R.R Tolkien", 310, "not read yet");
addBookToLibrary("Harry Potter 1", "J.K Rowling", 200, "read");
addBookToLibrary("Harry Potter 2", "J.K Rowling", 250, "read");
addBookToLibrary("Harry Potter 1", "J.K Rowling", 300, "not read yet");

console.log(myLibrary);


