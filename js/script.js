let myLibrary = [];
let bookId = 0;
const bookContainer = document.querySelector(".book-container");
const btnAddBook = document.querySelector(".btn-addBook");

function Book(title, author, publishDate, imgURL, isRead, date, time) {
    // Book constructor, will contain all books datas...
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
    this.imgURL = imgURL;
    this.read = isRead;
    this.addedDate = date;
    this.addedTime = time;
};

function BookToDom() {
    // ...Prototype of Book constructor
    // Will contain all functions to:
    // - Add book card to the DOM
    // - Remove book card to the DOM
    // - Populate book card to the DOM
};

BookToDom.prototype.createCard = function() {
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
    this.bookAddDate.textContent = `${this.addedDate} / ${this.addedTime}`;

    if (this.read) {
        this.readCheckbox.checked = true;
        this.readCheckbox.offsetParent.classList.toggle("isRead");
    };

};

BookToDom.prototype.removeCard = function(cardToRemove) {
    // Remove book from DOM
    bookContainer.removeChild(cardToRemove);
};


Book.prototype = Object.create(BookToDom.prototype)


function addBookToLibrary(newBook) {
    // do stuff here
    const todayDate = new Date();
    const date = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`
    const time = `${todayDate.getHours()}h${todayDate.getMinutes()}`

    newBook.addedDate = date;
    newBook.addedTime = time;

    newBook.createCard();
    newBook.populateCard();
    ++bookId;
    //console.log(myLibrary);
};

function addAllBookToDom() {
    myLibrary.forEach(book => {
        if (book !== null) addBookToLibrary(book);
    });
}


const demo1 = new Book("Hyperion", "Dan Simmons", "1989", "https://images-na.ssl-images-amazon.com/images/I/91cI7fKu0vL.jpg", true)
const demo2 = new Book("The Fall of Hyperion", "Dan Simmons", "1990", "https://m.media-amazon.com/images/I/51tqDyv9QcL.jpg", false)
const demo3 = new Book("Endymion", "Dan Simmons", "1995", "https://images-na.ssl-images-amazon.com/images/I/91Bg2dr5LvL.jpg", false)
myLibrary.push(demo1);
myLibrary.push(demo2);
addAllBookToDom();


btnAddBook.addEventListener("click", () => {
    myLibrary.push(demo3);
    addBookToLibrary(demo3);
});

bookContainer.addEventListener('click', (e) => {
    if (e.type === "change") return;

    if (e.target.className === "btn-removeBook") {
        const idBookToRemove = e.target.getAttribute("book-id");
        myLibrary[idBookToRemove].removeCard(e.target.parentElement);
        myLibrary[idBookToRemove] = null;
    };
    //console.log(myLibrary);
});

bookContainer.addEventListener('change', (e) => {
    if (e.target.checked) e.target.parentElement.offsetParent.classList.add("isRead");
    if (!e.target.checked) e.target.parentElement.offsetParent.classList.remove("isRead");
});

/***********************************
MODAL 
/***********************************/
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector(".test-modal");

// Get the <span> element that closes the modal
const span = document.querySelector(".btn-close-modal");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/***********************************
FORM 
/***********************************/
const btnForm = document.querySelector(".btn-form");

btnForm.addEventListener('click', (e) => {
    const form = document.querySelector('form');
    //const formTitle = Object.fromEntries(new FormData(e.target).entries());
    console.log(e.target.parentElement.elements);

    const formData = e.target.parentElement.elements;
    let formTitle = formData[0].value;
    let formAuthor = formData[1].value;
    let formPublished = formData[2].value;
    let formIsRead = formData[3].checked;
    console.log(formTitle + "+" + formAuthor + "+" + formPublished + "+" +
        formIsRead);

    //formData[0].value = "";

});

/***********************************
TESTING GROUND
To be deleted / refactored
/***********************************/


// Select
const sortBy = document.querySelector("#sortBy");
sortBy.addEventListener("change", function(e) { console.log(this.value) }); // Capture if sorting list change 


/* Check a checkbox using JS
cardCheckbox.forEach(card => {
    console.log(card.checked);
    card.checked = true;
})*/