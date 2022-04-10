let myLibrary = [];

function Book(title, author) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.read = false;
}

function addBookToLibrary() {
    // do stuff here
}



/***********************************
TESTING GROUND
To be deleted / refactored
/***********************************/

// Functions
function addBookToLibraryTest() {
    // Add book to library array
    myLibrary.push(hyperion);
    console.log(myLibrary);

    // Add book to DOM
    const newBook = document.createElement('div');
    newBook.textContent = `${hyperion.title} ${test}`;
    bookContainer.appendChild(newBook);

    ++test;
}

function addAllBookToDomTest() {

    myLibrary.forEach(book => {
        const newBook = document.createElement('div');
        newBook.textContent = `Title: ${book.title}`;
        bookContainer.appendChild(newBook);
    });

    // Add book to DOM
}

function removeLastBookToLibraryTest() {
    if (myLibrary.length !== 0) {
        // Remove book from library array
        myLibrary.pop();
        console.log(myLibrary);

        // Remove book from DOM
        const lastBook = bookContainer.lastElementChild;
        bookContainer.removeChild(lastBook);
    };
}

function removeAllBookToLibraryTest() {
    // Remove book from library array
    myLibrary = [];
    console.log(myLibrary);

    // Remove book from DOM
    const books = document.querySelectorAll('.book-container-test div');
    books.forEach(book => bookContainer.removeChild(book));
}

// Pre-created Book
let test = 0;
let hyperion = new Book("Hyperion", "Dan Simmons");
let hyperionFall = new Book("The Fall of Hyperion", "Dan Simmons");
myLibrary.push(hyperion);
myLibrary.push(hyperionFall);

// Buttons
const addButton = document.querySelector(".test-add");
const removeButton = document.querySelector(".test-remove");
const removeAllButton = document.querySelector(".test-remove-all");

// Select
const sortBy = document.querySelector("#sortBy");

//Container
const bookContainer = document.querySelector(".testing-ground .book-container-test");

addButton.addEventListener("click", addBookToLibraryTest);
removeButton.addEventListener("click", removeLastBookToLibraryTest);
removeAllButton.addEventListener("click", removeAllBookToLibraryTest);
sortBy.addEventListener("change", function(e) { console.log(this.value) });
addAllBookToDomTest();

console.log(sortBy);
console.log(myLibrary);