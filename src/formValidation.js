const formInput = document.querySelectorAll("form input");
const formMessage = document.querySelectorAll("form span");

function showError(input, messageID) {
  let message1 = "";
  let message2 = "";

  switch (input.id) {
    case "title":
      message1 = "You need to enter book title";
      message2 = "Book title need to have 5 letter minimum";
      break;
    case "author":
      message1 = "You need to enter author name";
      message2 = "Book title need to have 1 letter minimum";
      break;
    case "published":
      message1 = "You need to enter published";
      message2 = "Published date format neeed to be yyyy. E.g 1994";
      break;
    default:
      message1 = "You need to fill-up the field";
      message2 = "Invalid input";
      break;
  }

  if (input.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    formMessage[messageID].textContent = message1;
  } else if (input.validity.patternMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    formMessage[messageID].textContent = message2;
  }

  // Set the styling appropriately
  formMessage[messageID].classList.add("error");
}

formInput.forEach((input) =>
  input.addEventListener("input", (e) => {
    const input = e.target;
    const inputID = e.target.id;
    let messageID;

    if (inputID === "img-url" || inputID === "read") return;

    if (inputID === "title") {
      messageID = 0;
    }
    if (inputID === "author") {
      messageID = 1;
    }
    if (inputID === "published") {
      messageID = 2;
    }

    if (input.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      formMessage[messageID].textContent = ""; // Reset the content of the message
      formMessage[messageID].classList.remove("error"); // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError(input, messageID);
    }
  })
);

export default showError;
