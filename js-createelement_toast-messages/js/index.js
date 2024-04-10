console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');
const containerMessage = document.querySelector('[class="toast-container__message"]');


addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  let newMessage = document.createElement("li");
  newMessage.classList.add("toast-container__message");
  newMessage.textContent = "Hello Toast";
  //containerMessage.removeChild("li");
  toastContainer.append(newMessage);
  //console.log(newMessage);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});


