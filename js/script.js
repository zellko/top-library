let myLibrary = []; // Array to store each book object
let bookId = 0; // Variable to give each book an unique ID

const bookContainer = document.querySelector(".book-container");
const btnAddBook = document.querySelector(".btn-addBook");

const modal = document.getElementById("myModal"); // Modal which contain the form to add a book
const btnCloseForm = document.querySelector(".btn-close-modal"); // Button to close the "Add book" form
const btnForm = document.querySelector(".btn-form"); // Button to submit "Add Book" form

const sortBy = document.querySelector("#sortBy"); // "sort By" selector, allow to sort book by Added date, author or title

class Book {
    // class methods
    constructor(title, author, publishDate, imgURL, isRead) {
        this.title = title;
        this.author = author;
        this.publishDate = publishDate;
        this.imgURL = imgURL;
        this.read = isRead;
        this.addedDate = "yyyy-mm-dd";
        this.domId = 0;
    }
    createCard() {
        // Create Book card
        const divCard = document.createElement('div');
        divCard.classList.add('book-card');
        divCard.setAttribute("book-id", bookId)
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
    }

    populateCard(e) {
        this.bookTitle.textContent = this.title;
        this.bookAuthor.textContent = `By: ${this.author}`;
        this.bookPublished.textContent = this.publishDate;
        this.bookImg.src = this.imgURL;
        this.bookImg.alt = "Book cover image";
        this.bookAddDate.textContent = this.addedDate;

        if (this.read) {
            this.readCheckbox.checked = true;
            this.readCheckbox.offsetParent.classList.toggle("isRead");
        };
    }

    removeCard(cardToRemove) {
        bookContainer.removeChild(cardToRemove);
    };
}


function addBookToLibrary(newBook) {
    // Function to add the book to the DOM

    // Get today date and add it to the book object properties.
    const todayDate = new Date();
    const date = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`

    newBook.addedDate = date;
    newBook.domId = bookId;

    newBook.createCard(); // Create the book card in the DOM
    newBook.populateCard(); // Populate the book card

    ++bookId; // Each time a book is created, we increment this variable, to give each book an unique ID.
};

/***********************************
Book sorting function
/***********************************/
function sortBook(e) {
    // This function sort the book in the DOM
    // Book can by sorted my Added date, Author or Title

    let domOrderCount = 0;
    const sortByValue = document.querySelector("#sortBy");
    const sortedLibrary = [...myLibrary]; //Create a copy of the myLibrary array, this copy will be sorted

    if (sortByValue.value === "title") {
        sortedLibrary.sort((a, b) => {
            if (a === null) return 1;
            if (b === null) return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            if (b.title.toLowerCase() > a.title.toLowerCase()) return -1;
        })
    };

    if (sortByValue.value === "author") {
        sortedLibrary.sort((a, b) => {
            if (a === null) return 1;
            if (b === null) return -1;
            if (a.author.toLowerCase() > b.author.toLowerCase()) return 1;
            if (b.author.toLowerCase() > a.author.toLowerCase()) return -1;
        })
    };

    for (const book of sortedLibrary) {
        if (book === null) continue; // If it's "null", it means it's a book that has been deleted. So we skip it.

        const bookCard = document.querySelector(`[book-id="${book.domId}"]`); // Get the DOM Card element...
        bookCard.setAttribute('style', `order: ${domOrderCount};`); //...and give it a new "order" attribute
        ++domOrderCount;
    };
};


/***********************************
Buttons event listener:
- Check if user click on remove book "x" button
- Check if user check "read" checkbox 
- Check if the sortBy selector change
/***********************************/

bookContainer.addEventListener('click', (e) => {
    if (e.type === "change") return;

    if (e.target.className === "btn-removeBook") {
        const idBookToRemove = e.target.getAttribute("book-id");
        myLibrary[idBookToRemove].removeCard(e.target.parentElement);
        myLibrary[idBookToRemove] = null;
    };
});

bookContainer.addEventListener('change', (e) => {
    const idBook = e.target.offsetParent.getAttribute("book-id")

    if (e.target.checked) {
        e.target.parentElement.offsetParent.classList.add("isRead");
        myLibrary[idBook].read = true;
    };

    if (!e.target.checked) {
        e.target.parentElement.offsetParent.classList.remove("isRead");
        myLibrary[idBook].read = false;
    };
});

sortBy.addEventListener("change", sortBook);

/***********************************
MODAL 
/***********************************/

// When the user clicks the button, open the modal 
btnAddBook.addEventListener("click", () => {
    modal.style.display = "flex";
});

// When the user clicks on "X" close the modal
btnCloseForm.addEventListener("click", () => {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
// window.addEventListener("click", (event) => {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// });


/***********************************
FORM:
- Recovery of form datas
- Create a new book object from datas
/***********************************/

btnForm.addEventListener('click', (e) => {
    const form = document.querySelector('form'); // Get the form...

    // ...get the datas from the form
    const formData = form.elements;
    let formTitle = formData[0].value;
    let formAuthor = formData[1].value;
    let formPublished = formData[2].value;
    let formImgURL = formData[3].value;
    let formIsRead = formData[4].checked;

    if (!formTitle) return; // Title is required to create a new book object, if not provided we do not validate the form.
    if (!formImgURL) formImgURL = "./img/reshot-icon-simple-book-HAZNB8F2TE.svg"; // If no book image is provided, we use a default book image.

    const newBookObject = new Book(formTitle, formAuthor, formPublished, formImgURL, formIsRead); // Create a new book object from the form datas
    myLibrary.push(newBookObject); // Add it to the array
    addBookToLibrary(newBookObject); // Add it to the DOM
    sortBook(); // Sort the book in the DOM

    // Clear the form
    modal.style.display = "none";
    formData[0].value = "";
    formData[1].value = "";
    formData[2].value = "";
    formData[3].value = "";
    formData[4].checked = false;
});

/*************************
DEMO
- Add two book to the DOM, has demo
 *************************/
function addAllBookToDom() {
    // Function to add all "demo" book to the DOM when the page is loaded
    myLibrary.forEach(book => {
        if (book !== null) addBookToLibrary(book);
    });
}

const demo1 = new Book("Hyperion", "Dan Simmons", "1989", "https://images-na.ssl-images-amazon.com/images/I/91cI7fKu0vL.jpg", true);
const demo2 = new Book("The Fall of Hyperion", "Dan Simmons", "1990", "https://m.media-amazon.com/images/I/51tqDyv9QcL.jpg", false);
myLibrary.push(demo1);
myLibrary.push(demo2);
addAllBookToDom();