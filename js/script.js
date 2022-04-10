let myLibrary = [];
const bookContainer = document.querySelector(".book-container");

function BookToDom() {
    // Constructor to add the book to DOM
};

BookToDom.prototype.createCard = function() {
    const divCard = document.createElement('div');
    divCard.classList.add('book-card');
    bookContainer.appendChild(divCard);
};


function Book(title, author, publishDate) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
    this.read = false;
    this.addDate = "xxxx";
};


Book.prototype = Object.create(BookToDom.prototype)

const testBook = new Book("TTitlle", "Auteur", "2022")

// testBook.createCard();
console.log(testBook);

function addBookToLibrary() {
    // do stuff here
};

/***********************************
TESTING GROUND
To be deleted / refactored
/***********************************/

function addBookToDOM() {

    const cardStructure = {
        divCard: document.createElement('div'),
        divImg: document.createElement('div'),
        divText: document.createElement('div'),
        divAddDate: document.createElement('div'),

        title: document.createElement('h2'),
        author: document.createElement('h3'),
        published: document.createElement('p'),
        addDate: document.createElement('p'),
        img: document.createElement('img'),
    };

    cardStructure.title.textContent = "Ttest";
    cardStructure.author.textContent = "By: Test";
    cardStructure.img.src = "https://exlibris.azureedge.net/covers/9780/3077/8189/5/9780307781895xl.webp";
    cardStructure.addDate.textContent = "Added: 2022-04-10";
    cardStructure.published.textContent = "Published: XXXX-xx-xx";

    cardStructure.divCard.classList.add('book-card');
    cardStructure.divImg.classList.add('book-card-img');
    cardStructure.divText.classList.add('book-card-text');
    cardStructure.divAddDate.classList.add('book-card-add-date');

    bookContainer.appendChild(cardStructure.divCard);
    cardStructure.divCard.appendChild(cardStructure.divImg);
    cardStructure.divCard.appendChild(cardStructure.divText);
    cardStructure.divCard.appendChild(cardStructure.divAddDate);
    cardStructure.divImg.appendChild(cardStructure.img);
    cardStructure.divText.appendChild(cardStructure.title);
    cardStructure.divText.appendChild(cardStructure.author);
    cardStructure.divText.appendChild(cardStructure.published);
    cardStructure.divAddDate.appendChild(cardStructure.addDate);
};


// Functions
function addBookToLibraryTest() {
    // Add book to library array
    myLibrary.push(hyperion);
    console.log(myLibrary);

    // Add book to DOM
    const newBook = document.createElement('div');
    newBook.textContent = `${hyperion.title} ${test}`;
    bookContainerTest.appendChild(newBook);

    ++test;
}

function addAllBookToDomTest() {

    myLibrary.forEach(book => {
        const newBook = document.createElement('div');
        newBook.textContent = `Title: ${book.title}`;
        bookContainerTest.appendChild(newBook);
    });

    // Add book to DOM
}

function removeLastBookToLibraryTest() {
    if (myLibrary.length !== 0) {
        // Remove book from library array
        myLibrary.pop();
        console.log(myLibrary);

        // Remove book from DOM
        const lastBook = bookContainerTest.lastElementChild;
        bookContainerTest.removeChild(lastBook);
    };
}

function removeAllBookToLibraryTest() {
    // Remove book from library array
    myLibrary = [];
    console.log(myLibrary);

    // Remove book from DOM
    const books = document.querySelectorAll('.book-container-test div');
    books.forEach(book => bookContainerTest.removeChild(book));
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
const cardCheckbox = document.querySelectorAll(".card-checkbox");

//Container
const bookContainerTest = document.querySelector(".testing-ground .book-container-test");

addButton.addEventListener("click", addBookToLibraryTest);
removeButton.addEventListener("click", removeLastBookToLibraryTest);
removeAllButton.addEventListener("click", removeAllBookToLibraryTest);


sortBy.addEventListener("change", function(e) { console.log(this.value) }); // Capture if sorting list change 
cardCheckbox.forEach(card => card.addEventListener("change", function(e) { console.log(e.target.checked) })) // Capture if a card is checked as read
addAllBookToDomTest();

/* Check a checkbox using JS
cardCheckbox.forEach(card => {
    console.log(card.checked);
    card.checked = true;
})
*/
console.log(sortBy);
console.log(myLibrary);