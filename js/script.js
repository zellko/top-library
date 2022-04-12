let myLibrary = [];
const bookContainer = document.querySelector(".book-container");
const btnAddBook = document.querySelector(".btn-addBook");

function Book(title, author, publishDate, imgURL) {
    // Book constructor, will contain all books datas...
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
    this.imgURL = imgURL;
    this.read = true;
    this.addDate = "xxxx";
};

function BookToDom() {
    // ...Prototype of Book constructor
    // Will contain all functions to:
    // - Add book card to the DOM
    // - Remove book card to the DOM
    // - Populate book card to the DOM
};

BookToDom.prototype.createCard = function(bookId) {
    // Create Book card
    const divCard = document.createElement('div');
    divCard.classList.add('book-card');
    bookContainer.appendChild(divCard);
    // Create Img section
    const divImg = document.createElement('div');
    this.bookImg = document.createElement('img');
    divImg.classList.add('book-card-img');
    divCard.appendChild(divImg);
    divImg.appendChild(this.bookImg);
    // Create Text section
    const divText = document.createElement('div');
    this.bookTitle = document.createElement('h2');
    this.bookAuthor = document.createElement('h3');
    this.bookPublished = document.createElement('p');
    divText.classList.add('book-card-text');
    divCard.appendChild(divText);
    divText.appendChild(this.bookTitle);
    divText.appendChild(this.bookAuthor);
    divText.appendChild(this.bookPublished);
    // Create Add-date section
    const divDate = document.createElement('div');
    this.bookAddDate = document.createElement('p');
    divDate.classList.add('book-card-add-date');
    divCard.appendChild(divDate);
    divDate.appendChild(this.bookAddDate);
    // Create Read checkbox
    const labelCheckbox = document.createElement('label');
    labelCheckbox.htmlFor = "idTest";
    labelCheckbox.textContent = "Read: ";
    const divCheckbox = document.createElement('div');
    divCheckbox.classList.add('book-card-checkbox');
    this.readCheckbox = document.createElement('input');
    this.readCheckbox.type = "checkbox";
    this.readCheckbox.name = "name";
    this.readCheckbox.value = "value";
    this.readCheckbox.id = "idTest";
    this.readCheckbox.classList.add('card-checkbox');
    divText.appendChild(divCheckbox);
    divCheckbox.appendChild(labelCheckbox);
    divCheckbox.appendChild(this.readCheckbox);
    // Create remove bouton section
    this.deleteBtn = document.createElement('button');
    this.deleteBtn.classList.add('btn-removeBook');
    this.deleteBtn.setAttribute("book-id", bookId)
    divCard.appendChild(this.deleteBtn);
};

BookToDom.prototype.populateCard = function(e) {
    this.bookTitle.textContent = this.title;
    this.bookAuthor.textContent = `By: ${this.author}`;
    this.bookPublished.textContent = this.publishDate;
    this.bookImg.src = this.imgURL;
    this.bookImg.alt = "Book cover image";
    this.bookAddDate.textContent = "Added: yyyy-mm-dd";

    if (this.read) {
        this.readCheckbox.checked = true;
        this.readCheckbox.offsetParent.classList.toggle("isRead");
    };

};

BookToDom.prototype.removeCard = function() {
    // Remove book from DOM
    bookContainer.removeChild(this.deleteBtn.offsetParent);
};


Book.prototype = Object.create(BookToDom.prototype)


function addBookToLibrary() {
    // do stuff here
    const newBook = new Book("Endymion", "Dan Simmons", "1996", "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Endymion_cover.jpg/200px-Endymion_cover.jpg")
    myLibrary.push(newBook);

    newBook.createCard(myLibrary.length - 1);
    newBook.populateCard();

    deleteButton();
};



function deleteButton() {
    const cardCheckbox = document.querySelectorAll(".card-checkbox");
    const btnRemoveBook = document.querySelectorAll(".btn-removeBook");

    btnRemoveBook.forEach(button => button.addEventListener("click", function(e) {
        const idBookToRemove = this.getAttribute('book-id');

        if (myLibrary[idBookToRemove] !== null) {
            myLibrary[idBookToRemove].removeCard();
            myLibrary[idBookToRemove] = null;
        };

        console.log(myLibrary);
    }));

    // Capture if a card is checked as read
    cardCheckbox.forEach(card => card.addEventListener("change", function(e) {
        // console.log(e.target.checked)
        console.log(e.path[3])
        console.log(this)
        if (card.checked) e.path[3].classList.add("isRead");
        if (!card.checked) e.path[3].classList.remove("isRead");
    }))


};




btnAddBook.addEventListener("click", addBookToLibrary);
deleteButton();


/***********************************
TESTING GROUND
To be deleted / refactored
/***********************************/


function addAllBookToDomTest() {

    myLibrary.forEach(book => {
        const newBook = document.createElement('div');
        newBook.textContent = `Title: ${book.title}`;
        bookContainerTest.appendChild(newBook);
    });

    // Add book to DOM
}


// // Pre-created Book
// let test = 0;
// let hyperion = new Book("Hyperion", "Dan Simmons");
// let hyperionFall = new Book("The Fall of Hyperion", "Dan Simmons");
// myLibrary.push(hyperion);
// myLibrary.push(hyperionFall);

// Select
const sortBy = document.querySelector("#sortBy");
sortBy.addEventListener("change", function(e) { console.log(this.value) }); // Capture if sorting list change 


/* Check a checkbox using JS
cardCheckbox.forEach(card => {
    console.log(card.checked);
    card.checked = true;
})*/