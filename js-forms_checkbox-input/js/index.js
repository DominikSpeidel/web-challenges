console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.querySelector('[data-js="success"]');
tosError.hidden = true;
successMessage.hidden = true;

function showSuccessMessage () {
  successMessage.hidden = false;
}


tosCheckbox.addEventListener("click", () => {
  if (tosCheckbox.checked === true) {
    hideTosError();
  } else { showTosError();}
});

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Test wie ich Formvalues ansteuere als Praxisübung
  const formElements = event.target.elements;
  console.log(formElements.lastName.value);
  // --v-- write your code here --v--
  if (tosCheckbox.checked === true) {
    console.log("tos wurde checked");
    hideTosError();
    showSuccessMessage();
    alert("Form submitted");
    } else {
    console.log("tos wurde nicht gechecked"); 
    showTosError();}
  
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
});
